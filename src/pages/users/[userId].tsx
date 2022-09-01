import type { NextPage } from 'next'
import { useMemo } from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import Breadcrumbs from '@/components/parts/Breadcrumbs'
import ManageUser from '@/components/features/users/ManageUser'
import PageContainer from '@/components/parts/PageContainer'
import { useRouter } from 'next/router'

const User: NextPage = () => {
  const { t } = useTranslation()
  const { query:{ userId }} = useRouter()

  const pageLabel = useMemo<string>(() => {
    if (Array.isArray(userId)) return userId[0]
    if (typeof userId === "string") return userId
    return ""
  }, [userId])

  return (
    <>
      <Head>
        <title>{t("room.list")}</title>
      </Head>
      <PageContainer>
        <Breadcrumbs items={[{
          label: t("home"),
          href: '/'
        }, {
          label: pageLabel
        }]} />
        <ManageUser />
      </PageContainer>
    </>
  )
}

export default User
