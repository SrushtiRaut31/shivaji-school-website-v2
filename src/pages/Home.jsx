import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useScrollReveal() {
  const [visibleIds, setVisibleIds] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleIds(prev => new Set(prev).add(entry.target.dataset.reveal))
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return visibleIds
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

function Home() {
  const navigate = useNavigate()
  const visibleIds = useScrollReveal()

  const isRevealed = (id) => visibleIds.has(id)

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero-redesign">
        <div className="hero-redesign-bg">
          <img src="/images/school.jpg.jpeg" alt="श्री छत्रपती शिवाजी विद्यालय" />
        </div>
        <div className="hero-redesign-overlay"></div>
        <div className="hero-redesign-content">
          <div className="hero-redesign-topline">
            <span className="hero-redesign-bar saffron-bar"></span>
            <span className="hero-redesign-tag">शिक्षणधर्मी संस्था</span>
            <span className="hero-redesign-bar green-bar"></span>
          </div>
          <h1 className="hero-redesign-title">
            <span className="hero-redesign-line">श्री छत्रपती शिवाजी</span>
            <span className="hero-redesign-line hero-redesign-highlight">विद्यालय</span>
          </h1>
          <p className="hero-redesign-location">दारफळ (ता.), ता. उत्तर सोलापूर, जि. सोलापूर</p>
          <div className="hero-redesign-divider">
            <svg width="120" height="4" viewBox="0 0 120 4" fill="none">
              <rect width="35" height="4" rx="2" fill="#FF9933"/>
              <rect x="42" width="36" height="4" rx="2" fill="#FFFFFF"/>
              <rect x="85" width="35" height="4" rx="2" fill="#138808"/>
            </svg>
          </div>
          <p className="hero-redesign-motto">"ज्ञान, संस्कार आणि सर्वांगीण विकास"</p>
          <div className="hero-redesign-actions">
            <button className="hero-btn hero-btn-primary" onClick={() => navigate('/about')}>
              आमच्या विषयी
              <svg className="hero-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="hero-btn hero-btn-secondary" onClick={() => navigate('/contact')}>
              <svg className="hero-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              संपर्क
            </button>
          </div>
        </div>
        <div className="hero-redesign-scroll">
          <span className="hero-scroll-text">खाली स्क्रोल करा</span>
          <span className="hero-scroll-arrow"></span>
        </div>
      </section>


      {/* ===== ABOUT SCHOOL SECTION ===== */}
      <section data-reveal="about" className={`about-section ${isRevealed('about') ? 'revealed' : ''}`}>
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
                <strong>श्री छत्रपती शिवाजी विद्यालय</strong>, दारफळ ही उत्तर सोलापूर जिल्ह्यातील एक अग्रगण्य शैक्षणिक संस्था आहे. गेल्या अनेक दशकांपासून या विद्यालयाने ग्रामीण भागात शिक्षणाचा प्रकाश पसरविण्याचे महत्त्वपूर्ण कार्य केले आहे. दारफळ आणि आसपासच्या गावांतील विद्यार्थ्यांना दर्जेदार शिक्षण देऊन त्यांना प्रगतीच्या मार्गावर आणणे हे आमचे प्रमुख उद्दिष्ट आहे.
              </p>
              <p>
                आमचे ध्येय प्रत्येक विद्यार्थ्याला सर्वांगीण विकास करण्यासाठी सुयोग्य वातावरण प्रदान करणे हे आहे. आधुनिक शिक्षणासोबतच पारंपरिक मूल्यांची जोपासना करत विद्यार्थ्यांना भविष्यासाठी सक्षम बनवणे हा आमचा प्रमुख उद्देश आहे. विद्यालयाने आजवर शेकडो विद्यार्थ्यांना घडवून त्यांना समाजाचे जबाबदार नागरिक बनविण्यात मोलाचे योगदान दिले आहे.
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
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-frame">
                <div className="about-image-placeholder">
                  <img src="/images/school.jpg.jpeg" alt="श्री छत्रपती शिवाजी विद्यालय" className="about-real-img" />
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
        </div>
      </section>

      {/* ===== STATISTICS SECTION ===== */}
      <section data-reveal="stats" className={`stats-section ${isRevealed('stats') ? 'revealed' : ''}`}>
        <div className="container">
          <div className="stats-grid">
            <div className="stats-item">
              <span className="stats-icon">🎓</span>
              <span className="stats-number"><AnimatedCounter target={300} suffix="+" /></span>
              <span className="stats-label">विद्यार्थी</span>
            </div>
            <div className="stats-item">
              <span className="stats-icon">👨‍🏫</span>
              <span className="stats-number"><AnimatedCounter target={12} suffix="+" /></span>
              <span className="stats-label">शिक्षक</span>
            </div>
            <div className="stats-item">
              <span className="stats-icon">📋</span>
              <span className="stats-number"><AnimatedCounter target={50} suffix="+" /></span>
              <span className="stats-label">उपक्रम</span>
            </div>
            <div className="stats-item">
              <span className="stats-icon">📅</span>
              <span className="stats-number"><AnimatedCounter target={25} suffix="+" /></span>
              <span className="stats-label">वर्षांचा अनुभव</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <section data-reveal="achievements" className={`highlights-section ${isRevealed('achievements') ? 'revealed' : ''}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">उपलब्धी</span>
            <h2>शाळेची उपलब्धी</h2>
            <div className="header-underline">
              <span className="underline-bar saffron"></span>
              <span className="underline-bar green"></span>
            </div>
            <p className="section-subtitle">आमच्या विद्यालयाच्या मोठ्या उपलब्धी</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card-main">
              <div className="highlight-card-icon">
                <span>📚</span>
              </div>
              <h3>गुणवत्तापूर्ण शिक्षण</h3>
              <p>महाराष्ट्र राज्य शिक्षण मंडळाच्या निर्देशानुसार अभ्यासक्रम राबविण्यात आला आहे. विद्यार्थ्यांना सर्व विषयांचे सखोल ज्ञान दिले जाते.</p>
              <div className="highlight-card-footer">
                <span>शैक्षणिक</span>
              </div>
            </div>
            <div className="highlight-card-main">
              <div className="highlight-card-icon">
                <span>🏆</span>
              </div>
              <h3>क्रीडा सहभाग</h3>
              <p>वार्षिक क्रीडा स्पर्धेत विद्यार्थी सहभागी होतात. क्रिकेट, फुटबॉल, खो-खो, कबड्डी यासह अनेक खेळांमध्ये स्पर्धा केली जाते.</p>
              <div className="highlight-card-footer">
                <span>क्रीडा</span>
              </div>
            </div>
            <div className="highlight-card-main">
              <div className="highlight-card-icon">
                <span>🎭</span>
              </div>
              <h3>सांस्कृतिक यश</h3>
              <p>वार्षिक सांस्कृतिक सोहळ्यात नृत्य, गायन, नाटक आणि कला सादरीकरण होते. विद्यार्थी आपल्या कलागुणांचे प्रदर्शन करतात.</p>
              <div className="highlight-card-footer">
                <span>संस्कृती</span>
              </div>
            </div>
            <div className="highlight-card-main">
              <div className="highlight-card-icon">
                <span>🌳</span>
              </div>
              <h3>पर्यावरण उपक्रम</h3>
              <p>पर्यावरण संरक्षणासाठी दरवर्षी वृक्षारोपण अभियान राबविले जाते. विद्यार्थी, शिक्षक आणि ग्रामस्थ सहभागी होतात.</p>
              <div className="highlight-card-footer">
                <span>पर्यावरण</span>
              </div>
            </div>
            <div className="highlight-card-main">
              <div className="highlight-card-icon">
                <span>🎓</span>
              </div>
              <h3>शिक्षक विकास</h3>
              <p>शिक्षकांच्या व्यावसायिक विकासासाठी नियमित प्रशिक्षण कार्यशाळा आयोजित केल्या जातात. नवीन शिक्षणपद्धती आणि तंत्रज्ञान वापर यावर मार्गदर्शन.</p>
              <div className="highlight-card-footer">
                <span>व्यावसायिक</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTIVITIES SECTION ===== */}
      <section data-reveal="activities" className={`activities-section ${isRevealed('activities') ? 'revealed' : ''}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">उपक्रम</span>
            <h2>मुख्य उपक्रम</h2>
            <div className="header-underline">
              <span className="underline-bar saffron"></span>
              <span className="underline-bar green"></span>
            </div>
            <p className="section-subtitle">विद्यालयातील विविध उपक्रम आणि कार्यक्रम</p>
          </div>
          <div className="home-activities-grid">
            <div className="home-activity-card">
              <div className="home-activity-img">
                <img src="/images/yoga.jpg.jpeg" alt="योग दिन" loading="lazy" />
              </div>
              <div className="home-activity-icon yoga-gradient">
                <span>🧘</span>
              </div>
              <div className="home-activity-body">
                <h3>योग दिन</h3>
                <p>दरवर्षी २१ जून रोजी आंतरराष्ट्रीय योग दिन मोठ्या उत्साहात साजरा केला जातो. योगासने, प्राणायाम आणि ध्यान धारणा शिबिराचे आयोजन केले जाते.</p>
                <div className="home-activity-tag saffron-tag">जून</div>
              </div>
            </div>
            <div className="home-activity-card">
              <div className="home-activity-img">
                <img src="/images/tree.jpg.jpeg" alt="वृक्षारोपण" loading="lazy" />
              </div>
              <div className="home-activity-icon tree-gradient">
                <span>🌳</span>
              </div>
              <div className="home-activity-body">
                <h3>वृक्षारोपण</h3>
                <p>पर्यावरण संरक्षणासाठी दरवर्षी वृक्षारोपण अभियान राबविले जाते. विद्यार्थी, शिक्षक आणि ग्रामस्थ सहभागी होतात. प्रत्येक विद्यार्थ्याला एक झाड लावण्यास प्रोत्साहन.</p>
                <div className="home-activity-tag green-tag">जुलै</div>
              </div>
            </div>
            <div className="home-activity-card">
              <div className="home-activity-img">
                <img src="/images/dance.jpg.jpeg" alt="सांस्कृतिक कार्यक्रम" loading="lazy" />
              </div>
              <div className="home-activity-icon cultural-gradient">
                <span>🎭</span>
              </div>
              <div className="home-activity-body">
                <h3>सांस्कृतिक कार्यक्रम</h3>
                <p>वार्षिक सांस्कृतिक सोहळ्यात नृत्य, गायन, नाटक, कविता वाचन आणि विविध कला सादरीकरण होते. विद्यार्थी आपल्या कलागुणांचे सादरीकरण करतात.</p>
                <div className="home-activity-tag cultural-tag">डिसेंबर</div>
              </div>
            </div>
            <div className="home-activity-card">
              <div className="home-activity-img">
                <img src="/images/training.jpg.jpeg" alt="शिक्षक प्रशिक्षण" loading="lazy" />
              </div>
              <div className="home-activity-icon teacher-gradient">
                <span>🎓</span>
              </div>
              <div className="home-activity-body">
                <h3>शिक्षक प्रशिक्षण</h3>
                <p>शिक्षकांच्या व्यावसायिक विकासासाठी नियमित प्रशिक्षण कार्यशाळा आयोजित केल्या जातात. नवीन शिक्षणपद्धती, तंत्रज्ञान वापर आणि वर्ग व्यवस्थापन यावर मार्गदर्शन.</p>
                <div className="home-activity-tag blue-tag">दरमहा</div>
              </div>
            </div>
            <div className="home-activity-card">
              <div className="home-activity-img">
                <img src="/images/cultural.jpg.jpeg" alt="राष्ट्रीय सण" loading="lazy" />
              </div>
              <div className="home-activity-icon national-gradient">
                <span className="celebration-icon">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                    <circle cx="19" cy="5" r="1.5" fill="white" opacity="0.8"/>
                    <circle cx="21" cy="12" r="1" fill="white" opacity="0.6"/>
                    <circle cx="5" cy="4" r="1" fill="white" opacity="0.7"/>
                    <circle cx="3" cy="14" r="1.2" fill="white" opacity="0.5"/>
                  </svg>
                </span>
              </div>
              <div className="home-activity-body">
                <h3>राष्ट्रीय सण</h3>
                <p>प्रजासत्ताक दिन, स्वातंत्र्य दिन, शिवजयंती, गणेशोत्सव यासारखे राष्ट्रीय व सामाजिक सण मोठ्या प्रमाणावर साजरे केले जातात. देशभक्तीपर कार्यक्रम व बक्षीस वितरण.</p>
                <div className="home-activity-tag saffron-tag">विशेष</div>
              </div>
            </div>
          </div>
          <div className="home-section-action">
            <button className="cta-button primary" onClick={() => navigate('/activities')}>
              सर्व उपक्रम पहा
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW CARD ===== */}
      <section data-reveal="gallery-preview" className={`home-gallery-preview ${isRevealed('gallery-preview') ? 'revealed' : ''}`}>
        <div className="container">
          <div className="home-gallery-preview-card">
            <div className="home-gallery-preview-icon">📸</div>
            <h2>छायाचित्र दालन</h2>
            <p>आमच्या विद्यालयातील विविध उपक्रम, कार्यक्रम आणि क्षण यांची छायाचित्रे पाहण्यासाठी खालील बटणावर क्लिक करा.</p>
            <button className="cta-button primary" onClick={() => navigate('/gallery')}>
              सर्व फोटो पहा
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section data-reveal="cta" className={`cta-strip ${isRevealed('cta') ? 'revealed' : ''}`}>
        <div className="container">
          <div className="cta-content">
            <h2>तुमच्या मुलाच्या भविष्यासाठी आजच संपर्क साधा</h2>
            <p>प्रवेशासाठी आजच संपर्क करा आणि तुमच्या मुलाला दर्जेदार शिक्षणाचा लाभ द्या. आम्ही तुमचे स्वागत करतो.</p>
            <button className="cta-button primary" onClick={() => navigate('/contact')}>
              आजच संपर्क करा
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home