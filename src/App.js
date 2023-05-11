import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Charts from './Chart';
import Form from './Forms';
import Table from './Table';
import users from './api.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserCard from './UserCard';
import rootReducer from './reducers';

const store = createStore(rootReducer);

function App() {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   }
   const boxStyle = {display: 'flex',
   listStyle: 'none',
   fontWeight: "bolder",
   backgroundColor: 'gray',
   color: isHover? 'red' : 'green',
   justifyContent: 'space-evenly',
   flexWrap: 'wrap',
   margin: 0
 };

  return (
    <Router>
      <nav style={{display: 'block', 
            Width: '100%'}}>
           <ul style={boxStyle}>
             <li style={
            {margin:20,  
          }}>
               <Link onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={{textDecoration: 'none'}} to="/">Home</Link>
             </li>
             <li style={
            {margin:20,
              color: 'green',
          }}>
               <Link style={{textDecoration: 'none'}} to="/charts">Chart</Link>
            </li>            
            <li onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={
            {margin:20,
              
          }}>
               <Link onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={{textDecoration: 'none'}} to="/tables">Table</Link>
             </li>
            <li style={
            {margin:20,
              
          }}>
               <Link onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={{textDecoration: 'none'}} to="/forms">Form</Link>
             </li>
           </ul>
         </nav>
      <Routes>
        <Route path='/' element={
          <div>
            <h1 style={{textAlign: 'center'}}>
            Welcome to this Exciting Project...
          </h1>
          <h2 style={{textAlign: 'center'}}>
          Click on the above links from the navbar to Access different pages...
        </h2>
        <h3 style={{textAlign: 'center'}}>
          If viewing on mobile, then kindly use <span style={{
          color: 'red'
        }}> Desktop site </span> for better experience... 
        </h3>
          </div>
          
        }>

        </Route>
          <Route path="/charts" element={
          <Charts/>
          } />

          <Route path="/tables" element={
          <Table users={users}/>
          } />

          <Route path="/forms" element={
            <Provider store={store}>
              <div>
                <Form />
                <UserCard />
                </div>
                </Provider>
          
                } />
          </Routes>
      
      </Router>
  );
}
export default App;