import React from 'react'
import { motion } from "framer-motion";

const Grid = ({shop, open}) => {
    console.log(shop)
    const {name,loc,description,img} = shop;

    return (
        <motion.div className=" m-5 rounded-3xl shadow-lg overflow-hidden" onClick={open} whileHover={{ scale: 1.1 }}>
          <div className=" grid grid-cols-1" >
            <div className="listing__image-container">
              <img
                className="w-full"
                alt="real estate mansion"
                src={img}
              />
            </div>
            <div className='px-2 py-2 flex flex-col gap-1'>
              <div className="font-bold cardsdata fontcol text-[22px] mb-2">{name}</div>
              <div className="fontcol text-[16px] opacity-70">{loc}
              </div>
              <div className="fontcol listing__row opacity-70">
                <span className="listing__address">{description}</span>
              </div>
            </div>
          </div>
        </motion.div>
      );
}

export default Grid