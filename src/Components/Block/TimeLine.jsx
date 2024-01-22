import React from "react";
import Moment from 'moment';
import { Chapters as ChaptersIcon } from "../../Icons";

const titles = [
    'УНИВЕРСИТЕТЫ', 'Поля войны', 'После победы'
]

function TimeLine(props) {
    const { app, setChapter, openLeftMenu, openBranchesMenu, setBranch, closeBranchesMenu } = props;
    return <>
        <div className="absolute w-6 top-28 bottom-8 left-12 flex flex-col text-md group font-bold whitespace-nowrap uppercase z-40">
            <a className={`block ml-12 my-4 underline transition-all transform group-hover:scale-110`} onClick={(e) => { e.preventDefault(); openLeftMenu() }} >
                <div className={`font-bold  text-xl uppercase leading-none`}>{app.person.lastName} {app.person.firstName.substring(0, 1)}. {app.person.middleName.substring(0, 1)}.</div>
            </a>
            <div className={`flex-grow flex flex-col`}>
                {[0, 1, 2].map((ind) => (
                    <div className={`flex flex-col relative transition-all ${app.branchIndex == ind ? `flex-grow ` : ``}`} key={ind}>
                        {app.branchIndex == ind || app.branchesmenu ? <>
                            <a className={`flex items-center h-12 transition-all transform hover:scale-110 flex-shrink-0`} onClick={(e) => { e.preventDefault(); setBranch(ind);closeBranchesMenu() }}>
                                <div className="flex-shrink-0 h-[2px] w-10 bg-bronze-600"></div>
                                <div className={`flex-shrink-0 ml-2`}>
                                    <div className={`font-bold  text-md uppercase leading-none`}>{titles[ind]}</div>
                                </div>
                            </a>
                        </> : <></>}
                        {app.branchIndex == ind ?
                            <div className={`flex-grow flex flex-col -my-6`}>
                                {app.person.branches[ind].map((item, index) => (
                                    <React.Fragment key={index}>
                                        {index ? <div className="h-[2px] w-10 bg-bronze-600 -mb-[2px]"></div> : ``}
                                        <div className={`relative h-1/${app.person.branches[ind].length} border-l border-r border-bronze-600 ${app.chapterIndex == index ? `bg-bronze-600` : `${app.chapterIndex > index ? `bg-grey-600 bg-opacity-90` : ``}`} hover:bg-bronze-600`}>
                                            <a className="absolute pl-14 hidden group-hover:flex flex-col justify-center h-full transition-all transform hover:scale-110" onClick={(e) => { e.preventDefault(); setChapter(index) }}>
                                                <div className={`${app.chapterIndex == index ? `opacity-100` : `opacity-0`} group-hover:opacity-100 transition duration-500`}>{item.title}</div>
                                                <div className={`text-bronze-600 ${app.chapterIndex == index ? `opacity-100` : `opacity-0`} group-hover:opacity-100 transition duration-500`}>{Moment(item.since).format('YYYY')}-{Moment(item.until).format('YYYY')}</div>
                                            </a>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                            :
                            <div className={`flex-grow flex flex-col`}>
                                <div className={`border-l border-r border-bronze-600 group`}>
                                </div>
                            </div>
                        }
                    </div>
                ))}
                {app.branchesmenu ?
                    <div className={`flex flex-col relative`}>
                        <div className={`flex items-center h-12`}>
                            <div className="flex-shrink-0 h-[2px] w-10 bg-bronze-600"></div>
                            <a className={`flex-shrink-0 ml-2 transition-all transform hover:scale-110`}>
                                <div className={`font-bold  text-md uppercase leading-none`}>Мир</div>
                            </a>
                        </div>
                    </div> :
                    <div className={`flex flex-col relative`}>
                        <div className={`flex items-center h-12`}>
                            <div className="flex-shrink-0 h-[2px] w-10 bg-bronze-600"></div>
                        </div>
                    </div>
                }
            </div>
            {app.branchesmenu ? <div className={`h-4`}></div> :
                <a onClick={(e) => { e.preventDefault(); openBranchesMenu() }}
                    className={`flex text-bronze-600 items-center transition-all transform hover:scale-110`}
                >
                    <ChaptersIcon
                        className={`flex-shrink-0 h-40 w-6 ml-3 mr-5 stroke-current fill-current text-bronze-600`}
                    />
                    <div>Главы</div>
                </a>
            }
        </div>
    </>;
}

export default TimeLine