import { useEffect, useState } from 'react';
import {
  Container1,
  Container2,
  Container3,
  HeaderText,
  A,
  Button,
  LinksContainer,
  A2,
  CloseButton,
} from "../styles/components/header";
import { ContainerHeader } from "../styles/pages/app";

import { useTranslation } from 'react-i18next';

import pt from '../assets/brazil.svg';
import en from '../assets/usa.svg';

import Moon from '../assets/monn.svg'
import Sun from '../assets/sun.svg'
import Menu from '../assets/menu.svg'
import Menu2 from '../assets/menu2.svg'
import Close from '../assets/close.svg'
import Close2 from '../assets/close2.svg'

import Image from 'next/image'

export function Header({ toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [theme, setThemes] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsEnglish(language === 'en');
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
    setThemes(prevTheme => !prevTheme);
  }

  function handleShowLinks() {
    setShowLinks(true);
  }

  function handleCloseLinks() {
    setShowLinks(false);
  }

  const breakpointWidth = 890;

  useEffect(() => {
    function updateIsSmallScreen() {
      setIsSmallScreen(window.innerWidth <= breakpointWidth);
    }

    updateIsSmallScreen();

    window.addEventListener('resize', updateIsSmallScreen);

    return () => {
      window.removeEventListener('resize', updateIsSmallScreen);
    };
  }, []);

  return (
    <ContainerHeader>
      <Container1>
        <Container2>
          <HeaderText>{t('home.name')}</HeaderText>
        </Container2>

        <Container3>
          {!isSmallScreen && (
            <>
              <A href="#about" onClick={(event) => scrollToAnchor(event, '#about')}>
                {t('home.about')}
              </A>
              <A href="#services" onClick={(event) => scrollToAnchor(event, '#services')}>
                {t('home.services')}
              </A>
              <A href="#skills" onClick={(event) => scrollToAnchor(event, '#skills')}>
                {t('home.skills')}
              </A>
              <A href="#contact" onClick={(event) => scrollToAnchor(event, '#contact')}>
                {t('home.contact')}
              </A>
            </>
          )}

          <Button onClick={() => changeLanguage(isEnglish ? 'pt' : 'en')}>
            {isEnglish ? (
              <Image src={en} alt="USA" style={{ width: '24px', height: '24px' }} />
            ) : (
              <Image src={pt} alt="Brazil" style={{ width: '24px', height: '24px' }} />
            )}
          </Button>

          <Button onClick={ChangeTheme}>
            {theme ? (
              <Image src={Moon} alt="moon" style={{ width: '24px', height: '24px' }} />
            ) : (
              <Image src={Sun} alt="Sun" style={{ width: '24px', height: '24px' }} />
            )}
          </Button>

          {isSmallScreen && (
            <Button onClick={handleShowLinks}>
              <Image
                src={theme ? Menu2 : Menu }
                alt="Botão de exibir links"
                style={{ width: '32px', height: '32px' }}
              />
            </Button>
          )}

        </Container3>
        {showLinks && (
          <LinksContainer style={theme ? { backgroundColor: '#fff' } : {}}>
            <CloseButton onClick={handleCloseLinks}>
              <Image
                src={theme ? Close2 : Close}
                alt="Botão de exibir links"
                style={{ width: '32px', height: '32px' }}
              />
            </CloseButton>
            <A2 href="#about" onClick={(event) => { scrollToAnchor(event, '#about'); handleCloseLinks(); }}>
              {t('home.about')}
            </A2>
            <A2 href="#services" onClick={(event) => { scrollToAnchor(event, '#services'); handleCloseLinks(); }}>
              {t('home.services')}
            </A2>
            <A2 href="#skills" onClick={(event) => { scrollToAnchor(event, '#skills'); handleCloseLinks(); }}>
              {t('home.skills')}
            </A2>
            <A2 href="#contact" onClick={(event) => { scrollToAnchor(event, '#contact'); handleCloseLinks(); }}>
              {t('home.contact')}
            </A2>
          </LinksContainer>
        )}
      </Container1>
    </ContainerHeader>
  );
}
