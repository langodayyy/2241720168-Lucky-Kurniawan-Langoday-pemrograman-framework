| Nama  | Lucky Kurniawan Langoday |
| ----- | ------------------------ |
| Kelas | TI-3B                    |
| Absen | 12                       |
| NIM   | 2241720168               |

# Praktikum 1: Menyiapkan Lingkungan Pengembangan

1. Jelaskan kegunaan masing-masing dari Git, VS Code dan NodeJS yang telah Anda install pada sesi praktikum ini!
   _Jawaban_

- Git adalah sistem kontrol versi (Version Control System/VCS) berbasis distributed yang digunakan untuk melacak perubahan pada kode atau file dalam pengembangan perangkat lunak.
- VS Code merupakan aplikasi code editor yang digunakan developer menulis, mengedit, dan debug kode dalam berbagai bahasa pemrograman seperti:HTML, CSS, JavaScript, PHP, Python, Dart dan masih banyak lagi
- Node.js adalah runtime environment yang digunakan untuk menjalankan kode JavaScript di sisi server (backend).

2. Buktikan dengan screenshoot yang menunjukkan bahwa masing-masing tools tersebut telah berhasil terinstall di perangkat Anda!
   _Jawaban_

- VS Code
  ![output](./image-1.png)
- git
  ![output](./image-2.png)
- Node.JS
  ![output](./image-3.png)

# Praktikum 2: Membuat Proyek Pertama React Menggunakan Next.js

1. Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa istilah yang muncul. Jelaskan istilah tersebut, TypeScript, ESLint, Tailwind CSS, App Router, Import alias, App router, dan Turbopack!
   _Jawaban_

- TypeScript adalah bahasa pemrograman berbasis JavaScript yang memiliki fitur static typing.
- ESLint adalah Linter (tool yang otomatis mengecek kesalahan kode) untuk JavaScript dan TypeScript.
- Tailwind CSS adalah CSS Framework Utility-First yang digunakan untuk styling tanpa menulis banyak file CSS.
- App Router adalah fitur baru di Next.js (mulai Next.js 13) yang menggantikan Pages Router.
- Import Alias digunakan untuk mempermudah penulisan path import.
- Turbopack adalah bundler baru di Next.js yang dibuat oleh tim Vercel.

2. Apa saja kegunaan folder dan file yang ada pada struktur proyek React yang tampil pada gambar pada tahap percobaan ke-3! <br>
   _Jawaban_

- app/ (App Router) <br>
  Folder ini baru muncul di Next.js 13+. Ini pengganti folder pages/ di versi sebelumnya.
  Fungsinya:
  _ Tempat semua halaman aplikasi
  _ Routing otomatis (tanpa konfigurasi tambahan)
  _ Mendukung SSR, CSR, ISR, dan SSG
  _ Layout Global
- .next/<br>
  Folder ini otomatis dibuat saat menjalankan proyek dengan perintah:
- public/ <br>
  Folder ini digunakan untuk menyimpan file statis seperti:
  _ Gambar
  _ Icon
  _ Font
  _ Video
- favicon.ico<br>
  Ikon default yang tampil di browser (tab browser).
- globals.css <br>
  Style yang berlaku untuk semua halaman.
  _layout.tsx <br>
  _ Tempat membuat Global Layout (Header, Footer, Sidebar). \* Semua halaman otomatis menggunakan layout ini.
- page.tsx <br>
  - Halaman utama yang otomatis menjadi route /.
  - Fungsinya seperti index.js di versi sebelumnya.
- node_modules/ <br>
  Folder ini otomatis dibuat saat install dependency dengan npm atau yarn.
- .gitignore <br>
  Berisi daftar file yang diabaikan Git saat push ke GitHub.
- eslint.config.mjs <br>
  Konfigurasi ESLint (Static Code Linter) untuk menulis kode yang bersih dan konsisten.
- next.config.ts <br>
  Konfigurasi untuk proyek Next.js.
  _ Bisa digunakan untuk:
  _ Optimasi gambar
  _ Redirect URL
  _ Konfigurasi domain
- package.json <br>
  File ini menyimpan informasi proyek dan dependency.
- tailwind.config.ts <br>
  Konfigurasi Tailwind CSS.

3. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!
   _Jawaban_
   ![output](./image-4.png)

# Praktikum 3: Menambahkan Komponen React (Button)

1. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!
   _Jawaban_
   ![output](./image-6.png)
   ![output](./image-5.png)
   ![output](./image-7.png)

# Praktikum 4: Menulis Markup dengan JSX

1. Untuk apakah kegunaan sintaks user.imageUrl? <br>
   _Jawaban_<br>
   Sintaks user.imageUrl pada kode tersebut digunakan untuk mengakses properti dari objek user, yang menyimpan URL gambar pengguna.
2. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!
   _Jawaban_
   ![output](./image-8.png)
   ![output](./image-9.png)
   ![output](./image-10.png)
