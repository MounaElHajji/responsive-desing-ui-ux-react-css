import './App.css';

import {Article, Brand, Cta, Navbar} from './components'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
          <Navbar />
          <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Brand />
      <Footer />

    </div>
  );
}

export default App;
