import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { AnimatePresence, motion as m } from "framer-motion";

function Info(props) {
  const { hora } = props;
  const valores = [];
  valores.push(props.info);
  return (
    <div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex justify-center items-center h-[85%] flex-col font-semibold gap-6 lexend"
    >
      <div className="flex justify-center flex-col text-center">
        <m.p
          className="text-2xl text-neutral-900"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <span>{props.info.name}</span>
        </m.p>
        <div className="flex justify-center">
          <m.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, ease: "easeOut", duration: 1 }}
            className="text-6xl"
          >
            {Math.round(props.info.main.temp)}
          </m.p>
          <m.p
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6, ease: "easeOut", duration: 1 }}
            className="text-6xl"
          >
            °
          </m.p>
        </div>
        <div className="flex gap-1 justify-center text-neutral-900">
          <m.div
            initial={{ x: -15, opacity: 0, rotate: -90 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 1, ease: "easeOut", duration: 1 }}
            className="self-center"
          >
            <AccessTimeOutlinedIcon fontSize="small" />
          </m.div>
          <m.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeOut", duration: 0.7 }}
            className="text-md"
          >
            {hora}
          </m.p>
        </div>
        <m.p
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, ease: "easeOut", duration: 0.7 }}
          className="text-xl text-neutral-900"
        >
          {props.info.weather[0].main}
        </m.p>
      </div>

      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, ease: "easeOut", duration: 0.7 }}
        className="px-6 flex justify-center w-2/5"
      >
        <img
          src={`icons/newIcons/${props.info.weather[0].icon}.png`}
          alt="icon"
        />
      </m.div>
    </div>
  );
}

export default Info;
