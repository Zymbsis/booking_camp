import * as yup from 'yup';

export const bookingFormValidationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'min 3 characters')
    .max(50, 'max 50 characters')
    .required('required field'),
  email: yup.string().email('invalid email format').required('required field'),
  bookingDate: yup
    .string()
    .test(
      'no-undefined',
      'required field',
      (value) => value !== undefined && !value.includes('undefined'),
    )
    .required('required field'),
  comment: yup.string().max(300, 'max 300 characters'),
});
