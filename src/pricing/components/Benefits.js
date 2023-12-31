const benefits = [
    {
        title:'One low price',
        subtitle : 'Save big. Get everything with a  super low montly subscription'
    },
    {
        title : 'No limits',
        subtitle : 'Get complete access to everything on the site.'
    },{
        title: 'Cancel anytime',
        subtitle : 'Cancel your subscription anytime.'
    }
]

export default function Benefits() {
    return (
        <div className="bg-black">
            <div className="column-padding">
                <div className="content-grid xl">
                  {benefits.map(benefit =>(
                      <div key={benefit.title} className="spacing-base">
                        <h3>
                            {benefit.title}
                        <br />
                        </h3>
                        <div>
                            {benefit.subtitle}
                        </div>
                    </div>
                    ))}  
                </div>
            </div>
        </div>

    )
}
