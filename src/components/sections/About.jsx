
export const About = () => {

    const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"];

    const backendSkills = ["Node.js", "Python", "TypeScript", "MongoDB", "GraphQL"];

    return <section
    id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        
        <div className="max-w-3xl mx-auto px-0.5  ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border  grid grid-cols-1 md:grid-cols-2 gab-6 mt-8">
                <p className=" text-gray-300 mb-6 text-left mr-8">
                   My name is Simon Orosch, I am 30 years old, and I am a passionate programmer. 
                   <p className="mt-3 text-gray-300 mb-6 text-left">After spending a total of eight years working in the automotive industry, I decided to turn my hobby into a career and started a degree in Game Creation.
                    <p className="mt-3 text-gray-300 mb-6 text-left"> 
                    Overall, I would describe myself as an all-rounder when it comes to game development. 
                    <p className=" mt-3 text-gray-300 mb-6 text-left">However, my main focus is programming in Unreal Engine, using Blueprint and C++.  
                    <p className="mt-22 text-gray-300 mb-6 text-center">
                        Check out my student projects
                        </p>      </p>  </p>  </p>         
                <div className="flex justify-center space-x-4">
                <a href="#projects" className="mt-4 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0-0-15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a> </div>

                </p>
                <img src="Pictures/profilbild.jpg"/>

            

                



                
            </div>
            <div className=" gab-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border ">
                                <h3 className="text-xl font-bold mb-4">
                                    Education
                                </h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong> C++ Specialization for Unreal Engine </strong> - future Training & Consulting GmbH
                                    </li>
                                    
                                    <li>
                                        <strong> C++ Programming </strong> - future Training & Consulting GmbH
                                    </li>
                                    
                                     <li>
                                        <strong> Degree Game Creation </strong> - HTK Acadamy
                                    </li>
                                    <li>
                                        <strong> Adobe Photoshop Advanced Course </strong> - DAA Baden-Württemberg
                                    </li>
                                    <li>
                                        <strong> Adobe Animate </strong> - DAA Baden-Württemberg
                                    </li>
                                   
                                    
                                </ul>
                            </div>
                            
            </div>

        </div>
    
    </section>
}