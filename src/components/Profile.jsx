import React from "react";

function Profile() {
  return (
    <section
      id="profile"
      className="bg-[var(--bg)] mt-10 px-4 sm:px-6 md:px-12 lg:px-20 py-20 overflow-x-hidden"
    >
      {/* HEADING */}
      <div className="text-center font-bold text-2xl text-[var(--primary-color)]">
        <h2>My Profiles</h2>
      </div>

      {/* CARDS CONTAINER */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-6 max-w-6xl mx-auto mt-12"
      >
        {/* INSTAGRAM */}
        <div className="bg-white min-h-72 p-6 flex flex-col justify-center items-center text-center rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="/ig_logo_black.png" alt="Instagram" className="w-16 mb-4" />

          <h3 className="font-bold text-xl text-[var(--secondary-color)] mb-3">
            Instagram
          </h3>

          <a
            href="https://www.instagram.com/brad_man15/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--secondary-color)] text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Visit Me
          </a>
        </div>

        {/* GITHUB */}
        <div className="bg-white min-h-72 p-6 flex flex-col justify-center items-center text-center rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="/github_logo.png" alt="GitHub" className="w-16 mb-4" />

          <h3 className="font-bold text-xl text-[var(--secondary-color)] mb-3">
            GitHub
          </h3>

          <a
            href="https://github.com/abhijeet-gupta0708"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--secondary-color)] text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Visit Me
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="bg-white min-h-72 p-6 flex flex-col justify-center items-center text-center rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="/linkedin_logo.png" alt="LinkedIn" className="w-16 mb-4" />

          <h3 className="font-bold text-xl text-[var(--secondary-color)] mb-3">
            LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/abhijeet-gupta-b2b30135b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--secondary-color)] text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Visit Me
          </a>
        </div>

        {/* LEETCODE */}
        <div className="bg-white min-h-72 p-6 flex flex-col justify-center items-center text-center rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="/leetcode_logo.png" alt="LeetCode" className="w-16 mb-4" />

          <h3 className="font-bold text-xl text-[var(--secondary-color)] mb-3">
            LeetCode
          </h3>

          <a
            href="https://leetcode.com/u/brad_man15/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--secondary-color)] text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Visit Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;