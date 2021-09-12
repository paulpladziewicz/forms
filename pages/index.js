import Head from 'next/head'
import BecomeACustomerForm from '../components/forms/BecomeACustomerForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Become A Customer</title>
        <meta name="description" content="Become a customer of Gordon Food Service today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<h1>Become A Customer</h1>
			<BecomeACustomerForm />

    </div>
  )
}
