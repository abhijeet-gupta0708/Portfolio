import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Below_Hero() {
  return (
    <section style={styles.hero} className="overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Abhijeet 👋
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        FullStack Developer  🚀
      </motion.p>

      <div style={styles.icons}>
        <FaGithub size={30} />
        <FaLinkedin size={30} />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    textAlign: "center"
  },
  icons: {
    display: "flex",
    gap: "20px"
  }
};

export default Below_Hero;