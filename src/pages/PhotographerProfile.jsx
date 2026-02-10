import React from 'react';
import PhotographerAlbums from '../components/PhotographerAlbums';
import WhatsAppIcon from '../assets/whatsapp-icon.svg'; // استيراد أيقونة WhatsApp

const PhotographerProfile = ({ photographer }) => {
  return (
    <div>
      <header>
        <h1>{photographer.name}</h1>
        <img src={photographer.image || '/default-profile.png'} alt={photographer.name} />
        <p>{photographer.bio}</p>
      </header>
      <section>
        <h2>ألبوماته</h2>
        <PhotographerAlbums />
      </section>
      <section>
        <h2>منشوراته</h2>
        <div className="posts">
          {/* إضافة وظائف للمنشورات لاحقًا */}
        </div>
      </section>
      <section>
        <h2>أسعار الخدمات</h2>
        <ul>
          <li>جلسة تصوير (ساعة): 100$</li>
          <li>جلسة تصوير (يوم كامل): 500$</li>
          <li>حجز ألبوم صور: 300$</li>
          <li>سعر عرض خاص: 200$</li>
        </ul>
        <a href="#" className="whatsapp-button">
          <img src={WhatsAppIcon} alt="احجز الباكدج" />
        </a>
      </section>
    </div>
  );
};

export default PhotographerProfile;