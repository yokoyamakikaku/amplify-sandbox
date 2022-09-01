import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const NewSheet: NextPage = () => {
  return (
    <>
      <Head>
        <title>NewSheet</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>NewSheet</Typography>
      </Container>
    </>
  )
}

export default NewSheet
