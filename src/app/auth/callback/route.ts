import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const role = searchParams.get('role') || 'parent';

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // 프로필이 없으면 생성
      const { data: profile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', data.user.id)
        .single();

      if (!profile) {
        await supabase.from('profiles').insert({
          id: data.user.id,
          role: role,
          name: data.user.user_metadata?.full_name || '',
        });
      }

      return NextResponse.redirect(`${origin}/${role === 'admin' ? 'admin' : 'parent'}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
