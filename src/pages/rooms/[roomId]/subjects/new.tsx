import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const NewSubject: NextPage = () => {
  return (
    <>
      <Head>
        <title>NewSubject</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>NewSubject</Typography>
      </Container>
    </>
  )
}

export default NewSubject
