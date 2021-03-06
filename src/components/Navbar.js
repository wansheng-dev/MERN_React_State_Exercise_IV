import React, {useContext} from 'react';
import NameContext from './Context'

function Navbar () {
  const context = useContext(NameContext);
  return (
    <div style={{height: "100px"}} >
      <p>Hi {context.name} !</p>
    </div>
  )
}

export default Navbar;