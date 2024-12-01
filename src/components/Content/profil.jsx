import React from 'react';
import './profil.css';

const Profil = () => (
  <div className="profile-container">
    <div className="profile-left">
      <img src="mike.jpg" alt="Iron Mike" className="profile-img" />
      <h3>Michael Gerard Tyson</h3>
      <p>Nicknamed: Iron Mike</p>
      <p>Born: June 30, 1966</p>
      <p>Nationality: American</p>
    </div>
    <div className="profile-right">
      <h3>General Information</h3>
      <ul>
        <li>Height: 5 ft 10 in (1.78 m)</li>
        <li>Weight: Heavyweight</li>
        <li>Reach: 71 in (180 cm)</li>
        <li>Style: Orthodox</li>
        <li>Years Active: 1985–2005</li>
      </ul>
      <h3>Other Information</h3>
      <p>
        Michael Gerard Tyson is an American former professional boxer. He was
        the undisputed world heavyweight champion and holds the record as the
        youngest boxer to win a heavyweight title at 20 years old.
      </p>
    </div>
  </div>
);

export default Profil;
