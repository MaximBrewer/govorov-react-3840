import React from 'react';

export default (props) => {
    const { className = ``, onClick = () => { }, children = ``, color = `primary` } = props

    let attr = {}

    attr.className = `w-full flex justify-center items-center transition no-underline text-center px-[32px] space-x-6 h-[160px] font-bold text-[48px] tracking-[.1em] border-3 leading-none rounded-[20px]`

    switch (color) {
        case `bronze`:
            attr.className = `${attr.className} bg-bronze-120 text-white hover:bg-bronze-500 text-shadow`
            break;
        default:
            attr.className = `${attr.className} bg-navy-60 text-white hover:bg-bronze-500 focus:bg-bronze-120 text-shadow`
            break;
    }

    attr.className = `${attr.className} ${className}`;
    !!onClick && (attr.onClick = onClick);

    return <button {...attr}><div className={`relative top-2`}>{children}</div></button>
}