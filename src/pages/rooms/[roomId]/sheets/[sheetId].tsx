import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Sheet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sheet</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Sheet</Typography>
      </Container>
    </>
  )
}

export default Sheet
