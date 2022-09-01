import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import {
  Button,
  Stack,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions
} from '@mui/material'
import { useCurrentUser } from '@/hooks/auth'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
  const user = useCurrentUser()
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('home')}</title>
      </Head>
      <Container sx={{ py: 4 }}>
        <Stack direction="column" spacing={4}>
          <Typography variant='h4' gutterBottom>
            {t('home.welcome', { name: user?.username ?? "あなた" })}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography>{t("room")}</Typography>
                </CardContent>
                <CardActions>
                  <Link href="/rooms">
                    <Button>{t("open")}</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography>{t("user.settings")}</Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/users/${user?.username}`}>
                    <Button>{t("open")}</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  )
}

export default Home
