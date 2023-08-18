import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
            alt =""
            className="featuredImg"/>
            <div className='featuredTitles'>
                <h1>Delhi</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://cdn.pixabay.com/photo/2017/06/12/08/29/victoria-memorial-2394784_1280.jpg"
            alt=""
            className="featuredImg"/>
            <div className='featuredTitles'>
                <h1>Kolkata</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/mumbai-1.jpg"
            alt =""
            className="featuredImg"/>
            <div className='featuredTitles'>
                <h1>Mumbai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=700&h=500&s=1"
            alt =""
            className="featuredImg"/>
            <div className='featuredTitles'>
                <h1>Hyderabad</h1>
                <h2>123 properties</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Featured;
