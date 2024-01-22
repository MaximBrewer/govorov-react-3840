import React from "react";
import parse from "html-react-parser"
import { CloseSwiper } from "../../Icons";

function Popup(props) {
    const { item, close } = props
    return <div className={`bg-grey-900 text-white bg-opacity-90 flex-full  z-200`}>
        <CloseSwiper className={`cursor-pointer fixed right-16 top-16 w-14 h-28 text-bronze-600 fill-current stroke-current`} onClick={() => close()} />
        <div className={`flex`}>
            <div className={``}>
                <img src={item.photo} className={``} alt="" style={{ height: `66.66vh` }} />
            </div>
            <div className={`w-168`} style={{ height: `66.66vh` }} >
                <div className={`bg-white px-4 pt-4 pb-6 h-full text-black`}>
                    <div className={`border-4 p-4 h-full`}>
                        {item.title ? <div className={`uppercase mb-8  font-md font-bold text-center border-b-2 text-xl`}>{item.title}</div> : <></>}
                        <div className={` font-md w-full text-lg`}>{parse(item.description ?? '')}</div>
                        {item.sign ? <>
                            <hr className={`border-bronze-600 my-6`} />
                            <div className={`text-bronze-600 text-sm w-full`}>{item.sign}</div>
                        </> : ``}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Popup