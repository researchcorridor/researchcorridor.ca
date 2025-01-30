'use server';

import { NextResponse } from 'next/server';

import { createClient } from './utils/supabase/server';

export const middleware = async (req: any) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log('user', user);
  if (!user) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/dashboard/:path*'],
};
