import styled from "styled-components";
import { Link } from 'react-router-dom'
import Button from "../components/Button"
import animal from '../assets/Animal.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 2rem;
    text-align: center;
    color: #828282;
`;

const Heading = styled.h1`
    font-size: 1.5rem;
    padding-bottom: .2rem;
    font-weight: 800;
    color:black;
`;

function Onboarding() {

    return (
      <>
        <Wrapper>
            <img src={animal} />
            <main>
                <Heading>My Pets</Heading>
                <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
            </main>
            <Link to="/" ><Button title="Click me" /></Link>
        </Wrapper>
      </>
    )
  }
  
  export default Onboarding