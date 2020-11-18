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
        <Label>
          First Name:
          <Input
            type='text'
            placeholder='First Name'
            name='firstName'
            ref={register({ required: true, minLength: 2, maxLength: 80 })}
          />
          <ErrorMessage error={errors.firstName} />
        </Label>
        <Label>
          Last Name:
          <Input
            type='text'
            placeholder='Last Name'
            name='lastName'
            ref={register({ required: true, minLength: 2, maxLength: 80 })}
          />
          <ErrorMessage error={errors.lastName} />
        </Label>
        <Label>
          Email:
          <Input
            type='text'
            placeholder='Email'
            name='email'
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <ErrorMessage error={errors.email} />
        </Label>
        <Label>
          Phone:
          <Input
            type='tel'
            placeholder='Phone Number'
            name='phone'
            ref={register}
          />
        </Label>
        <Label>
          Message:
          <Textarea
            placeholder='Your Message...'
            name='Message'
            ref={register({ required: true })}
          />
        </Label>
        <br />
        <SubmitButton disabled={isSubmitting} type='submit' />
      </Form>
    </FormWrap>
  )
}

export default ContactForm
