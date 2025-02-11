// React Component

import React, { useContext, useEffect, useState } from "react";
import useTheme from "../../context";

const ActivityContainer = () => {
  const { theme, darkTheme, lightTheme, violetTheme } = useTheme();
  const [color, setColor] = useState("tw-bg-white");

  useEffect(() => {
    if (theme == "dark") setColor("bg-gray-800");
    else if (theme == "light") setColor("tw-bg-white");
    else if (theme == "violet") setColor("tw-bg-purple-950");
    else if (theme == "cyan") setColor("tw-bg-cyan-950");
    else if (theme == "blue") setColor("tw-bg-blue-950");
    else if (theme == "lime") setColor("tw-bg-lime-950");
  }, [theme]);

  // console.log(theme);

  return (
    <div
      className={color + "  mt-7 mb-7  rounded shadow border border-warning "}
      // id={theme}
    >
      <div className=" p-4 ">
        <h4 className="mb-5">Recent activity across all projects</h4>

        <div className="row ">
          <div className="col-md-3 mb-4">
            <p className="mb-1">23 FEB, 2024</p>
            <p className="mb-1">10:30 AM</p>
          </div>
          <div className="col-md-9">
            <div className="activity-item mb-4">
              <p className="mb-1 fw-bolder">
                Bootstrap Template: Unleashing Creative Possibilities
              </p>
              <p className="mb-1">
                by{" "}
                <span className="text-warning fst-italic">
                  Shantinon Mekalan
                </span>
                <hr className="my-1" />
              </p>
              <p>
                Discover limitless creativity with the Bootstrap template! Our
                latest update offers an array of innovative features and design
                options.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <p className="mb-1">23 FEB, 2024</p>
            <p className="mb-1">12:30 AM</p>
          </div>
          <div className="col-md-9">
            <div className="activity-item mb-4">
              <p className="mb-1 fw-bolder">
                Empower Your Digital Presence: The Bootstrap Template Unveiled
              </p>
              <p className="mb-1">
                by <span className="text-warning fst-italic">Bookworm22</span>
                <hr className="my-1" />
              </p>
              <p>
                Unveiling the Bootstrap template, a game-changer for your
                digital presence. With its powerful features and sleek design,
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <p className="mb-1">23 FEB, 2024</p>
            <p className="mb-1">2:30 AM</p>
          </div>
          <div className="col-md-9">
            <div className="activity-item mb-4">
              <p className="mb-1 fw-bolder">
                Bootstrap Template: Simplified Design, Maximum Impact
              </p>
              <p className="mb-1">
                by{" "}
                <span className="text-warning fst-italic">Sharuka Nijibum</span>
                <hr className="my-1" />
              </p>
              <p>
                Introducing the Bootstrap template, where simplified design
                meets maximum impact. Elevate your digital presence with its
                sleek and intuitive features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityContainer;
