import React, { useContext } from 'react';
import { UseUserAuthContext } from '../components/Component1.js';

const Component5 = () => {
    const {user}=UseUserAuthContext();
    console.log('user',user);
  return (
    <div>
      <h3>Component 5 {user}</h3>
      {/* Hello {user} */}
    </div>
  )
}

export default Component5
