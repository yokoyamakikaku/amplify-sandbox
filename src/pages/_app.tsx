import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import { CssBaseline } from '@mui/material';

import '@/i18n'
import AuthProvider from '@/hooks/auth'

import ErrorBoundary from '@/components/utilities/ErrorBoundary'

import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ErrorBoundary>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
