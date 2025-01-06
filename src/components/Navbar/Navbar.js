
import { justifyContent } from 'styled-system';
import styled from 'styled-components';

const StyledNav = styled.nav({
    textAlign: 'start',
    justifyContent: 'start',
    padding: '20px',
    marginLeft: '20px',
    backgroundColor: '#E5E5E5',

});

function Navbar() {
  return (

   <StyledNav>
    <h3>Portfolio</h3>
    </StyledNav>
  );
}
export default Navbar;