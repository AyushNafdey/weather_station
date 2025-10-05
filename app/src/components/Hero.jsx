import React from 'react'

function Hero({value}) {
    return (
        <>
            <div className="flex flex-col items-center mb-8">
                <div className="flex items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 id="location" className="text-2xl font-semibold">Nagpur</h3>
                </div>
                <p id="current-temp" className="text-white text-6xl font-extralight mt-4">{value}</p>
            </div>
        </>
    )
}

export default Hero