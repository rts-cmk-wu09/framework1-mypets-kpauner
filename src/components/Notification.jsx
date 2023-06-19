import { FaBell } from "react-icons/fa";
import styled from "styled-components";

const StyledNotification = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    padding-top: 0.3rem;
    text-align:center;
    color: #5533EA;
    text-align: center;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 8px 8px 12px #aaaacc89, -12px -12px 12px #ffffff;
`;

const Notification = () => {
    return (  
        <StyledNotification>         
            <FaBell />
        </StyledNotification>
    );
}
 
export default Notification;