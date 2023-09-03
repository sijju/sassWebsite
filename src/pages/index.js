import Image from "next/image";
import Link from "next/link";
import hero from '../../public/assets/hero.png'
export default function HomePage() {
    return (

    <div className="grid-halves h-screen-navbar">
        <div className="bg-teal border-right">
            <div className="column-padding">
                <div className="tablet-centered">
                    <div className="content-grid home-hero">
                        <h1>The most <br/>Epic Products</h1>
                        <p className="section-subtitle">
                            All the most epic things on internet, all in one place.
                        </p>
                        <Link href='/products' className="large-button">
                            <div className="large-button-text">Explore Products</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-salmon">
            <div className="colum-padding centered">
                <div className="callout-wrap">
                    <Image src={hero} alt="hero banner"  className="callout-image"></Image>
                </div>
            </div>
        </div>
    </div>
    )
}
