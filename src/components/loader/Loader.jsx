import './loader.css'
const Loader = () => {
  return (
    <div className="main">
        <div className='container--loading'>
        <svg height="200" width="200">
            <circle className='ring' cx="100" cy="102" r="70" stroke="white" fill="none" strokeLinecap="round"/>
            <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
            <circle className='ring' cx="100" cy="102" r="70" stroke="white" fill="none" strokeLinecap="round" filter="url(#blurMe)"/>
        </svg>
            
        </div>
    </div>
    
  )
}

export default Loader
