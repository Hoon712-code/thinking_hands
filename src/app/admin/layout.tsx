'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, Camera, Users } from 'lucide-react';

const navItems = [
  { href: '/admin', label: '대시보드', icon: LayoutDashboard },
  { href: '/admin/attendance', label: '출결', icon: Calendar },
  { href: '/admin/photos', label: '사진', icon: Camera },
  { href: '/admin/students', label: '학생', icon: Users },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#F5F0E8] pb-20">
      <header className="bg-gradient-to-r from-[#5BBD8C] to-[#7BC8A4] px-6 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-xl">👩‍🎨</div>
        <div>
          <span className="font-bold text-white">생각하는 손</span>
          <span className="text-white/80 text-xs ml-2">관리자</span>
        </div>
      </header>
      <main>{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#7BC8A4]/30 flex">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} className={`flex-1 flex flex-col items-center py-3 gap-1 ${active ? 'text-[#5BBD8C]' : 'text-[#6B6B6B]'}`}>
              <Icon size={22} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
