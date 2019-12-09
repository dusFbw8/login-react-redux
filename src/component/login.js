
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const submit = (e)=>{

}

export default ({pass})=>{
  return (
    <Form onSubmit={submit}>
      <Form.Control type="password" value={pass}/>
      <Button type="submit">Login</Button>
    </Form>
  )
}
