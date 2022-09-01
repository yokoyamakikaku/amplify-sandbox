import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Sheets: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sheets</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Sheets</Typography>
      </Container>
    </>
  )
}

export default Sheets
