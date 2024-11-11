'use client';
import { CircularSpinnerLoader } from '@/components';
import { useAuth } from '@/store/auth';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const { account, loading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!loading && isAuthenticated && account) {
      const locale = (params.locale as string) || 'vi';
      router.push(`/${locale}/${account.role.toLowerCase()}`);
    }
  }, [loading, isAuthenticated, account, params, router]);

  if (loading) {
    return (
      <div className="h-screen w-full text-center">
        <CircularSpinnerLoader />
      </div>
    );
  }

  return null;
}
