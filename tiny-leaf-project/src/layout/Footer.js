import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src={require('../images/newlogo.png')} style={{float: 'left', height: '50px'}} alt="Logo" />
      <table>
        <tr>
          <th className="opening-hours">Opening hours</th>
          <th className="Address">Address</th>
          <th className="Contact">Contact</th>
        </tr>
        <tr>
          <td className="hours">
            Mon - Sat 11am - 12pm <br />
            Sun 11am - 11pm
          </td>
          <td className="main-address">
            24 Brew Lane <br />
            BR3 WL Cuptown
          </td>
          <td className="contact-us">
            +44 201 998 7562 <br />
            hello@yellowmountain.com
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
