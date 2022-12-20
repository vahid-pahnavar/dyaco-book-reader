//@ts-nocheck
import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
