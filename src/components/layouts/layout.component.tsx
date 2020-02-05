import React, { FunctionComponent } from 'react';

const Layout: FunctionComponent = props => {
  return <div className='App'>{props.children}</div>;
};
export default Layout;
