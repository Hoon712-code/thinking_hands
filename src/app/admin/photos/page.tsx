'use client';
import { useState } from 'react';
import { Upload, Camera } from 'lucide-react';

const gradeColors: Record<string, string> = {
  '유치부': '#FFB6C1', '초등부': '#7EC8E3', '중등부': '#98D4A8', '성인취미': '#F5C842',
};
const grades = ['유치부', '초등부', '중등부', '성인취미'];

export default function PhotoUploadPage() {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [caption, setCaption] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    if (!selectedGrade) return;
    setUploaded(true);
    setTimeout(() => { setUploaded(false); setCaption(''); setSelectedGrade(''); }, 2000);
  };

  return (
    <div className="px-5 py-6 space-y-5">
      <h2 className="font-bold text-[#3D3D3D] text-lg">수업 사진 업로드</h2>

      {/* 반 선택 */}
      <div>
        <p className="text-sm text-[#6B6B6B] mb-3">반 선택</p>
        <div className="grid grid-cols-2 gap-3">
          {grades.map(g => (
            <button key={g} onClick={() => setSelectedGrade(g)}
              className="card py-3 text-center font-semibold text-sm transition-all"
              style={{
                borderColor: selectedGrade === g ? gradeColors[g] : '#7BC8A4' + '40',
                borderWidth: selectedGrade === g ? '2px' : '1px',
                backgroundColor: selectedGrade === g ? gradeColors[g] + '20' : 'white',
              }}>
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 사진 업로드 영역 */}
      <div className="card border-dashed border-2 border-[#7BC8A4] text-center py-12 cursor-pointer hover:bg-[#5BBD8C]/5 transition-colors">
        <Camera className="mx-auto text-[#7BC8A4] mb-3" size={40} />
        <p className="text-[#5BBD8C] font-semibold">사진 선택 / 촬영</p>
        <p className="text-[#6B6B6B] text-xs mt-1">여러 장 선택 가능</p>
      </div>

      {/* 코멘트 */}
      <div>
        <label className="text-sm text-[#6B6B6B] mb-2 block">코멘트 (선택)</label>
        <textarea value={caption} onChange={e => setCaption(e.target.value)} rows={3}
          placeholder="예: 오늘 수채화 첫 도전! 모두 정말 잘했어요 🎨"
          className="w-full border border-[#7BC8A4]/40 rounded-2xl px-4 py-3 text-[#3D3D3D] bg-white focus:outline-none focus:border-[#5BBD8C] resize-none text-sm" />
      </div>

      <button onClick={handleUpload} disabled={!selectedGrade || uploaded}
        className={`w-full py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
          uploaded ? 'bg-[#5BBD8C]' : selectedGrade ? 'bg-[#E8734A] hover:bg-[#d4633a]' : 'bg-gray-300'
        }`}>
        {uploaded ? '✅ 업로드 완료! 학부모에게 알림 발송됨' : <><Upload size={18} /> 사진 업로드 & 알림 발송</>}
      </button>
    </div>
  );
}
