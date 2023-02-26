import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import { motion as m } from "framer-motion";

function Info(props) {
  const { hora } = props;
  const valores = [];
  valores.push(props.info);
  return (
    <m.div
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
      className="flex justify-center items-center h-[85%] flex-col font-semibold gap-3"
    >
      <div className="px-6 text-3xl flex justify-between w-full">
        <div className="flex gap-1">
          <LocationOnRoundedIcon fontSize="large" />
          <p className="text-3xl">
            <span>{props.info.name}</span>
          </p>
        </div>
        <p className="text-3xl">
          <span>{Math.round(props.info.main.temp)}</span>°C
        </p>
      </div>
      <div className="px-6 text-3xl flex justify-between w-full">
        <div className="flex gap-1">
          <AccessTimeFilledRoundedIcon fontSize="large" />
          <p>Local Time:</p>
        </div>
        <p>{hora}</p>
      </div>
      <div className="px-6 text-3xl flex justify-center w-full">
        <img src={`icons/${props.info.weather[0].icon}.png`} alt="icon" />
      </div>
      <div className="flex justify-center w-full">
        {props.info.weather[0].main}
      </div>
      {/* {props.info ? JSON.stringify(valores) : "Carregando..."} */}
    </m.div>
  );
}

export default Info;
