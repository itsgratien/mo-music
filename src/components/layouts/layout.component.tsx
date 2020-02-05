import React, { FunctionComponent } from 'react';
import logo from '../../logo.svg';
const Layout: FunctionComponent = props => {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className='App-logo'>
          <img src={logo} alt='alt' />
          <h1>Momusic</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;
