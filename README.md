# Muh. Aidil Ilham - Interactive Engineering Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-aidilham21.github.io%2FPortofolio--Aidil-success?logo=github-pages&logoColor=white)](https://aidilham21.github.io/Portofolio-Aidil/)
[![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla_JS-F7DF1E?logo=javascript&logoColor=black)](main.js)
[![WebGL Three.js](https://img.shields.io/badge/WebGL-Three.js_r128-black?logo=three.js)](https://threejs.org/)
[![Web Audio API](https://img.shields.io/badge/Audio-Web_Audio_API-orange)](main.js)
[![CSS3 Modern](https://img.shields.io/badge/Design-Custom_CSS3-1572B6?logo=css3)](style.css)
[![GitHub Repo](https://img.shields.io/badge/GitHub-aidilham21%2FPortofolio--Aidil-181717?logo=github)](https://github.com/aidilham21/Portofolio-Aidil)

> 🌐 **Live Website**: [https://aidilham21.github.io/Portofolio-Aidil/](https://aidilham21.github.io/Portofolio-Aidil/)

Portofolio web interaktif dan kurasi rekayasa perangkat lunak oleh **Muh. Aidil Ilham** (Software Engineering, IoT Perkebunan, WebGIS, dan Enterprise Resource Planning).

Dibangun menggunakan prinsip *first-principles engineering*: tanpa framework bloated, tanpa dependency runtime yang tidak perlu, dan 100% berbasis aset serta data riil.

---

## 📌 Daftar Isi
1. [Filosofi Desain & Arsitektur](#-filosofi-desain--arsitektur)
2. [Fitur Utama](#-fitur-utama)
3. [Daftar Proyek Unggulan](#-daftar-proyek-unggulan)
4. [Struktur Direktori](#-struktur-direktori)
5. [Cara Menjalankan Secara Lokal](#-cara-menjalankan-secara-lokal)
6. [Otomasi Git (push.bat & pull.bat)](#-otomasi-git-pushbat--pullbat)
7. [Standar Kualitas & Audit](#-standar-kualitas--audit)
8. [Kontak & Profil](#-kontak--profil)

---

## ⚡ Filosofi Desain & Arsitektur

Arsitektur aplikasi mengutamakan performa, kesederhanaan, dan kebersihan kode (*Karpathy Guidelines*):

```
┌────────────────────────────────────────────────────────┐
│                      index.html                        │
├──────────────────────────┬─────────────────────────────┤
│   3D WebGL Canvas Layer  │    DOM UI & State Machine   │
│   (Three.js Liquid Silk) │    (Screens 0 - 3 Navigation)│
├──────────────────────────┴─────────────────────────────┤
│             Web Audio API Synthesizer Engine           │
│   (Procedural Sine/Triangle Waves, Zero MP3 Overhead)  │
└────────────────────────────────────────────────────────┘
```

* **Zero Bloat Framework**: Tidak menggunakan React, Vue, ataupun bundler rumit seperti Webpack/Vite. Native ES6 + semantic HTML5 menjamin waktu muat instan (< 1 detik).
* **3D Liquid Silk Simulation (`Three.js r128`)**: Menggunakan simulasi gelombang parametrik dinamis pada mesh PlaneGeometry WebGL yang merespons pergerakan kursor mouse tanpa membebani GPU.
* **Procedural Haptic Audio**: Feedback suara interaktif dihasilkan langsung secara matematis menggunakan Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`). Tidak membutuhkan file suara eksternal (.mp3/.wav), menghemat bandwidth hingga 100%.
* **Print-Ready Curriculum Vitae (`cvdil.html`)**: Halaman profil dan CV mandiri yang dilengkapi modul CSS media `@print` khusus untuk menghasilkan dokumen PDF siap cetak berstandar ATS.

---

## 🚀 Fitur Utama

* **Multi-Screen State Carousel**: Transisi mulus antar layar (Hero, Profil, Project Bento Gallery, Contact) dengan keyboard arrow navigation dan swipe gesture.
* **Top Pill Navigation & Brand Monogram**: Akses cepat ke setiap bagian antarmuka dengan indikator visual aktif.
* **Project Bento Grid Showcase**: Galeri bento asimetris dengan kartu interaktif dan dialog modal detail proyek.
* **Responsive Layout (Mobile to Ultra-Wide)**: Menggunakan CSS Clamp, Flexbox, dan CSS Grid dengan target sentuh minimum 44px untuk kenyamanan perangkat mobile.
* **Halaman Servis Terintegrasi (`sihijau.html`)**: Landing page untuk layanan jasa servis perangkat digital dan konsultasi hardware/software.

---

## 🛠️ Daftar Proyek Unggulan

Berikut adalah proyek rekayasa riil yang ditampilkan dalam portofolio ini:

| Proyek | Domain | Keterangan & Peran |
|---|---|---|
| **MillTrack** | Enterprise & Industri PKS | Sistem tracking operator pabrik kelapa sawit (PKS). Dikembangkan bersama tim *cgreen* software house. |
| **GeoGiSa** | IoT & WebGIS | Instrumen IoT dan aplikasi mobile GIS pemetaan status nutrisi tanah kelapa sawit. |
| **MyStation365** | Enterprise ERP | Modul operasional stasiun pabrik kelapa sawit terintegrasi dengan ekosistem MySAP365 dan Openbravo. |
| **eLib Platform** | Web App & LMS | Platform perpustakaan digital dan sistem ujian/kuis pelatihan internal terintegrasi. |
| **Sterilizer Hub** | Embedded & IoT | Unit kontrol dan pemantau stasiun perebusan buah sawit (sterilizer) berbasis mikrokontroler. |
| **KoskuMaps** | WebGIS | Peta interaktif pencarian dan verifikasi kos mahasiswa di sekitar kawasan kampus. |
| **SiHijau** | Service Platform | Portal jasa servis perangkat digital, instalasi software, dan konsultasi TI lokal. |

---

## 📁 Struktur Direktori

```
Portofolio/
├── .gitignore               # Konfigurasi file yang diabaikan Git
├── LICENSE                  # Lisensi Open-Source (MIT)
├── README.md                # Dokumentasi utama proyek
├── index.html               # Halaman utama portofolio 3D interaktif
├── style.css                # Desain sistem, layout, dan tema antarmuka
├── main.js                  # Engine Three.js, Web Audio synthesizer, dan state router
├── cvdil.html               # CV interaktif dan print-ready format PDF
├── style-cv.css             # Style khusus cetak dan layout dokumen CV
├── script-cv.js             # Logika interaktif halaman CV
├── sihijau.html             # Landing page layanan servis digital SiHijau
├── style-sihijau.css        # Style landing page SiHijau
├── script-sihijau.js        # Logika antarmuka SiHijau
├── push.bat                 # Shortcut Windows untuk git add, commit, dan push
├── pull.bat                 # Shortcut Windows untuk git pull dari origin main
├── anti-slop/               # Catatan audit kepatuhan desain & verifikasi data
│   └── audit-001-2026-11-17.md
├── assets/                  # Aset gambar, ikon resmi, dan preview proyek
│   ├── logo-ai.svg
│   ├── profile_cutout.png
│   ├── projects/            # Tangkapan layar dan logo proyek riil
│   └── software/            # Ikon software & hardware resmi (Python, React, ESP32, QGIS, dll.)
└── skills/                  # Panduan internal pengembangan (Karpathy, Anti-Slop, Impeccable)
```

---

## 💻 Cara Menjalankan Secara Lokal

Karena proyek ini mengimplementasikan web standar tanpa build tools rumit, Anda dapat menjalankannya dengan beberapa metode sederhana:

### Metode 1: Python HTTP Server (Direkomendasikan)
Jika Anda memiliki Python terpasang di komputer:
```bash
# Masuk ke direktori proyek
cd c:\Projects\Portofolio

# Jalankan local server pada port 8000
python -m http.server 8000
```
Buka peramban di `http://localhost:8000`.

### Metode 2: VS Code Live Server Extension
1. Buka folder ini di Visual Studio Code.
2. Klik kanan pada `index.html`.
3. Pilih **"Open with Live Server"**.

### Metode 3: Buka Langsung
Klik dua kali file `index.html` untuk membuka langsung di peramban web Anda (Chrome, Edge, Firefox, Safari).

---

## 🔄 Otomasi Git (push.bat & pull.bat)

Untuk mempermudah sinkronisasi dengan repositori GitHub [aidilham21/Portofolio-Aidil](https://github.com/aidilham21/Portofolio-Aidil), telah disediakan dua shortcut skrip batch Windows:

### 1. `push.bat` (Otomasi Stage, Commit & Push)
* **Cara pakai via File Explorer**: Cukup klik dua kali `push.bat`. Skrip akan memeriksa status Git, menanyakan pesan commit (atau membuat auto-timestamp jika dikosongkan), melakukan `git add -A`, membuat commit, dan melakukan `git push -u origin main`.
* **Cara pakai via Terminal**:
  ```cmd
  push.bat "Memperbarui tampilan project bento"
  ```

### 2. `pull.bat` (Otomasi Sinkronisasi Remote)
* **Cara pakai**: Klik dua kali file `pull.bat` untuk menarik pembaruan terbaru dari GitHub ke komputer lokal secara aman.

---

## 🛡️ Standar Kualitas & Audit

Proyek ini diaudit dan dipelihara mengikuti prinsip ketat:
* **Anti-Slop Standards**: Bebas dari klaim klise AI generik, tanpa pemisah em dash (`—`), dan menggunakan data fakta riil (pendidikan vokasi SMKN 2 Baras, D4 Politeknik CWE, Beasiswa BPDPKS).
* **Impeccable Craft**: Seluruh ikon software menggunakan visual squircle glass tile yang seragam, micro-interaction responsif, dan layout bebas overflow pada semua resolusi layar.
* **Karpathy Guidelines**: Kode ringkas, minim abstraksi berlebihan, dan setiap baris kode memiliki fungsi operasional yang jelas.

---

## 📬 Kontak & Profil

* **Nama**: Muh. Aidil Ilham
* **Pendidikan**: D4 Teknologi Rekayasa Perangkat Lunak, Politeknik Kelapa Sawit Citra Widya Edukasi
* **GitHub**: [@aidilham21](https://github.com/aidilham21)
* **Repositori Portofolio**: [Portofolio-Aidil](https://github.com/aidilham21/Portofolio-Aidil)
* **Email**: aidililhaada@gmail.com / cgreensoho@gmail.com
* **LinkedIn**: [Muh. Aidil Ilham](https://www.linkedin.com/in/muh-aidil-ilham-5027aa298/)
* **Lokasi**: Bekasi, Jawa Barat / Palu / Mamuju, Indonesia

---
*Dikelola dengan standar rekayasa perangkat lunak mandiri & open-source.*
