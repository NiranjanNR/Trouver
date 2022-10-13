import React from 'react'
import { motion } from "framer-motion";

const Grid = ({shop, open}) => {
    console.log(shop)
    const {name,location,description,image} = shop;


    return (
        <motion.div className=" m-5 rounded-3xl shadow-lg overflow-hidden" onClick={open} whileHover={{ scale: 1.1 }}>
          <div className="grid grid-cols-1">
            <div className="listing__image-container">
              <img
                className=" w-full"
                alt="real estate mansion"
                src={image}
              />
            </div>
            <div className='px-5 py-5 flex flex-col gap-1'>
              <div className="font-bold text-2xl mb-2">{name}</div>
              <div className="text-gray-700 text-xl">{location}
              </div>
              <div className="listing__row">
                <span className="listing__address">{description}</span>
              </div>
            </div>
          </div>
        </motion.div>
      );
}

export default Grid