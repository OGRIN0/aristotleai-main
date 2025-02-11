import React from "react";
import "../../style.css";
import { useContext } from "react";
import useTheme from "../../context";

export default function ChatHeader({ initial_model }) {
  const { theme } = useTheme();
  return (
    <div className=" mt-6 tw-w-full tw-py-4 tw-flex tw-justify-center tw-items-center tw-bg-gradient-to-b tw-from-transparent tw-from-80% ">
      <h1 className="tw-text-2xl tw-font-bold tw-bg-transparent" id={theme} >
        {initial_model}
      </h1>
    </div>
  );
}
