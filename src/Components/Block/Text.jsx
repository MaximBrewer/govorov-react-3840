import React from "react";
import parse from "html-react-parser"
import { useCanvas } from "@/Contexts/canvas";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default (props) => {
    const { block } = props
    const { classes } = useCanvas();

    const textRef = useRef(null)
    const titleRef = useRef(null)

    const [fh, setFh] = useState(0);
    const [sh, setSh] = useState(0);

    useEffect(() => {
        setFh(0);
        setSh(0);
        if (block.title) {
            if (titleRef.current) {
                setSh(2160 - titleRef.current.offsetTop - titleRef.current.offsetHeight - 60);
                setFh(titleRef.current.offsetTop - 96);
            }
        } else {
            if (textRef.current) {
                setSh(2160 - textRef.current.offsetTop + 8);
            }
        }
    }, [textRef.current, titleRef.current])

    return <div className={`w-full h-full flex flex-col justify-center bg-navy-160 bg-opacity-50`}>
        {fh ? <div className={`w-[10px] opacity-0 absolute left-[524px] top-0 bg-bronze-100 ${classes.txtfl}`} style={{ height: fh }}></div> : ``}
        {sh ? <div className={`w-[10px] opacity-0 absolute left-[524px] bottom-0 bg-bronze-100 ${classes.txtsl}`} style={{ height: sh }}></div> : ``}
        {block.title ? <>
            <div ref={titleRef} className={`max-w-[2160px] text-[240px] leading-[220px] tracking-[2%] font-bold ml-[476px] mb-12`}>
                <div className={`opacity-0 ${classes.io}`}>{block.title ?? ""}</div>
            </div>
        </> : <></>}
        {/* <hr className={`w-24 m-4 border-t-3`} />
        {block.photo ? <>
            <div className={`py-2 px-3`}>
                <img src={block.photo} style={{ height: window.innerHeight * 0.4, maxWidth: `fit-content` }} alt="" />
            </div>
            <hr className={`w-24 m-4 border-t-3`} />
        </> : ``} */}
        <div ref={textRef} className={`font-raleway opacity-0 max-w-[2160px] text-[60px] leading-[72px] tracking-[2px] font-medium ml-[524px] pl-[88px] ${classes.f}`}>{parse(block.text ?? "")}</div>
        {/* <hr className={`w-24 m-4 border-t-3 mb-8`} /> */}
    </div>
}