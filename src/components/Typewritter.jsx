import { TypeAnimation } from 'react-type-animation';

function Typewritter() {
  return (
    <h1 className="text-5xl text-[var(--secondary-color)] font-bold">
      <TypeAnimation
        sequence={[
          "Abhijeet Gupta",
          1000, // Adds delay after writing the name
          "", // Delte the name
          500 // rewrite the name 
        ]}
        speed={30} // Controls the speed
        wrapper="span"
        repeat={Infinity} // Add repetation
        cursor={true}   // Add Cursor or "|" sign.
            />
    </h1>
  );
}

export default Typewritter;