import React, { useEffect, useState } from 'react';
import parse from "html-react-parser"
import Stars from './Stars';

export default function (props) {

    const { inClasses, started, results, corrects, setResults, quiz } = props;

    const [classes, setClasses] = useState(inClasses)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let cc = 0;
        for (let c in results) if (results[c] && corrects[c] === results[c]) ++cc
        setTotal(cc)
    }, [results, corrects])

    return (
        <>
            <div className={`w-full h-full relative`}>
                <div className={`w-full h-full relative`}>
                    <div className={`w-full h-full flex flex-col`}>
                        <svg className={`text-navy-95 absolute -right-[20rem] top-0 ${classes.starR}`} width="3010" height="2160" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                        </svg>
                        <div style={{ backgroundColor: `transparent` }} className={`vinetka w-full h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        <div className={`relative text-navy-40 w-full h-full flex flex-col ${classes.menu}`}>
                            <div className={`pt-[64px] pr-8 pl-[120px]`}>
                                <div className={`flex items-center justify-between`}>
                                    <div className={`text-[160px] font-bold tracking-[.04em] ${classes.post} relative top-[16px]`}>Проверь себя!</div>
                                    <Stars {...props} />
                                </div>
                            </div>
                            <div className={`text-white flex flex-col items-center grow justify-center`}>
                                <div className={`font-raleway text-[96px] leading-[112px] text-center px-32 tracking-[5%] font-bold mb-[134px]`}>{parse(quiz[total])}</div>
                                <a href="#" onClick={e => {
                                    e.preventDefault()
                                    setResults({})
                                }} className={`mb-80 block cursor-pointer rounded-[20px] text-navy-80 transition bg-navy-10 hover:bg-navy-40 px-[80px] py-[68px]`}>
                                    <div className={`font-raleway text-[72px] leading-[76px] text-center tracking-[3%] font-bold`}>
                                        Пройти еще раз
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
