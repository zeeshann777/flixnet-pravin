import React from 'react'
import { Movieshowcase } from './Smallcomponent'

const Homepage = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <Movieshowcase/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage
