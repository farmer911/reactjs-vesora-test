import { useEffect, useState } from 'react';
import './ErrorTab.scss'

const ErrorTab = (): JSX.Element => {

  const [isAnimation, setIsAnimation] = useState(false)

  useEffect(() => {
    setIsAnimation(true)
  }, [])

  useEffect(() => {
    if (isAnimation) {
      setTimeout(() => {
        setIsAnimation(false)
      }, 2000)
    }
  }, [isAnimation])

  return (
    <div className="error-tab d-flex d-center">
      {
        isAnimation
          ? <div className="loader">...</div>
          : <div className='error-tab__no-items'>No Items</div>
      }
    </div>
  )
}

export default ErrorTab;