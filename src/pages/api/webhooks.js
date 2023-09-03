import getRawBody from "raw-body"
import { stripe } from "src/pricing/utils/stripe"
import { supabase } from "supabase"

export const config = {
    api:{
        bodyParser:false
    }
}

export default async function handler(req, res) {
    const signature = req.headers['stripe-signature']
    const signingSecret  = process.env.STRIPE_SIGNING_SECRET
    
    let event;
    
    try{
        const buffer = await getRawBody(req,{limit:'2mb'})
        event = stripe.webhooks.constructEvent(buffer,signature,signingSecret)
    }catch(e){
        console.log("Webhook signature verification failed")
         return res.status(400).end()
    }

    try{
        switch (event.type){
            case 'customer.subscription.updated':
                updateSubscription(event)
                break
            case 'customer.subscription.deleted':
                deleteSubscription(event)
                break
        }
    }catch(e){
        clg(e.message)
    }
   
}

async function updateSubscription(event){
   const subscription =  event.data.object
   const stripe_customer_id = subscription.customer
   const subscription_status  =  subscription.status
   const price = subscription.items.data[0].price.id

   const {data:profile} =  await supabase.from('profile').select('*').eq('stripe_customer_id',stripe_customer_id).single()
   if(profile){
    const updatedSubscription = { subscription_status, price}
    await supabase.from('profile').update(updateSubscription).eq('stripe_customer_id',stripe_customer_id)
   }else{
    const customer = await stripe.customers.retrieve(stripe_customer_id)
    const name = customer.name
    const email = customer.email
    const newProfile = {
        name,email,stripe_customer_id,subscription_status,price
    }
    await supabase.auth.admin.createUser({
        email,email_confirm:true,user_metadata:newProfile
        
    })
   }
}
async function deleteSubscription(event){
    const subscription =  event.data.object
    const stripe_customer_id = subscription.customer
    const subscription_status  =  subscription.status
    const deletedSubscription = {
        subscription_status,
        price : null,

    }
    await supabase.from('profile').update(deletedSubscription).eq('stripe_customer_id',stripe_customer_id)
}

