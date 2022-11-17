import React from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiFillAccountBook } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoTime, IoDesktop } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi";
import { BsPenFill, BsFillPersonFill } from "react-icons/bs";

const Modal = ({ shop, close }) => {
  const {
    name,
    location,
    image,
    Timings1,
    Timings2,
    Timings3,
    Timings4,
    Timings5,
    Timings6,
    Timings7,
    Contact_no,
  } = shop;

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
  };

  return (
    <motion.div
      className="cards fontWieght-none  flex h-fit w-4/5  overflow-hidden"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="bg-white 2xl:h-9/12 2xl:w-9/12 xl:h-9/12 xl:w-9/12 p-10 m-auto rounded-2xl shadow-grey-600 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4 grid-rows-2">
        <motion.img
          variants={imageDrop}
          src={image}
          className="col-span-2 row-span-2 rounded-2xl object-cover h-full w-full"
        />
        <motion.div
          variants={infoSlide}
          className=" row-span-2 flex flex-col gap-5"
        >
          <motion.div className="text-5xl">{name}</motion.div>

          <div className="flex justify-start">
            <ImLocation className="text-3xl mr-5" />{" "}
            <motion.div className="text-xl">{location}</motion.div>
          </div>

          <div className="flex justify-start">
            <IoTime className="text-2xl mr-5" />
            <motion.div className="text-xl">{Timings1}</motion.div>
          </div>
          <div className="flex justify-start">
            <div className="text-2xl mr-11" />
            <motion.div className="text-xl">{Timings2}</motion.div>
          </div>
          <div className="flex justify-start">
            <div className="text-2xl mr-11" />
            <motion.div className="text-xl">{Timings3}</motion.div>
          </div>
          <div className="flex justify-start">
            <div className="text-2xl mr-11" />
            <motion.div className="text-xl">{Timings4}</motion.div>
          </div>
          <div className="flex justify-start">
            <div className="text-2xl mr-11" />
            <motion.div className="text-xl">{Timings5}</motion.div>
          </div>
          <div className="flex justify-start">
            <div className="text-2xl mr-11" />
            <motion.div className="text-xl">{Timings6}</motion.div>
          </div>
          <div className="flex justify-start">
            <div className="text-2xl mr-11" />
            <motion.div className="text-xl">{Timings7}</motion.div>
          </div>

          <div className="flex justify-start">
            <BsPenFill className="text-3xl mr-5" />
            <motion.div className="text-xl">{Contact_no}</motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
