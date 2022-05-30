import styled from "styled-components";

export const Container = styled.div`
  whidth: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;
  // background-color: blue;

  @media (max-width: 750px) {
    flex-direction: column;
    img
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  //  background-color: red;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;
export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
//  background-color: green;
  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 100%;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px) {
  justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
width: 430px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 10px;

@media (max-width: 750px){
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  }

@media (max-width: 550px){
grid-template-columns: repeat(2, 1fr);
}

`


