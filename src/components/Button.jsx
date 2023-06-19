import styled from "styled-components";

const StyledButton = styled.button`
    background: #57419D;
    padding: .8rem;
    width: 100%;
    border-radius: 50px;
    box-shadow:  5px 5px 30px #bebebe,
    -20px -20px 60px #ffffff;
`;

const Button = ({ title }) => {
    return (  
        <StyledButton>
            {title}
        </StyledButton>
    );
}
 
export default Button;