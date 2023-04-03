import './App.css';
import { Routes, Route } from 'react-router-dom';
import LODGN from './screens/LODGN'
import Layout from './components/Layout';
import Error from './screens/Error';

function App() {

  return (
    <Routes>
      <Route index element={<LODGN />} />
      <Route path='*' element={<Error />} />
      {/* <Route path='*' element={<Layout><p>page not found</p></Layout>} /> */}
    </Routes>
    
  );
}

export default App;
