import Head from 'next/head'
import { useRouter } from 'next/router';
import BecomeACustomerForm from '../components/forms/BecomeACustomerForm'
import BecomeACustomerFormES from '../components/forms/BecomeACustomerFormES'
import LangDropdown from '../components/LangDropdown'

export default function Home() {
	const router = useRouter();
	const { locale } = router;
	return (
		<div>
			<Head>
				<title>Become A Customer</title>
				<meta name='description' content='Become a customer of Gordon Food Service today!'/>
				<link rel='icon' href='/favicon.ico'/>
			</Head>

			<h1>Become A Customer</h1>
			<LangDropdown/>
			{locale === 'en' && <BecomeACustomerForm/>}
			{locale === 'es' && <BecomeACustomerFormES/>}

			<h2>Prototype Description</h2>
			<p>This project utilizes the following technologies:</p>
			<ul>
				<li>Next.js</li>
				<li>Formik</li>
				<li>Yup (form validation)</li>
				<li>Material UI</li>
			</ul>

			<p>The project is internationalized for English and Spanish. The correct locale would be chosen based on the user's browser settings, or the user could utilize the language dropdown.</p>
			<a href='https://github.com/paulpladziewicz/forms' target='_blank' rel='noreferrer'>Review the code on Github here.</a>
		</div>
	)
}
