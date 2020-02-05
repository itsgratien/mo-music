import React, { FunctionComponent, useState, useRef, Fragment } from 'react';
import axios from 'axios';
import { IState } from './home.interface';

const { REACT_APP_RAPID_HOST, REACT_APP_RAPID_API_KEY } = process.env;
const Search: FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    item: '',
    searchItems: [],
    music: ''
  });
  const { searchItems } = state;
  const searchValue = useRef<HTMLInputElement>(null);
  const onChange = async () => {
    const value = searchValue.current?.value;
    await searchMusic(value);
  };
  const searchMusic = async (value: string | undefined) => {
    try {
      const URL: string = 'https://deezerdevs-deezer.p.rapidapi.com/search';
      const { data } = await axios.get(`${URL}/?q=${value}`, {
        headers: { 'x-rapidapi-host': REACT_APP_RAPID_HOST, 'x-rapidapi-key': REACT_APP_RAPID_API_KEY }
      });
      setState({
        ...state,
        searchItems: typeof data.data !== 'undefined' ? data.data : []
      });
    } catch (error) {
      setState({
        ...state,
        searchItems: []
      });
    }
  };
  const playMusic = (preview: string): void => {
    setState({
      ...state,
      music: preview
    });
  };
  return (
    <Fragment>
      <div className='search'>
        <div className='search-form'>
          <form autoComplete='off'>
            <div className='form-input'>
              <input type='text' placeholder='search' onKeyUp={onChange} name='item' ref={searchValue} />
              <div className='searchIcon'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </div>
            </div>
          </form>
        </div>
        <div className='mp-player'>
          <audio controls autoPlay>
            {state.music.length !== 0 && <source src={state.music}></source>}
          </audio>
        </div>
        <div className='search-list'>
          {searchItems.length <= 0 && <p>no music available</p>}
          {searchItems && searchItems.length > 0 && (
            <ul>
              {searchItems.map((item: any, index: number) => (
                <li key={index}>
                  <div>
                    {item.artist.name} - {item.title}
                  </div>
                  <div className='search-play-icon' role='button' onClick={() => playMusic(item.preview)}>
                    <i className='fa fa-play-circle' aria-hidden='true'></i>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
