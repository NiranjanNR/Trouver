import { useState } from "react";
import Grid from "./Grid";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";

const Card = ({ shop }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const variants = {
    active: { backgroundColor: "rgba(0,0,0,0.6)" },
    inactive: { backgroundColor: "rgba(0,0,0,0)" },
  };
  return (
    <div>
      <Grid shop={shop} open={openModal} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-black bg-opacity-50 flex justify-center items-center h-full fixed top-0 left-0 w-full z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
            key="overlay"
          >
            <Modal shop={shop} close={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
