import { useStorageState } from '@/hooks/useStorageState';
import { createContext, useContext, type PropsWithChildren } from 'react';

export const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session: any;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const context = useContext(AuthContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!context) {
      throw new Error('usSession Must be wrapped in a <AuthProvider/>');
    }
  }

  return context;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  function signIn() {}
  function signOut() {}
  1;
  return (
    <AuthContext.Provider value={{ session, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
