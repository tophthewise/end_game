import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Story from './Pages/Story/Story';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import { render } from 'react-dom';


render((  	 
	
		<BrowserRouter>
			<Fragment>
					  		<Switch>
						  		<Route  exact path='/' component={Home}/>
						  		<Route path="/Story" component={Story}/>

				</Switch>
			</Fragment>

  		</BrowserRouter>
), document.getElementById('root'));


