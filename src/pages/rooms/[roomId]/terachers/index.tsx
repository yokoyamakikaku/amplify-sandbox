import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Teachers: NextPage = () => {
  return (
    <>
      <Head>
        <title>Teachers</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Teachers</Typography>
      </Container>
    </>
  )
}

export default Teachers
