# 📝 Cekliskeun - My Day

**Cekliskeun** adalah aplikasi manajemen produktivitas berbasis web yang dirancang dengan filosofi minimalis namun memiliki fungsionalitas tinggi. Proyek ini berfokus pada pengalaman pengguna yang cepat, sistem prioritas yang cerdas, dan manajemen tugas secara *real-time*.

## 🌟 Fitur Utama

- **📅 Dynamic My Day View:** Fokus otomatis pada tugas harian untuk meningkatkan efisiensi kerja.
- **🚥 Triple-Priority System:** Kategorisasi tugas berdasarkan level urgensi (*Low, Medium, High*) untuk manajemen skala prioritas.
- **⚠️ Smart Overdue Detection:** Algoritma otomatis yang mendeteksi dan memisahkan tugas yang telah melewati tenggat waktu (*deadline*).
- **🌗 Seamless Dark Mode:** Perpindahan tema (*Light/Dark*) yang sinkron dan nyaman untuk kesehatan mata.
- **📱 Ultra-Responsive Design:** Optimasi antarmuka yang adaptif, mulai dari layar desktop hingga perangkat *mobile* (termasuk *bottom navigation* khusus HP).
- **💾 Persistent Data Engine:** Integrasi dengan *Web Storage API* untuk memastikan data tugas tersimpan aman di browser tanpa perlu database eksternal.

## 🛠️ Arsitektur & Teknologi

Aplikasi ini dibangun menggunakan standar web modern tanpa ketergantungan *library* pihak ketiga (*Zero Dependency*), menghasilkan performa yang sangat ringan dan responsif:

- **HTML5 Semantic Blueprint:** Struktur dokumen yang dioptimalkan untuk aksesibilitas, SEO, dan navigasi yang logis.
- **CSS3 Variable-Driven Styling:** - Menggunakan *Custom Properties* untuk manajemen tema dinamis dan konsistensi warna.
  - Implementasi Flexbox & Grid untuk tata letak yang presisi di berbagai resolusi layar.
- **Vanilla JavaScript (ES6+):** - **DOM Manipulation Engine:** Pengelolaan antarmuka secara asinkron untuk interaksi yang mulus tanpa *reload*.
  - **State Management:** Logika penyimpanan data terpusat menggunakan `localStorage`.
  - **Temporal Logic:** Sistem validasi waktu untuk manajemen otomatis status *due date* dan *overdue*.
- **FontAwesome & Brand Assets:** Integrasi ikonografi profesional untuk pengalaman pengguna yang lebih intuitif.

## 📂 Struktur Proyek

```text
├── assets/          # Brand assets (logo, ikon, bnet.png)
├── index.html       # Entry point utama & struktur aplikasi
├── style.css        # Core styling, tema, & media queries
└── script.js        # Logical engine, state management, & data persistence

Cara Penggunaan
Input Task: Masukkan deskripsi tugas, pilih level prioritas, dan tentukan tanggal jatuh tempo.
Kelola Status: Gunakan navigasi tab untuk melihat tugas yang aktif (Tasks) atau yang sudah selesai (Completed).
Pantau Overdue: Sistem akan secara otomatis memindahkan tugas yang terlambat ke bagian Overdue sebagai pengingat.
Kustomisasi Tampilan: Gunakan tombol toggle tema di pojok kanan atas untuk berpindah antara mode terang dan gelap.

Thanks to :
Bang Ardial Hari Senin 
https://mission**asic.ardial.my.id/ 
pelajaran nya sangat membatu 

👤 Penulis
Panji Kusumah
Crafting efficient solutions through clean code and modern design.