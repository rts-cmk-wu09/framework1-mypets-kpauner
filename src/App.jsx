import styled from 'styled-components'
import Footer from './templates/Footer'
import Header from './templates/Header'
import Filter from './components/Filter'
import Pet from './components/Pet'

const StyledMain = styled.main`
  padding: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function App() {

  return (
    <>
      <Header />
      <StyledMain>
        <ListContainer>
          <Pet /> 
        </ListContainer>
        <Footer />
      </StyledMain>
    </>
  )
}

export default App
