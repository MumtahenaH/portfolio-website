import styled from 'styled-components';
import DP from './DP.svg';
import './App.css';

import ProjectModals from './components/ProjectModal/ProjectModal.js';
import { alignItems, backgroundColor, flexDirection, fontSize, getPx, justifyContent, minHeight } from 'styled-system';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const DPlogo = styled.img({
  maxHeight: '70vmin',
  pointerEvents: 'none',
  alignItems: 'right',
  width: '100%',
  '@media (max-width: 768px)': {
    maxHeight: '90vmin',
    alignSelf: 'center',
  },
 
})

const BodyText = styled.h2({
  textAlign: 'left',
  maxWidth: '70vmin',
  paddingLeft: '60px',
  '@media (max-width: 768px)': {
    paddingLeft: '0',
    textAlign: 'center',
    maxWidth: '100%',
    marginBottom: '20px',
  },
  
})
const ContentWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'space-between',
  gap: '80px',
  margin: '80px', /* Adds spacing above the content */
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '20px',
  },
 
})
const LinkText = styled.a({
  color: 'gray',/* Sets text color to gray */
  textDecoration: 'underline',
  
})
const ContentWrapperComponent = () => (
  <div className="App">
     <ContentWrapper>
    <BodyText>
      Hi! I'm a software developer that likes to make fun projects and work with Machine Learning!
      Check out more of my work at <LinkText href="https://github.com/MumtahenaH" target="_blank">Github</LinkText>.
      Or, you can shoot me an <LinkText href="mailto:mumtahenawork@gmail.com" target="_blank">email</LinkText>! 

    </BodyText>
    <DPlogo src={DP} alt="logo" />
    
  </ContentWrapper>
  
  <ProjectModals id= "projects"/>
  
  
     </div>
 
); 
const StyledNav = styled.nav({
  textAlign: 'start',
  justifyContent: 'space-between',
  padding: '20px',
  marginLeft: '20px',
  backgroundColor: '#ffffff',
  zIndex: '1000',
  position: 'sticky',
  display: 'flex', // Ensure items are displayed in a row
  gap: '50px',
  top: '0',
  

});
const StyledNavitems = styled.div(
{
  display: 'flex', // Ensure items are displayed in a row
  gap: '20px',

  
}
);

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;


`;

const NavbarComponent = () => {
  const scrollToSection = (sectionId) => {
    const anchor = document.querySelector(`#${sectionId}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <StyledNav>
   <h3>
   <StyledLink to="/">Portfolio</StyledLink>
    </h3>
  

    </StyledNav>
  );
};
function App() {
  return (
    <BrowserRouter>
      <div className="App animated animatedFadeInUp fadeInUp">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ContentWrapperComponent />} />
        
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
