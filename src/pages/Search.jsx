import styled from 'styled-components'
import Footer from '../templates/Footer'
import Header from '../templates/Header'
import Filter from '../components/Filter'
import Pet from '../components/Pet'

const StyledMain = styled.main`
  padding: 2rem;
`;

const StyledArticleList = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

function Search() {

  return (
    <>
      <Header />
      <StyledMain>
        <Filter />
        <StyledArticleList>
          <Pet /> 
        </StyledArticleList>
        <Footer />
      </StyledMain>
    </>
  )
}

export default Search
