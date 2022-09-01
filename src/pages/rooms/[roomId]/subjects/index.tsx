import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

const Subejcts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Subejcts</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1'>Subejcts</Typography>
      </Container>
    </>
  )
}

export default Subejcts
