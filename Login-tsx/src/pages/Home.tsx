export default function Home() {
    const bg = "https://www.shutterstock.com/image-vector/abstract-ai-circuit-board-background-600nw-2471339475.jpg";

    return (
        <>
            <header 
                className="py-5 bg-image-full" 
                style={{ backgroundImage: `url(${bg})`,backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center" }}
            >
                <div className="text-center my-5 py-4">
                    <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
                    <p className="text-white-50 mb-0">Landing Page Template</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Full Width Backgrounds</h2>
                            <p className="lead">A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
                            <p className="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Engaging Background Images</h2>
                            <p className="lead">The background images used in this template are sourced from Unsplash and are open source and free to use.</p>
                            <p className="mb-0">I can't tell you how many people say they were turned off from science because of a science teacher that completely sucked out all the inspiration and enthusiasm they had for the course.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
                </div>
            </footer>
        </>
    )
}
