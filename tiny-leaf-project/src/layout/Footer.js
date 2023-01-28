import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src={require('../images/newlogo.png')} style={{float: 'left', height: '50px'}} alt="Logo" />
      <table>
        <tr>
          <th>Opening hours</th>
          <th>Address</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td>
            Mon - Sat 11am - 12pm <br />
            Sun 11am - 11pm
          </td>
          <td>
            24 Brew Lane <br />
            BR3 WL Cuptown
          </td>
          <td>
            +44 201 998 7562 <br />
            hello@yellowmountain.com
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
