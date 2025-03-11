'use server';

import { NextResponse } from 'next/server';

import { createClient } from './utils/supabase/server';

export const middleware = async (req: any) => {
  const url = req.nextUrl.clone();
  if (req.method === 'GET') {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    if (req.nextUrl.pathname === '/login') {
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
};

export const config = {
  matcher: ['/dashboard/:path*', '/login/:path*'],
};
