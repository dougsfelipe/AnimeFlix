import styled from 'styled-components';

export const VideoCardContainer = styled.a`

  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 8px 16px;
  


  transition: opacity .3s;
  transition: transform .3s;
  &:hover,
  &:focus {
    opacity: .5;
    transform: scale(1.02, 1.02);
    
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
