import styled from 'styled-components';
import Project1 from '../../../src/Project1.png';
import Project2 from '../../../src/Project2.png';
import Project3 from '../../../src/Project3.png';
import { textAlign } from 'styled-system';

const StyledProjects = styled.div(
    {
      display: 'flex', // Ensure items are displayed in a row
      justifyItems: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '50px',
      margin: '80px', /* Adds spacing above the content */
      
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '20px',
  },
      
    }
  );
  const StyledItems = styled.div({
    display: 'table-column',
    gap: '100px',
  });
  const ProjectImg = styled.img({
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    borderRadius: '15px',
    width: 'calc(100% + 50px)',  // Add 50px to the width
    maxHeight: '70vmin',
    
    maxWidth: '642px',
    
    
 
  '@media (max-width: 793px)': {
      maxHeight: '90vmin',
      alignSelf: 'center',
    },
    '&:hover': {
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',

        transform: 'translateY(-5px)',
      },
   
  });
  const BodyText = styled.p({
    textAlign: 'left',
    maxWidth: '70vmin',
    paddingLeft: '60px',
    '@media (max-width: 768px)': {
      paddingLeft: '0',
      textAlign: 'center',
      maxWidth: '100%',
      marginBottom: '20px',
    }
  });
  
 
function ProjectModals(){
    return(
      <StyledItems>
        <StyledProjects>
        <ProjectImg src={Project1}>

        </ProjectImg>
      
        <BodyText>
		<h2>Skin Condition Detection <span>Using YOLOv8</span></h2>
		<p>An AI skincare solution that identifies targeted skin conditions and recommends products accordingly.</p>
		</BodyText>
     
        
        </StyledProjects>
        <StyledProjects>
        <ProjectImg src={Project2}>

        </ProjectImg>
      
        <BodyText>
		<h2>Transfer Value Estimation Of English Premier League Players <span>Using Machine Learning</span></h2>
		<p>Using a data-driven approach requires the support of machine learning techniques to predict the transfer values of the Premier League players based on a dataset of performance metrics, demographic attributes, and financial records.</p>
		</BodyText>
     
        
        </StyledProjects>
        <StyledProjects>
        <ProjectImg src={Project3}>

        </ProjectImg>
      
        <BodyText>
		<h2>TravelEase <span>A Software Solution to Flight Booking</span></h2>
		<p>A user-friendly software platform designed to simplify travel planning by providing seamless options for booking flights and hotels.Detailed flight pages with essential information such as departure and arrival times and detailed hotel pages that include room types and user reviews. Also has voice search feature for further accessibility. </p>
		</BodyText>
     
        
        </StyledProjects>
      </StyledItems>
        
            

         
           
       
       
    )
}
export default ProjectModals;