import { MouseEventHandler } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import BackDrop from "../BackDrop";

const Modal = ({
  children,
  onBack,
  open,
}: {
  children: any;
  onBack: MouseEventHandler<HTMLButtonElement>;
  open: boolean;
}) => {
  return (
    // @ts-ignore
    open && (
      <BackDrop>
        <motion.div
          initial={{ y: `-999px` }}
          animate={{ y: [0, 40, 0] }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="bg-[#eee] neon w-1/2 relative grid place-items-center text-center text-dark rounded-md mx-2 my-3 sm:mx-6 sm:my-6"
        >
          <motion.button
            className="absolute right-3 top-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={onBack}
            whileHover={{ scale: 1.1 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </motion.button>
          <div className="py-10 px-5">{children}</div>
        </motion.div>
      </BackDrop>
    )
  );
};

export default Modal;
