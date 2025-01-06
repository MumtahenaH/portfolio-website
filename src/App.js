import styled from 'styled-components';
import DP from './DP.svg';
import './App.css';
import './components/Navbar/Navbar.js';
import Navbar from './components/Navbar/Navbar.js';
import { alignItems, backgroundColor, flexDirection, fontSize, getPx, justifyContent, minHeight } from 'styled-system';


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
  

function App() {
  return (
    <div className="App">
      <Navbar />
     <ContentWrapper>
     <BodyText>
          Hi! I'm a software developer that likes to make stuff!
          
         </BodyText>
         <DPlogo src={DP} alt="logo" >
        
        </DPlogo>
        
     </ContentWrapper>
     
     
       
         

        
       
      
    </div>
  );
}

export default App;
