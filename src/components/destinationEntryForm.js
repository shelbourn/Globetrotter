import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	destinationName: Yup.string().required('Required'),
	destinationPrice: Yup.number().required('Required'),
	destinationDescription: Yup.string().max(240).required('Required'),
})

export default function DestinationEntryForm() {
	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			destinationName: '',
			destinationPrice: null,
			destinationDescription: '',
		},
		validationSchema,
		onSubmit(values) {
			console.log(values)
		},
	})
}

return (
	<form onSubmit={handleSubmit}>
		<input
			destinationName="Destination Name"
			onChange={handleChange}
			values={values.destinationName}
		/>
		{errors.destinationName}
		<input
			destinationPrice="Destination Price"
			onChange={handleChange}
			values={values.destinationPrice}
		/>
		{errors.destinationPrice}
	</form>
)
