import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="page-content page-top-padding">
      <section className="contact-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">संपर्क</span>
            <h2>संपर्क करा</h2>
            <div className="header-underline">
              <span className="underline-bar saffron"></span>
              <span className="underline-bar green"></span>
            </div>
            <p className="section-subtitle">आम्हाला भेट द्या किंवा आमच्याशी संपर्क साधा</p>
          </div>
          <div className="contact-content-modern">
            <div className="contact-card-modern">
              <div className="contact-card-icon-wrapper">
                <span className="contact-card-icon">📍</span>
              </div>
              <h3>आमचा पत्ता</h3>
              <div className="contact-detail-block">
                <p>श्री छत्रपती शिवाजी विद्यालय,</p>
                <p>दारफळ (ता.),</p>
                <p>ता. उत्तर सोलापूर,</p>
                <p>जि. सोलापूर</p>
                <p>पिन: 413222</p>
              </div>
              <a href="https://maps.app.goo.gl/8n5DZRnJ2p4UwZem9?g_st=aw" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>🗺️ Google Maps वर पहा</span>
              </a>
            </div>
            <div className="contact-card-modern">
              <div className="contact-card-icon-wrapper">
                <span className="contact-card-icon">📞</span>
              </div>
              <h3>संपर्क क्रमांक</h3>
              <div className="contact-detail-block">
                <div className="contact-row">
                  <span className="contact-row-label">मुख्याध्यापक:</span>
                  <a href="tel:9420956799" className="contact-row-value">9420956799</a>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">शाळा संपर्क:</span>
                  <a href="tel:9420956799" className="contact-row-value">9420956799</a>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">ईमेल:</span>
                  <a href="mailto:info@shivajividyalaya.edu" className="contact-row-value">info@shivajividyalaya.edu</a>
                </div>
              </div>
            </div>
            <div className="contact-card-modern contact-timing-card">
              <div className="contact-card-icon-wrapper">
                <span className="contact-card-icon">⏰</span>
              </div>
              <h3>शाळेची वेळ</h3>
              <div className="contact-detail-block">
                <div className="timing-row-enhanced">
                  <span className="timing-label">सोमवार ते शुक्रवार:</span>
                  <span className="timing-value">सकाळी ११:०० ते सायंकाळी ४:००</span>
                </div>
                <div className="timing-row-enhanced">
                  <span className="timing-label">शनिवार:</span>
                  <span className="timing-value">सकाळी ८:३० ते ११:००</span>
                </div>
                <div className="timing-row-enhanced">
                  <span className="timing-label">रविवार:</span>
                  <span className="timing-value closed">सुट्टी</span>
                </div>
              </div>
              <p className="contact-note">* सुट्टीच्या दिवशी विद्यालय बंद असते.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAP SECTION ===== */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">स्थान</span>
            <h2>आमचे स्थान</h2>
            <div className="header-underline">
              <span className="underline-bar saffron"></span>
              <span className="underline-bar green"></span>
            </div>
            <p className="section-subtitle">श्री छत्रपती शिवाजी विद्यालय, दारफळ येथे आमचा विद्यालय आहे</p>
          </div>
          <div className="map-wrapper">
            <iframe
              src="https://maps.app.goo.gl/8n5DZRnJ2p4UwZem9?g_st=aw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="श्री छत्रपती शिवाजी विद्यालय स्थान"
            ></iframe>
            <div className="map-info-card">
              <div className="map-info-icon">📍</div>
              <div className="map-info-content">
                <h4>श्री छत्रपती शिवाजी विद्यालय</h4>
                <p>दारफळ (ता.)</p>
                <p>ता. उत्तर सोलापूर</p>
                <p>जि. सोलापूर</p>
                <p>पिन: 413222</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact