'use client';

const gradeStats = [
  { grade: '유치부', total: 8, present: 7, color: '#FFB6C1' },
  { grade: '초등부', total: 12, present: 10, color: '#7EC8E3' },
  { grade: '중등부', total: 6, present: 6, color: '#98D4A8' },
  { grade: '성인취미', total: 4, present: 3, color: '#F5C842' },
];

export default function AdminDashboard() {
  const totalStudents = gradeStats.reduce((a, g) => a + g.total, 0);
  const totalPresent = gradeStats.reduce((a, g) => a + g.present, 0);

  return (
    <div className="px-5 py-6 space-y-5">
      {/* 오늘 요약 */}
      <div className="card bg-gradient-to-br from-[#5BBD8C] to-[#7BC8A4] text-white">
        <p className="text-white/80 text-sm mb-1">오늘 출석 현황</p>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">{totalPresent}</span>
          <span className="text-white/80 mb-1">/ {totalStudents}명</span>
        </div>
        <div className="w-full bg-white/30 rounded-full h-2 mt-3">
          <div className="bg-white rounded-full h-2 transition-all"
            style={{ width: `${(totalPresent/totalStudents)*100}%` }} />
        </div>
        <p className="text-white/80 text-xs mt-2">출석률 {Math.round((totalPresent/totalStudents)*100)}%</p>
      </div>

      {/* 반별 현황 */}
      <div>
        <h2 className="font-bold text-[#3D3D3D] mb-3">반별 출석 현황</h2>
        <div className="grid grid-cols-2 gap-3">
          {gradeStats.map(g => (
            <div key={g.grade} className="card" style={{ borderColor: g.color + '80' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: g.color }} />
                <span className="font-semibold text-[#3D3D3D] text-sm">{g.grade}</span>
              </div>
              <p className="text-2xl font-bold text-[#3D3D3D]">
                {g.present}<span className="text-sm text-[#6B6B6B] font-normal">/{g.total}</span>
              </p>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                <div className="rounded-full h-1.5" style={{ width: `${(g.present/g.total)*100}%`, backgroundColor: g.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 빠른 실행 */}
      <div>
        <h2 className="font-bold text-[#3D3D3D] mb-3">빠른 실행</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { href: '/admin/attendance', label: '출결 체크', emoji: '✅', color: '#5BBD8C' },
            { href: '/admin/photos', label: '사진 업로드', emoji: '📸', color: '#7EC8E3' },
            { href: '/admin/students', label: '학생 관리', emoji: '👥', color: '#98D4A8' },
            { href: '#', label: '공지 발송', emoji: '📢', color: '#F0B828' },
          ].map(item => (
            <a key={item.label} href={item.href}
              className="card flex items-center gap-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
                style={{ backgroundColor: item.color + '30' }}>
                {item.emoji}
              </div>
              <span className="font-medium text-[#3D3D3D] text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
