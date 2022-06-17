import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { MainView } from './components/main-view/main-view';

class MeinFlixApp extends React.Component {
	render() {
	  return (
		<div className="meinFlix">
		  <div>Space Movies 2021!</div>
		  <MainView />
		</div>
	  );
	}
  }
  

  const container = document.getElementsByClassName('app-container')[0];
  ReactDOM.render(React.createElement(MeinFlixApp), container);