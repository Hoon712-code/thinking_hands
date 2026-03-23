'use client';
import { useState } from 'react';

const grades = ['전체', '유치부', '초등부', '중등부', '성인취미'];
const gradeColors: Record<string, string> = {
  '유치부': '#FFB6C1', '초등부': '#7EC8E3', '중등부': '#98D4A8', '성인취미': '#F5C842',
};

const mockPhotos = [
  { id: 1, grade: '초등부', caption: '수채화 첫 도전! 🎨', emoji: '🖼️', date: '3월 21일' },
  { id: 2, grade: '유치부', caption: '찰흙으로 만든 동물 🐻', emoji: '🧸', date: '3월 21일' },
  { id: 3, grade: '중등부', caption: '정물 소묘 완성 ✏️', emoji: '🎭', date: '3월 20일' },
  { id: 4, grade: '초등부', caption: '봄 풍경 그리기 🌸', emoji: '🌺', date: '3월 19일' },
  { id: 5, grade: '성인취미', caption: '아크릴 추상화 🎨', emoji: '🌈', date: '3월 18일' },
  { id: 6, grade: '유치부', caption: '색종이 접기 작품 📄', emoji: '✂️', date: '3월 17일' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('전체');
  const filtered = filter === '전체' ? mockPhotos : mockPhotos.filter(p => p.grade === filter);

  return (
    <div className="px-5 py-6">
      {/* 필터 */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide">
        {grades.map(g => (
          <button key={g} onClick={() => setFilter(g)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
            style={{
              backgroundColor: filter === g ? (g === '전체' ? '#5BBD8C' : gradeColors[g]) : 'white',
              borderColor: filter === g ? 'transparent' : '#7BC8A4' + '60',
              color: filter === g ? (g === '전체' ? 'white' : '#3D3D3D') : '#6B6B6B',
            }}>
            {g}
          </button>
        ))}
      </div>

      {/* 사진 그리드 */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map(photo => (
          <div key={photo.id} className="card p-3">
            <div className="aspect-square rounded-2xl flex items-center justify-center text-5xl mb-2"
              style={{ backgroundColor: gradeColors[photo.grade] + '30' }}>
              {photo.emoji}
            </div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: gradeColors[photo.grade] + '60', color: '#3D3D3D' }}>
                {photo.grade}
              </span>
              <span className="text-xs text-[#6B6B6B]">{photo.date}</span>
            </div>
            <p className="text-xs text-[#3D3D3D] font-medium">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
