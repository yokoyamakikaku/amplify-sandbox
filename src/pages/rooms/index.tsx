import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import Breadcrumbs from '@/components/parts/Breadcrumbs'
import ManageRooms from '@/components/features/rooms/ManageRooms'
import PageContainer from '@/components/parts/PageContainer'

const Rooms: NextPage = () => {
  const { t } = useTranslation()
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
          label: t("room.list")
        }]} />
        <ManageRooms />
      </PageContainer>
    </>
  )
}

export default Rooms
