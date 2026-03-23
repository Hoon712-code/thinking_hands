'use client';
import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const [role, setRole] = useState<'parent' | 'admin'>('parent');
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const supabase = createClient();

  async function handleGoogleSignup() {
    setGoogleLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?role=${role}`,
      },
    });
    if (error) {
      setError('구글 로그인에 실패했어요. 잠시 후 다시 시도해주세요.');
      setGoogleLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-6">
      <Link href="/" className="mb-8 text-center">
        <div className="w-20 h-20 rounded-full bg-[#5BBD8C] mx-auto mb-3 flex items-center justify-center text-4xl shadow-md">🖐️</div>
        <p className="font-bold text-[#3D3D3D]">생각하는 손 미술학원</p>
        <p className="text-[#6B6B6B] text-sm">아이의 생각이 그림이 되는 공간</p>
      </Link>

      <div className="card w-full max-w-sm">
        <h2 className="font-bold text-[#3D3D3D] text-center text-lg mb-2">회원가입</h2>
        <p className="text-[#6B6B6B] text-sm text-center mb-6">구글 계정으로 간편하게 시작하세요</p>

        {/* 역할 선택 */}
        <p className="text-sm text-[#6B6B6B] mb-2">저는...</p>
        <div className="flex rounded-2xl overflow-hidden border border-[#7BC8A4]/40 mb-6">
          {(['parent', 'admin'] as const).map((r) => (
            <button key={r} onClick={() => setRole(r)}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                role === r ? 'bg-[#5BBD8C] text-white' : 'text-[#6B6B6B]'
              }`}>
              {r === 'parent' ? '👨‍👩‍👧 학부모예요' : '👩‍🎨 원장·선생님이에요'}
            </button>
          ))}
        </div>

        {error && <p className="text-[#E85050] text-sm text-center mb-4">{error}</p>}

        {/* 구글 가입 버튼 */}
        <button onClick={handleGoogleSignup} disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-white border-2 border-[#5BBD8C] hover:bg-[#5BBD8C]/5 transition-colors font-semibold text-[#3D3D3D]">
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {googleLoading ? '연결 중...' : 'Google로 시작하기'}
        </button>

        <p className="text-center text-xs text-[#6B6B6B] mt-4">
          가입하면 이미 계정이 있는 경우 자동으로 로그인돼요
        </p>

        <div className="border-t border-gray-100 mt-4 pt-4">
          <p className="text-center text-sm text-[#6B6B6B]">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="text-[#5BBD8C] font-semibold">로그인</Link>
          </p>
        </div>
      </div>

      <Link href="/" className="mt-6 text-[#6B6B6B] text-sm">← 홈으로</Link>
    </div>
  );
}
