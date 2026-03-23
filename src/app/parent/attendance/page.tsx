'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

// Mock data
const mockAttendance: Record<string, 'present' | 'absent' | 'late'> = {
  '2026-03-03': 'present', '2026-03-05': 'present', '2026-03-07': 'absent',
  '2026-03-10': 'present', '2026-03-12': 'present', '2026-03-14': 'late',
  '2026-03-17': 'present', '2026-03-19': 'present', '2026-03-21': 'present',
};

export default function AttendancePage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const dateKey = (d: number) => `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

  const stats = Object.values(mockAttendance);
  const present = stats.filter(s => s === 'present').length;
  const absent = stats.filter(s => s === 'absent').length;
  const late = stats.filter(s => s === 'late').length;

  return (
    <div className="px-5 py-6 space-y-5">
      {/* 통계 */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: '출석', count: present, color: '#5BBD8C' },
          { label: '결석', count: absent, color: '#E85050' },
          { label: '지각', count: late, color: '#E8734A' },
        ].map(s => (
          <div key={s.label} className="card text-center py-4">
            <p className="text-2xl font-bold" style={{ color: s.color }}>{s.count}</p>
            <p className="text-[#6B6B6B] text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 캘린더 */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => { if (month === 0) { setMonth(11); setYear(y => y-1); } else setMonth(m => m-1); }}>
            <ChevronLeft className="text-[#6B6B6B]" />
          </button>
          <h2 className="font-bold text-[#3D3D3D]">{year}년 {month + 1}월</h2>
          <button onClick={() => { if (month === 11) { setMonth(0); setYear(y => y+1); } else setMonth(m => m+1); }}>
            <ChevronRight className="text-[#6B6B6B]" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs text-[#6B6B6B] font-medium py-1">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const key = dateKey(day);
            const status = mockAttendance[key];
            const bgColor = status === 'present' ? '#5BBD8C' : status === 'absent' ? '#E85050' : status === 'late' ? '#E8734A' : 'transparent';
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            return (
              <div key={i} className="aspect-square flex items-center justify-center rounded-full text-xs font-medium transition-all"
                style={{
                  backgroundColor: bgColor !== 'transparent' ? bgColor : isToday ? '#F5F0E8' : 'transparent',
                  color: status ? 'white' : isToday ? '#5BBD8C' : '#3D3D3D',
                  border: isToday && !status ? '2px solid #5BBD8C' : 'none',
                  fontSize: '13px',
                }}>
                {day}
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-4 justify-center">
          {[['#5BBD8C', '출석'], ['#E85050', '결석'], ['#E8734A', '지각']].map(([c, l]) => (
            <div key={l} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
              <span className="text-xs text-[#6B6B6B]">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
