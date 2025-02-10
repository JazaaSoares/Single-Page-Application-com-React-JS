import React from 'react';
import Header from './components/Header/index.tsx';
import MediaSocial from './components/MediaSocial/index.tsx';
import SobreMim from './components/SobreMim/index.tsx';

const App: React.FC = () => {
  return (
    <div id="all">
      <Header />
      <MediaSocial />
      <SobreMim />
    </div>
  );
};

export default App;