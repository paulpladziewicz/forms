import Head from 'next/head'
import { useRouter } from 'next/router';
import BecomeACustomerForm from '../components/forms/BecomeACustomerForm'
import BecomeACustomerFormES from '../components/forms/BecomeACustomerFormES'

export default function Home() {
	const router = useRouter();
	const { locale } = router;
	return (
		<div>
			<Head>
				<title>Become A Customer</title>
				<meta name="description" content="Become a customer of Gordon Food Service today!"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<h1>Become A Customer</h1>
			{locale === 'en' && <BecomeACustomerForm />}
			{locale === 'es' && <BecomeACustomerFormES />}
		</div>
	)
}
