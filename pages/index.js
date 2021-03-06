import Head from 'next/head'
import {MicrophoneIcon, DotsVerticalIcon, SearchIcon} from '@heroicons/react/solid'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import Footer2 from '../components/Footer2'
import { useRef } from 'react'
import { useRouter } from 'next/router'

// const langs = ["hindi, bengali, francais, german, spanish, portugese"]

export default function Home() {
  const searchInpref = useRef(null)
  const router = useRouter()

  const search = e => {
    e.preventDefault()
    const term = searchInpref.current.value;
    console.log(term)
    if (!term) return
    
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-end items-center space-x-4 pt-3 px-4">
        <span className="text-xs">Gmail</span>
        <span className="text-xs">Images</span>
        <span className="flex cursor-pointer hover:bg-gray-100 rounded-full pr-3 py-2">
          <DotsVerticalIcon className="h-5 -mr-3 text-gray-600"/>
          <DotsVerticalIcon className="h-5 -mr-3 text-gray-600"/>
          <DotsVerticalIcon className="h-5 -mr-3 text-gray-600"/>
        </span>
        {/*<UserCircleIcon className="h-8"/>*/}
        
        <Avatar />
      </header>

      <form className="flex flex-col items-center w-4/5 mx-auto">
        <Image 
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={100}
          width={300}
        />
        <div className="rounded-full border border-gray-200 px-5 py-3 flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input 
            type="search" 
            className="focus:outline-none flex-grow" 
            ref={searchInpref}
          />
          <MicrophoneIcon className="h-5"/>        
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button 
            className="homeBtn" 
            onClick={search} 
          >
          Google Search
          </button>
          <button className="homeBtn" onClick={search}>I&apos;m Feeling Lucky</button>
        </div>
      </form>
      

      
      <Footer2 />
    </div>
  )
}
