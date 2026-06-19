import { useNavigate } from 'react-router-dom'

function AboutUs() {
  const navigate = useNavigate()

  return (
    <div className="page-content page-top-padding">
      <section className="about-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">आमच्याबद्दल</span>
            <h2>आमच्या विषयी</h2>
            <div className="header-underline">
              <span className="underline-bar saffron"></span>
              <span className="underline-bar green"></span>
            </div>
            <p className="section-subtitle">जाणून घ्या आमच्या विद्यालयाचा वारसा आणि दृष्टिकोन</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-quote">
                <span className="quote-icon">"</span>
                <p>शिक्षण म्हणजे जीवनाचा पाया</p>
              </div>
              <p>
                <strong>श्री छत्रपती शिवाजी विद्यालय</strong>, दारफळ हा उत्तर सोलापूर जिल्ह्यात स्थित एक प्रतिष्ठित शैक्षणिक संस्था आहे. गेल्या अनेक दशकांपासून आम्ही समाजसेवा आणि गुणवत्तेच्या शिक्षणाचा वारसा पुढे चालवत आहोत.
              </p>
              <p>
                आमचे ध्येय प्रत्येक विद्यार्थ्याला सर्वांगीण विकास करण्यासाठी सुयोग्य वातावरण प्रदान करणे हे आहे. आधुनिक शिक्षणासोबतच पारंपरिक मूल्यांची जोपासना करत विद्यार्थ्यांना भविष्यासाठी सक्षम बनवणे हा आमचा प्रमुख उद्देश आहे.
              </p>
              <p>
                आमच्या विद्यालयाची स्थापना शैक्षणिक क्षेत्रात क्रांती घडवून आणण्याच्या उद्देशाने करण्यात आली. तेव्हापासून आम्ही हजारो विद्यार्थ्यांना गुणवत्तापूर्ण शिक्षण देऊन त्यांना यशस्वी जीवनासाठी सज्ज केले आहे. आमचा विश्वास आहे की प्रत्येक विद्यार्थ्यामध्ये काहीतरी विशेष गुण असतो आणि तो गुण शोधून त्याचा विकास करणे ही आमची जबाबदारी आहे.
              </p>
              <div className="about-features">
                <div className="about-feature-item">
                  <span className="about-feature-icon">🎯</span>
                  <div>
                    <h4>आमचे ध्येय</h4>
                    <p>प्रत्येक विद्यार्थ्याला गुणवत्तापूर्ण शिक्षण देऊन त्यांचा सर्वांगीण विकास करणे.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">👁️</span>
                  <div>
                    <h4>आमचे दृष्टिकोन</h4>
                    <p>शिक्षणाच्या माध्यमातून समाजात सकारात्मक बदल घडवून आणणे.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-icon">✨</span>
                  <div>
                    <h4>आमची मूल्ये</h4>
                    <p>प्रामाणिकपणा, शिस्त, आदर आणि उत्कृष्टतेचा पाठपुरावा.</p>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">२५+</span>
                  <span className="stat-label">वर्षांचा वारसा</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">५००+</span>
                  <span className="stat-label">विद्यार्थी</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">३०+</span>
                  <span className="stat-label">अनुभवी शिक्षक</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">९५%</span>
                  <span className="stat-label">परीक्षा निकाल</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-frame">
                <div className="about-image-placeholder">
                  <img src="/images/shivaji-maharaj.jpg.png" alt="छत्रपती शिवाजी महाराज" className="about-real-img" />
                </div>
                <div className="about-image-shape"></div>
              </div>
              <div className="about-principal-message">
                <div className="principal-avatar">
                  <span>📖</span>
                </div>
                <div className="principal-text">
                  <h4>प्रधानाचार्यांचा संदेश</h4>
                  <p>"विद्यार्थ्यांच्या सर्वांगीण विकासासाठी आम्ही सदैव प्रयत्नशील आहोत. गुणवत्तापूर्ण शिक्षण, संस्कार आणि क्रीडा यांचा समन्वय साधून आम्ही भविष्याची उज्ज्वल निर्मिती करतो."</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="cta-button primary" onClick={() => navigate('/academics')}>
              शैक्षणिक विभाग पहा
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs