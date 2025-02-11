import React, { useState, useEffect } from "react";

import { IoMdSend } from "react-icons/io";

import "../../style.css";
import { useContext } from "react";
import useTheme from "../../context";

export default function ChatInput({ input, handleSubmit }) {
  function onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      // e.preventDefault();
      handleSubmit(e);
    }
  }
  const { theme } = useTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme == "dark") setColor("bg-gray-800");
    else if (theme == "light") setColor("bg-gray-800");
    else if (theme == "violet") setColor("tw-bg-purple-950");
    else if (theme == "cyan") setColor("tw-bg-cyan-950");
    else if (theme == "blue") setColor("tw-bg-blue-950");
    else if (theme == "lime") setColor("tw-bg-lime-950");
  }, [theme]);
  return (
    <div
      // id={theme}
      className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-bg-gradient-to-b tw-from-transparent tw-from-40%  tw-flex tw-justify-center tw-items-center  "
    >
      <form
        className={
          `${color}` +
          " tw-flex tw-justify-evenly tw-items-center tw-h-[60px]  tw-my-4  tw-p-2 tw-gap-2 tw-rounded-lg tw-max-w-xl tw-w-[90%] "
        }
        style={
          {
            // boxShadow: "2px 2px 9px #F4AAB9",
          }
        }
        onSubmit={handleSubmit}
      >
        <textarea
          rows={1}
          type="text"
          className={
            `${color}` +
            " tw-flex-1 tw-items-center tw-overflow-hidden focus:tw-outline-none tw-resize-none  tw-border-none tw-pl-[10px] tw-rounded  tw-text-white"
          }
          ref={input}
          placeholder="Ask Any Question..."
          onKeyDown={onEnterPress}
        ></textarea>
        <button type="submit" className="tw-pr-2">
          <IoMdSend size={25} className="tw-text-white  " />
        </button>
      </form>
    </div>
  );
}
