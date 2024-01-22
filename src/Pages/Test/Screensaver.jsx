import React, { useEffect, useState } from 'react';

import Button from '../../Components/Button';
import { useCanvas } from "../../Contexts/canvas";

export default (props) => {

    const { setQuestion } = props

    const { setVideo, fillRef, isSecvenceRef, oRef, stepRef, framesRef, useVideoRefBG, useVideoRef, imagesRef, setButton, inClasses, outClasses, started, videoRef } = useCanvas();

    const [classes, setClasses] = useState(inClasses)
    const [innerClasses, setInnerClasses] = useState(inClasses)

    useEffect(() => {
        imagesRef.current = null;
        fillRef.current = null
        useVideoRef.current = true
        isSecvenceRef.current = false;
        framesRef.current = {
            callback: () => { },
            frames: []
        }
        oRef.current = { value: 0, start: 0, end: 1 }
        stepRef.current = 2000

        useVideoRefBG.current = true
        imagesRef.current = []
        setVideo(`./videobg/pishet.mp4`)
        videoRef.current.muted = true
        videoRef.current.loop = true
        setTimeout(() => {
            videoRef.current.paused && videoRef.current.play()
        }, 100)
        return () => {
            videoRef.current.pause()
            videoRef.current.loop = false
            videoRef.current.muted = false
            useVideoRef.current = false
            setVideo(null)
        }
    }, [])

    return (
        <div className={`relative w-full h-full overflow-hidden`} onClick={() => {
            videoRef.current.paused && videoRef.current.play()
        }}>
            <div className={`w-full h-full relative`}>
                <svg className={`text-red-500 absolute -right-[40rem] top-0 ${classes.star}`} width="3110" height="2160" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                </svg>
                <div className={`w-full h-full absolute top-0 left-0`}>
                    <div className={`vinetka w-[calc(100%-40rem)] h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                    <div className={`flex pl-[120px] pt-[200px] leading-[160px] text-[160px] text-navy-40 font-bold tracking-[.04em] relative ${classes.post}`}>
                        Проверь себя!
                    </div>
                    <div className={`flex pt-[240px] pl-[446]`}>
                        <div className={`flex leading-[1000px] text-[1200px] font-bold -tracking-[5%] relative text-bronze-100 ${classes.testnum}`}>
                            10
                        </div>
                        <div>
                            <div className={`flex leading-[280px] text-[400px] font-bold tracking-[.04em] relative text-bronze-100`}>
                                <div className={classes.post}>вопросов</div>
                            </div>
                            <div className={`tracking-[.06em] relative`}>
                                <div className={`leading-[280px] text-[300px] mt-6 ${classes.f}`}>о маршале<br />Говорове</div>
                            </div>
                            <div className={classes.post} style={{
                                position: `absolute`,
                                width: `1032px`,
                                height: `216px`,
                                left: `2104px`,
                                top: `1568px`,

                                fontFamily: 'Raleway',
                                fontStyle: `normal`,
                                fontWeight: `700`,
                                fontSize: `48px`,
                                lineHeight: `60px`,

                                letterSpacing: `0.1em`,
                                textTransform: `uppercase`,
                                fontFeatureSettings: `'pnum' on, 'lnum' on`,

                                color: `#FFFFFF`
                            }}>10 вопросов из биографии
                                <br /> 30 секунд на каждый ответ
                                <br />
                                <small>для детей от 8 лет</small>
                            </div>
                        </div>
                        <div className={`absolute bottom-[80px] left-[100px]`}>
                            <a onClick={(e) => {
                                e.preventDefault();
                                setClasses(outClasses)
                                setTimeout(() => {
                                    setQuestion(props.questions.data.find(element => element.sort == 1));
                                }, 1000)
                            }}><Button height={200} width={800} className={`rounded-full opacity-0 ${classes.btn}`} color={`outline-teal`} size={`md`}>НАЧАТЬ!</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}