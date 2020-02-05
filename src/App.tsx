import React, { Fragment } from 'react';
import Search from './components/home/search.component';
import Layout from './components/layouts/layout.component';
import Footer from './components/home/footer.component';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Search />
      </Layout>
      <Footer date={new Date().getFullYear()} />
    </Fragment>
  );
};

export default App;
