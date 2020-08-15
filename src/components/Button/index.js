import styled from 'styled-components';

const Button = styled.button`
color: var(--white);
background-color: #7F7CAF;
box-sizing: border-box;
margin-right: 10px;
cursor: pointer;
padding: 12px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 2px;
text-decoration: none !important;
border: none;
display: inline-block;
transition: opacity .3s;
&:hover,
&:focus {
  opacity: .5;
}
`;

export default Button