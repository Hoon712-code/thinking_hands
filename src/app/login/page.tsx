'use client';
import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'parent' | 'admin'>('parent');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError('이메일 또는 비밀번호를 확인해주세요.');
    } else {
      router.push(role === 'admin' ? '/admin' : '/parent');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-6">
      <Link href="/" className="mb-8 text-center">
        <div className="w-20 h-20 rounded-full bg-[#5BBD8C] mx-auto mb-3 flex items-center justify-center text-4xl shadow-md">🖐️</div>
        <p className="font-bold text-[#3D3D3D]">생각하는 손 미술학원</p>
        <p className="text-[#6B6B6B] text-sm">아이의 생각이 그림이 되는 공간</p>
      </Link>

      <div className="card w-full max-w-sm">
        {/* 역할 선택 */}
        <div className="flex rounded-2xl overflow-hidden border border-[#7BC8A4]/40 mb-6">
          {(['parent', 'admin'] as const).map((r) => (
            <button key={r} onClick={() => setRole(r)}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                role === r ? 'bg-[#5BBD8C] text-white' : 'text-[#6B6B6B]'
              }`}>
              {r === 'parent' ? '👨‍👩‍👧 학부모' : '👩‍🎨 원장·선생님'}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-[#6B6B6B] mb-1 block">이메일</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full border border-[#7BC8A4]/40 rounded-2xl px-4 py-3 text-[#3D3D3D] bg-white focus:outline-none focus:border-[#5BBD8C]"
              placeholder="이메일 입력" />
          </div>
          <div>
            <label className="text-sm text-[#6B6B6B] mb-1 block">비밀번호</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full border border-[#7BC8A4]/40 rounded-2xl px-4 py-3 text-[#3D3D3D] bg-white focus:outline-none focus:border-[#5BBD8C]"
              placeholder="비밀번호 입력" />
          </div>
          {error && <p className="text-[#E85050] text-sm text-center">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <p className="text-center text-sm text-[#6B6B6B] mt-4">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="text-[#5BBD8C] font-semibold">회원가입</Link>
        </p>
      </div>

      <Link href="/" className="mt-6 text-[#6B6B6B] text-sm">← 홈으로</Link>
    </div>
  );
}
