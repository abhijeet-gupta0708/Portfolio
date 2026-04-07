function Navbar()
{
    return (
        <>
        <div className="full_navbar  h-20 w-full flex items-center justify-between px-6"style={{backgroundColor:'#f4f7fe'}}>

            {/* NAME LOGO */}
            <div className="name_navbar ml-12  text-3xl font-bold  relative flex flex-wrap  ">
                <span className=" text-[var(--secondary-color)] font-[var(--Winky-font)]">Abhi</span>
                <span className=" text-[var(--primary-color)] font-[var(--Winky-font)]">jeet</span>
            </div>
            
            {/*MENU SECTION */}

            {/* This section includes The navbar elements such as Skills , projects , etc*/}
            <div className="   element_navbar hidden md:flex font-[var(--Josefin-font)] text-3xl gap-10 px-4">
                <a className="hover:translate-x-1 hover:scale-125"style={{color:'#fca61f'}}href="">Home</a>
                <a className="hover:translate-x-1 hover:scale-125"href="">Skills  </a>
                <a className="hover:translate-x-1 hover:scale-125"href="">Projects</a>
                <a className="hover:translate-x-1 hover:scale-125"href="">Contact</a>
            </div>


            {/* Contact Button in Big Formate */}
            <div className="contact_button_navbar hidden md:block ">
                <button className="bg-[#fca61f] px-4 py-5 rounded-lg  hover:translate-x-1 hover:scale-125 ">CONTACT ME</button>
            </div>
        

            {/*MOBILE MENU ICON */}
            <div className="md:hidden">
                <button>☰</button>
            </div>
        
        </div>
        </>
    );
}
export default Navbar