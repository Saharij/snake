import React from "react";
import Component1 from "./components/component1";

function Test() {
    const color = 'black'
    return <div>
        <div className={'flex justify-center items-center bg-black text-gray-50'}>
            Наведи на елементи
        </div>
        <div style={{background: color}} className={'flex justify-center items-center'}>
            <div className={'m-5 col-span-1 flex justify-center items-center'}>
                <Component1 size={100} styleTailwind={'bg-red-900'} backgroundParent={color}/>
            </div>
            <div className={'m-5 col-span-1 flex justify-center items-center'}>
                <Component1 size={100} styleTailwind={'bg-green-700 '} backgroundParent={color}/>
            </div>
            <div className={'m-5 col-span-1 flex justify-center items-center'}>
                <Component1 size={100} styleTailwind={'bg-yellow-700'} backgroundParent={color}/>
            </div>
        </div>

    </div>
}

export default Test