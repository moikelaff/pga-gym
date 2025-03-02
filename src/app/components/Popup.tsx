"use client";

import Image from "next/image";
import { useState } from "react";

type PopupProps = {
  image: string;
  description: string;
  index: number;
};

const  Popup = (props: PopupProps) => {
    const [textVisibility, setTextVisibility] = useState(false);
    const [onhover, setOnHover] = useState(false);
    const handleMouseEnter = () => {
      setTextVisibility(!textVisibility);
    };
    const handleonHover = () => {
      setOnHover(!onhover);
    };

    return (
        <div key={props.index} className="relative w-full" onMouseEnter={handleonHover} onClick={handleMouseEnter} onMouseLeave={handleonHover}>
          <Image
            src={props.image}
            layout="responsive"
            alt="article"
            width={1500}
            height={1200}
            className="object-cover w-full"
          />
            {onhover && (
                <div className="absolute bottom-0 left-0 right-0 bg-brandHotPink text-justify bg-opacity-80 p-4 h-full flex flex-col items-center justify-center">
                    <p className="text-brandWhite text-lg">click to read!</p>
                </div>
            )}
            {textVisibility && (
          <div className="absolute bottom-0 left-0 right-0 bg-brandHotPink text-justify bg-opacity-80 p-4 h-full flex flex-col items-center justify-center">
            <p className="text-brandWhite text-lg">{props.description}</p>
          </div>
            )}
        </div>
      );
}
 
export default Popup;