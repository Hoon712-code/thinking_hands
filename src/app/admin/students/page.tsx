'use client';
import { useState } from 'react';
import { Plus, Search } from 'lucide-react';

const gradeColors: Record<string, string> = {
  '유치부': '#FFB6C1', '초등부': '#7EC8E3', '중등부': '#98D4A8', '성인취미': '#F5C842',
};

const mockStudents = [
  { id: '1', name: '김민준', grade: '초등부', parent: '김영희', phone: '010-1234-5678' },
  { id: '2', name: '이서연', grade: '초등부', parent: '이미영', phone: '010-2345-6789' },
  { id: '3', name: '박지호', grade: '초등부', parent: '박철수', phone: '010-3456-7890' },
  { id: '4', name: '최예린', grade: '유치부', parent: '최지현', phone: '010-4567-8901' },
  { id: '5', name: '정하윤', grade: '유치부', parent: '정수진', phone: '010-5678-9012' },
  { id: '6', name: '강도현', grade: '중등부', parent: '강민호', phone: '010-6789-0123' },
  { id: '7', name: '윤수아', grade: '성인취미', parent: '-', phone: '010-7890-1234' },
];

export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const filtered = mockStudents.filter(s =>
    s.name.includes(search) || s.grade.includes(search)
  );

  return (
    <div className="px-5 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-[#3D3D3D] text-lg">학생 관리</h2>
        <button className="btn-primary py-2 px-4 text-sm flex items-center gap-1">
          <Plus size={16} /> 등록
        </button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={18} />
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="이름 또는 반 검색"
          className="w-full pl-11 pr-4 py-3 border border-[#7BC8A4]/40 rounded-2xl bg-white text-[#3D3D3D] focus:outline-none focus:border-[#5BBD8C] text-sm" />
      </div>

      <p className="text-[#6B6B6B] text-sm mb-3">총 {filtered.length}명</p>

      <div className="space-y-3">
        {filtered.map(student => (
          <div key={student.id} className="card flex items-center gap-4">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white"
              style={{ backgroundColor: gradeColors[student.grade] }}>
              {student.name[0]}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#3D3D3D]">{student.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: gradeColors[student.grade] + '40' }}>
                  {student.grade}
                </span>
                <span className="text-xs text-[#6B6B6B]">{student.parent}</span>
              </div>
            </div>
            <a href={`tel:${student.phone}`} className="text-[#5BBD8C]">
              <div className="w-9 h-9 rounded-full bg-[#5BBD8C]/10 flex items-center justify-center text-lg">📞</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
