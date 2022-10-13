import React from 'react'
import { motion } from 'framer-motion';
import { IoCloseCircleOutline } from "react-icons/io5";


const Modal = ({shop, close}) => {
    const {name,location,description,image} = shop;

    const dropIn = {
        visible: {
          y: "0",
          opacity: 1,
          transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
      };

      const imageDrop = {
        hidden: {
          y: "-5vh",
          opacity: 0,
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
            type: "spring",
            damping: 25,
            stiffness: 500,
          },
        },
        exit: {
          y: "5vh",
          opacity: 0,
        },
      };

      const infoSlide = {
        hidden: {
            x: "-5vh",
            opacity: 0,
          },
          visible: {
            x: "0",
            opacity: 1,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 500,
            },
          },
          exit: {
            x: "5vh",
            opacity: 0,
          },
      }

      return(
        <motion.div className='flex h-screen w-screen overflow-hidden' variants={dropIn} initial="hidden" animate="visible" exit="exit">
            <motion.div className='bg-white 2xl:h-2/3 2xl:w-3/4 xl:h-2/5 xl:w-3/5 p-10 m-auto rounded-3xl shadow-grey-300 grid grid-cols-3 gap-4 grid-rows-2'>
            <motion.img variants={imageDrop} src={image} className="col-span-2 row-span-2 rounded-2xl object-cover h-full w-full" />
                <motion.div variants={infoSlide} className=' row-span-2 flex flex-col gap-5' >
                    <motion.div className='text-5xl'>{name}</motion.div>
                    <motion.div  className='text-2xl' >{location}</motion.div>
                    <motion.div  className='text-2xl'>{description}</motion.div>
                </motion.div>
            </motion.div>
            
        </motion.div>
  );
}

export default Modal