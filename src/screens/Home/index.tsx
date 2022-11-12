import React from 'react'
import { Navigate } from 'react-router-dom';

const Home = () => {
    const authentication = false;
  return (
    <div>
        asdasdasd
        {!authentication && (
          <Navigate to="/login" replace={true} />
        )}
    </div>
  )
}

export default Home