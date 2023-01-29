import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src={require('../images/newlogo.png')} style={{float: 'left', height: '50px'}} alt="Logo" />
      <table>
        <tr>
          <th className="header-cell1">Opening hours</th>
          <th className="header-cell2">Address</th>
          <th className="header-cell3">Contact</th>
        </tr>
        <tr>
          <td className="cell1">
            Mon - Sat 11am - 12pm <br />
            Sun 11am - 11pm
          </td>
          <td className="cell2">
            24 Brew Lane <br />
            BR3 WL Cuptown
          </td>
          <td className="cell3">
            +44 201 998 7562 <br />
            hello@yellowmountain.com
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
