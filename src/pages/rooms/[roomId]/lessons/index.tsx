import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Lessons: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lessons</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Lessons</Typography>
      </Container>
    </>
  )
}

export default Lessons
