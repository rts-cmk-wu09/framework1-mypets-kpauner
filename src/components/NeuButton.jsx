import styled from "styled-components";

const StyledNeuButton = styled.button`
    height: 6rem;
    width:6rem;
    border-radius: 50px;
    background: #f5f5fa;
    box-shadow: 8px 8px 12px #aaaacc89, -12px -12px 12px #ffffff;
`;

const NeuButton = () => {
    return (  
        <StyledNeuButton />
    );
}
 
export default NeuButton;