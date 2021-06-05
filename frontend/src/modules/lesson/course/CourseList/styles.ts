import styled from "styled-components";

export const Container = styled.div`
  a {
    padding: 20px;
    background-color: #1f1f23;
    height: 360px;
    min-width: 240px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: space-around;

    strong {
      font-size: 28px;
      color: #fff;
    }

    img {
      border-radius: 5px;
      height: 80px;
      width: 80px;
    }
    
      span {
        text-align: left;
        font-size: 18px;
        color: #fff;
    }
  }
`;

export const Section = styled.section`
  padding: 0 80px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (max-width: 1028px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 764px)  {
  grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 528px) {
    grid-template-columns: 1fr;
  }
`;
