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

const ContactForm = ({ id }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <FormWrap id={id}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormH1>Get in Touch</FormH1>
        <Label>First Name: </Label>
        <Input
          type='text'
          placeholder='First name'
          name='First name'
          ref={register({ required: true, maxLength: 80 })}
        />
        <Label>Last Name: </Label>

        <Input
          type='text'
          placeholder='Last name'
          name='Last name'
          ref={register({ required: true, maxLength: 100 })}
        />
        <Label>Email: </Label>

        <Input
          type='text'
          placeholder='Email'
          name='Email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <Label>Phone: </Label>

        <Input
          type='tel'
          placeholder='Mobile number'
          name='Mobile number'
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
        <Label>Message: </Label>

        <Textarea name='Message' ref={register({ required: true })} />
        <br />
        <SubmitButton type='submit' />
      </Form>
    </FormWrap>
  )
}

export default ContactForm
