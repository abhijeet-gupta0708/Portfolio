function Profile() {
  return (
    <>
         <div id="profile" className="fade-left all_div bg-[var(--bg)] mt-10 ">
        <div className="My_Profile_Tag text-center font-bold text-2xl text-[var(--primary-color)]">
            <h2>My Profiles</h2>
        </div>
        <div className="card_section grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-10 items-center text-center p-6 rounded-2xl shadow-sm hover:shadow-m hover:-translate-y-1 transition duration-300
                  min-h-[320px] sm:min-h-[240px] group">
            <div className="first_card bg-[white] min-h-72 p-4  gap-4 flex flex-col object-cover  justify-center items-center  text-center m-10  mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none">
                <img src="/ig_logo_black.png" alt="First_0Picture" />
                <div className="text_below_card font-extrabold  text-2xl text-[var(--secondary-color) ]">
                   <p>Instagram</p>
                </div>

                {/* Adding Links to pictures */}
                <a href="https://www.instagram.com/brad_man15/" className="underline bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-3xl   px-6 py-2  ">Visit Me</a>
            </div>
            <div className="second_card bg-[white] min-h-72 gap-4 flex flex-col object-cover  justify-center items-center  text-center m-10 mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none">
                <img src="/github_logo.png" alt="second_Pi0cture" className="p-4"/>
                <div className="text_below_card font-extrabold  text-2xl text-[var(--secondary-color)] ">
                    <p>GitHub</p>
                </div>

                {/* Adding Links to pictures */}
                <a href="https://github.com/abhijeet-gupta0708" className="underline bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-3xl   px-6 py-2  ">Visit Me</a>
            </div>
            <div className="third_card  bg-[white] min-h-72 gap-4 flex flex-col object-cover  justify-center items-center  text-center m-10 mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none" >
                <img src="/linkedin_logo.png" alt="third_0Picture" className="p-4"/>
                <div className="text_below_card font-extrabold  text-2xl text-[var(--secondary-color)] ">
                    <p>LinkedIn</p>
                </div>

                {/* Adding Links to pictures */}
                <a href="https://www.linkedin.com/in/abhijeet-gupta-b2b30135b" className="underline bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-3xl   px-6 py-2  ">Visit Me</a>
            </div>
            <div className="fourth_card bg-[white] min-h-72 gap-4 flex flex-col object-cover  justify-center items-center  text-center m-10 mix-blend-luminosity cursor-pointer group-hover:blur-sm hover:!blur-none">
                <img src="/leetcode_logo.png" alt="Fourth_0Picture" className="p-4"/>
                <div className="text_below_card font-extrabold  text-2xl text-[var(--secondary-color)] ">
                    <p>LeetCode</p>
                </div>

                {/* Adding Links to pictures */}
                <a href="https://leetcode.com/u/brad_man15/" className="underline bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-3xl   px-6 py-2  ">Visit Me</a>
            </div>
        </div>
        
    
    </div>
    </>
  );
}

export default Profile;