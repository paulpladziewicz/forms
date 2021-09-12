import {useRouter} from 'next/router'

const LangDropdown = () => {
	const router = useRouter();
	const { locale } = router;

	const changeLanguage = (e) => {
		const locale = e.target.value;
		router.push(router.pathname, router.asPath, { locale });
	};

	return (
		<div>
			<select
				onChange={changeLanguage}
				defaultValue={locale}
				className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
			>
				<option className="text-black" value="en">EN</option>
				<option className="text-black" value="es">ES</option>
			</select>
		</div>
	)
}

export default LangDropdown
