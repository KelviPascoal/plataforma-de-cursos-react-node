import styled from "styled-components";

export const Container = styled.header`
  background-color: #121214;
  border-bottom: 2px solid #29292e;
  height: 48px;
  padding: 0 12px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    h1 {
      color: #898989;

      &::first-letter {
        color: #009ac3;
      }
    }
  }
  @media (max-width: 879px) {
    height: 100px;
    width: 100%;
    flex-direction: column;
    align-items: center;

    .logo {
        position: relative;
        margin-right: 60%;
    }

}
`;
export const MenuPagesButtons = styled.div`
  width: 400px;

  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;
    color:  #898989;
    font-size: 16px;

    &:hover{
        border-bottom: 2px solid #009ac3;
        color: #fff;
    }
  }
`;

export const AuthButtons = styled.div`

button {
    height: 40px;
    color: #fff;
    background-color: #009ac3;
    border: 0;
    margin-left: 16px;
    padding: 0 8px;
    border-radius: 5px;
    font-weight: 700;

    &:first-child{
        background-color: transparent;
    }

}
@media (max-width: 879px) {
    position: absolute;
    margin-left: 60%;
}
`;

