import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import * as yup from 'yup'
import {
  Container,
  Button,
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { useEffect, useState, useMemo } from 'react'
import {
  Hub,
  Auth,
} from 'aws-amplify'
import {
  CognitoUser,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js'
import { HubCapsule  } from '@aws-amplify/core/lib-esm/Hub'
import { Form, Formik } from 'formik'

import TextField from '../components/parts/TextField'

const Home: NextPage = () => {
  const [user, setUser] = useState<null | {
    name: string
    email: string
  }>(null)
  const [error, setError] = useState<null | string>(null)

  console.log({ user })

  useEffect(() => {

    async function fetchCurrentUser (): Promise<void> {
      try {
        const cognitoUser: CognitoUser = await Auth.currentAuthenticatedUser()
        cognitoUser.getUserAttributes((error, attributes) => {
          const data = {
            name: cognitoUser.getUsername(),
            email: ''
          }
          if (typeof attributes === "undefined") return
          for (let attribute of attributes) {
            switch (attribute.getName()) {
              case 'email': {
                data.email = attribute.getValue()
              }
              default:
                continue
            }
          }
          setUser(data)
        })
      } catch (error) {
        setUser(null)
      }
    }

    async function listener ({ payload }: HubCapsule)  {
      console.log(payload.event)
      switch (payload.event) {
        case 'signOut':
        case 'signIn': {
          fetchCurrentUser()
          return
        }
        default:
          console.log({ payload })
      }
    }

    fetchCurrentUser()

    Hub.listen('auth', listener)
    return function cleanup () {
      Hub.remove("auth", listener)
    }
  }, [])

  const validationSchema = useMemo(() => yup.object().shape({
    email: yup.string().email().required().default(""),
    password: yup.string().required().default("")
  }), [])

  const initialValues = useMemo(() => validationSchema.cast({

  }, { stripUnknown: true }), [validationSchema])

  const handleLogin = async (values: { email: string, password: string }) : Promise<void> => {
    try {
      const { email, password } = values
      await Auth.signIn(email, password)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const handleLogout = async () => {
    Auth.signOut()
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Box sx={{ py: 4 }}>
          <Typography variant='h1'>Amplify Sandbox</Typography>
        </Box>
        <Box>
          <Typography variant='h2' gutterBottom>Authentication</Typography>
          {user ? (
            <>
              <Stack direction="column" spacing={2}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Name"
                      secondary={user.name ?? 'No name'}  />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={user.email ?? 'No name'}  />
                  </ListItem>
                </List>
                <Button onClick={handleLogout}>Logout</Button>
              </Stack>
            </>
          ) : (
            <>
              <Stack direction="row" spacing={2}>
                <Link href="/auth">
                  <Button variant='contained'>authorize</Button>
                </Link>
              </Stack>
              <Box sx={{py:4}}>
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={handleLogin}>
                  <Form>
                    <Stack spacing={2}>
                      <TextField
                        name='email' size='small' label="Email" type="email"
                        autoComplete='username' />
                      <TextField
                        name="password" size='small' label="password" type="password"
                        autoComplete='current-password' />
                      <Button type="submit" variant='contained'>Login</Button>
                    </Stack>
                  </Form>
                </Formik>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Home
