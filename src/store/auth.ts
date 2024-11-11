import { Account } from '@prisma/client';
import { atom, useAtom, useAtomValue } from 'jotai';

const accountAtom = atom<Account | null>(null);
const isAuthenticatedAtom = atom((get) => get(accountAtom) !== null);
const loadingAtom = atom(true);

export const useAuth = () => {
  const [account, setAccount] = useAtom(accountAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  const login = async (account: Account) => {
    try {
      setAccount(account);
    } catch (error) {
      console.error(error);
      setAccount(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setAccount(null);
    window.location.href = '/';
  };

  return { account, loading, login, logout, isAuthenticated };
};
