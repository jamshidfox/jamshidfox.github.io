import Avatar from 'react-avatar';
import Toby from '../../../assets/toby.jpg';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
const Logo = () => {
  return (
    <UncontrolledButtonDropdown className="dropdown-user nav-item" style={{ border: 'none' }}>
      <DropdownToggle
        size="lg"
        className="nav-link dropdown-user-link"
        style={{ backgroundColor: 'transparent', border: 'none' }}
      >
        <Avatar style={{ objectFit: 'cover' }} src={Toby} size="50" round={true} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem tag="a">Profile</DropdownItem>
        <DropdownItem tag="a">Settings</DropdownItem>
        <DropdownItem tag="a">Log Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
};

export default Logo;
