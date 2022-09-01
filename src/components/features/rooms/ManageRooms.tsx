import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography, Stack, Box } from '@mui/material'

import RoomList from "@/components/parts/rooms/RoomList";
import { useRooms } from "@/hooks/rooms";
import Link from "next/link";

type ManageRoomsProps = {}

const ManageRooms :FC<ManageRoomsProps> = () => {
  const { t } = useTranslation()
  const rooms = useRooms()
  return (
    <>
      <Stack direction="row" alignItems="start">
        <Box flexGrow={1}>
          <Typography variant="h4">{t("room.list")}</Typography>
        </Box>
        <Link href="/rooms/new">
          <Button variant="contained">{t("room.create")}</Button>
        </Link>
      </Stack>
      <RoomList rooms={rooms} />
    </>
  )
}

export default ManageRooms
