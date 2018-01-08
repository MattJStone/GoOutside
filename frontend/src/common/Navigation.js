import React from 'react';
import { Link } from 'react-router-dom';

const setActiveButton = (params) => {
  const btn = params.target;

  const kids = [...btn.parentNode.parentNode.childNodes];

  kids.map((e) => {
    const current = e;
    current.className = current.id === btn.parentNode.id ? 'active' : '';
    return current;
  });
};

const Navigation = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul id="navPages" className="nav navbar-nav">
        <li id="home" className="active"> <Link to="/" onClick={setActiveButton}>Home</Link></li>
        <li id="time"><Link to="/time" onClick={setActiveButton}>Time</Link></li>
        <li id="page2"><Link to="#" onClick={setActiveButton}>Page 2</Link></li>
        <li id="page3"><Link to="#" onClick={setActiveButton}>Page 3</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
      </ul>
    </div>
  </nav>);

export default Navigation;
