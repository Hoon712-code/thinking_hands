-- profiles
create table profiles (
  id uuid references auth.users primary key,
  role text check (role in ('parent', 'admin')),
  name text,
  phone text,
  created_at timestamptz default now()
);

-- students
create table students (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  grade text check (grade in ('유치부', '초등부', '중등부', '성인취미')),
  parent_id uuid references profiles(id),
  created_at timestamptz default now()
);

-- attendance
create table attendance (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references students(id),
  date date not null,
  status text check (status in ('present', 'absent', 'late')),
  note text,
  created_at timestamptz default now()
);

-- class_photos
create table class_photos (
  id uuid primary key default gen_random_uuid(),
  grade text,
  photo_url text,
  caption text,
  uploaded_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- notifications
create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  title text,
  body text,
  read boolean default false,
  created_at timestamptz default now()
);

-- RLS policies
alter table profiles enable row level security;
alter table students enable row level security;
alter table attendance enable row level security;
alter table class_photos enable row level security;
alter table notifications enable row level security;

create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Admin can view all profiles" on profiles for select using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

create policy "Parents view own students" on students for select using (parent_id = auth.uid());
create policy "Admin manage students" on students for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

create policy "Parents view own attendance" on attendance for select using (
  exists (select 1 from students where id = student_id and parent_id = auth.uid())
);
create policy "Admin manage attendance" on attendance for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

create policy "All users view photos" on class_photos for select using (auth.uid() is not null);
create policy "Admin manage photos" on class_photos for all using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

create policy "Users view own notifications" on notifications for select using (user_id = auth.uid());
create policy "Users update own notifications" on notifications for update using (user_id = auth.uid());
create policy "Admin insert notifications" on notifications for insert using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);
