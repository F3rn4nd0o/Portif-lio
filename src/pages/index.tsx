import { useState } from 'react';

import Image from 'next/image'

import {
  A,
  A2,
  A3,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  Container9,
  ContainerTitle,
  TitleLine,
  Text,
  TextInput,
  TextName,
  P,
  ColInput,
  TextArea,
  Li,
  Ul,
  Skill
} from '../styles/pages/home';

import { useTranslation } from 'react-i18next';

import Arrow from '../assets/arrow.svg'
import Code from '../assets/code.svg'
import Mouse from '../assets/mouse.svg'
import Responsive from '../assets/responsive.svg'
import search from '../assets/search.svg'
import Github from '../assets/github-icon.svg'
import Docker from '../assets/docker.svg'
import Js from '../assets/logo-javascript.svg'
import Next from '../assets/next-js.svg'
import NodeJs from '../assets/nodejs-icon.svg'
import ReactJs from '../assets/react-2.svg'
import ReactNative from '../assets/react-native-1.svg'
import Ts from '../assets/typescript.svg'

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(null);
  const { t } = useTranslation();

  const handleMouseEnter = (skill) => {
    setActiveSkill(skill);
  };

  const skills = [
    { id: 1, name: 'JavaScript', description: t('home.JavaScript'), score: 9, image: Js },
    { id: 2, name: 'TypeScript', description: t('home.TypeScript'), score: 9, image: Ts },
    { id: 3, name: 'Node.js', description: t('home.Node'), score: 9, image: NodeJs },
    { id: 4, name: 'Next.js', description: t('home.Next'), score: 8, image: Next },
    { id: 5, name: 'React', description: t('home.React'), score: 8, image: ReactJs },
    { id: 6, name: 'ReactNative', description: t('home.ReactNative'), score: 9, image: ReactNative },
    { id: 7, name: 'GitHub', description: t('home.GitHub'), score: 8, image: Github },
    { id: 8, name: 'Docker', description: t('home.Docker'), score: 7, image: Docker },
  ];
  

  return (
    <Container1>
      <Container2>
        <Container6>
          <Text>{t('home.greeting')}</Text>
          <TextName>{t('home.name')}</TextName>
          <Text>{t('home.developer')}</Text>
          <A2 style={{ marginTop: '2rem'}}>
            {t('home.github')}
            <Image src={Arrow} alt='Arrow' />
          </A2>
        </Container6>

        <Text>{t('home.imageText')}</Text>
      </Container2>

      <Container2 id="about">
        <Text>{t('home.imageText')}</Text>

        <Container7>
          <ContainerTitle>
            <Text>{t('home.about')}</Text>
            <TitleLine />
          </ContainerTitle>
          <Text>
            <P>{t('home.aboutDescription')}</P>
          </Text>

          <A2>
            {t('home.linkedin')}
            <Image src={Arrow} alt='Arrow' />
          </A2>
        </Container7>
      </Container2>

      <Container3 id="services" style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Container6 style={{ width: '35rem', marginRight: '3rem'}}>
          <ContainerTitle>
            <Text>{t('home.services')}</Text>
            <TitleLine />
          </ContainerTitle>
          <P>{t('home.servicesDescription1')}</P>
          <P>{t('home.servicesDescription2')}</P>
        </Container6>

        <Container6>
          <Container2>
            <Container8>
              <Image src={Code} alt='Code' style={{ marginBottom: '1rem'}} />
              <Text>{t('home.development')}</Text>
              <P>{t('home.developmentDescription')}</P>
            </Container8>

            <Container8>
              <Image src={Responsive} alt='Responsive' style={{ marginBottom: '1rem'}} />
              <Text>{t('home.mobileFriendly')}</Text>
              <P>{t('home.mobileFriendlyDescription')}</P>
            </Container8>
          </Container2>

          <Container2>
            <Container8>
              <Image src={search} alt='search' style={{ marginBottom: '1rem'}} />
              <Text>{t('home.analytics')}</Text>
              <P>{t('home.analyticsDescription')}</P>
            </Container8>

            <Container8>
              <Image src={Mouse} alt='Mouse' style={{ marginBottom: '1rem'}} />
              <Text>{t('home.cleanCode')}</Text>
              <P>{t('home.cleanCodeDescription')}</P>
            </Container8>
          </Container2>
        </Container6>
      </Container3>

      <Container4 id="skills">
        <Ul>
          {skills.map((skill) => (
            <Li key={skill.id} onMouseEnter={() => handleMouseEnter(skill)}>
              <Skill>
                <A3 href="#">
                  <Image src={skill.image} alt={skill.name} style={{ width: '30px', height: '30px' }} />
                </A3>
              </Skill>
            </Li>
          ))}
        </Ul>

        {activeSkill && (
          <Container9>
            <ContainerTitle>
              <Text>{activeSkill.name}</Text>
              <TitleLine />
            </ContainerTitle>
            <P>{activeSkill.description}</P>
            <P>Rating: {activeSkill.score}</P>
          </Container9>
        )}
      </Container4>

      <Container5 id="contact">
        <Container6>
          <ContainerTitle>
            <Text>{t('home.contact')}</Text>
            <TitleLine />
          </ContainerTitle>
          <P>{t('home.contactDescription')}</P>
          <P>{t('home.socialMedia')}</P>
        </Container6>

        <ColInput>
          <TextInput>{t('home.formName')}</TextInput>
          <TextArea style={{ height: '3rem', paddingTop: '10px', paddingLeft: '10px'}} />

          <TextInput>{t('home.message')}</TextInput>
          <TextArea style={{ height: '6rem'}} />
          <A2>
            {t('home.sendButton')}
            <Image src={Arrow} alt='Arrow' />
          </A2>
        </ColInput>
      </Container5>
    </Container1>
  );
}
