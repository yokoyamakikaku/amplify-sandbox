import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Student: NextPage = () => {
  return (
    <>
      <Head>
        <title>Student</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Student</Typography>
      </Container>
    </>
  )
}

export default Student
