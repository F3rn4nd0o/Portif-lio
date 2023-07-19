
import { useTranslation } from "react-i18next";
import { Container1, Text } from "../styles/components/footer";
import { ContainerFooter } from "../styles/pages/app";
import { light } from "../styles/theme/light";

export function Footer({ theme }) {
  const { t } = useTranslation();

  return (
    <ContainerFooter style={theme === light ? { background: '#00c16c', color: '#fff'} : {}} >
      <Container1>
        <Text>{t('home.name')} - Todos os direitos reservados</Text>
      </Container1>
    </ContainerFooter>
  )
}