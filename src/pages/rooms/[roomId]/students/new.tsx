import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const NewStudent: NextPage = () => {
  return (
    <>
      <Head>
        <title>NewStudent</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>NewStudent</Typography>
      </Container>
    </>
  )
}

export default NewStudent
