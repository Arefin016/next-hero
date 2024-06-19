import Image from "next/image"
import React from "react"
import { Headland_One } from "next/font/google"

const headland = Headland_One({weight : ['400'], subsets : ['latin']})

const getTime = async() => {
  const res = await fetch('http://localhost:3000/time', {cache: 'no-store'});
  const data = await res.json()
  return data.currentTime;
}

const GalleryPage = async() => {

  const currentTime = await getTime();


  return (
    <div className={`${headland.className}`}>
      <h1>Time: {currentTime}</h1>
      <div>
        {[1, 2, 3, 4]?.map((img) => (
          <Image
            key={img}
            src={`/images/${img}.jpg`}
            alt=""
            height="1080"
            width="1800"
          />
        ))}
      </div>
      {/* <Image src="/images/slide2.jpg" alt="" height="1080" width="1920"/> */}
    </div>
  )
}

export default GalleryPage
