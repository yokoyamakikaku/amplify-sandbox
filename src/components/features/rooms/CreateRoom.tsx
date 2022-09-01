import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography, Stack, Box, Snackbar } from '@mui/material'
import { Formik, Form } from 'formik'

import { useCreateRoomMutation } from "@/hooks/rooms";
import RoomFormFields from "@/components/parts/rooms/RoomForm/RoomFormFields";
import { useInitialValues, useValidationSchema } from "@/components/parts/rooms/RoomForm/hooks";
import { valuesToResult } from "@/components/parts/rooms/RoomForm/utils";

type CreateRoomProps = {}

const CreateRoom :FC<CreateRoomProps> = () => {
  const { t } = useTranslation()

  const [createRoom, {
    isSucceeded,
    error
  }] = useCreateRoomMutation()

  const validationSchema = useValidationSchema()
  const initialValues = useInitialValues()
  const handleSubmit = async (values: RoomFormValues) => {
    await createRoom(valuesToResult(values))
  }

  return (
    <>
      <Stack direction="row" alignItems="start">
        <Box flexGrow={1}>
          <Typography variant="h4">{t("room.creating")}</Typography>
        </Box>
      </Stack>
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isValid}) => (
          <Form>
            <Stack direction="column" spacing={3}>
              <RoomFormFields />
              <Stack>
                <Button disabled={!isValid} type="submit" variant="contained">{t("room.create")}</Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={isSucceeded} autoHideDuration={6000}
        message={t("room.create.is_succeeded")} />
      {error?.errors?.map((error: { message: string }, index: numebr) => (
        <Snackbar key={index} open autoHideDuration={6000} message={error?.message} />
      ))}
    </>
  )
}

export default CreateRoom
