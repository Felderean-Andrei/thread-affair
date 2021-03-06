import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div>
      Hello
      <i className="fa-solid fa-phone"></i>
      <button className="button">Test</button>
      <button className="button button-large">Test Large</button>
      <a className='button'>test</a>
      <a className="button button-large">test large</a>
      </div>

      <div className="mt-4">
        <span className="badge">-50%</span>

        <span className="badge badge-font-large">%</span>

        <span className="badge badge-secondary">new entry</span>

        <span className="badge badge-secondary badge-font-large">-5%</span>
      </div>
    </div>
  )
}
