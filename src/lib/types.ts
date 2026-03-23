export type Role = 'parent' | 'admin';
export type Grade = '유치부' | '초등부' | '중등부' | '성인취미';
export type AttendanceStatus = 'present' | 'absent' | 'late';

export interface Profile {
  id: string;
  role: Role;
  name: string;
  phone?: string;
  created_at: string;
}

export interface Student {
  id: string;
  name: string;
  grade: Grade;
  parent_id: string;
  created_at: string;
}

export interface Attendance {
  id: string;
  student_id: string;
  date: string;
  status: AttendanceStatus;
  note?: string;
  created_at: string;
  students?: Student;
}

export interface ClassPhoto {
  id: string;
  grade: Grade;
  photo_url: string;
  caption?: string;
  uploaded_by: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  body: string;
  read: boolean;
  created_at: string;
}
