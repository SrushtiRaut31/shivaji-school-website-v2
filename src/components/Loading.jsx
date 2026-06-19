import { useState, useEffect } from 'react'

function Loading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="loading-icon">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#FF9933" strokeWidth="4" opacity="0.3"/>
            <circle cx="50" cy="50" r="45" stroke="#138808" strokeWidth="4" strokeDasharray="283" strokeDashoffset="75" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        <h2 className="loading-text">श्री छत्रपती शिवाजी विद्यालय</h2>
        <p className="loading-subtitle">दारफळ</p>
      </div>
    </div>
  )
}

export default Loading