export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
<div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Contact Me
            </h2>
        <div className="flex justify-between mx-2">
            <a href="mailto:simon.orosch@web.de" target="_blank">
                    <div className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                        Mail
                </div>
            </a>
            <a href="https://www.linkedin.com/in/simon-orosch-ba4306241/" target="_blank">
                <div className="border border-blue-500/50 text-blue-500 py-3 px-6  rounded font-medium transition-all duration-200 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)}">
                        LinkedIn
                </div>
            </a>
        </div>
    </div>
    </section>
}