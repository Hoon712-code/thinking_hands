'use client';
import Link from 'next/link';
import { Phone, MapPin, Star, CheckCircle } from 'lucide-react';

const grades = [
  { name: '유치부', color: '#FFB6C1', emoji: '🎨', desc: '창의적 표현의 첫 걸음' },
  { name: '초등부', color: '#7EC8E3', emoji: '✏️', desc: '사고력과 표현력을 키워요' },
  { name: '중등부', color: '#98D4A8', emoji: '🖌️', desc: '예중·예고 입시 준비' },
  { name: '성인취미', color: '#F5C842', emoji: '🌸', desc: '나만의 힐링 미술 시간' },
];

const features = [
  '두 원장님의 1:1 맞춤 케어',
  '고려대 교육대학원 미술교육 전공',
  '인천 예술영재교육원 강사 경력',
  '유치부~성인까지 전 연령 커버',
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* 오픈 이벤트 배너 */}
      <div className="bg-[#F0B828] py-3 text-center">
        <p className="font-bold text-[#3D3D3D] text-sm">
          🎉 4월 오픈 기념 이벤트 — 1회 무료 체험 · 형제 등록 1만원 할인 · 20% OFF
        </p>
      </div>

      {/* 헤더 */}
      <header className="bg-white border-b border-[#7BC8A4]/30 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#5BBD8C] flex items-center justify-center text-2xl">🖌️</div>
          <div>
            <h1 className="font-bold text-[#3D3D3D] text-lg leading-tight">생각하는 손</h1>
            <p className="text-[#6B6B6B] text-xs">미술학원</p>
          </div>
        </div>
        <Link href="/login" className="btn-primary text-sm py-2 px-4">로그인</Link>
      </header>

      {/* 히어로 섹션 */}
      <section className="px-6 py-16 text-center">
        <div className="w-28 h-28 rounded-full bg-[#5BBD8C] mx-auto mb-6 flex items-center justify-center text-6xl shadow-lg">
          🖐️
        </div>
        <h2 className="text-3xl font-bold text-[#3D3D3D] mb-3 leading-tight">
          아이의 <span className="text-[#5BBD8C]">생각</span>이<br />
          <span className="text-[#E8734A]">그림</span>이 되는 공간
        </h2>
        <p className="text-[#6B6B6B] mb-8">인천 송도 에스파이브시티 704호</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="tel:010-8212-6889" className="btn-accent">📞 무료 체험 신청</a>
          <Link href="/login" className="btn-primary">학부모 로그인</Link>
        </div>
      </section>

      {/* 수업 과정 */}
      <section className="px-6 pb-12">
        <h3 className="text-xl font-bold text-[#3D3D3D] text-center mb-6">수업 과정</h3>
        <div className="grid grid-cols-2 gap-4">
          {grades.map((grade) => (
            <div key={grade.name} className="card text-center" style={{ borderColor: grade.color + '60' }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl"
                style={{ backgroundColor: grade.color + '40' }}>
                {grade.emoji}
              </div>
              <div className="font-bold text-[#3D3D3D] mb-1"
                style={{ color: grade.color.replace('B6C1', '8B5E7A').replace('7EC8E3', '3A7A9C').replace('98D4A8', '3D7A5E').replace('F5C842', 'A07A00') }}>
                {grade.name}
              </div>
              <p className="text-[#6B6B6B] text-xs">{grade.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 원장님 소개 */}
      <section className="px-6 pb-12">
        <div className="card border-[#5BBD8C]/40">
          <h3 className="text-lg font-bold text-[#3D3D3D] mb-4 text-center">👩‍🎨 원장님 소개</h3>
          <div className="space-y-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-[#5BBD8C] flex-shrink-0" size={20} />
                <span className="text-[#3D3D3D] text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오픈 이벤트 */}
      <section className="px-6 pb-12">
        <div className="rounded-3xl overflow-hidden border-2 border-[#F0B828]">
          <div className="bg-[#F0B828] py-3 text-center">
            <p className="font-bold text-[#3D3D3D]">🎁 4월 오픈 기념 이벤트</p>
          </div>
          <div className="bg-white p-6 space-y-3">
            {[
              { label: '1회 무료 체험', desc: '부담 없이 먼저 경험해보세요' },
              { label: '형제 등록 할인', desc: '형제·자매 함께 등록 시 1만원 할인' },
              { label: '오픈 기념 20% OFF', desc: '4월 등록 시 수강료 20% 할인' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F0E8]">
                <Star className="text-[#E8734A] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-semibold text-[#E8734A] text-sm">{item.label}</p>
                  <p className="text-[#6B6B6B] text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section className="px-6 pb-16">
        <div className="card">
          <h3 className="font-bold text-[#3D3D3D] mb-4 text-center">📍 오시는 길</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#5BBD8C]" size={20} />
              <span className="text-[#3D3D3D] text-sm">인천 연수구 에스파이브시티 704호</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#5BBD8C]" size={20} />
              <a href="tel:010-8212-6889" className="text-[#E8734A] font-semibold text-sm">010-8212-6889</a>
            </div>
          </div>
          <a href="tel:010-8212-6889" className="btn-accent w-full text-center mt-4 block">
            📞 지금 바로 문의하기
          </a>
        </div>
      </section>

      <footer className="bg-white border-t border-[#7BC8A4]/30 py-6 text-center">
        <p className="text-[#6B6B6B] text-xs">© 2026 생각하는 손 미술학원. All rights reserved.</p>
      </footer>
    </div>
  );
}
