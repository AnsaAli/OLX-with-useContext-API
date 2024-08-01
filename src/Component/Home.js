import React from 'react';
import Header from './Header';
import MenuNavBar from './MenuNavBar';
import Advertisment from './Advertisment';
import Recommentation from './Recommentation';
import NewlyAdded from './NewlyAdded';


const Home = () => {
  return (
    <>
      <Header/>
      <MenuNavBar/>
      <Advertisment/>
      <NewlyAdded/>
      <Recommentation/>
    
    </>
  );
}

export default Home;
