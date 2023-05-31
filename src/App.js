import React from 'react';
import './App.css';
import Layout from './components/Layout';
import RouteElement from './components/routes/RouteElement';

function App() {
  return (
    <div className="App">
    <Layout>
    <RouteElement/>
    </Layout>
    </div>
  );
}

export default App;
