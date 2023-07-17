import { useState } from 'react';

import {
  A,
  Button,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Text,
  P,
  ButtonForm,
  Form,
  Input,
  Li,
  Ul
} from '../styles/pages/home';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(null);
  const { t } = useTranslation();

  const handleMouseEnter = (skill) => {
    setActiveSkill(skill);
  };

  const skills = [
    { id: 1, name: 'JavaScript', description: 'Description of Skill 1' },
    { id: 2, name: 'TypeScript', description: 'Description of Skill 2' },
    { id: 3, name: 'Node.js', description: 'Description of Skill 3' },
    { id: 4, name: 'Next.js', description: 'Description of Skill 4' },
    { id: 5, name: 'React', description: 'Description of Skill 5' },
    { id: 6, name: 'ReactNative', description: 'Description of Skill 6' },
    { id: 7, name: 'GitHub', description: 'Description of Skill 7' },
    { id: 8, name: 'Docker', description: 'Description of Skill 8' },
  ];
  

  return (
    <Container1>
      <Container2>
        <Container6>
          <Text>{t('home.greeting')}</Text>
          <Text>{t('home.name')}</Text>
          <Text>{t('home.developer')}</Text>
          <Button>{t('home.github')}</Button>
        </Container6>

        <Text>{t('home.imageText')}</Text>
      </Container2>

      <Container2 id="about">
        <Text>{t('home.imageText')}</Text>

        <Container7>
          <Text>{t('home.about')}</Text>
          <Text>
            <P>{t('home.aboutDescription')}</P>
          </Text>

          <Button>{t('home.linkedin')}</Button>
        </Container7>
      </Container2>

      <Container3 id="services">
        <Container6>
          <Text>{t('home.services')}</Text>
          <P>{t('home.servicesDescription')}</P>
        </Container6>

        <Container6>
          <Container2>
            <Container6>
              <Text>{t('home.development')}</Text>
              <P>{t('home.developmentDescription')}</P>
            </Container6>

            <Container6>
              <Text>{t('home.mobileFriendly')}</Text>
              <P>{t('home.mobileFriendlyDescription')}</P>
            </Container6>
          </Container2>

          <Container2>
            <Container6>
              <Text>{t('home.analytics')}</Text>
              <P>{t('home.analyticsDescription')}</P>
            </Container6>

            <Container6>
              <Text>{t('home.cleanCode')}</Text>
              <P>{t('home.cleanCodeDescription')}</P>
            </Container6>
          </Container2>
        </Container6>
      </Container3>

      <Container4 id="skills">
        <Ul>
          {skills.map((skill) => (
            <Li key={skill.id} onMouseEnter={() => handleMouseEnter(skill)}>
              <A href="#">
                <Text>{skill.name}</Text>
              </A>
            </Li>
          ))}
        </Ul>

        {activeSkill && (
          <Container6>
            <Text>{activeSkill.name}</Text>
            <P>{activeSkill.description}</P>
          </Container6>
        )}
      </Container4>

      <Container5 id="contact">
        <Container6>
          <Text>{t('home.contact')}</Text>
          <P>{t('home.contactDescription')}</P>
          <P>{t('home.socialMedia')}</P>
        </Container6>

        <Form>
          <Input />
          <Input />
          <ButtonForm>{t('home.sendButton')}</ButtonForm>
        </Form>
      </Container5>
    </Container1>
  );
}
