'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { registrationFormSchema } from '@/shared/schemas/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const form = useForm({
    resolver: zodResolver(registrationFormSchema),
  });
  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="mb-6 text-center text-2xl">Authorization</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="fa@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full text-md cursor-pointer active:bg-gray-400"
          >
            Login
          </Button>
        </form>
      </Form>
      <p className="mt-3">
        Don&apos;t have a account?{' '}
        <Link href="/registration" className="text-blue-400 underline">
          Sign Up!
        </Link>
      </p>
    </>
  );
};
