import React from 'react';
import PhotographerAlbums from '../components/PhotographerAlbums';

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
    </div>
  );
};

export default PhotographerProfile;