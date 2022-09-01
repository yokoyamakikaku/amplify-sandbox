import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const NewTeacher: NextPage = () => {
  return (
    <>
      <Head>
        <title>NewTeacher</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>NewTeacher</Typography>
      </Container>
    </>
  )
}

export default NewTeacher
