# 📝 Cekliskeun - My Day

**Cekliskeun** adalah aplikasi manajemen produktivitas berbasis web yang dirancang dengan filosofi minimalis namun memiliki fungsionalitas tinggi. Proyek ini berfokus pada pengalaman pengguna yang cepat, sistem prioritas yang cerdas, dan manajemen tugas secara *real-time*.

## 🌟 Fitur Utama

- **📅 Dynamic My Day View:** Fokus otomatis pada tugas harian untuk meningkatkan produktivitas.
- **🚥 Triple-Priority System:** Kategorisasi tugas berdasarkan level urgensi (*Low, Medium, High*).
- **⚠️ Smart Overdue Detection:** Algoritma otomatis yang mendeteksi dan memisahkan tugas yang melewati *deadline*.
- **🌗 Seamless Dark Mode:** Perpindahan tema (*Light/Dark*) yang sinkron dengan preferensi mata pengguna.
- **📱 Mobile-First Responsive Design:** Antarmuka yang adaptif dari layar ultra-lebar hingga perangkat genggam.
- **💾 Persistent Data Engine:** Integrasi dengan *Web Storage API* untuk memastikan data tetap aman tanpa database eksternal.

## 🛠️ Arsitektur & Teknologi

Aplikasi ini dibangun menggunakan *modern web standard* tanpa beban eksternal (Zero Dependency), memastikan performa yang sangat ringan:

- **HTML5 Semantic Blueprint:** Menggunakan struktur dokumen yang dioptimalkan untuk aksesibilitas dan SEO.
- **CSS3 Variable-Driven Styling:** - Menggunakan *Custom Properties* untuk manajemen tema dinamis.
    - Implementasi Flexbox & Grid untuk tata letak yang presisi.
- **Vanilla JavaScript (ES6+):** - **DOM Manipulation Engine:** Pengelolaan antarmuka secara asinkron tanpa *reload*.
    - **State Management:** Logika penyimpanan data terpusat menggunakan *localStorage*.
    - **Temporal Logic:** Sistem validasi waktu untuk manajemen status *due date*.
- **FontAwesome & Brand Assets:** Integrasi ikonografi profesional untuk *user experience* yang lebih intuitif.


```text
├── assets/          # Brand assets (logo, ikon, bnet.png)
├── index.html       # Entry point utama & struktur aplikasi
├── style.css        # Core styling & logic tema
└── script.js        # Logical engine & data persistence