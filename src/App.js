import React from 'react';
import logo from './logo.svg';
import './App.css';

class App exends React.Component {
  super(props);
  this.state= {
    title: 'Jake Ball'
    headerLinks: [
      { title: 'Home', path: '/'},
      { title: 'About', path: '/about'},
      { title: 'Contact', path: '/contact'}
    ],
    home: {
      
    }
  }

  render() {
    return(
      <div> Hello from React </div>
    )
  }
}


export default App;
