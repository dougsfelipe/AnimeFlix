import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 1;
  margin-bottom: -12px;
  display: inline-block;
  padding: 2px;
  color: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 8px;
  font-weight: 300;
  font-size:12px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 18px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left:5%;
  margin-right:5%;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  margin-right: -16px;
  margin-left: -36px;
  background-color: blue;
  
  }
`;