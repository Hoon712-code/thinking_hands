'use client';
import { Bell, CheckCircle, Image } from 'lucide-react';

const notifications = [
  { id: 1, type: 'attendance', title: '출석 확인', body: '오늘 오후 4:00 수업에 출석했어요 ✅', time: '방금 전', read: false },
  { id: 2, type: 'photo', title: '수업 사진 공유', body: '오늘 수채화 작품 사진이 올라왔어요 🎨', time: '1시간 전', read: false },
  { id: 3, type: 'attendance', title: '출석 확인', body: '3월 19일 수업에 출석했어요 ✅', time: '2일 전', read: true },
  { id: 4, type: 'notice', title: '학원 공지', body: '4월 1일(화) 개원합니다! 많은 관심 부탁드려요 🎉', time: '3일 전', read: true },
];

export default function NotificationsPage() {
  return (
    <div className="px-5 py-6 space-y-3">
      <h2 className="font-bold text-[#3D3D3D] text-lg mb-4">알림</h2>
      {notifications.map(n => (
        <div key={n.id} className={`card flex gap-3 items-start ${!n.read ? 'border-[#5BBD8C]/60' : ''}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            n.type === 'attendance' ? 'bg-[#5BBD8C]/20' : n.type === 'photo' ? 'bg-[#7EC8E3]/30' : 'bg-[#F0B828]/30'
          }`}>
            {n.type === 'attendance' ? <CheckCircle className="text-[#5BBD8C]" size={20} /> :
             n.type === 'photo' ? <Image className="text-[#7EC8E3]" size={20} /> :
             <Bell className="text-[#F0B828]" size={20} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <p className={`font-semibold text-sm ${!n.read ? 'text-[#3D3D3D]' : 'text-[#6B6B6B]'}`}>{n.title}</p>
              <span className="text-[#6B6B6B] text-xs flex-shrink-0">{n.time}</span>
            </div>
            <p className="text-[#6B6B6B] text-xs mt-0.5">{n.body}</p>
          </div>
          {!n.read && <div className="w-2 h-2 rounded-full bg-[#E8734A] flex-shrink-0 mt-1" />}
        </div>
      ))}
    </div>
  );
}
