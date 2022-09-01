import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Students: NextPage = () => {
  return (
    <>
      <Head>
        <title>Students</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Students</Typography>
      </Container>
    </>
  )
}

export default Students
