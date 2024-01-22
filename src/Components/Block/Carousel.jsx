import React, { useRef, useState, useEffect } from "react";
import parse from "html-react-parser"

import Carousel from "../Carousel";
import { useCanvas } from "@/Contexts/canvas";


export default (props) => {

    const { block } = props
    const { classes } = useCanvas();

    return <div className="flex flex-col justify-center w-full h-full px-64 bg-navy-160 bg-opacity-50">
        <Carousel photos={block.photos} />
        {block.text ? <div className={`font-raleway font-medium text-[56px] tracking-[2px] leading-[72px] w-[2160px] mx-auto pl-20 border-l-[10px] border-bronze-100 mt-28 ${classes.carouseltext}`}>{parse(block.text)}</div> : ``}
    </div>
}


