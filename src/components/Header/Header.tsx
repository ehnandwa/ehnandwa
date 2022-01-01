import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link as ScrollLink } from "react-scroll";
// @ts-ignore
import Typical from "react-typical";

import content from "../../content";

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className="p-16 pt-36 flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div className="w-8/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className=" lg:w-1/12 ">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            className="rounded-full h-10 w-10 lg:h-20 lg:w-20"
          />
        </div>
        <div className="text-white  text-center md:text-left">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            }  transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
