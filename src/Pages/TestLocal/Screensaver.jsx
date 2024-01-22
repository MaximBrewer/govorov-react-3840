import React, { useState } from 'react';
import Button from '@/Components/Button';

export default (props) => {

    const { setQuestion, inClasses, outClasses, started } = props

    const [classes, setClasses] = useState(inClasses)

    return (
        <>
            <div className={`w-full h-full relative`}>
                <svg className={`text-red-500 absolute -right-[40rem] top-0 ${classes.star}`} width="3010" height="2160" viewBox="0 0 1505 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M854.742 -12H1610V530.076V1189.42H1244.93H854.742H420.5L626 621.416L0 273.416H734L854.742 -12Z" fill="currentColor" />
                </svg>
                <div className={`w-full h-full absolute top-0 left-0`}>
                    <div style={{ backgroundColor: `transparent` }} className={`vinetka w-full h-full pointer-events-none top-0 left-0 absolute transition duration-1000 ${started ? `` : `opacity-0`}`}></div>
                    <div className={`flex pl-[120px] pt-[200px] leading-[160px] text-[160px] text-navy-40 font-bold tracking-[.04em] relative ${classes.post}`}>
                        Проверь себя!
                    </div>
                    <div className={`flex pt-[240px] pl-[446px]`}>
                        <div className={`flex leading-[1000px] text-[1200px] font-bold -tracking-[5%] relative text-bronze-100 ${classes.testnum}`}>
                            30
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
                            }}>30 вопросов из биографии
                                <br /> 30 секунд на каждый ответ
                                <br />
                                <small>для детей от 8 лет</small>
                            </div>
                        </div>
                    </div>
                    <div className={`relative mt-40 -[80px] left-[100px]`}>
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
        </>
    );
}