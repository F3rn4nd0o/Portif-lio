import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Container1, Container2, Text } from "../styles/components/footer";
import { ContainerFooter } from "../styles/pages/app";
import { light } from "../styles/theme/light";

export function Footer({ theme }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  const name = 'Fernando Vasconcelos Melo Costa'
  const name2 = 'Fernando V. M. Costa'

  return (
    <ContainerFooter style={theme === light ? { background: '#00c16c', color: '#fff'} : {}} >
      <Container1>
      {
        isSmallScreen 
        ?
        <Container2>
          <Text>{name2}</Text>
          <Text>Todos os direitos reservados</Text>
        </Container2>
        : 
        <Text>{name} - Todos os direitos reservados</Text> 
      }
      </Container1>
    </ContainerFooter>
  )
}