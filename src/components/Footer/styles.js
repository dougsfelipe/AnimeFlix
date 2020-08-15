import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid #7f7caf;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  font-size: 14px;
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const IMG = styled.img`
  width: 180px;
`;

export const Link = styled.a`
  text-decoration:none;
  font-weight: 600;
  color: #7f7caf;
`;