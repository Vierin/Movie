import { validEmail } from '@/shared/regex'
import Field from '@/ui/form-elements/Field'
import { FC } from 'react'
import { FormState, UseFormRegister, FieldError } from 'react-hook-form'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="Email"
				error={errors.email as FieldError}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password as FieldError}
			/>
		</>
	)
}

export default AuthFields
