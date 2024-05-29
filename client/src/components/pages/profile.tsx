import styled from "styled-components"
// const pic = require('../../assets/R')
import R from '../../assets/R.png'


const Profile = () => {
  return (
    <>
    <MainContainer>
    <Section>
   {/* <h1>Upload an Image</h1> */}
    <img src={R} alt=" profile picture"  /> 
    <InfoDiv>
        <h1>John Doe</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </InfoDiv>
   </Section>

   <InfoDiv2>
   <h1>INFORMATION</h1>
   <hr />
   <Underlined>

   </Underlined>

   <InfoDiv3>
    <h2>Email</h2>
    <p> sampleEmail@gmail.com</p>

    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam.</p>

    <h2>Link shortened</h2>
    <p>10</p>

    <h2>Reviews</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, harum?</p>
    
    

   </InfoDiv3>
     
   
   </InfoDiv2>
     
    </MainContainer>
   


   
   

    
    </>
  )
}

export default Profile

const Section = styled.section`
  background-color: #627292;
  /* background: linear-gradient(90deg, #e9c155 0%, rgba(228, 127, 50, 0.8) 100%); */
  background: linear-gradient(90deg, rgba(233, 193, 85, 0.8) 0%, rgba(228, 127, 50, 0.6) 100%);

  height: 100vh;
  width: 30vw;
  display: flex;
  
  flex-direction: column;
  /* justify-content: space-around; */

  img{
    height: 150px;
    width: 150px;
    border-radius: 20%;
    margin-left: 29%;
    margin-top: 80px;
      }

      
      
      /* h1{
        color: #262725;
        font-weight: 500;
        font-size: larger;
        padding-left: 25%;
        margin-bottom: 50px;
        margin-top: 20px;
        border-bottom: 2px solid  ;
        
      } */


`;

const InfoDiv = styled.div`
display: flex;
flex-direction: column;
margin: auto;
padding-left: 20%;
justify-content: center;
  h1 {
    
   /* align-items: center; */
    font-size: 24px;
    color: #333;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }

`;

const MainContainer = styled.div`
  display: flex;
  justify-content: safe;
  /* justify-content: space-between; */
`
const InfoDiv2= styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
/* margin-right: 200px; */
h1{
  /* margin-left: 250px; */
  margin-left: 200px;
    font-size: 24px;
    color: #333;
  
  
}
 hr{
  width: 100%;
  height: 1px;
  color: black;
 }

`


const Underlined= styled.div`
margin-left: 250px;
   width: 100%;  /* Adjust width as needed */
  height: 1px;  /* Adjust height for line thickness */
  background-color: #ccc; /* Set line color */
  margin: 10px 0;  /* Adjust spacing if needed */
`

const InfoDiv3 = styled.div`
display: flex;
margin-top: 20%;
flex-direction: column;
height: 200px;
h2{
  color: #333;
  font-weight: bold;

}
p{
  margin-top: 10px;
  margin-bottom: 17px;
    font-size: 16px;
    color: #666;

}
  
`