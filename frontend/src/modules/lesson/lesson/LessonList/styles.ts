import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;


export const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 16px;

  button {
    border-radius: 5px;
    border: 0;
    width: 400px;
    color: #898989;
    padding-left: 24px;
    text-align: initial;
    background-color: #0c0e0f;
    height: 60px;

    & + button {
      margin-top: 8px;
    }

    &:hover {
      filter: brightness(1.2);
      color: #fff;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 20px 12px 0 12px;
    background-color: transparent;
    border: 0;
    color: #898989;
    font-size: 26px;
    font-weight: 700;

    &:hover {
      color: #009ac3;
    }
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;

  video {
    border-radius: 5px;
    background-color: #0c0e0f;
    width: 800px;
    height: 480px;
  }
`;
