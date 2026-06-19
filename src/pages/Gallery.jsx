import { useState, useEffect, useCallback } from 'react'

const galleryImages = [
  {
    src: '/images/cultural.jpg.jpeg',
    icon: '🎭',
    title: 'सांस्कृतिक कार्यक्रम',
    caption: 'विद्यार्थ्यांचे नृत्य सादरीकरण'
  },
  {
    src: '/images/dance.jpg.jpeg',
    icon: '🎭',
    title: 'सांस्कृतिक कार्यक्रम',
    caption: 'विद्यार्थ्यांचे नृत्य सादरीकरण'
  },
  {
    src: '/images/training.jpg.jpeg',
    icon: '🎓',
    title: 'शिक्षक प्रशिक्षण',
    caption: 'शिक्षकांसाठी व्यावसायिक कार्यशाळा'
  },
  {
    src: '/images/tree.jpg.jpeg',
    icon: '🌳',
    title: 'वृक्षारोपण उपक्रम',
    caption: 'पर्यावरण संरक्षणासाठी वृक्षारोपण'
  },
  {
    src: '/images/cultural.jpg.jpeg',
    icon: '🎪',
    title: 'विद्यार्थी उपक्रम',
    caption: 'विविध विद्यार्थी उपक्रम आणि स्पर्धा'
  },
  {
    src: '/images/yoga.jpg.jpeg',
    icon: '🧘',
    title: 'योग दिन',
    caption: 'आंतरराष्ट्रीय योग दिन साजरा'
  }
]

function Lightbox({ image, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!image) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="बंद करा">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.title}
          className="lightbox-img"
          loading="lazy"
        />
        <div className="lightbox-caption">
          <span className="lightbox-icon">{image.icon}</span>
          <div className="lightbox-text">
            <h3>{image.title}</h3>
            <p>{image.caption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="page-content page-top-padding">
      <section className="gallery-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">दालन</span>
            <h2>छायाचित्र दालन</h2>
            <div className="header-underline">
              <span className="underline-bar saffron"></span>
              <span className="underline-bar green"></span>
            </div>
            <p className="section-subtitle">आमच्या विद्यालयाचे क्षण चित्ररूपात</p>
          </div>
          <div className="gallery-grid-real">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="gallery-real-card"
                onClick={() => setSelectedImage(img)}
              >
                <div className="gallery-real-image-wrapper">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="gallery-real-img"
                    loading="lazy"
                  />
                  <div className="gallery-real-overlay">
                    <div className="gallery-real-overlay-content">
                      <span className="gallery-real-icon">{img.icon}</span>
                      <span className="gallery-real-view-text">पहा</span>
                    </div>
                  </div>
                </div>
                <div className="gallery-real-footer">
                  <span className="gallery-real-footer-icon">{img.icon}</span>
                  <div className="gallery-real-footer-text">
                    <h3>{img.title}</h3>
                    <p>{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}

export default Gallery