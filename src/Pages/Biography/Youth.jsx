import React, { useEffect } from 'react';

import { useRef } from 'react';
import { useCanvas } from "@/Contexts/canvas";
import { useNavigate } from 'react-router-dom';

export default function () {

    const props = window.data.biography.youth.section;

    const { classes, started } = useCanvas();

    const navigate = useNavigate()

    const timeoutRef = useRef()

    const swipeDown = () => {
        document.dispatchEvent(new CustomEvent('inertia-before', {
            detail: {
                visit: {
                    url: `/biography/youth/1/1`
                }
            }
        }))
    }

    const swipeUp = () => {
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            // document.addEventListener('swipe-up', swipeUp)
            document.addEventListener('swipe-down', swipeDown)
        }, 1000)
        return () => {
            clearTimeout(timeoutRef.current)
            // document.removeEventListener('swipe-up', swipeUp)
            document.removeEventListener('swipe-down', swipeDown)
        }
    }, [])


    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>
                    <div className={`absolute z-30 left-[76px] bottom-20`} onClick={() => swipeDown()}>
                        <svg width="160" height="248" className={`cursor-pointer ${classes.swiper}`} viewBox="0 0 80 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2482_3625" style={{ maskType: `alpha` }} maskUnits="userSpaceOnUse" x="3" y="47" width="74" height="74">
                                <circle cx="40" cy="84" r="37" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2482_3625)">
                                <circle cx="40" cy="83" r="12" fill="#C5A277" />
                            </g>
                            <rect width="29.5286" height="7.38216" transform="matrix(0.709807 -0.704396 0.709807 0.704396 19 30.7998)" fill="#C5A277" />
                            <rect width="29.5286" height="7.38216" transform="matrix(-0.709807 -0.704396 0.709807 -0.704396 55.7603 36)" fill="#C5A277" />
                            <circle cx="40" cy="84" r="38.5" stroke="#C5A277" strokeWidth="3" />
                        </svg>
                    </div>
                    <div className={``}>

                        {/* <div className={`bg-navy-60 absolute bottom-0 left-0 w-full h-full ${classes.sky} pointer-events-none`}>
                            <div className={`bg-navy-100 translate-y-[38px] h-[293px] absolute bottom-0 left-0 w-full ${classes.neva}`}>
                                <img src={`./img/biography/youth/cannon.jpg`} alt={``} className={`absolute left-0 -top-[214px] w-[2014px] h-auto ${classes.city}`} />
                            </div>
                        </div> */}
                        <div className={`absolute top-0 bg-teal-100 left-0 right-[640px] h-[812px] pointer-events-none ${classes.bg}`}>
                            <div className={`w-full h-full ${classes.ship}`}
                                style={{
                                    backgroundImage: `url('${`./img/biography/youth/ship.jpg`}')`,
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `center`
                                }}
                            >
                            </div>
                        </div>
                        <div className={`absolute bottom-0 bg-bronze-120 left-0 right-[640px] top-[812px] pointer-events-none ${classes.bg}`}>
                            <div className={`w-full h-full ${classes.cannon}`}
                                style={{
                                    backgroundImage: `url('${`./img/biography/youth/cannon.jpg`}')`,
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `right bottom`
                                }}
                            >
                            </div>
                        </div>


                        <div className={`vinetka w-[calc(100%-40rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        {/* <img src={`./img/biography/youth/ship.jpg`} alt={``} className={`text-red-500 absolute pointer-events-none right-0 top-0 ${classes.star}`} width="1505" height="1080" /> */}
                        <div className={`max-w-[3100px] pointer-events-none flex pl-[1250px] pt-[496px] leading-[220px] text-[240px] font-bold tracking-[2%] relative title-shadow`}>
                            <div className={classes.post}>{props.title}</div>
                        </div>
                        <div className={`pl-[1250px] pt-[48px] tracking-[.06em] relative pointer-events-none`}>
                            <div className={`leading-[72px] text-[56px] font-raleway tracking-[4px] ${classes.io} title-shadow`}>{props.subtitle}</div>
                        </div>
                        <img src={`./img/biography/youth/govorov.png`} alt={``} className={`absolute left-[140px] bottom-[0px] w-[1302px] h-[2020px] pointer-events-none ${classes.sectionGovorov}`} />
                        <img src={`./img/biography/youth/sing.png`} alt={``} className={`grayscale absolute right-[750px] bottom-[70px] w-[904px] h-auto pointer-events-none ${classes.sectionSign}`} />
                    </div>
                </div>
            </div>
        </>
    );
}
