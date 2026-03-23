'use client';
import { useState } from 'react';

const gradeColors: Record<string, string> = {
  '유치부': '#FFB6C1', '초등부': '#7EC8E3', '중등부': '#98D4A8', '성인취미': '#F5C842',
};

const mockStudents = [
  { id: '1', name: '김민준', grade: '초등부' },
  { id: '2', name: '이서연', grade: '초등부' },
  { id: '3', name: '박지호', grade: '초등부' },
  { id: '4', name: '최예린', grade: '유치부' },
  { id: '5', name: '정하윤', grade: '유치부' },
  { id: '6', name: '강도현', grade: '중등부' },
  { id: '7', name: '윤수아', grade: '성인취미' },
];

type Status = 'present' | 'absent' | 'late' | null;

export default function AdminAttendancePage() {
  const [filter, setFilter] = useState('전체');
  const [attendance, setAttendance] = useState<Record<string, Status>>({});

  const grades = ['전체', '유치부', '초등부', '중등부', '성인취미'];
  const filtered = filter === '전체' ? mockStudents : mockStudents.filter(s => s.grade === filter);

  const mark = (id: string, status: Status) => {
    setAttendance(prev => ({ ...prev, [id]: prev[id] === status ? null : status }));
  };

  return (
    <div className="px-5 py-6">
      <h2 className="font-bold text-[#3D3D3D] text-lg mb-4">출결 체크</h2>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
        {grades.map(g => (
          <button key={g} onClick={() => setFilter(g)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
            style={{
              backgroundColor: filter === g ? (g === '전체' ? '#5BBD8C' : gradeColors[g]) : 'white',
              borderColor: '#7BC8A4' + '60',
              color: filter === g ? '#3D3D3D' : '#6B6B6B',
            }}>
            {g}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(student => {
          const status = attendance[student.id];
          return (
            <div key={student.id} className="card flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: gradeColors[student.grade] }}>
                {student.name[0]}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#3D3D3D]">{student.name}</p>
                <span className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: gradeColors[student.grade] + '40', color: '#3D3D3D' }}>
                  {student.grade}
                </span>
              </div>
              <div className="flex gap-1.5">
                {[
                  { s: 'present' as Status, label: '출', color: '#5BBD8C' },
                  { s: 'late' as Status, label: '지', color: '#E8734A' },
                  { s: 'absent' as Status, label: '결', color: '#E85050' },
                ].map(({ s, label, color }) => (
                  <button key={s} onClick={() => mark(student.id, s)}
                    className="w-8 h-8 rounded-full text-xs font-bold transition-all"
                    style={{
                      backgroundColor: status === s ? color : '#F5F0E8',
                      color: status === s ? 'white' : '#6B6B6B',
                    }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn-primary w-full mt-6">
        출결 저장 및 알림 발송
      </button>
    </div>
  );
}
