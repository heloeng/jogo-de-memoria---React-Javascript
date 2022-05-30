import styled from 'styled-components';

export const Container = styled.div `
width: 200px;
height: 50 px;
display: flex;

background-color: #1550ff;
border-radius: 10px;
cursor: pointer;
opacity: 1;
transition: all ease .3s;

&:hover {
opacity: .8;
}

@media (max-width: 750px){
    width: 90%;
    height: 40px;
      }
`;

export const IconArea = styled.div `
//herda a altura do pai
height: inherit;
display: flex;
justify-content: center;
border-right: 1 px solid rgba(255, 255, 255, .2)
padding: 0 15px;
// background-Color: red;
`;


export const Icon = styled.img `
height: 20px;
`;

export const Label = styled.div `
height: inherit;
color: #FFF;
display: flex;
justify-content: center;
align-items: center;
flex: 1;
padding: 0 20px;
// background-Color: yellow;
`;

