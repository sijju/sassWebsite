import Link from "next/link";

export default function SubscriberCard() {
    return(
        <section>
            <div>
                <h4>See All Products</h4>
                <p style={{fontSize:'1rem'}}>Go back to see the entire catalogue.</p>
            </div>
            <Link className="primary button" href="/products">
                Back to products
            </Link>
        </section>
    )
}
