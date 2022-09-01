import { Formik, Form } from 'formik'
import { FC } from 'react'
import {
  Stack,
  Typography,
  Button,
  Box,
  Snackbar
} from '@mui/material'

import { useCurrentUser } from "@/hooks/auth"
import { useCreateUserMutation, useUpdateUserMutation, useUser } from "@/hooks/users"
import { useInitialValues, useValidationSchema } from '@/components/parts/users/UserForm/hooks'
import { valuesToResult } from '@/components/parts/users/UserForm/utils'
import UserFormFields from '@/components/parts/users/UserForm/UserFormFields'
import { useTranslation } from 'react-i18next'

type ManageUserProps = {}

const ManageUser: FC<ManageUserProps> = () => {
  const { t } = useTranslation()
  const currentUser = useCurrentUser()
  const user = useUser(currentUser?.username)

  const [updateUser, {
    isSucceeded: isUpdated
  }] = useUpdateUserMutation()

  const [createUser, {
    isSucceeded: isCreated
  }] = useCreateUserMutation()

  const validationSchema = useValidationSchema()
  const initialValues = useInitialValues({
    id: currentUser?.username ?? "",
    name: user?.name ?? "",
  })
  const handleSubmit = (values: UserFormValues) => {
    if (user) {
      updateUser(valuesToResult(values))
    } else {
      createUser(valuesToResult(values))
    }
  }

  if(!currentUser?.username) return null

  return (
    <>
      <Stack direction="row" alignItems="start">
        <Box flexGrow={1}>
          <Typography variant="h4">{t("user.settings")}</Typography>
        </Box>
      </Stack>
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isValid}) => (
          <Form>
            <Stack direction="column" spacing={3}>
              <UserFormFields />
              <Stack>
                <Button disabled={!isValid} type="submit" variant="contained">{t("save")}</Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={isCreated || isUpdated}
        message={t("save.is_succeeded")} />
    </>
  )
}


export default ManageUser
