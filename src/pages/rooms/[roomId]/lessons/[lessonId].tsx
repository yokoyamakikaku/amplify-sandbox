import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Lesson: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lesson</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Lesson</Typography>
      </Container>
    </>
  )
}

export default Lesson
