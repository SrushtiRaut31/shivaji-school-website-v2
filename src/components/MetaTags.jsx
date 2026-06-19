import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageMeta = {
  '/': {
    title: 'श्री छत्रपती शिवाजी विद्यालय दारफळ | उत्तर सोलापूर',
    description: 'श्री छत्रपती शिवाजी विद्यालय, दारफळ (ता.), ता. उत्तर सोलापूर, जि. सोलापूर. गुणवत्तापूर्ण शिक्षण, सांस्कृतिक उपक्रम, योग, वृक्षारोपण आणि विद्यार्थी विकास.',
    keywords: 'श्री छत्रपती शिवाजी विद्यालय, दारफळ, उत्तर सोलापूर, सोलापूर, मराठी शाळा, शिक्षण'
  },
  '/about': {
    title: 'आमच्या विषयी | श्री छत्रपती शिवाजी विद्यालय दारफळ',
    description: 'श्री छत्रपती शिवाजी विद्यालय, दारफळचा वारसा, ध्येय, दृष्टिकोन आणि मूल्ये. उत्तर सोलापूर जिल्ह्यातील प्रतिष्ठित शैक्षणिक संस्था.',
    keywords: 'आमच्या विषयी, श्री छत्रपती शिवाजी विद्यालय, दारफळ, शिक्षण संस्था'
  },
  '/academics': {
    title: 'शैक्षणिक विभाग | श्री छत्रपती शिवाजी विद्यालय',
    description: 'श्री छत्रपती शिवाजी विद्यालयातील शैक्षणिक कार्यक्रम, विभाग, सुविधा आणि अभ्यासक्रम. इयत्ता पाचवी ते दहावी.',
    keywords: 'शैक्षणिक, विद्यालय दारफळ, शिक्षण, अभ्यासक्रम, गणित, विज्ञान, भाषा'
  },
  '/activities': {
    title: 'उपक्रम | श्री छत्रपती शिवाजी विद्यालय',
    description: 'श्री छत्रपती शिवाजी विद्यालयातील विविध उपक्रम - योग दिन, वृक्षारोपण, सांस्कृतिक कार्यक्रम, राष्ट्रीय सण, शिक्षक प्रशिक्षण.',
    keywords: 'उपक्रम, योग दिन, वृक्षारोपण, सांस्कृतिक, राष्ट्रीय सण, शिक्षक प्रशिक्षण'
  },
  '/gallery': {
    title: 'छायाचित्र दालन | श्री छत्रपती शिवाजी विद्यालय',
    description: 'श्री छत्रपती शिवाजी विद्यालय, दारफळच्या विविध उपक्रम, कार्यक्रम आणि क्षणांची छायाचित्रे.',
    keywords: 'छायाचित्र दालन, फोटो, विद्यालय, दारफळ, उपक्रम'
  },
  '/contact': {
    title: 'संपर्क | श्री छत्रपती शिवाजी विद्यालय दारफळ',
    description: 'श्री छत्रपती शिवाजी विद्यालय, दारफळ (ता.), ता. उत्तर सोलापूर, जि. सोलापूर. संपर्क क्रमांक, ईमेल, वेळापत्रक आणि Google Maps.',
    keywords: 'संपर्क, दारफळ, उत्तर सोलापूर, विद्यालय पत्ता, फोन नंबर, ईमेल'
  }
}

function MetaTags() {
  const location = useLocation()
  const meta = pageMeta[location.pathname] || pageMeta['/']

  useEffect(() => {
    document.title = meta.title
    
    const updateMetaTag = (selector, content) => {
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement(selector.replace('meta.', 'meta'))
        if (selector.startsWith('meta[name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)[1])
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('meta[name="description"]', meta.description)
    updateMetaTag('meta[name="keywords"]', meta.keywords)
    
    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', meta.title)
    updateMetaTag('meta[property="og:description"]', meta.description)
    updateMetaTag('meta[property="og:url"]', `https://shivajividyalaya.edu${location.pathname}`)
    
    // Update Twitter tags
    updateMetaTag('meta[name="twitter:title"]', meta.title)
    updateMetaTag('meta[name="twitter:description"]', meta.description)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://shivajividyalaya.edu${location.pathname}`)
  }, [location.pathname, meta])

  return null
}

export default MetaTags