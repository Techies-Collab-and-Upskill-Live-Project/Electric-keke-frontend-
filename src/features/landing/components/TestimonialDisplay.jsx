import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Direction from "../../../components/Direction";
import Testimony from "./Testimony";
import { testimonies } from "../constants";
import { useTestmony } from "../hooks/useTestimony";

const TestimonialDisplay = ({ type }) => {
  const { currentTestimony, nextTestimony } = useTestmony(testimonies[type]);

  return (
    <div className="testimonials-display">
      <AnimatePresence>
        {testimonies[type].map((item, index) => {
          const initial = { x: -150, opacity: 0 };
          let animate;
          if (index === currentTestimony) {
            animate = {
              x: 0,
              opacity: 1,
            };
          }
          return (
            <motion.div
              initial={initial}
              whileInView={animate}
              exit={{
                x: 200,
              }}
              transition={{ type: "spring", duration: 0.64, stiffness: 20 }}
              className={`testi-photo ${
                index !== currentTestimony && "absolute -z-50"
              }`}
              key={item.name}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="rounded-normal size-full object-cover object-center"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 20,
          duration: 0.65,
        }}
        className="testimonies"
      >
        <AnimatePresence>
          {testimonies[type].map((item, index) => {
            const initial = { scale: 0 };
            let animate;
            if (index === currentTestimony) {
              animate = {
                scale: 1,
              };
            }
            return (
              <Testimony
                key={item.name}
                initial={initial}
                animate={animate}
                index={index}
                currentTestimony={currentTestimony}
                {...item}
              />
            );
          })}
        </AnimatePresence>
        <Direction handleClick={nextTestimony} />
      </motion.div>
    </div>
  );
};

export default TestimonialDisplay;
