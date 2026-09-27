export const UserInterface = () => {
return (
<section
id="userinterface"
className="min-h-screen flex items-center justify-center relative">


<div className="className=max-w-5xl mx-auto px-4">
<div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            
        </h2>
        <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            UI / UX

        </h3>
<div className="max-w-5xl mx-auto px-4 p-6 rounded-xl border-white/10 border">
    <div className="grid grid-cols-1  ">
        <div className="p-6 rounded-xl">
        <p className=" text-gray-300 mb-6 text-left ">
            Although I primarily consider myself a programmer, I have always placed a strong emphasis on UI design and the overall User experience in my previous projects.
            <p className="mt-6">
            I have always made sure that the style and visual identity of the game are reflected in its UI.
                <p className="mt-6">
            For creating UI assets, I used Adobe Photoshop and Illustrator.
            <p>
            For planning and prototyping, I worked with Adobe XD and Figma.

                <p className="mt-6">
            Below, I will go into more detail about a few specific examples created in Unreal Engine 5 using its built-in UMG system, in some cases in combination with the Common UI plugin.
                </p></p></p></p></p>
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
                    For TAVI, I wanted to create a holographic, space-themed visual style. The menus were designed to have an electronic, computer-like aesthetic, while the HUD elements were meant to have a more holographic appearance, as if they were projected directly in front of the player character’s eyes.
                <p className="mt-6">
                    To achieve this, I used techniques such as Scene Capture Components and integrated 3D objects directly into the UI. I also used Retainer Boxes to implement the holographic effects and give the UI its holo-like appearance.
                </p></p>
        </div>

    <div className="mt-6">
           <video  autoPlay muted loop src="/Videos/TAVI_UI_Menue&HUD.mp4" />

    </div> </div>
    
   <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                     In addition to the menu and HUD elements, there are various assets throughout the level that use Dynamic Material Instances as their textures. This allows to use widgets as textures, which can also be dynamically changed at runtime.
                <p className="mt-6">
                </p></p>
        </div>

    <div className="mt-6">
              <video  autoPlay muted loop src="/Videos/TAVI_Dynamic_World_UI.mp4" />

    </div> </div>

    <div className="grid grid-cols-1 ">
        <div className="p-6 rounded-xl mt-6">
                <img src="/Pictures/line2.png"/>
        </div>
    </div> 

<div className="grid grid-cols-1 ">
    <div className="p-6 rounded-xl  ">
        <p className=" text-gray-300 mt-6 text-left ">
           In the game Early Access, the UI design and the resulting UX form the foundation of the entire game. The goal is to create the impression that the player is controlling a character who is sitting at a PC and playing a game themselves.
            <p className="mt-6">
           Taking inspiration from familiar brands,  a custom operating system interface and chat application were created.
            </p></p>
    </div>

    <div className="mt-6">
            
    </div> </div>




<div className="grid grid-cols-1 md:grid-cols-2 ">
    <div className="p-6 rounded-xl  ">
        <p className=" text-gray-300 mb-6 text-left ">
           
           To enhance immersion, the player’s username and the computer’s system time are read and incorporated into the UI. At a certain point in the game, control of the mouse cursor is also taken over using a custom fake cursor.
            <p>
                <p className="mt-6"> 
                    All of these systems were implemented using the tools and functionality provided by Unreal Engine’s UMG.
                </p></p></p>
    </div>

    <div className="mt-6">
            <video  autoPlay muted loop src="/Videos/EarlyAccess_StartUI.mp4" />
    </div> </div>

<div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                     The menus were integrated into the gameplay using tab transitions and the appearance of the taskbar, like typicall known from a computer.
                <p className="">
                    The HUD was also heavily inspired by chat applications in order to maintain the overall immersion.
                </p></p>
        </div>

    <div className="mt-6">
           <video  autoPlay muted loop src="/Videos/EarlyAccess_TabChange.mp4" />

    </div> </div>




<div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                     Since subtitles played a major role in this game, I also provided the player with a range of user settings, allowing each player to customize the subtitles according to their own preferences
                <p className="">
                </p></p>
        </div>

    <div className="mt-6">
           <video  autoPlay muted loop src="/Videos/EarlyAccess_UISettings.mp4" />

    </div> </div>

    <div className="grid grid-cols-1 ">
        <div className="p-6 rounded-xl mt-6">
                <img src="/Pictures/line2.png"/>
        </div>
    </div> 

<div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
                    Another aspect of UI design that I have always found particularly exciting is the creation of the start and main menu. I really enjoy designing these menus in a unique and unconventional way, especially by giving them a lively and dynamic background.
                <p className="mt-6">
                    I usually build the main menu in a separate level or map, allowing me to experiment freely and create a visually engaging environment without being restricted by the main game level.
                </p></p>
        </div>

    <div className="mt-6">
           <video  autoPlay muted loop src="/Videos/AllGames_EveryMainMenu.mp4" />


    </div> </div>

    <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 rounded-xl">
                <p className=" text-gray-300 mb-6 text-left" >
Alongside these more elaborate UI designs, I have of course also implemented simpler UI elements in my games.
                <p className="mt-6">
However, all of them were designed to match the overall style and atmosphere of the respective game.
                </p></p>
        </div>

    <div className="mt-6">
            <video  autoPlay muted loop src="/Videos/AllGames_UIOverview.mp4" />

    </div> </div></div></div></div>
</section>);};