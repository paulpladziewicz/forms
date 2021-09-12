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
		.required()
		.max(10, 'Business name cannot be more than 10 characters.')
});

const BecomeACustomerForm = () => {
	return (
		<div>
			<h2>Form</h2>
			<Formik
				validateOnChange={true}
				validationSchema={validationSchema}
				initialValues={{
					email: '',
					businessName: ''
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
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}
						<TextField
							type="text"
							name="businessName"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.businessName}
						/>
						{errors.businessName && touched.businessName && errors.businessName}
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default BecomeACustomerForm
