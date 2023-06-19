import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const StyledFavorite = styled.button`
    width: 2rem;
    height: 2rem;
    padding-top: 0.3rem;
    text-align:center;
    color: #FF4B33;
    text-align: center;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 8px 8px 12px #aaaacc89, -12px -12px 12px #ffffff;
`;

const Favorite = () => {
    return (  
        <StyledFavorite>         
            <FaHeart />
        </StyledFavorite>
    );
}
 
export default Favorite;