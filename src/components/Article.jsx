import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Tambah ini
import '../styles/Articles.css';

const Articles = () => {
  const navigate = useNavigate(); // ✅ Tambah ini

  const handleArrowClick = (articleSlug) => {
    navigate(`/news/${articleSlug}`);
  };
  

  return (
    <div className="articles-container">
      <div className="articles-header">
        <h1>News & Updates
        </h1>
        <p>
        Discover the latest visa regulations, travel tips, and Indobiz Corner updates here.
        </p>
      </div>

      <div className="articles-grid">
        {/* Latest Articles - Top 3 */}
        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/ilustrasi-paspor-indonesia-1763966055112_169.webp')} 
              alt="Ilustrasi Paspor Indonesia"
            />
          </div>
          <div className="article-content">
            <h3>Viral, Biaya Paspor Rp 650.000 Hangus usai Gagal Wawancara, Ini Penjelasan Imigrasi?</h3>
            <div className="article-footer">
              <span className="article-date">23 Feb 2026</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("viral-biaya-paspor-650000-hangus-gagal-wawancara")}
                aria-label="Read more about passport fee explanation"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/699be0db4db24.webp')} 
              alt="Humas Imigrasi Kelas I TPI Denpasar"
            />
          </div>
          <div className="article-content">
            <h3>Masuk Bali Secara Tidak Resmi, 7 WN Bangladesh Diamankan</h3>
            <div className="article-footer">
              <span className="article-date">23 Feb 2026</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("masuk-bali-tidak-resmi-7-wn-bangladesh-diamankan")}
                aria-label="Read more about Bangladesh immigrants detained in Bali"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/all-indonesia.jpg')} 
              alt="Aplikasi All Indonesia"
            />
          </div>
          <div className="article-content">
            <h3>Imigrasi Himbau Pemudik International Untuk Isi All Indonesia Sejak H-3</h3>
            <div className="article-footer">
              <span className="article-date">23 Feb 2026</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("imigrasi-himbau-pemudik-international-isi-all-indonesia-h-3")}
                aria-label="Read more about All Indonesia app for travelers"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        {/* Previous Articles */}
        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/article1.png')} 
              alt="Modern library interior with curved architecture"
            />
          </div>
          <div className="article-content">
            <h3>Cepat, Tegas dan Lugas Bukti Nyata Kanim Kelas I Non TPI Bekasi Jaring 27 WNA</h3>
            <div className="article-footer">
              <span className="article-date">13 Dec 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("cepat-tegas-lugas-kanim-bekasi-jaring-27-wna")}
                aria-label="Read more about Kanim Bekasi operation"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/article2.png')} 
              alt="Green technology and environmental illustration"
            />
          </div>
          <div className="article-content">
            <h3>Anggota DPR Berikan Apresiasi Terhadap Kinerja Ditjen Imigrasi Terkait Kasus Haji Tanpa Visa Resmi</h3>
            <div className="article-footer">
              <span className="article-date">05 Sep 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("dpr-apresiasi-ditjen-imigrasi-kasus-haji-tanpa-visa")}
                aria-label="Read more about DPR appreciation to Immigration"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/article3.png')} 
              alt="Deforested area showing environmental impact"
            />
          </div>
          <div className="article-content">
            <h3>6 WNA Terjaring Razia di Apartemen Kalibata City</h3>
            <div className="article-footer">
              <span className="article-date">23 Aug 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("6-wna-terjaring-razia-kalibata-city")}
                aria-label="Read more about Kalibata City raid"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Articles;
