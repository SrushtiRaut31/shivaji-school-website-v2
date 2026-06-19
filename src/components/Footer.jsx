import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon-portrait">
                <img src="/images/shivaji-maharaj.jpg.png" alt="छत्रपती शिवाजी महाराज" />
              </div>
              <div className="footer-logo-text">
                <h4>श्री छत्रपती शिवाजी विद्यालय</h4>
                <p>दारफळ, उत्तर सोलापूर</p>
              </div>
            </div>
            <p>शिक्षणाचे महत्त्व विद्यार्थ्यांना पटवून देऊन त्यांचे भविष्य उज्ज्वल करणे हा आमचा सर्वोपरि प्रयत्न आहे. गुणवत्तापूर्ण शिक्षण, संस्कार आणि क्रीडा यांचा समन्वय.</p>
          </div>
          <div className="footer-section">
            <h4>त्वरित लिंक</h4>
            <ul>
              <li><Link to="/" aria-label="मुख्यपृष्ठ">मुख्यपृष्ठ</Link></li>
              <li><Link to="/about" aria-label="आमच्या विषयी">आमच्या विषयी</Link></li>
              <li><Link to="/academics" aria-label="शैक्षणिक विभाग">शैक्षणिक</Link></li>
              <li><Link to="/activities" aria-label="उपक्रम">उपक्रम</Link></li>
              <li><Link to="/gallery" aria-label="छायाचित्र दालन">छायाचित्र दालन</Link></li>
              <li><Link to="/contact" aria-label="संपर्क माहिती">संपर्क</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>संपर्क माहिती</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">📍</span>
              <p>दारफळ (ता.), ता. उत्तर सोलापूर,<br/>जि. सोलापूर - ४१३२५१</p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">📞</span>
              <p>
                <a href="tel:9420956799" aria-label="फोन नंबर 1">9420956799</a><br/>
                <a href="tel:9420956799" aria-label="फोन नंबर 2">9420956799</a>
              </p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">✉️</span>
              <p><a href="mailto:info@shivajividyalaya.edu" aria-label="ईमेल पत्ता">info@shivajividyalaya.edu</a></p>
            </div>
          </div>
          <div className="footer-section">
            <h4>विद्यालय वेळ</h4>
            <div className="footer-timing">
              <div className="timing-row">
                <span>सोम - शुक्र:</span>
                <span>सकाळी ११ - ४</span>
              </div>
              <div className="timing-row">
                <span>शनिवार:</span>
                <span>सकाळी ८:३० - ११:००</span>
              </div>
              <div className="timing-row">
                <span>रविवार:</span>
                <span className="closed-text">सुट्टी</span>
              </div>
            </div>
            <p className="footer-note">* सुट्टीच्या दिवशी विद्यालय बंद</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} श्री छत्रपती शिवाजी विद्यालय, दारफळ. सर्वाधिकार सुरक्षित.</p>
            <div className="footer-bottom-links">
              <a href="#" aria-label="गोपनीयता धोरण">गोपनीयता धोरण</a>
              <a href="#" aria-label="सेवा अटी">सेवा अटी</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer