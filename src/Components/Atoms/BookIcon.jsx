import React from "react";
import {
    Book as BookIcon,
} from "../../Icons";


export default (props) => {

    const { wiki, handleWikiClick } = props;

    return <>
        {wiki ? <div className={`flex flex-col items-center mr-16 transition-all transform hover:scale-110 hover:text-bronze-600`} onClick={handleWikiClick}>
            <BookIcon
                className={`cursor-pointer w-12 h-12 fill-current text-white transition-all transform hover:scale-125 duration-500 ease-in-out hover:text-bronze-600`}
            />
        </div> : ``}
    </>
}