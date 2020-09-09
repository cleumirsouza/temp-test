import React from 'react'
import './home.scss';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Te amo s2
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
