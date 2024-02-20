import React, { useState } from 'react'
import { Movieshowcase } from './Smallcomponent'
import { database } from '../API/API_init'


const fetchdata = async (setshows) => {

    // console.log("i called")
    const d = new database();
    const data = await d.availableshows();
    const temparry = [];
    for (let i = 0; i < data.Number; i++) {
        // setshows(<Movieshowcase />);
        temparry.push(<Movieshowcase/>)
    }
    setshows(temparry);
}


const Homepage = () => {

    const [shows, setshows] = useState([<></>]);
    fetchdata(setshows);
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {shows}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage
