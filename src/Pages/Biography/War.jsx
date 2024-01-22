import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useCanvas } from "@/Contexts/canvas";
import { useNavigate } from 'react-router-dom';

export default function () {

    const props = window.data.leningrad.section;

    const { classes, started } = useCanvas();

    const timeoutRef = useRef()

    const navigate = useNavigate()

    const swipeDown = () => {
        document.dispatchEvent(new CustomEvent('inertia-before', {
            detail: {
                visit: {
                    url: `/biography/war/1/1`
                }
            }
        }))
    }

    const swipeUp = () => {
        document.dispatchEvent(new CustomEvent('inertia-before', {
            detail: {
                visit: {
                    url: `/biography/before-war`
                }
            }
        }))
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            document.addEventListener('swipe-up', swipeUp)
            document.addEventListener('swipe-down', swipeDown)
        }, 1000)
        return () => {
            clearTimeout(timeoutRef.current)
            document.removeEventListener('swipe-up', swipeUp)
            document.removeEventListener('swipe-down', swipeDown)
        }
    }, [])


    return (
        <>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`w-full h-full relative`}>
                    <div className={`absolute z-30 left-[76px] bottom-10`} onClick={() => swipeDown()}>
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
                    <div className={`bg-bronze-120 ${classes.bg}`}>
                        <div className={`bg-bronze-120 absolute bottom-0 left-0 w-full h-full`}>
                            <img src={`./img/biography/war/bg.png`} alt={``} className={`absolute left-0 -bottom-[140px] w-[1834px] h-[1082px] pointer-events-none ${classes.city2}`} />
                        </div>
                        <div className={`vinetka w-[calc(100%-40rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                        <img src={`./img/leningrad/star.png`} alt={``} className={`text-red-500 absolute pointer-events-none right-0 top-0 ${classes.star}`} width="3010" height="2160" />
                        <div className={`max-w-[2000px] pointer-events-none flex pl-[204px] pt-[172px] leading-[220px] text-[240px] font-bold tracking-[2%] relative title-shadow`}>
                            <div className={classes.post}>{props.title}</div>
                        </div>
                        <div className={`pl-[204px] pt-[48px] tracking-[.06em] relative pointer-events-none`}>
                            <div className={`leading-[72px] text-[56px] font-raleway tracking-[4px] ${classes.io} title-shadow`}>{props.subtitle}</div>
                        </div>
                        <img src={`./img/biography/war/govorov.png`} alt={``} className={`absolute right-[604px] bottom-0 w-[1868px] h-[2032px] pointer-events-none ${classes.sectionGovorov}`} />
                    </div>
                </div>
            </div>
        </>
    );
}
