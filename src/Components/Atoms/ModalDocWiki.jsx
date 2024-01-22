import React from "react";
import parse from "html-react-parser"

export default (props) => {
    const { item } = props

    return <div className={`flex items-center justify-center w-full h-full`}>
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
            {item.title ? <div className={`text-[40px] font-extrabold tracking-[1.2px]`}>{item.title}</div> : <></>}
            <hr className={`border-bronze-100 my-10`} />
            <div className={`text-[36px] font-medium tracking-[1px] w-full markdown font-raleway`}>{parse(item.description ?? '')}</div>
            {item.sign ? <>
                <hr className={`border-bronze-600 my-10`} />
                <div className={`text-bronze-600 text-sm w-full`}>{item.sign}</div>
            </> : ``}
        </div>}
    </div>
}
