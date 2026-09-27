export const Coding = () => {
return (
<section
id="coding"
className="min-h-screen flex items-center justify-center relative">

<div className="className=max-w-5xl mx-auto px-4">
<div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            
        </h2>
        <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Game Play Programming

        </h3>
<div className="max-w-5xl mx-auto px-4 p-6 rounded-xl border-white/10 border">
    <div className="">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                    For my project "Memento", I was inspired by Silent Hill PT. The initial concept was to create an endless hallway, or more specifically, a repeating level.
                <p className="mt-6">
                    In my implementation, the player leaves the apartment through the front door and re-enters through the wardrobe.
                <p className="mt-6">
                    When the player opens the wardrobe door again, they only see the inside of the wardrobe.
                 </p></p></p>
        </div>  </div>
    

            <div className="p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 ">
                <p className=" text-gray-300 mb-6 text-left mr-8" >
                    To progress through the game loop, the player has to pay attention to changes in the environment and interact with them in order to advance. The further the player progresses, the more the apartment changes.
                <p className="mt-6">
                    To maintain the illusion of an endless hallway, I placed the basic layout of the apartment four times in a circle, allowing the player to effectively walk in a complete loop.
                </p></p>
    <div className="">
           <video  autoPlay muted loop src="/Videos/NEW_Memento_Prinzip.mp4" />

    </div> </div>
        <div className="">
        <div className="p-6 rounded-xl grid grid-cols-1 ">
                <p className=" text-gray-300 mb-6 text-left" >
                    Whenever the player interacts with the apartment door, it triggers an event in a custom Game Loop Manager. This event checks whether the player has fulfilled the required condition for the loop they are currently in. Depending on the condition, the next loop is loaded using Level Streaming.
                <p className="mt-6">
                     Once the player has passed through the door and closes it again, the previous loop is unloaded using Level Streaming.
                <p className="mt-6">
                    Each Streaming Level contains the assets and Blueprints required for its respective loop. These are only loaded when the player enters the corresponding section, helping to keep the active game world limited to what is currently needed.
                </p></p></p>

                <div/></div>


     <div className=" p-6 rounded-xl grid grid-cols-1 ">
        <div className="">
                <p className=" text-gray-300 mb-6 text-left" >
                    The Game Loop Manager also continuously keeps track of which loop the player is currently in. 
                <p className="">
                    This made it possible to provide different hints for specific loops, such as the hints given through the telephone.
                <p className="mt-6">
                    Since the Game Loop Manager is placed in the Persistent Level, it could also be used to control the textures of the base apartment, adjust the post-processing effects for each individual loop, modify the directional light, and handle other game design changes that occur as the player progresses through the game.
                <p className="mt-6">
                    This allowed the apartment to gradually change its appearance and atmosphere based on the player's current progress within the game loop.
               </p> </p></p></p>
        </div> </div>

     </div>

<div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
            <video  autoPlay muted loop src="/Videos/Memento_OtherChange.mp4" />
        </div>

    <div className="p-6 rounded-xl">
           <video  autoPlay muted loop src="/Videos/Memento_FloorChange.mp4" />

    </div> </div>


<div className="grid grid-cols-1 mb-6">
        <div className="p-6 rounded-xl">
                <img src="/Pictures/line2.png"/>
        </div>
    </div> 



<div className="grid grid-cols-1 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                    In TAVI, I wanted to explore player controls in greater depth. As part of this project, I implemented a custom gravity system based on the foundational code provided by Ari Arnbjörnsson on the Unreal Engine forums.
                <p className="mt-6">
                    In his original post, Ari demonstrated how to make a player walk around a perfectly spherical planet. By reading the pivot point of the planet asset, this could be implemented relatively easily.
                <p className="mt-6">
                    For this project, however, I wanted to take the concept further.
                </p></p></p>
        </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                    I used a Line Trace to detect the normals of the surface the player was walking on and continuously interpolated between them. This allowed me to create planets with more complex and irregular shapes rather than being limited to perfect spheres.
                <p className="mt-6">
                    Another mechanic I implemented was the ability to switch gravity at the press of a button. This could either switch the player’s gravity between different planets or completely flip the direction of gravity.
                </p></p>
        </div>

        <div className="p-6 rounded-xl">
           <video  autoPlay muted loop src="/Videos/TAVI_GravityChange.mp4" />

    </div> 
    </div> 



<div className="grid grid-cols-1 ">
        <div className="p-6 rounded-xl mb-6">
                <img src="/Pictures/line2.png"/>
        </div>
    </div> 





<div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                    Since the final project was a team project, I was able to focus entirely on the programming side of development.
                <p className="mt-6">
                    For this project, I set myself the goal of making the code more dynamic and re-useable
                <p className="mt-6">
                    One of the key features I developed was a custom Macro that handles the entire process of creating and displaying subtitles.
                <p className="mt-6">
                   </p></p></p></p>
        </div>

    <div className="mt-6">
           <img src="/Pictures/Zeichenflache_1_1.png"/>  

    </div> </div>

    <div className="grid grid-cols-1 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                     The Macro creates the subtitle widget and passes additional parameters to it, with the row number being the most important one. Based on this row number, the relevant data is retrieved from a Data Table.
                <p className="mt-6">
                    This data includes the text that should be displayed, the audio that should be played, information about which character is speaking the line, and, optionally, the font used for the subtitle.
                </p></p> 
        </div>
    </div> 

<div className="grid grid-cols-1 ">
        <div className="p-6 rounded-xl mb-6">
                <img src="/Pictures/line2.png"/>
        </div>
    </div> 


<div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                    To add some variety to the standard third-person and first-person player cameras, I implemented sequences with smooth transitions between different cameras.
                <p className="mt-6">
                    In first-person games, I also used additional Pawns that could be possessed, each with their own Input Mapping Contexts. This allowed me to break away from the otherwise monotonous first-person perspective and create more varied gameplay experiences.
                </p></p>
        </div>

    <div className="mt-6">
           <video  autoPlay muted loop src="/Videos/OverallDiffrentCams.mp4" />

    </div> </div>

</div></div> </div>
</section>);};