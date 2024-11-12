'use server';

import { cookies } from 'next/headers';

export async function deleteSession() {
  return (await cookies()).delete('AUTH_SESSION_TOKEN');
}
