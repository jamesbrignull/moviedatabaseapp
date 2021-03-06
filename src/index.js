import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchMovies from './SearchMovie.js'
import * as serviceWorker from './serviceWorker';


class Main extends React.Component {
  render(){
    return(
      <div className='container'>
        <h1 className='title'>Movie Database Search</h1>
        <SearchMovies />
      </div>
    )
  }
}



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
