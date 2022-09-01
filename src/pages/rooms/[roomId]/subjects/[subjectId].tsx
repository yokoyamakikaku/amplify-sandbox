import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Subejct: NextPage = () => {
  return (
    <>
      <Head>
        <title>Subejct</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Subejct</Typography>
      </Container>
    </>
  )
}

export default Subejct
