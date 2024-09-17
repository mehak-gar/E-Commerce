// src/app/(auth)/login/page.tsx

'use client'

import { Button, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Correct import for App Directory
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

function Login() {
  const router = useRouter()
  const [data, setData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [error, setErrors] = useState<FormErrors>({})

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target
    // setData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }))
    const name = e.target.name
    const value = e.target.value
    setData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = validateForm()
    if (isValid) {
      console.log('Form Submitted:', data)
      router.push('/home')
      handleClick()
    } else {
      console.log('Form submission failed')
    }
  }

  // =====Validate form start=====
  const validateForm = (): boolean => {
    let newError: FormErrors = {}

    // ===== email validation starts here=====
    if (!data.email) {
      newError.email = 'Email is required'
    } else if (!isValidEmail(data.email)) {
      newError.email = 'Invalid email format'
    }
    // ===== email validation end here=====

    // ===== password validation starts here=====

    if (!data.password) {
      newError.password = 'Password is required'
    } else if (!isValidPassword(data.password)) {
      newError.password =
        'Password must be at least 8 characters long, include one uppercase letter, one symbol, and one digit'
    }
    // ===== password validation end here=====

    setErrors(newError)
    return Object.keys(newError).length === 0
  }

  // =====Email regex validation start here=====
  const isValidEmail = (check: string): boolean => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(check)
  }
  // =====Email regex validation start here=====

  // =====Password regex validation start here=====
  const isValidPassword = (pass: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    return passwordRegex.test(pass)
  }

  // =====Password regex validation end here=====

  // ===========Snackbar Start =================================
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <IconButton size='small' aria-label='close' color='inherit'>
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  )
  // ===========Snackbar End =================================

  return (
    <div className='grid place-items-center  h-screen '>
      <h1 className='font-bold text-4xl text-gray-700  shadow p-4'>LOGIN</h1>
      <form
        onSubmit={handleSubmit}
        className='grid inline-grid place-items-left border p-10 rounded-[20px] border-4 border-black bg-white bg-gray-100 w-[35%]'
      >
        <TextField
          label='Email'
          name='email'
          type='text'
          variant='standard'
          value={data.email}
          onChange={handleChange}
          error={Boolean(error.email)}
          helperText={error.email}
          fullWidth
          margin='normal'
          autoFocus
          className='border-orange text-orange'
        />

        <TextField
          label='Password'
          name='password'
          type='password'
          variant='standard'
          value={data.password}
          onChange={handleChange}
          error={Boolean(error.password)}
          helperText={error.password}
          fullWidth
          margin='normal'
        />

        <div className='flex justify-between place-items-center'>
          <button className='bg-orange font-bold px-4 py-1 border rounded text-white'>
            LOGIN
          </button>
          <Link href='/signup' passHref>
            <button className='bg-orange font-bold px-4 py-1 border rounded text-white'>
              SIGNUP
            </button>
          </Link>
        </div>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message='Login Successfully'
        action={action}
      />
    </div>
  )
}

export default Login
