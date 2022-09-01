import { createContext, FC, PropsWithChildren, useReducer, Dispatch, useEffect, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// HACK:
import { CognitoUserAmplify } from '@aws-amplify/ui-react/node_modules/@aws-amplify/ui';

const AuthContext = createContext<{
  user?: CognitoUserAmplify,
  signOut?: Function
}>({
})

export type AuthProviderProps = PropsWithChildren & { }

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return (
    <Authenticator>
      {({ user, signOut }) => (
        <AuthContext.Provider value={{ user, signOut }}>
          {children}
        </AuthContext.Provider>
      )}

    </Authenticator>
  )
}

export function useCurrentUser() {
  const { user } = useContext(AuthContext)

  return user
}

export default AuthProvider
