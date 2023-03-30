import { Avatar, Popover } from "@mui/material";
import React from "react";
import { motion as m } from "framer-motion";
import { Add } from "@mui/icons-material";
import useOnClickOutside from "./FocusOut";

function App() {
  const [button, setButton] = React.useState(false);
  const ref = React.useRef();
  useOnClickOutside(ref, () => setButton(false));
  return (
    <div ref={ref} className="flex justify-end w-full h-20 shadow-md px-5 transition-all bg-white">
      <Avatar
        className="z-20 absolute right-10 top-[14px] cursor-pointer"
        src="https://avatars.githubusercontent.com/u/16899513?v=4"
        alt="André Gonçalves"
        sx={{
          width: 50,
          height: 50,
        }}
        component={m.div}
        initial="closed"
        animate={button ? "open" : "closed"}
        variants={{
          open: {
            x: -255,
            y: 100,
            opacity: 1,
            scale: 1.1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
          closed: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        onClick={() => {
          setButton(!button);
        }}
      />
      <m.div
        className={
          "bg-white w-72 h-72 rounded-lg shadow-md absolute Poppins right-0 px-6 z-10"
        }
        initial="closed"
        animate={button ? "open" : "closed"}
        variants={{
          open: {
            x: -110,
            y: 100,
            opacity: 1,
            borderRadius: 8,
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          closed: {
            x: 200,
            y: -150,
            opacity: 0,
            borderRadius: 999,
            scale: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        <m.div
          className="absolute -top-4 -right-4 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          initial="closed"
          animate={button ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            closed: {
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
          onClick={() => {
            setButton(!button);
          }}
        >
          <Add
            className="cursor-pointer rotate-45 text-[#316181]"
            fontSize="large"
          />
        </m.div>

        <m.div
        initial="closed"
          animate={button ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.5,
              },
            },
            closed: {
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            },
          }}
          className="flex justify-between mt-4"
        >
          <div className="h-12 w-12" />
          <div className=" font-bold self-center">André Gonçalves</div>
        </m.div>

        <m.div
          initial="closed"
          animate={button ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.7,
              },
            },
            closed: {
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            },
          }}
          className="text-right -mt-4"
        >
          Super-admin
        </m.div>
      </m.div>
    </div>
  );
}

export default App;
