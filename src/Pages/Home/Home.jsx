import React from 'react'
import ComponentIndex from '../../component/ComponentIndex'
import HomeStyle from "./Home.module.css"

export default function Home() {
  return (
    <>
    {ComponentIndex.Navbar}
    <div className={HomeStyle.div1}>
     
    </div>
    {ComponentIndex.Footer}
    </>
  )
}
