import React from 'react'

function Card({title, img, value}) {
    return (
        <>
            <div className="bg-[#ffffff33] backdrop-blur-lg rounded-xl border-solid border-[#ffffff4d] p-6 flex flex-col items-center justify-center text-center shadow-md transition-transform delay-300 ease-in-out hover:translate-y-[5px]">
                <img src={img} alt={title} className="justify-center w-12 h-12 mb-2"/>
                    <p className="text-black text-lg font-medium">{title}</p>
                    <p id="card" className="text-black text-2xl font-medium mt-1">{value}</p>
            </div>
        </>
    )
}

export default Card