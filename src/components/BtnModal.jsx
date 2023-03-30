import { Button } from "@mui/material";
import React from "react";
import { motion as m } from "framer-motion";
import useOnClickOutside from "../FocusOut";

function BtnModal() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  const posX =
    window.innerWidth / 2 -
    document.getElementById("btn")?.getBoundingClientRect().x;
  const posY =
    window.innerHeight / 2 -
    document.getElementById("btn")?.getBoundingClientRect().y;

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        id="btn"
        onClick={(e) => {
          setOpen(!open);
          console.log(
            document.getElementById("btn")?.getBoundingClientRect().x
          );
          console.log(posX);
        }}
      >
        Abrir Modal
      </Button>
      <m.div
        className="bg-black text-white h-72 w-72 flex items-center justify-center absolute"
        ref={ref}
        id="modal"
        initial={{ opacity: 0, scale: 0 }}
        animate={open ? "open" : "closed"}
        variants={{
          open: {
            x: posX - 288 / 4,
            y: [posY - 300, posY],
            opacity: 1,
            scale: [0, 0.3, 1, 1, 1, 1, 1, 1.5],
            borderRadius: 10,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
          closed: {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0,
            borderRadius: 999,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        <p>ABRIDA</p>
      </m.div>
    </>
  );
}

export default BtnModal;
