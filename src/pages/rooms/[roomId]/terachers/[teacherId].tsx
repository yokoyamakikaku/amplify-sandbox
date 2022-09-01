import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Teacher: NextPage = () => {
  return (
    <>
      <Head>
        <title>Teacher</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Teacher</Typography>
      </Container>
    </>
  )
}

export default Teacher
