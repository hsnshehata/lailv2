import React, { useState } from 'react';

const PhotographerAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [isRandom, setIsRandom] = useState(false);

  const handleCreateAlbum = () => {
    setAlbums([...albums, { name: newAlbumName, photos: [] }]);
    setNewAlbumName('');
  };

  const handleToggleRandom = () => {
    setIsRandom(!isRandom);
  };

  return (
    <div>
      <h2>إدارة الألبومات</h2>
      <input 
        type="text" 
        value={newAlbumName} 
        onChange={(e) => setNewAlbumName(e.target.value)} 
        placeholder="اسم الألبوم" 
      />
      <button onClick={handleCreateAlbum}>إنشاء ألبوم</button>
      <div>
        <input 
          type="checkbox" 
          checked={isRandom} 
          onChange={handleToggleRandom} 
        />
        <label>عرض عشوائي للصور</label>
      </div>
      <ul>
        {albums.map((album, index) => (
          <li key={index}>{album.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhotographerAlbums;
