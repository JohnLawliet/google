import Link from 'next/link'
import {useRouter} from 'next/router'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

const PaginationButtons = () => {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 0
    // console.log("total : ",total)
    // const res = total.pop()
    // console.log("RES : ",res)

    // console.log("TOTAL : ",Math.floor(parseInt(res)/10))

    return (
        <div className="flex justify-between max-w-lg mx-auto text-blue mb-10">
        {
            startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5"/>
                        <p>Previous</p>
                    </div> 
                </Link>
            )
        }

        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
                <ChevronRightIcon className="h-5"/>
                <p>Next</p>
            </div>
        </Link>
        </div>
    )
}

export default PaginationButtons
