import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.css';
import { useEffect } from 'react';

function App() {
  let items = ['Home'];
  let appname = "Todo App";

  useEffect(() => {
    // Set the document title to the app name whenever the component mounts
    document.title = appname;
  }, [appname]); // The effect will run whenever appname changes

  return (
    <>
    <Header appname={appname} navbaritems={items} />
    <Body />
    <Footer copyright={appname} footeritems={items}/>
    </>
  );
}

export default App;
