import React, { useEffect } from 'react'

const Movieshowcase = (props) => {
    
    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 duration-200">
            <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
            </a>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{props.moviename}</h2>
            </div>
        </div>
    )
}

export default Movieshowcase
