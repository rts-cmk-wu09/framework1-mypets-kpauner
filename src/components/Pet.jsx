import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import Favorite from '../components/Favorite';
import placeholder from '../assets/placeholder.png'
import Filter from './Filter';

const StyledArticle = styled.article`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  text-align: left;
  padding: 1rem;
  border-radius: 1rem;
  background: #f5f5fa;
  box-shadow: 8px 8px 24px #aaaacc89, -12px -12px 24px #ffffff;
`;
const Description = styled.div`
  position: relative;
  width: 100%;
`;

const StyledFavContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledFigure = styled.figure`
  background-color: antiquewhite;
  padding:1rem;
  > img {
    object-fit: cover;
  }
`;


const Pet = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the access token using your OAuth2 credentials
        const tokenResponse = await axios({
          method: 'post',
          url: 'https://api.petfinder.com/v2/oauth2/token',
          data: {
            grant_type: 'client_credentials',
            client_id: 'ynHABm71HuaXpkAa3rKb771QLhcKFcOUZoF2khF1aL4RfjIlv8',
            client_secret: '47a4YMuY3MO6CqF3Nx18KUfMGrnBGUjGJQebbbEb',
          },
        });

        const accessToken = tokenResponse.data.access_token;

        // Use the access token to make the actual API request
        const apiResponse = await axios({
          method: 'get',
          url: 'https://api.petfinder.com/v2/animals',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setData(apiResponse.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Filter data={data.animals} />
      {console.log(data.animals)}
      {data && data.animals && data.animals.map((pet) => (             
          <StyledArticle key={pet.id}>
            <StyledFigure>
              {pet.photos.length > 0 ? (
                <img src={pet.photos[0].small} alt={pet.name} />
              ) : (
                <img src={placeholder} alt="Placeholder" />
              )}
            </StyledFigure>
            <Description>
              <Link to={`/details/${pet.id}`} key={pet.id}>
                <h2>{pet.name}</h2>
              </Link>
              <div><FaBell />Location</div>  
              <p>{pet.description}</p>
              <StyledFavContainer>
                <Favorite />
              </StyledFavContainer>
            </Description>
          </StyledArticle>         
      ))}
    </>

  );
};

export default Pet;
