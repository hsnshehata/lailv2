import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing">
      <header>
        <h1>مرحبا بكم في فيلا ليل</h1>
        <p>منصة فوتوغرافية مبتكرة للمصورين والعملاء.</p>
      </header>
      <section className="features">
        <h2>ميزات فريدة</h2>
        <ul>
          <li>سهولة الحجز</li>
          <li>إدارة الألبومات</li>
          <li>نظام النقاط للمصورين</li>
        </ul>
      </section>
      <footer>
        <p>تواصل معنا لمزيد من المعلومات.</p>
      </footer>
    </div>
  );
};

export default LandingPage;