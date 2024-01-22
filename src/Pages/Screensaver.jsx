import React, { useEffect, useState } from 'react';

import Button from '../Components/Button';
import { useCanvas } from "../Contexts/canvas";
import { Link } from 'react-router-dom';

export default function () {

    const { classes, direction, started } = useCanvas();

    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>=
                    <div className={`bg-navy-60 absolute bottom-0 left-0 w-full h-full ${classes.sky}`}>
                        <div className={`bg-navy-100 translate-y-[76px] h-[586px] absolute bottom-0 left-0 w-full ${classes.neva}`}>
                            <img src={`./img/screensaver/neva.png`} alt={``} className={`absolute left-0 -top-[428px] w-[4018px] h-auto ${classes.city}`} />
                        </div>
                    </div>
                    <svg className={`text-red-500 absolute right-0 top-0 ${classes.star}`} width="3010" height="2160" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                    </svg>
                    <div className={`w-full h-full absolute top-0 left-0`}>
                        <div className={`vinetka w-[calc(100%-40rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        <div className={`flex pl-[216px] pt-[240px] leading-[360px] text-[360px] font-bold tracking-[.04em] relative`}>
                            <div className={classes.post}>Маршал</div>
                            <div className={`leading-[160px] text-[160px]`}>
                                <div className={`relative top-[8px] ${classes.lp}`}>Ленинградской</div>
                                <div className={`relative bottom-[8px] ${classes.lp2}`}>победы</div>
                            </div>
                        </div>
                        <div className={`pl-[216px] pt-[48px] tracking-[.06em] relative`}>
                            <div className={`leading-[160px] text-[160px] font-light ${classes.io}`}>Леонид Александрович</div>
                            <div className={`leading-[600px] text-[600px] font-bold ${classes.f}`}>Говоров</div>
                        </div>
                        <img src={`img/screensaver/govorov.png`} alt={``} className={`absolute right-[704px] bottom-0 w-[1618px] h-[1764px] ${classes.photo}`} />
                        <Link to={`/instruction`} className={`absolute bottom-[80px] left-[100px]`}>
                            <Button height={200} width={800} className={`rounded-full w-[800px] h-[200px] opacity-0 ${classes.btn}`} color={`outline-teal`} size={`md`}>Инструкция</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
