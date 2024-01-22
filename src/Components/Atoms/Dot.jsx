import React, { useState } from "react";
import parse from "html-react-parser"
import { CloseSwiper } from "../../Icons";
import { useCanvas } from "@/Contexts/canvas";

function Dot({ item, open, close, setModal }) {


    const { direction } = useCanvas()

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
        setModal(
            <div className={`flex items-center justify-center w-full h-full`}>
                {item.photo ? <div className={`bg-gray-100 w-[2310px] h-[1500px] font-raleway text-navy-160 flex`}>
                    <div className={`shrink-0 h-[1500px] w-[1522px] bg-cover bg-center`} style={{ backgroundImage: `url('${item.photo}')` }}>
                        <div className={`shrink-0 h-[1500px] w-[1522px] bg-contain bg-center bg-no-repeat backdrop-blur-sm`} style={{ backgroundImage: `url('${item.photo}')` }}>

                        </div>
                    </div>
                    <div className={`grow px-10 py-20`}>
                        {item.title ? <div className={`text-[40px] font-extrabold tracking-[1.2px]`}>{item.title}</div> : <></>}
                        <hr className={`border-bronze-100 my-10`} />
                        <div className={`text-[36px] font-medium tracking-[1px] w-full markdown font-raleway`}>{parse(item.description ?? '')}</div>
                        {item.sign ? <>
                            <hr className={`border-bronze-600 my-10`} />
                            <div className={`text-bronze-600 text-sm w-full`}>{item.sign}</div>
                        </> : ``}
                    </div>
                </div> : <div className={`bg-gray-100 w-[1000px] h-auto px-10 py-20 font-raleway text-navy-160`}>
                    {item.title ? <div className={`text-[40px] font-extrabold tracking-[.6px]`}>{item.title}</div> : <></>}
                    <hr className={`border-bronze-100 my-10`} />
                    <div className={`text-[36px] font-medium tracking-[1px] w-full markdown font-raleway`}>{parse(item.description ?? '')}</div>
                    {item.sign ? <>
                        <hr className={`border-bronze-600 my-10`} />
                        <div className={`text-bronze-600 text-sm w-full`}>{item.sign}</div>
                    </> : ``}
                </div>}
            </div>)
    }
    return <>
        <div className={`${direction > 0 ? `opacity-100` : `opacity-0`} cursor-pointer flex items-center absolute bg-no-repeat bg-contain ${show ? `bg-close-dot w-[156px] h-[156px] -translate-x-[78px] -translate-y-[78px]` : `bg-dot w-[226px] h-[226px] -translate-x-[112px] -translate-y-[112px]`}`} href={`#`} style={{
            top: `${(item.top ? item.top : 50)}%`,
            left: `${(item.left ? item.left : 50)}%`
        }} onClick={() => handleClick()}>
            <div className={`absolute pointer-events-none font-raleway text-[40px] leading-[44px] font-extrabold left-full min-w-[40rem]`}>{item.title}</div>
        </div>
    </>;
}

export default Dot