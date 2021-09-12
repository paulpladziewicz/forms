import { Formik } from 'formik'
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core'
import * as yup from 'yup'

const phoneRegExp = new RegExp('^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')

const validationSchema = yup.object({
	businessName: yup
		.string()
		.required('Se requiere el nombre de la empresa.')
		.max(30, 'El nombre de la empresa no puede tener más de 10 caracteres.'),
	businessType: yup
		.string()
		.required('Seleccione un tipo de empresa.'),
	firstName: yup
		.string()
		.required('Se requiere el primer nombre.'),
	lastName: yup
		.string()
		.required('Se requiere el apellido.'),
	email: yup
		.string()
		.required('Por favor ingrese su dirección de correo electrónico válida.')
		.email(),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Por favor ingrese un número de teléfono válido.')
		.required('Por favor ingrese un número de teléfono válido.')
});

const BecomeACustomerFormES = () => {
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
							label="Nombre de la organización comercial o sin fines de lucro"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.businessName}
						/>
						<span style={{color: 'red'}}>{errors.businessName && touched.businessName && errors.businessName}</span>
						<FormControl>
							<InputLabel id="business-type-label">Tipo de negocio</InputLabel>
							<Select
								type='select'
								labelId="business-type-label"
								name='businessType'
								value={values.businessType}
								onChange={handleChange}
								onBlur={handleBlur}
							>
								<MenuItem value='Amusement/Recreation'>Diversión/Recreación</MenuItem>
								<MenuItem value='Business Service'>Servicio empresarial</MenuItem>
								<MenuItem value='College'>Universidad</MenuItem>
							</Select>
						</FormControl>
						<span style={{color: 'red'}}>{errors.businessType && touched.businessType && errors.businessType}</span>
						<TextField
							type="text"
							name="firstName"
							label="Primer nombre"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.firstName}
						/>
						<span style={{color: 'red'}}>{errors.firstName && touched.firstName && errors.firstName}</span>
						<TextField
							type="text"
							name="lastName"
							label="Apellido"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastName}
						/>
						<span style={{color: 'red'}}>{errors.lastName && touched.lastName && errors.lastName}</span>
						<TextField
							type="email"
							name="email"
							label="Correo electrónico"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<span style={{color: 'red'}}>{errors.email && touched.email && errors.email}</span>
						<TextField
							type="text"
							name="phone"
							label="Número de teléfono"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone}
						/>
						<span style={{color: 'red'}}>{errors.phone && touched.phone && errors.phone}</span>
						<button type="submit" disabled={isSubmitting} style={{margin: '16px 0px'}}>
							Enviar
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

export default BecomeACustomerFormES
