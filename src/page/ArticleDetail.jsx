import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ArticleDetail.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      slug: 'viral-biaya-paspor-650000-hangus-gagal-wawancara',
      date: '23 Feb 2026',
      author: 'KORANTRANSAKSI.com',
      title: 'Viral, Biaya Paspor Rp 650.000 Hangus usai Gagal Wawancara, Ini Penjelasan Imigrasi?',
      subtitle: 'Koordinator Fungsi Komunikasi Publik Ditjen Imigrasi jelaskan mengenai biaya paspor yang tidak dapat dikembalikan',
      image: require('../assets/img/ilustrasi-paspor-indonesia-1763966055112_169.webp'),
      tags: ['Passport', 'Immigration', 'News'],
      readTime: '8 min read',
      content: `
        <p><strong>Jakarta, KORANTRANSAKSI.com</strong> – Media Sosial X saat ini ramai membahas soal baya pembuatan Paspor Rp 650.000 yang hangus jika pemohon gagal di tahap wawancara. Diskusi tersebut berawal dari aduan warganet melalui akun menfess @tanyakanri pada Kamis (19/2/2026).</p>
        
        <blockquote><p>"Mau nangis rasanya baru aja gagal wawancara bikin paspor dan 650k Hilang Gitu aja, padahal sekeluarga barengan bikin tujuan untuk berobat ke penang", ungkap pengunggah.</p></blockquote>
        
        <p>Selanjutnya, dalam postingan yang sama pengunggah lainnya juga menceritakan bahwa kondisinya saat ini sedang tidak bekerja selama 2 tahun lamanya karena merawat sang ibu yang sedang sakit. Permohonan paspor diajukan untuk dokumen pendukung berobat sang ibu di luar negeri. Disebutkan bahwa, adik dan sang ibu berhasilnya berhasil membuat paspor, tetapi tidak dengan dirinya.</p>
        
        <blockquote><p>"Adek dan ibu gue bisa membuat paspor karena pasien dan ada jaminan ada bokap gue yang masih kerja, padahal yang jadi pendamping ke Rs itu gue", tulisnya.</p></blockquote>
        
        <h2>Lantas, benarkah uang permohonan bikin paspor akan hangus jika para pemohon agal di tahap prosedur pendaftaran?</h2>
        
        <h3>Biaya tidak serta-merta dapat dikembalikan</h3>
        
        <p>Koordinator Fungsi Komunikasi Publik Direktorat Jenderal Imigrasi, Achmad Nur Saleh menjelaskan bahwa, dalam konteks layanan paspor, proses pelayanan tidak hanya dinilai dari terbit atau tidaknya paspor.</p>
        
        <blockquote><p>"Mengacu pada Peraturan Pemerintah Nomor 45 Tahun 2024 Pasal 1, PNBP dikenakan pada layanan keimigrasian. Dimana Layanan Paspor tidak hanya tentang diterbitkan atau tidaknya paspor", jelas Achmad.</p></blockquote>
        
        <p>Lebih lanjut Achmad menambahkan, "Pelayanan paspor dapat meliputi seluruh proses sejak pemohon mendaftarkan permohonannya di aplikasi M-Paspor hingga mendapatkan pelayanan di Kantor Imigrasi", tutur Achmad.</p>
        
        <p>Ia pun menjelaskan, ketika proses layanan sudah berjalan, baik mulai dari verifikasi berkas, pengambilan biometrik, hingga wawancara, maka negara telah memberikan layanan administrasi. "Tentunya dalam kondisi tersebut, biaya yang telah dibayarkan tidak serta-merta dapat dikembalikan", tegasnya.</p>
        
        <h3>Aturan Pembatalan Permohonan Paspor</h3>
        
        <p>Sementara itu, ketentuan pembatalan permohonan paspor sudah diatur dalam Permenkumham Nomor 8 Tahun 2014 tentang Paspor biasa dan Surat Perjalanan Laksana Paspor.</p>
        
        <p>Pada Pasal 17 dijelaskan bahwa, permohonan paspor dapat dibatalkan apabila ditemukan ketidaksesuaian data, dokumen tidak sah, pemohon didapati memberikan keterangan yang tidak benar, atau alasan lain yang bertentangan dengan ketentuan hukum. Dalam hal terjadi pembatalan, blangko paspor yang telah disiapkan akan dibatalkan dan dicatat dalam Sistem Informasi Manajemen Keimigrasian (SIMKIM).</p>
        
        <h3>Imbauan kepada Pemohon</h3>
        
        <p>Achmad pun mengatakan bahwa, Ada prosedur yang harus dijalani dan dipatuhi agar paspor dapat diterbitkan. Persyaratan tersebut ditetapkan untuk menjaga keamanan serta keselamatan WNI selama berada diluar negeri.</p>
        
        <blockquote><p>"Saya juga menekankan agar para pemohon dapat memberikan keterangan secara jujur dan terbuka terhadap petugas demi kebaikan dirinya", tutup Achmad. (ZIK/TIM)</p></blockquote>
      `
    },
    {
      id: 2,
      slug: 'masuk-bali-tidak-resmi-7-wn-bangladesh-diamankan',
      date: '23 Feb 2026',
      author: 'KORANTRANSAKSI.com',
      title: 'Masuk Bali Secara Tidak Resmi, 7 WN Bangladesh Diamankan',
      subtitle: 'Tujuh WNA asal Bangladesh diamankan Kantor Imigrasi Denpasar karena memasuki Bali tanpa melalui pemeriksaan resmi',
      image: require('../assets/img/699be0db4db24.webp'),
      tags: ['Immigration', 'Bali', 'News'],
      readTime: '6 min read',
      content: `
        <p><strong>Denpasar, KORANTRANSAKSI.com</strong> – Sebanyak Tujuh orang laki laki berkewarganegaraan Bangladesh berhasil diamankan di Bali. Mereka diamankan karena memasuki wilayah Bali tanpa melalui pemeriksaan resmi. Selain itu, ketujuh Warga Negara Bangladesh tersebut juga tidak memiliki dokumen perjalanan dan Izin Tinggal yang sah.</p>
        
        <p>Humas Kantor Imigrasi Kelas I TPI Denpasar, Ahmad Apriandi, menyampaikan bahwa tujuh orang tersebut masih ditahan di Rumah Detensi Imigrasi (Rudenim) Denpasar di Jimbaran sampai Senin (23/2/2026). Namun, belum diketahui kapan ketujuh warga negara Bangladesh tersebut akan dideportasi.</p>
        
        <blockquote><p>"Terkait dengan hal tersebut, kami belum mendapatkan informasinya", ucap Ahmad Apriandi.</p></blockquote>
        
        <h2>Proses Penangkapan</h2>
        
        <p>Lebih lanjut Ahmad menjelaskan, petugas Imigrasi Denpasar menjemput dua orang dari tujuh warga Bangladesh tersebut pada Sabtu, 14 Februari 2026. Penahanan tersebut dilakukan setelah mereka berkoordinasi dengan Satpol PP Kabupaten Tabanan.</p>
        
        <p>Kedua warga negara Bangladesh itu diketahui tinggal selama empat hari di sebuah masjid di wilayah Kediri, Kabupaten Tabanan. Mereka tidak membawa identitas diri. Sementara itu, lima warga Bangladesh lainnya diamankan oleh Satpol PP Kota Denpasar pada Rabu, 18 Februari 2026.</p>
        
        <p>Semuanya lalu dibawa ke Kantor Imigrasi Denpasar untuk pemeriksaan lebih lanjut. Berdasarkan hasil pemeriksaan dan pengecekan pada sistem perlintasan keimigrasian, ketujuh WNA tersebut tidak memiliki catatan resmi masuk ke Indonesia.</p>
        
        <h2>Dugaan Pelanggaran</h2>
        
        <p>Selain itu, berdasarkan hasil Berita Acara Pemeriksaan (BAP), mereka diduga melanggar Pasal 113 Undang-Undang Nomor 6 Tahun 2011 tentang Keimigrasian. Mereka masuk ke wilayah Indonesia tidak melalui pemeriksaan pejabat Imigrasi di Tempat Pemeriksaan Imigrasi (TPI).</p>
        
        <h2>Kerja Sama Antar Instansi</h2>
        
        <p>Kepala Kantor Wilayah Direktorat Jenderal Imigrasi Bali, Felucia Sengky Ratna, menilai pentingnya kerja sama antara Kantor Imigrasi Denpasar, Kepolisian, dan Satpol PP dalam penanganan kasus seperti ini. Khususnya dalam pelaksanaan Tim Pengawasan Orang Asing (Timpora) untuk menjaga keamanan dan ketertiban.</p>
        
        <p>Sementara itu, Kepala Kantor Imigrasi Kelas I TPI Denpasar, R Haryo Sakti, menyampaikan bahwa tindakan ini merupakan bentuk penegakan aturan keimigrasian dan menjaga kedaulatan negara. Dia juga menegaskan bahwa setiap pelanggaran akan ditindak sesuai ketentuan yang berlaku.</p>
        
        <blockquote><p>"Pengawasan terhadap orang asing akan terus diperkuat melalui sinergi bersama Satpol PP dan Kepolisian," katanya. (TA/TIM)</p></blockquote>
      `
    },
    {
      id: 3,
      slug: 'imigrasi-himbau-pemudik-international-isi-all-indonesia-h-3',
      date: '23 Feb 2026',
      author: 'KORANTRANSAKSI.com',
      title: 'Imigrasi Himbau Pemudik International Untuk Isi All Indonesia Sejak H-3',
      subtitle: 'Ditjen Imigrasi merekomendasikan pengisian deklarasi All Indonesia sejak H-3 sebelum kedatangan untuk mempercepat proses pemeriksaan',
      image: require('../assets/img/all-indonesia.jpg'),
      tags: ['Immigration', 'Travel', 'Digital'],
      readTime: '7 min read',
      content: `
        <p><strong>Jakarta, KORANTRANSAKSI.com</strong> – Direktorat Jenderal Imigrasi, Kementerian Imigrasi dan Pemasyarakatan (Kemenimpas) memberikan himbauan kepada para pemudik International untuk mengisi data deklarasi kedatangan melalui Aplikasi 'All Indonesia' sejak tiga hari sebelum tiba di Tanah Air.</p>
        
        <p>Hal itu disampaikan langsung oleh Koordinator Fungsi Komunikasi Publik Direktorat Jenderal Imigrasi, Achmad Nur Saleh. Ia mengatakan bahwa, Aplikasi All Indonesia dapat pula diakses melalui laman website allindonesia.imigrasi.go.id .</p>
        
        <blockquote><p>"Kami sangat merekomendasikan pemudik untuk mengisi deklarasi All Indonesia sebelum keberangkatan. Langkah ini efektif mempercepat proses pemeriksaan di bandara dan mencegah penumpukan penumpang di area kedatangan, terutama saat puncak arus mudik Lebaran", ujar Achmad.</p></blockquote>
        
        <h2>Fitur Corridor Gate untuk Penumpang Prioritas</h2>
        
        <p>Lebih lanjut Achmad menambahkan, All Indonesia sudah terkoneksi dengan koridor pemeriksaan imigrasi (corridor gate) untuk pemeriksaan biometrik otomatis bagi penumpang prioritas, yakni lansia dan difabel pengguna kursi roda.</p>
        
        <p>Dimana, corridor gate merupakan inovasi layanan ekosistem keimigrasian tanpa hambatan (seamless immigration ecosystem). Dengan layanan itu, penumpang internasional prioritas cukup berjalan melewati koridor tersebut untuk menyelesaikan pemeriksaan.</p>
        
        <blockquote><p>"Untuk saat ini, Corridor gate tersedia di Bandara International Soekarno-Hatta", jelas Achmad.</p></blockquote>
        
        <h2>Persiapan Perjalanan Internasional</h2>
        
        <p>Sementara itu, masyarakat yang berencana menghabiskan waktu libur Lebaran di negara lain diminta untuk mengecek kebijakan visa negara tujuan, termasuk apakah bebas visa ataupun memerlukan visa kunjungan (VoA) bagi WNI.</p>
        
        <p>Achmad juga mengatakan, Untuk memastikan kelancaran perjalanan ke negara-negara yang membutuhkan visa, permohonan visa sebaiknya diajukan beberapa pekan sebelum keberangkatan.</p>
        
        <blockquote><p>"Verifikasi di kedutaan, konsulat, atau via online memerlukan waktu dan pengajuan visa dengan waktu yang cukup penting agar perjalanan tidak terhambat karena visa yang belum terbit," ujarnya.</p></blockquote>
        
        <h2>Masa Berlaku Paspor</h2>
        
        <p>Di samping itu, ia mengingatkan agar masyarakat memastikan masa berlaku paspor minimal enam bulan pada tanggal kedatangan di negara tujuan. Batas masa berlaku paspor minimal tersebut sudah menjadi kesepakatan internasional.</p>
        
        <blockquote><p>"Jika masa berlaku paspor kurang dari enam bulan, akan ditolak masuk oleh negara tujuan, bahkan dari saat sebelum keberangkatan di bandara Indonesia," ucapnya.</p></blockquote>
        
        <h2>Fasilitas Autogate untuk Anak</h2>
        
        <p>Achmad lebih lanjut menuturkan anak-anak usia minimal enam tahun sudah bisa melakukan pemeriksaan imigrasi menggunakan gerbang otomatis (autogate) di bandara-bandara internasional. "Teknologi face recognition (pengenalan wajah) autogate sekarang lebih mutakhir. Keluarga dengan anak minimal usia enam tahun bisa menikmati fasilitas ini sehingga alur kedatangan di bandara lebih lancar dan cepat," katanya.</p>
        
        <h2>Optimisme Mudik Lebaran</h2>
        
        <p>Ia pun menekankan keamanan dan kenyamanan masyarakat adalah prioritas Ditjen Imigrasi. "Dengan persiapan yang matang dan pemanfaatan teknologi seperti All Indonesia dan autogate, kami optimis mudik Lebaran tahun ini akan berjalan lebih efisien," tuturnya. (ZIK/TIM)</p>
      `
    },
    {
      id: 4,
      slug: 'persyaratan-baru-paspor-elektronik-2026',
      date: '15 Feb 2026',
      author: 'Immigration Update',
      title: 'Persyaratan Baru Pembuatan Paspor Elektronik 2026',
      subtitle: 'Pemerintah mengeluarkan peraturan baru mengenai persyaratan pembuatan paspor elektronik',
      image: require('../assets/img/article1.png'),
      tags: ['Passport', 'Regulation'],
      readTime: '5 min read',
      content: `
        <p>Pemerintah mengeluarkan peraturan baru mengenai persyaratan pembuatan paspor elektronik untuk meningkatkan keamanan dan pelayanan.</p>
        <p>Peraturan ini bertujuan untuk memperkuat sistem keamanan dokumen perjalanan dan mencegah pemalsuan.</p>
        <h2>Persyaratan Baru</h2>
        <p>Beberapa persyaratan baru yang harus dipenuhi pemohon meliputi:</p>
        <ul>
          <li>Data biometrik yang lebih lengkap</li>
          <li>Verifikasi alamat yang lebih ketat</li>
          <li>Dokumen pendukung tambahan untuk keperluan tertentu</li>
        </ul>
        <h2>Implementasi</h2>
        <p>Peraturan baru ini akan berlaku efektif mulai Maret 2026 di seluruh kantor imigrasi di Indonesia.</p>
      `
    }
  ];

  const popularArticles = [
    {
      id: 2,
      slug: 'persyaratan-baru-paspor-elektronik-2026',
      title: 'Persyaratan Baru Pembuatan Paspor Elektronik 2026',
      author: 'Immigration Update',
      date: '15 Feb 2026',
      image: require('../assets/img/article1.png'),
      readTime: '6 min read'
    },
    {
      id: 3,
      slug: 'cara-mudah-perpanjang-paspor-m-paspor',
      title: 'Cara Mudah Perpanjang Paspor di M-Paspor',
      author: 'Digital Service',
      date: '10 Feb 2026',
      image: require('../assets/img/article2.png'),
      readTime: '5 min read'
    },
    {
      id: 4,
      slug: 'visa-on-arrival-indonesia-2026',
      title: 'Kebijakan Baru Visa on Arrival Indonesia 2026',
      author: 'Travel News',
      date: '01 Feb 2026',
      image: require('../assets/img/article3.png'),
      readTime: '7 min read'
    }
  ];

  const article = articles.find((a) => a.slug === slug);

  const handleBackClick = () => {
    navigate('/news');
  };

  const handlePopularArticleClick = (slug) => {
    navigate(`/news/${slug}`);
  };

  if (!article) {
    return (
      <div className="article-detail-container">
        <div className="article-content">
          <h1>Article Not Found</h1>
          <button className="back-button" onClick={handleBackClick}>← Back to News</button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <div className="article-content">
        <div className="article-header">
          <button className="back-button" onClick={handleBackClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to News
          </button>

          <div className="article-meta">
            <span className="article-date">{article.date}</span>
            <span className="article-author">by {article.author}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>

          <h1 className="article-title">{article.title}</h1>
          {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}

          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="article-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <div className="sidebar">
        <div className="popular-articles">
          <h3>Popular Articles</h3>
          <div className="popular-articles-list">
            {popularArticles.map((popularArticle) => (
              <article
                key={popularArticle.id}
                className="popular-article-card"
                onClick={() => handlePopularArticleClick(popularArticle.slug)}
              >
                <div className="popular-article-image">
                  <img src={popularArticle.image} alt={popularArticle.title} />
                </div>
                <div className="popular-article-content">
                  <h4 className="popular-article-title">{popularArticle.title}</h4>
                  <div className="popular-article-meta">
                    <span className="popular-article-author">{popularArticle.author}</span>
                    <span className="popular-article-date">{popularArticle.date}</span>
                  </div>
                  <span className="popular-article-read-time">{popularArticle.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
