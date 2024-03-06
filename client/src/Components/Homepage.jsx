import React, { useEffect, useState } from 'react'
import { Movieshowcase } from './Smallcomponent'
import { database } from '../API/API_init'





const Homepage = () => {

    const [shows, setshows] = useState([<></>]);
    useEffect(() => {
        const fetchdata = async () => {

            console.log("i called")
            const d = new database();
            const data = await d.availableshows();
            console.log(data.shows[0][1]["thumbnail"])
            const temparry = [];
            
            const len = Object.keys(data.shows[0]).length;

            for (let i = 0; i < len; i++) {
                // setshows(<Movieshowcase />);
                console.log(len)
                temparry.push(<Movieshowcase   moviename = {data.shows[0][i + 1]["name"]}/>)
            }
            setshows(temparry);
        }
        fetchdata();
    },[] )
    
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
