import type { NextPage } from 'next'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import Redirect from '../components/utilities/Redirect'

const Login: NextPage = () => {
  return (
    <Authenticator>
      {() => <Redirect to="/" />}
    </Authenticator>
  )
}

export default Login
