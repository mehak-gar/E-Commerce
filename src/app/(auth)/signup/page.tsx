'use client' // Enable client-side rendering in Next.js

import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // Import useRouter from next/navigation

interface FormData {
  firstname: string
  lastname: string
  email: string
  password: string
  C_password: string
}

interface FormErrors {
  firstname?: string
  lastname?: string
  email?: string
  password?: string
  C_password?: string
}

function SignUp() {
  const router = useRouter() // Initialize useRouter
  const [formdata, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    C_password: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateSignUpForm()) {
      console.log('Form submitted successfully:', formdata)
      router.push('/') // Navigate to /home if form validation is successful
    } else {
      console.log('Form validation failed')
    }
  }

  // Validate input fields
  const validateSignUpForm = (): boolean => {
    let newErrors: FormErrors = {}

    if (!formdata.firstname) {
      newErrors.firstname = 'First Name is required'
    } else if (formdata.firstname.length <= 3) {
      newErrors.firstname = 'Name must be at least 3 characters long'
    }

    if (!formdata.lastname) {
      newErrors.lastname = 'Last Name is required'
    }

    if (!formdata.email) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formdata.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formdata.password) {
      newErrors.password = 'Password is required'
    } else if (!isValidPassword(formdata.password)) {
      newErrors.password =
        'Password must be at least 8 characters long, include one uppercase letter, one symbol, and one digit'
    }

    if (!formdata.C_password) {
      newErrors.C_password = 'Confirm Password is required'
    } else if (formdata.C_password !== formdata.password) {
      newErrors.C_password = 'Passwords must match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const isValidPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
    return passwordRegex.test(password)
  }

  return (
    <div className='grid place-items-center h-screen '>
      <form
        onSubmit={handleSignUpSubmit}
        className='grid grid-cols-1 gap-6 p-8 shadow-md rounded-lg max-w-md w-[35%] bg-transparent'
      >
        <h1 className='font-bold text-4xl text-gray-700 mb-6 text-center'>
          Sign Up
        </h1>
        <TextField
          label='First Name'
          name='firstname'
          value={formdata.firstname}
          onChange={handleChange}
          error={Boolean(errors.firstname)}
          helperText={errors.firstname}
          fullWidth
          variant='standard'
        />

        <TextField
          label='Last Name'
          name='lastname'
          value={formdata.lastname}
          onChange={handleChange}
          error={Boolean(errors.lastname)}
          helperText={errors.lastname}
          fullWidth
          variant='standard'
        />

        <TextField
          label='Email'
          name='email'
          type='email'
          value={formdata.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          variant='standard'
        />

        <TextField
          label='Password'
          name='password'
          type='password'
          value={formdata.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          fullWidth
          variant='standard'
        />

        <TextField
          label='Confirm Password'
          name='C_password'
          type='password'
          value={formdata.C_password}
          onChange={handleChange}
          error={Boolean(errors.C_password)}
          helperText={errors.C_password}
          fullWidth
          variant='standard'
        />

        <Button
          type='submit'
          variant='contained'
          className='bg-orange font-bold'
          fullWidth
        >
          Submit
        </Button>

        <div className='text-center mt-4'>
          <span className='text-gray-600'>Already have an account? </span>
          <Link href='/login' passHref>
            <Button variant='text' className='text-blue-900 hover:text-orange '>
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
