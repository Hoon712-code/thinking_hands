'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Image, Bell } from 'lucide-react';

const navItems = [
  { href: '/parent', label: '홈', icon: Home },
  { href: '/parent/attendance', label: '출결', icon: Calendar },
  { href: '/parent/gallery', label: '갤러리', icon: Image },
  { href: '/parent/notifications', label: '알림', icon: Bell },
];

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#F5F0E8] pb-20">
      <header className="bg-[#5BBD8C] px-6 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-xl">🖐️</div>
        <span className="font-bold text-white">생각하는 손</span>
      </header>
      <main>{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#7BC8A4]/30 flex">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} className={`flex-1 flex flex-col items-center py-3 gap-1 transition-colors ${active ? 'text-[#5BBD8C]' : 'text-[#6B6B6B]'}`}>
              <Icon size={22} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
