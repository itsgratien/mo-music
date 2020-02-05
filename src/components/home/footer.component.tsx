import React, { FunctionComponent } from 'react';
type IFooter = {
  date: string | number;
};
const Footer: FunctionComponent<IFooter> = ({ date }) => {
  return (
    <div className='App-footer'>
      <div>
        <p>gratien - momusic @{date}</p>
      </div>
      <div>
        <p>Follow me on</p>
        <div className='follow'>
          <a href='https://www.github.com/itsgracian' target='blank'>
            <i className='fa fa-github-square' aria-hidden='true'></i>
          </a>
          <a href='http://twitter.com/itsgracian' target='blank'>
            <i className='fa fa-twitter-square' aria-hidden='true'></i>
          </a>
          <a href='https://www.instagram.com/itsgracian/' target='blank'>
            <i className='fa fa-github-square' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
