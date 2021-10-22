import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import PaginationButtons from '../components/PaginButtons'
import SearchResults from '../components/SearchResults'
import Response from '../Response'

const Search = ({results}) => {
    console.log(results)
    const router = useRouter()
    // const res = results.searchInformation?.formattedTotalResults.split(',')

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*header*/}
            <Header />
            <SearchResults 
                results={results}
            />
            <PaginationButtons />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false
    const startIndex = context.query.start || '0'

    // if (!context.query.term) return 

    const data = useDummyData 
    ? Response 
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(res => res.json())

    return {
        props: {
            results: data
        }
    }
}
