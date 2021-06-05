import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-space-between;

  div {
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

  .controllers {
    button {
      border-radius: 5px;
      width: 80px;
      background-color: #009ac3;
      color: #fff;
    }
  }
`;
