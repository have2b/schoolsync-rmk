'use client';

import { CircularSpinnerLoader } from '@/components';
import { useAuth } from '@/store/auth';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const { account, loading } = useAuth();

  useEffect(() => {
    if (!loading && account) {
      async function gotoDashboard() {
        const locale = (params.locale as string) || 'vi';
        router.push(`/${locale}/${account?.role.toLowerCase()}`);
      }
      gotoDashboard();
    }
  }, [loading, account, params, router]);

  if (loading || !account) {
    return (
      <div className="h-screen w-full text-center">
        <CircularSpinnerLoader />
      </div>
    );
  }
}
