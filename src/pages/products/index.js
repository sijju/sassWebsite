import ProductCard from "src/products/components/Card"
import { supabase } from "supabase"

export default function ProductsPage({product}) {
    
    return(
        <>
            <div className="section bg-blue">
                <div className="container">
                    <div className="section-intro">
                        <h1>The latest products</h1>
                    </div>
                </div>
            </div>
            <div className="section small">
                <div className="container">
                    <ul className="product-card-grid">
                        {product.map((item)=>(
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(){
    let {data:product} = await supabase.from('product').select('*')
    return{
        props:{product}
    }
}