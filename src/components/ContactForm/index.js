import React from 'react'
import { useForm } from 'react-hook-form'

import {
  FormWrap,
  Form,
  Label,
  Input,
  Textarea,
  SubmitButton,
  FormH1,
} from './ContactForm'
import ErrorMessage from './ErrorMessage'

const ContactForm = ({ id }) => {
  // const { register, handleSubmit, errors } = useForm()
  // const onSubmit = (data) => console.log(data)
  // console.log(errors)

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <FormWrap id={id}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormH1>Get in Touch</FormH1>
        <Label>First Name: </Label>
        <Input
          type='text'
          placeholder='First name'
          name='firstName'
          ref={register({ required: true, minLength: 2, maxLength: 80 })}
        />
        <ErrorMessage error={errors.firstName} />

        <Label>Last Name: </Label>
        <Input
          type='text'
          placeholder='Last name'
          name='lastName'
          ref={register({ required: true, minLength: 2, maxLength: 80 })}
        />
        <ErrorMessage error={errors.lastName} />

        <Label>Email: </Label>
        <Input
          type='text'
          placeholder='Email'
          name='email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <ErrorMessage error={errors.email} />

        <Label>Phone:</Label>
        <Input
          type='tel'
          placeholder='Phone Number'
          name='phone'
          ref={register}
        />

        <Label>Message: </Label>
        <Textarea name='Message' ref={register({ required: true })} />
        <br />
        <SubmitButton disabled={isSubmitting} type='submit' />
      </Form>
    </FormWrap>
  )
}

export default ContactForm
