import styled,{ keyframes } from 'styled-components';


export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
 
`;

export const TitleContainer = styled.h1`
  font-size: 38px;
  margin: 15px;
  margin-left: 50px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 50px;
  margin-left:0;
  margin-right:0;
  width:80%; 
  margin-left:auto;
  margin-right:auto;
  @media only screen and (max-width: 800px){
    width:100%;
  }
  @media only screen and (max-width: 700px){
    width:80%;
  }
  @media only screen and (max-width: 530px){
    width:100%;
  }
`;

