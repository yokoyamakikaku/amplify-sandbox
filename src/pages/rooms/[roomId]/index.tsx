import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Room: NextPage = () => {
  return (
    <>
      <Head>
        <title>Room</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Room</Typography>
      </Container>
    </>
  )
}

export default Room
