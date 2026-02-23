import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/News.css';

const News = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Articles');

  const tabs = [
    'All Articles',
    'Immigration',
    'Passport',
    'Visa',
    'News'
  ];

  const newsData = [
    {
      id: 1,
      slug: 'viral-biaya-paspor-650000-hangus-gagal-wawancara',
      date: '23 Feb 2026',
      author: 'KORANTRANSAKSI.com',
      title: 'Viral, Biaya Paspor Rp 650.000 Hangus usai Gagal Wawancara, Ini Penjelasan Imigrasi?',
      description: 'Media Sosial X saat ini ramai membahas soal biaya pembuatan Paspor Rp 650.000 yang hangus jika pemohon gagal di tahap wawancara.',
      image: require('../assets/img/ilustrasi-paspor-indonesia-1763966055112_169.webp'),
      tags: ['Passport', 'Immigration', 'News'],
      layout: 'normal'
    },
    {
      id: 2,
      slug: 'masuk-bali-tidak-resmi-7-wn-bangladesh-diamankan',
      date: '23 Feb 2026',
      author: 'KORANTRANSAKSI.com',
      title: 'Masuk Bali Secara Tidak Resmi, 7 WN Bangladesh Diamankan',
      description: 'Tujuh Warga Negara Asing (WNA) asal Bangladesh berhasil diamankan oleh Kantor Imigrasi Denpasar karena memasuki wilayah Bali tanpa melalui pemeriksaan resmi.',
      image: require('../assets/img/699be0db4db24.webp'),
      tags: ['Immigration', 'Bali', 'News'],
      layout: 'normal'
    },
    {
      id: 3,
      slug: 'imigrasi-himbau-pemudik-international-isi-all-indonesia-h-3',
      date: '23 Feb 2026',
      author: 'KORANTRANSAKSI.com',
      title: 'Imigrasi Himbau Pemudik International Untuk Isi All Indonesia Sejak H-3',
      description: 'Ditjen Imigrasi merekomendasikan pemudik untuk mengisi deklarasi All Indonesia sebelum keberangkatan untuk mempercepat proses pemeriksaan di bandara.',
      image: require('../assets/img/all-indonesia.jpg'),
      tags: ['Immigration', 'Travel', 'Digital'],
      layout: 'normal'
    },
    {
      id: 4,
      slug: 'persyaratan-baru-paspor-elektronik-2026',
      date: '15 Feb 2026',
      author: 'Immigration Update',
      title: 'Persyaratan Baru Pembuatan Paspor Elektronik 2026',
      description: 'Pemerintah mengeluarkan peraturan baru mengenai persyaratan pembuatan paspor elektronik untuk meningkatkan keamanan dan pelayanan.',
      image: require('../assets/img/article1.png'),
      tags: ['Passport', 'Regulation'],
      layout: 'normal'
    },
    {
      id: 5,
      slug: 'cara-mudah-perpanjang-paspor-m-paspor',
      date: '10 Feb 2026',
      author: 'Digital Service',
      title: 'Cara Mudah Perpanjang Paspor di M-Paspor',
      description: 'Aplikasi M-Paspor memudahkan masyarakat untuk melakukan perpanjangan paspor secara online tanpa perlu datang ke kantor imigrasi.',
      image: require('../assets/img/article2.png'),
      tags: ['Passport', 'Digital'],
      layout: 'normal'
    },
    {
      id: 6,
      slug: 'visa-on-arrival-indonesia-2026',
      date: '01 Feb 2026',
      author: 'Travel News',
      title: 'Kebijakan Baru Visa on Arrival Indonesia 2026',
      description: 'Pemerintah Indonesia mengeluarkan kebijakan baru terkait Visa on Arrival untuk mempermudah wisatawan asing berkunjung.',
      image: require('../assets/img/article3.png'),
      tags: ['Visa', 'Travel'],
      layout: 'normal'
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleArticleClick = (articleSlug) => {
    navigate(`/news/${articleSlug}`);
  };

  const renderNewsCard = (news) => {
    if (news.layout === 'large') {
      return (
        <article key={news.id} className="news-card large-card" onClick={() => handleArticleClick(news.slug)}>
          <div className="news-content">
            <div className="news-meta">
              <span className="news-date">{news.date}</span>
              <span className="news-author">by {news.author}</span>
            </div>
            <h2 className="news-title">{news.title}</h2>
            {news.description && (
              <p className="news-description">{news.description}</p>
            )}
            {news.tags.length > 0 && (
              <div className="news-tags">
                {news.tags.map((tag, index) => (
                  <span key={index} className="news-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
          <div className="news-image">
            <img src={news.image} alt={news.title} />
          </div>
        </article>
      );
    }

    return (
      <article key={news.id} className="news-card normal-card" onClick={() => handleArticleClick(news.slug)}>
        <div className="news-image">
          <img src={news.image} alt={news.title} />
        </div>
        <div className="news-content">
          <div className="news-meta">
            <span className="news-date">{news.date}</span>
            <span className="news-author">by {news.author}</span>
          </div>
          <h3 className="news-title">{news.title}</h3>
          {news.description && (
            <p className="news-description">{news.description}</p>
          )}
          {news.tags.length > 0 && (
            <div className="news-tags">
              {news.tags.map((tag, index) => (
                <span key={index} className="news-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  };

  const filteredNews = activeTab === 'All Articles' 
    ? newsData 
    : newsData.filter(article => article.tags.includes(activeTab));

  return (
    <div className="news-container">
      <div className="news-box-container">
      <div className="news-header">
        <h1>News and insights from<br />our experts</h1>
      </div>

      <div className="news-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="news-grid">
        <div className="news-row">
          {filteredNews.slice(0, 3).map(renderNewsCard)}
        </div>
        
        <div className="news-row">
          {filteredNews.slice(3, 6).map(renderNewsCard)}
        </div>
      </div>
      </div>

    </div>
  );
};

export default News;