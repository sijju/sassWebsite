export default function LoginSubmitted({submitted}) {
    return(
        <div className="content-grid home-hero">
            <h1>Link Sent!</h1>
            <p>Check your email({submitted}) to finish login.</p>
        </div>
    )
}
