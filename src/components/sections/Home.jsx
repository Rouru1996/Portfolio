

export const Home = () => {
    return (
    <section 
    id="home" 
    className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right mb-8">
                Hi, I'm Simon Orosch
                </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
                I'm glad you made it here. This website is all about getting to know me and learning more about who I am. Take your time to explore, and why not check out my skills right away?
            </p>
            <div className="flex justify-center space-x-4">
                 <a href="#about" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0-0-15px_rgba(59,130,246,0.4)]">
                    About Me
                </a>
                <a href="#skills" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0-0-15px_rgba(59,130,246,0.4)]">
                    View Skills
                </a>
                <a href="#contact" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0-0-15px_rgba(59,130,246,0.4)]">

                    Contact Me
                </a>
               
            </div>
        </div>
    
    </section>
    );
};