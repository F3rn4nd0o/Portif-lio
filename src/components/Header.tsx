import { useState } from 'react';
import { Container1, Container2, Container3, HeaderText, A, Button } from "../styles/components/header";
import { ContainerHeader } from "../styles/pages/app";

import { useTranslation } from 'react-i18next';

import pt from '../assets/brazil.svg';
import en from '../assets/usa.svg';

import Moon from '../assets/monn.svg'
import Sun from '../assets/sun.svg'

import Image from 'next/image'

export function Header({ toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false); // Estado para controlar o idioma

  const [ theme, setTheme] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsEnglish(language === 'en'); // Define o estado com base no idioma selecionado
  };

  const scrollToAnchor = (event, anchor) => {
    event.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  function ChangeTheme() {
    toggleTheme()

    if(theme === true) {
      setTheme(false)
    }

    if(theme === false) {
      setTheme(true)
    }
  }

  return (
    <ContainerHeader>
      <Container1>
        <Container2>
          <HeaderText>Fernando Melo</HeaderText>
        </Container2>

        <Container3>
          <A href="#about" onClick={(event) => scrollToAnchor(event, '#about')}>{t('home.about')}</A>
          <A href="#services" onClick={(event) => scrollToAnchor(event, '#services')}>{t('home.services')}</A>
          <A href="#skills" onClick={(event) => scrollToAnchor(event, '#skills')}>{t('home.skills')}</A>
          <A href="#contact" onClick={(event) => scrollToAnchor(event, '#contact')}>{t('home.contact')}</A>
          <Button onClick={() => changeLanguage(isEnglish ? 'pt' : 'en')}>
            {isEnglish ? <Image src={en} alt="USA" style={{ width: '24px', height: '24px'}} /> : <Image src={pt} alt="Brazil" style={{ width: '24px', height: '24px'}} />}
          </Button>

          <Button onClick={ChangeTheme}>
            {theme ? <Image src={Moon} alt="moon" style={{ width: '24px', height: '24px'}} /> : <Image src={Sun} alt="Sun" style={{ width: '24px', height: '24px'}} /> }
          </Button>
        </Container3>
      </Container1>
    </ContainerHeader>
  );
}
