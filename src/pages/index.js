import Head from 'next/head'
import requests from '../utils/requests'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Component */}
      <Header />
      {/* Nav Component */}
      <Nav />
      {/* Results */}
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then(res => res.json())

  return {
    props: {
      results: request.results
    }
  }
}