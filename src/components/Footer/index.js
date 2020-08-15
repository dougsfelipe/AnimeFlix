import React from 'react';
import { FooterBase, IMG , Link} from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <IMG src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Feito por <Link href="https://github.com/dougsfelipe"> Douglas Santos </Link>durante a Imersão React da
        {' '}
        <Link href="https://www.alura.com.br/">
           Alura
        </Link>
      </p>
    </FooterBase>
  );
}

export default Footer;