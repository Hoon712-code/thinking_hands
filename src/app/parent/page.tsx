'use client';
import { Bell, MapPin, Phone, CheckCircle } from 'lucide-react';

export default function ParentHome() {
  return (
    <div className="px-5 py-6 space-y-5">
      {/* 오픈 이벤트 배너 */}
      <div className="bg-[#F0B828] rounded-3xl p-4 text-center">
        <p className="font-bold text-[#3D3D3D] text-sm">🎉 4월 오픈 기념 — 1회 무료체험 · 20% OFF</p>
      </div>

      {/* 오늘 출결 카드 */}
      <div className="card">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="text-[#5BBD8C]" size={20} />
          <h2 className="font-bold text-[#3D3D3D]">오늘 출결</h2>
        </div>
        <div className="flex items-center gap-3 p-3 bg-[#5BBD8C]/10 rounded-2xl">
          <div className="w-10 h-10 rounded-full bg-[#5BBD8C] flex items-center justify-center text-white font-bold">✓</div>
          <div>
            <p className="font-semibold text-[#3D3D3D] text-sm">오늘 수업 출석 완료</p>
            <p className="text-[#6B6B6B] text-xs">오후 4:00 입실</p>
          </div>
        </div>
      </div>

      {/* 최근 사진 */}
      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-[#3D3D3D]">📸 최근 수업 사진</h2>
          <a href="/parent/gallery" className="text-[#5BBD8C] text-sm font-medium">전체보기</a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-square rounded-2xl bg-[#5BBD8C]/20 flex items-center justify-center text-3xl">
              🎨
            </div>
          ))}
        </div>
      </div>

      {/* 알림 */}
      <div className="card">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="text-[#E8734A]" size={20} />
          <h2 className="font-bold text-[#3D3D3D]">최근 알림</h2>
        </div>
        <div className="space-y-2">
          {[
            { title: '출석 확인', body: '오늘 수업에 출석했어요 ✅', time: '방금 전' },
            { title: '수업 사진 공유', body: '오늘 수채화 작품이 올라왔어요 🎨', time: '1시간 전' },
          ].map((n, i) => (
            <div key={i} className="p-3 bg-[#F5F0E8] rounded-2xl">
              <div className="flex justify-between items-start">
                <p className="font-semibold text-[#3D3D3D] text-sm">{n.title}</p>
                <span className="text-[#6B6B6B] text-xs">{n.time}</span>
              </div>
              <p className="text-[#6B6B6B] text-xs mt-0.5">{n.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 학원 정보 */}
      <div className="card">
        <h2 className="font-bold text-[#3D3D3D] mb-3">📍 학원 정보</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="text-[#5BBD8C]" size={16} />
            <span className="text-[#3D3D3D]">에스파이브시티 704호</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="text-[#5BBD8C]" size={16} />
            <a href="tel:010-8212-6889" className="text-[#E8734A] font-semibold">010-8212-6889</a>
          </div>
        </div>
      </div>
    </div>
  );
}
