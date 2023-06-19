import styled from "styled-components";
import profile from '../assets/profile.png'

const StyledProfile = styled.figure`
    width: 36px;
    height: 36px;
`;

const StyledImg = styled.img`
    border-radius: 50%;
    border: 4px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

const Profile = () => {
    return (  
        <StyledProfile>
            <StyledImg src={profile} alt="" />
        </StyledProfile>
    );
}
 
export default Profile;