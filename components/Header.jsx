import Image from 'next/image'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import {useRouter} from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
    const router = useRouter()    
    const searchInputRef = useRef()

    const search = e => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        searchInputRef.current.value = ''
        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="w-full p-3 sm:p-6 flex items-center">
                <div className="flex items-center min-w-[90px]">
                <Image 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
                    height={40}
                    width={120}
                    objectFit="contain"
                    className="cursor-pointer "
                    onClick={() => router.push("/")}
                />
                </div>

                <form 
                className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center 
                px-4 py-2 sm:px-5 
                ml-3 mr-3 sm:ml-10 sm:mr-5"
                onSubmit={search}
                >
                    <input 
                        type="text" 
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon 
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                        onClick={() => (searchInputRef.current.value="")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>

                    <SearchIcon 
                        className="h-6 text-blue-500 hidden sm:inline-flex "
                    />
                    <button 
                        className="hidden" 
                        type="submit" 
                    >
                    Search
                    </button>
                </form>

                <Avatar 
                    className="ml-auto"
                />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default Header
