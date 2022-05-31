import './App.css';
import React, { Component } from 'react';
import Enterprisemenu from './components/enterprise/menu';
import Enterprisevoice from './components/enterprise/enterprisevoice';
import { StyledEngineProvider } from '@mui/material/styles';

class App extends Component {
  render() {
    return (
	<StyledEngineProvider injectFirst>
      <div id="colorlib-page">
        <div id="container-wrap">
         		<div id="colorlib-main">
         		<Enterprisemenu></Enterprisemenu>
         		</div>
					<div>
					<Enterprisevoice/>
          	</div>
      	</div>
      </div>
      
      </StyledEngineProvider>
      
    );
  }
}
export default App;
