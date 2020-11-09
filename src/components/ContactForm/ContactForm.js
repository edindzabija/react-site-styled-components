import styled from 'styled-components'

export const FormWrap = styled.div`
  background: #0e101c;
  padding: 60px 0;
`
export const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    width: 90%;
  }
`

export const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
`

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const Textarea = styled.textarea.attrs({
  rows: '6',
  cols: '50',
})`
  resize: none;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const FormH1 = styled.h1`
  font-weight: 100;
  color: white;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(79, 98, 148);
`

export const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: 'Submit',
})`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;

  &:active {
    background-color: #189fb5;
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
  &:hover {
    background-color: #26d0eb;
    transition: 0.3s all;
  }
`
