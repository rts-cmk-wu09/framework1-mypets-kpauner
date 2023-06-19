import styled from "styled-components";
import Profile from "../components/Profile";
import CityDropdown from "../components/CityDropdown";
import Notification from "../components/Notification";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    color: black;
`;

const Header = () => {
    return (
        <>
        <div className="wrapper">
            <StyledHeader>
                <Profile />
                <CityDropdown />
                <Notification />
            </StyledHeader>
        </div>
        </>  
    );
}
 
export default Header;