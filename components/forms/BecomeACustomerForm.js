import { Formik } from 'formik'
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core'
import * as yup from 'yup'

const phoneRegExp = new RegExp('^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')

const validationSchema = yup.object({
	businessName: yup
		.string()
		.required('Business name is required.')
		.max(30, 'Business name cannot be more than 10 characters.'),
	businessType: yup
		.string()
		.required('Please select a Business Type.'),
	firstName: yup
		.string()
		.required('First name is required.'),
	lastName: yup
		.string()
		.required('Last name is required.'),
	email: yup
		.string()
		.required('Please provide a valid email address.')
		.email(),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Please enter a valid phone number.')
		.required('Please enter a valid phone number.')
});

const BecomeACustomerForm = () => {
	return (
		<div>
			<h2>Form</h2>
			<Formik
				validateOnChange={true}
				validationSchema={validationSchema}
				initialValues={{
					businessName: '',
					businessType: '',
					firstName: '',
					lastName: '',
					email: '',
					phone: ''
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
					}) => (
					<form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '500px'}}>
						<TextField
							type="text"
							name="businessName"
							label="Business or Non-Profit Organization Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.businessName}
						/>
						<span style={{color: 'red'}}>{errors.businessName && touched.businessName && errors.businessName}</span>
						<FormControl>
							<InputLabel id="business-type-label">Business Type</InputLabel>
							<Select
								type='select'
								labelId="business-type-label"
								name='businessType'
								value={values.businessType}
								onChange={handleChange}
								onBlur={handleBlur}
							>
								<MenuItem value='Amusement/Recreation'>Amusement/Recreation</MenuItem>
								<MenuItem value='Business Service'>Business Service</MenuItem>
								<MenuItem value='College'>College</MenuItem>
							</Select>
						</FormControl>
						<span style={{color: 'red'}}>{errors.businessType && touched.businessType && errors.businessType}</span>
						<TextField
							type="text"
							name="firstName"
							label="First Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.firstName}
						/>
						<span style={{color: 'red'}}>{errors.firstName && touched.firstName && errors.firstName}</span>
						<TextField
							type="text"
							name="lastName"
							label="Last Name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastName}
						/>
						<span style={{color: 'red'}}>{errors.lastName && touched.lastName && errors.lastName}</span>
						<TextField
							type="email"
							name="email"
							label="Email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<span style={{color: 'red'}}>{errors.email && touched.email && errors.email}</span>
						<TextField
							type="text"
							name="phone"
							label="Phone Number"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone}
						/>
						<span style={{color: 'red'}}>{errors.phone && touched.phone && errors.phone}</span>
						<button type="submit" disabled={isSubmitting} style={{margin: '16px 0px'}}>
							Submit
						</button>
						<h3 style={{margin: '0'}}>Value Data</h3>
						<pre style={{color: 'blue'}}>{JSON.stringify(values, null, 2)}</pre>
						<h3 style={{margin: '0'}}>Error Data</h3>
						<pre style={{color: 'blue'}}>{JSON.stringify(errors, null, 2)}</pre>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default BecomeACustomerForm
