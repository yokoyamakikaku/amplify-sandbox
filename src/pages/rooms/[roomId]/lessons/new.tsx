import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const NewLesson: NextPage = () => {
  return (
    <>
      <Head>
        <title>NewLesson</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>NewLesson</Typography>
      </Container>
    </>
  )
}

export default NewLesson
