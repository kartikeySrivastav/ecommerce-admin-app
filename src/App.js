import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';



function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' exact Component={Home} />
					<Route path='/signin' Component={SignIn} />
					<Route path='/signup' Component={SignUp} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
