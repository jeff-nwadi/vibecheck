import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabae';
import { Session } from '@supabase/supabase-js';

type AuthContextType = {
  session: Session | null;
  isInitialized: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  isInitialized: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsInitialized(true);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
}
