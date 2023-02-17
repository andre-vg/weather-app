import React from "react";

function Info(props) {
  const {hora} = props
  const valores = []
  valores.push(props.info)
  return (
    <div className="flex justify-center items-center h-[85%] flex-col font-semibold gap-3">
      <div className="px-6 text-3xl flex justify-between w-full">
        <p className="text-3xl">
          <span>{props.info.name}</span>
        </p>
        <p className="text-3xl">
          <span>{Math.round(props.info.main.temp)}</span>°C
        </p>
      </div>
      <div className="px-6 text-3xl flex justify-between w-full">
        <p>Local Time:</p>
        <p>{hora}</p>
      </div>
      <div className="px-6 text-3xl flex justify-center w-full">
        <img src={`icons/${props.info.weather[0].icon}.png`} alt="icon" />
      </div>
      <div className="flex justify-center w-full">
        {props.info.weather[0].main}
      </div>
      {/* {props.info ? JSON.stringify(valores) : "Carregando..."} */}
    </div>
  );
}

export default Info;
