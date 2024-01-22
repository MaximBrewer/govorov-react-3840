import React from 'react';

import { useCanvas } from "@/Contexts/canvas";
import DelayLink from '../Components/DelayLink';

const menu = [
    {
        image: `./img/exhibits/photo.png`,
        title: `семейный альбом`,
        href: `/exhibits/album`,
        imgcss: ``
    },
    {
        image: `./img/exhibits/clock.png`,
        title: `Личное`,
        href: `/exhibits/favorites`,
        imgcss: `rotate-[25deg] scale-[130%] top-[60px]`
    },
    {
        image: `./img/exhibits/docs.png`,
        title: `Документы`,
        href: `/exhibits/books`,
        imgcss: `rotate-[15deg] scale-[110%] top-[60px] -left-[40px]`
    },
    {
        image: `./img/exhibits/film.png`,
        title: `Видеоархив`,
        href: `/exhibits/video`,
        imgcss: `rotate-[20deg] scale-[140%] -top-[40px]`
    }
];

export default function () {

    const { classes, styles, direction, started } = useCanvas();

    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>
                    <div className={``}>
                        <div className={`w-full h-full top-0 left-0 absolute pointer-events-none bg-teal-500 ${classes.bg}`}>
                            <div className={`top-0 left-0 bottom-0 right-0 -mt-32 absolute bg-cover bg-top-left opacity-20`} style={{ backgroundImage: `url(${`./img/exhibits/bg.png`})` }}></div>
                        </div>
                        <svg className={`text-red-500 absolute right-0 top-0 ${classes.starR}`} width="3110" height="2160" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                        </svg>
                        <img src={`./img/exhibits/govorov.png`} alt={``} className={`absolute right-[640px] bottom-0 w-[1398px] h-[1548px] ${classes.sectionGovorov}`} />
                        <div className={`vinetka w-[calc(100%-40rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        <div className={`flex pl-[132px] pt-[240px] leading-[220px] text-[240px] font-bold tracking-[.04em] relative ${classes.post}`}>
                            ЭКСПОНАТЫ
                        </div>
                        <ul className={`pl-[216px] pt-[194px] tracking-[.06em] relative flex flex-wrap text-[96px] leading-none tracking-[.06em] font-bold w-4/5 relative`}>
                            {menu.map((item, index) => <li className={`mb-[40px] mr-[40px] ${classes.menuItem} ${direction <= 0 ? `` : `opacity-0`}`} style={{ animationDelay: `${(index + 1) * .125}s` }} key={index}>
                                <DelayLink to={item.href} className={styles.link}>
                                    <div className={styles.imgwrapper}>
                                        <img src={item.image} className={`${styles.img} ${item.imgcss}`} alt={``} />
                                    </div>
                                    <div className={styles.text}>
                                        <span className={styles.textinner}>{item.title}</span>
                                    </div>
                                </DelayLink>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
