
import React            from 'react'
import { connect }      from 'react-redux'
import { Form, Button } from 'react-bootstrap'

const Login = ({loginInProgress,pass,submit,change})=>{
  if ( loginInProgress ){
    return ( <h2>Logging in...</h2> )
  } else {
    return (
      <Form onSubmit={submit}>
        <Form.Control name="pass" type="password" value={pass} onChange={change}/>
        <Button type="submit">Login</Button>
      </Form>
    )
  }
}

export default connect(
  s=>{return s},
  (dispatch)=>{
    return {
      change: (e)=> {
        dispatch({
          type:'input',
          name:e.target.name,
          value:e.target.value
        })
      },
      submit: (e)=>{
        e.preventDefault();
        dispatch({type:'doLogin'});
      }
    };
  }
)(Login)
