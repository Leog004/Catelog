import React, {useState} from 'react'
import Head from 'next/head'
import Loader from '../components/Loader'
import PDFReader from '../components/PDFReader'
import SideBar from '../components/SideBar'

export default function Home() {

    const [outSideNumber, setoutSideNumber] = useState(0)

  return (
    <div className='flex'>
      <SideBar setoutSideNumber={setoutSideNumber} />
      <PDFReader outSideNumber={outSideNumber} />
    </div>
  )
}
