import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import Nav from './nav';
import './style.scss';

function Test(props) {
  const { id } = useParams();
  return (
    <div>
      {' '}
      ID:
      {id}
    </div>
  );
}

function About(props) {
  return <div> All there is to know about me </div>;
}

function Welcome(props) {
  return <div>Welcome</div>;
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
