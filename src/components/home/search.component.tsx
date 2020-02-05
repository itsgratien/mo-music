import React, { FunctionComponent } from 'react';

const Search: FunctionComponent = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <form>
          <div className='form-input'>
            <input type='text' placeholder='search' />
            <div className='searchIcon'>
              <i className='fa fa-search' aria-hidden='true'></i>
            </div>
          </div>
        </form>
      </div>
      <div className='mp-player'>
        <audio autoPlay controls>
          <source src=''></source>
        </audio>
      </div>
      <div className='search-list'>
        <ul>
          <li>
            <div>eminem - I am not afraid</div>
            <div className='search-play-icon' role='button'>
              <i className='fa fa-play-circle' aria-hidden='true'></i>
            </div>
          </li>
          <li>
            <div>Alicia keys -underdog</div>
            <div className='search-play-icon' role='button'>
              <i className='fa fa-play-circle' aria-hidden='true'></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
