import React from "react";
import { motion } from "motion/react";
import TopJobs from "./TopJobs";

const Home = () => {
  return (
    <div>
      We are Home
      <motion.div
        animate={{
          x: 100,
          transition: { duration: 2 },
        }}
      >
        Form the Batch 50
      </motion.div>
      <div>
        <TopJobs></TopJobs>
      </div>
    </div>
  );
};

export default Home;
