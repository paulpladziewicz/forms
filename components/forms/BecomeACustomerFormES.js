import { Formik } from 'formik'
import { TextField } from '@material-ui/core'
import * as yup from 'yup'

const validationSchema = yup.object({
	email: yup
		.string()
		.required()
		.email(),
	businessName: yup
		.string()
		.required('El nombre de la empresa es obligatorio.')
		.max(10, 'Business name cannot be more than 10 characters.'),
	firstName: yup
		.string()
		.required('First name is required.'),
	lastName: yup
		.string()
		.required('Last name is required.')
});

const BecomeACustomerFormES = () => {
	return (
		<div>
			<h2>Form En Español</h2>
			<Formik
				validateOnChange={true}
				validationSchema={validationSchema}
				initialValues={{
					businessName: '',
					firstName: '',
					lastName: ''
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => (
					<form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '500px'}}>
						<TextField
							type="text"
							name="businessName"
							label="Business or Non-Profit Organization Name"
							style={{marginBottom: '16px'}}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.businessName}
						/>
						{errors.businessName && touched.businessName && errors.businessName}
						{/*// dfds*/}
						{/*//*/}
						<TextField
							type="text"
							name="firstName"
							label="First Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.firstName}
						/>
						{errors.firstName && touched.firstName && errors.firstName}
						<TextField
							type="text"
							name="lastName"
							label="Last Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastName}
						/>
						{errors.lastName && touched.lastName && errors.lastName}
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default BecomeACustomerFormES
