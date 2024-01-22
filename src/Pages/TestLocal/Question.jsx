import React, { useEffect, useRef, useState } from 'react';
import Stars from './Stars';

export default function (props) {

    const { question, setResults, setQuestion, inClasses, outClasses, started } = props;

    const [classes, setClasses] = useState(inClasses)
    const [innerClasses, setInnerClasses] = useState(inClasses)

    const requestRef = useRef(0)
    const timerRef = useRef(0)
    const timerElementRef = useRef(null)

    const animate = () => {
        timerRef.current += 1 / 60
        if (timerRef.current > 30) {
            handleAnswer(false)
            return false;
        }
        timerElementRef.current && (timerElementRef.current.style.width = `${timerRef.current * 100 / 30}%`)
        setTimeout(() => {
            requestRef.current = requestAnimationFrame(animate);
        }, 1 / 60)
    }

    useEffect(() => {
        cancelAnimationFrame(requestRef.current)
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current)
        }
    }, [question])


    useEffect(() => {
        return () => {
            cancelAnimationFrame(requestRef.current)
        }
    }, [])

    const handleAnswer = (index) => {
        cancelAnimationFrame(requestRef.current)
        timerRef.current = 0;
        setInnerClasses(outClasses)
        setTimeout(() => {
            setResults(prev => {
                let results = { ...prev }
                results[question.sort] = `${index}`
                return results
            })
            let next = props.questions.data.find(element => element.sort == question.sort + 1)
            setQuestion(next)
            setInnerClasses(inClasses)
        }, 500)
    }

    return (
        <div className={`w-full h-full relative`}>
            <svg className={`text-navy-95 absolute -right-[40rem] top-0 ${classes.starR}`} width="3110" height="2160" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
            </svg>
            <div style={{ backgroundColor: `transparent` }} className={`vinetka w-full h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
            <div className={`pt-[64px] pr-[8rem] pl-[120px] pb-20 relative text-navy-40 h-full w-full flex flex-col justify-between`}>
                <div className={``}>
                    <div className={`flex items-center justify-between`}>
                        <div className={`text-[160px] font-bold tracking-[.04em] ${classes.post} relative top-[16px]`}>Проверь себя!</div>
                        <Stars {...props} />
                    </div>
                </div>
                <div className={`flex items-center ${classes.menu}`}>
                    <div className={`flex items-center mr-16 font-raleway text-[240px] text-bronze-100 leading-[240px] tracking-[12px] font-bold`}>{question.sort}</div>
                    <div className={`flex items-center grow bg-navy-40 relative top-8`}>
                        <div className={`bg-bronze-100 h-[26px]`} ref={timerElementRef}></div>
                    </div>
                </div>
            </div>

            <div className={`w-full absolute text-navy-40 top-0 left-0 bottom-0 flex flex-col justify-center transition duration-1000`}>
                <div className={`text-white ${innerClasses.menu}`}>
                    <div className={`font-raleway text-[96px] leading-[112px] text-center px-32 tracking-[5%] font-bold`}>{question.title}</div>
                    {question.answers ? <ul className={`grid grid-cols-2 gap-[70px] w-[2166px] mx-auto mt-[124px]`}>
                        {question.answers.answers.map((item, index) => <li key={index} className={`cursor-pointer rounded-[20px] text-navy-80 flex flex-col justify-center transition ${1 ? `bg-navy-40` : `bg-navy-10`} px-[80px] py-[68px]`} onClick={() => handleAnswer(index)}>
                            <div className={`font-raleway text-[72px] leading-[76px] text-center tracking-[3%] font-bold`}>
                                {item.text}
                            </div>
                        </li>)}
                    </ul> : ``}
                </div>
            </div>
        </div>
    );
}
