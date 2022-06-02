import React from "react";
import { motion } from "framer-motion";

export default function BackDrop({
  children,
}: {
  children: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="bg-[#191919]/80 fixed inset-0 grid p-0 m-0 place-items-center h-full z-[999] w-full"
    >
      {children}
    </motion.div>
  );
}
