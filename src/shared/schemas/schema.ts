import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(254, 'Email is too long')
    .email('Email is incorrect'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password minimum 8 character')
    .max(64, 'Password is too long')
    .regex(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .regex(/\d/, 'Password should contain at least one digit')
    .regex(/[\W_]/, 'Password should contain at least one special character'),
});

export const registrationFormSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .max(200, 'Username is too long'),
  email: z
    .string()
    .min(1, 'Email is required')
    .max(254, 'Email is too long')
    .email('Email is incorrect'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password minimum 8 character')
    .max(64, 'Password is too long')
    .regex(/[A-Z]/, 'Password should contain at least one uppercase letter')
    .regex(/\d/, 'Password should contain at least one digit')
    .regex(/[\W_]/, 'Password should contain at least one special character'),
  gender: z.enum(['Man', 'Woman']),
  age: z.number().min(1, 'Age is required').max(100, 'Age is too old'),
});
