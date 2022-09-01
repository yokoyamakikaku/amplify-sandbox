import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import Breadcrumbs from '@/components/parts/Breadcrumbs'
import PageContainer from '@/components/parts/PageContainer'
import CreateRoom from '@/components/features/rooms/CreateRoom'

const NewRoom: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("room.creating")}</title>
      </Head>
      <PageContainer>
        <Breadcrumbs items={[{
          label: t("home"),
          href: '/'
        }, {
          label: t("room.list"),
          href: '/rooms'
        }, {
          label: t("room.creating"),
        }]} />
        <CreateRoom />
      </PageContainer>
    </>
  )
}

export default NewRoom
