import styled from "styled-components";

const StyledFilter = styled.div`
    display: flex;
    gap: 1rem;
    padding-block: 1rem;
`;

const Button = styled.button`
min-width: 5rem;
    padding: .4rem;
    font-weight: 700;
    text-transform: capitalize;
    color: #7878AB;
    border-radius: 50px;
    background: #f5f5fa;
    box-shadow: 8px 8px 24px #aaaacc89, -12px -12px 24px #ffffff;
`;

const Filter = ({ data }) => {
    const uniqueTypes = [...new Set(data.map(item => item.type))];
  
    return (
      <StyledFilter>
        {uniqueTypes.map(type => (
          <Button key={type}>{type}</Button>
        ))}
      </StyledFilter>
    );
  };
  
  export default Filter;