import React, {useEffect, useRef, useState} from "react";

function Component1({size, color, styleTailwind, backgroundParent}) {
    const ref = useRef()
    const long = size
    const biggerLong = Math.sqrt((long * long) + (long * long)) + 4
    const [onHover, setOnHover] = useState(false)
    const [arrow, setArrow] = useState(false)
    const offSet = onHover ? long / 1.6 : 0

    useEffect(() => {
        setTimeout(() => {
            if (onHover) {
                setArrow(true)
            } else {
                setArrow(false)
            }
        }, 500)
    }, [onHover])


    return (
        <div onMouseLeave={() => {
            setOnHover(false)
        }} onMouseOver={() => setOnHover(true)} ref={ref}
             style={{background: backgroundParent, height: size * 2, width: size * 2}}
             className={'flex justify-center items-center'}>
            <div style={{width: long, height: long, background: 'inherit'}} className={'relative'}>
                <div style={{width: long, height: long, background: 'inherit', top: offSet * 0.56, right: offSet}}
                     className={'absolute z-30 transition-all duration-500'}>
                    <div style={{width: long, height: long}}
                         className={`absolute z-10 transition-all duration-500 bg-blue-500`}>
                    </div>
                    <div style={{
                        width: biggerLong,
                        height: long,
                        left: long / 9,
                        bottom: long / 3.1,
                        background: 'inherit'
                    }}
                         className={'absolute z-20 transform rotate-45'}>
                    </div>
                </div>
            </div>
            <div
                style={{width: long * 2, height: long * 1.5, background: color}}
                className={`absolute z-40 ${styleTailwind} cursor-pointer hover:shadow-lg`}></div>
            <div className={`absolute z-50 bg-black bg-opacity-50 transition-all duration-500`}
                 style={{height: long * 1.5, width: arrow ? size * 2 : 1}}></div>
        </div>
    )
}

export default Component1