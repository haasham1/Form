import * as yup from 'yup';

export const registrationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .default(''),

  email: yup
    .string()
    .trim()
    .email('Enter a valid email address')
    .required('Email is required')
    .default(''),

  phone: yup
    .string()
    .trim()
    .matches(/^\+?[0-9\s\-().]{7,20}$/, 'Enter a valid phone number')
    .required('Phone number is required')
    .default(''),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .default(''),
}).required();

export type RegistrationFormData = yup.InferType<typeof registrationSchema>;
