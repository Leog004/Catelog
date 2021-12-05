import React, {useState} from 'react'
import Head from 'next/head'
import Loader from '../components/Loader'
import PDFReader from '../components/PDFReader'
import SideBar from '../components/SideBar'

export default function Home() {

    // Using the state component as a global variable that will be used to 
    // share information from sideBar and PDFREADER
    const [outSideNumber, setoutSideNumber] = useState(0)

  return (
    <div className='flex'>
      <SideBar setoutSideNumber={setoutSideNumber} /> {/* Setting the outside variable if they enter a number on search bar */}
      <PDFReader outSideNumber={outSideNumber} /> {/* Sening outsideNumber value to PDFREADER */}
    </div>
  )
}
