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
  Container10,
  Container11,
  Container12,
  Container13,
  ContainerTitle,
  TitleLine,
  Text,
  TextInput,
  TextInput2,
  TextName,
  P,
  ColInput,
  TextArea2,
  Li,
  Ul,
  Skill,
  ContainerService,
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
import CustomTextArea from '../components/TextArea';
import Github2 from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Email from '../assets/email.svg'
import Linkedin from '../assets/linkedin.svg'
import Person from '../assets/person.svg'
import Ts2 from '../assets/typescript2.svg'
import Js2 from '../assets/logo-javascript2.svg'
import Fernando from '../assets/Fernando.png'

import { light } from '../styles/theme/light';


export default function Home({ theme }) {
  const [activeSkill, setActiveSkill] = useState(null);
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    const emailSubject = encodeURIComponent(name); // Assunto do e-mail
    const emailBody = encodeURIComponent(message); // Corpo do e-mail

    const mailtoLink = `mailto:fernandovasconcelosmelo@outlook.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };


  const handleMouseEnter = (skill) => {
    setActiveSkill(skill);
  };

  const skills = [
    { id: 1, name: 'JavaScript', description: t('home.JavaScript'), score: 9, image: theme  === light ? Js2 : Js },
    { id: 2, name: 'TypeScript', description: t('home.TypeScript'), score: 9, image: theme  === light ? Ts2 : Ts },
    { id: 3, name: 'Node.js', description: t('home.Node'), score: 9, image: NodeJs },
    { id: 4, name: 'Next.js', description: t('home.Next'), score: 8, image: Next },
    { id: 5, name: 'React', description: t('home.React'), score: 8, image: ReactJs },
    { id: 6, name: 'ReactNative', description: t('home.ReactNative'), score: 9, image: ReactNative },
    { id: 7, name: 'GitHub', description: t('home.GitHub'), score: 8, image: Github },
    { id: 8, name: 'Docker', description: t('home.Docker'), score: 7, image: Docker },
  ];

  return (
    <Container1>
      <Container2 style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Container6>
          <Text>{t('home.greeting')}</Text>
          <TextName>{t('home.name')}</TextName>
          <Text>{t('home.developer')}</Text>
          <A2 style={theme === light ? { background: '#00c16c', marginTop: '2rem', color: '#fff' } : { marginTop: '2rem' }} href="https://github.com/F3rn4nd0o">
            {t('home.github')}
            <Image src={Arrow} alt='Arrow' />
          </A2>
        </Container6>

        <Container10>
          <Image 
            src={Person} 
            alt="Fernando" 
          />
        </Container10>
      </Container2>

      <Container12 id="about" style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Container6>
            <Container13>
              <Image 
                src={Fernando} 
                alt="Fernando" 
                style={{ 
                  width: '15rem', 
                  height: '15rem', 
                  borderRadius:'10rem', 
                  border: '5px solid #00c16c',
                  padding: '10px',
                }}
              />
            </Container13>
          <Container3 style={{ justifyContent: 'center', marginTop: '20px', gap: '1rem' }}>
            <A href="https://www.instagram.com/fernando._.mello/">
              <Image src={Instagram} style={{ width: '2rem', height: '2rem'}} alt='Instagram' />
            </A>
            <A href="https://github.com/F3rn4nd0o">
              <Image src={Github2} style={{ width: '2rem', height: '2rem'}} alt='Github' />
            </A>
            <A href="https://www.linkedin.com/in/fernando-vasconcelos-melo-costa-725726231/">
              <Image src={Linkedin} style={{ width: '2rem', height: '2rem'}} alt='Linkedin' />
            </A>
            <A href="mailto:fernandovasconcelosmelo@outlook.com">
              <Image src={Email} style={{ width: '2rem', height: '2rem'}} alt='Email' />
            </A>
          </Container3>
        </Container6>

        <Container7>
          <ContainerTitle>
            <Text>{t('home.about')}</Text>
            <TitleLine />
          </ContainerTitle>
          <Text>
            <P>{t('home.aboutDescription')}</P>
          </Text>

          <A2 style={theme === light ? { background: '#00c16c', color: '#fff', marginTop: '2rem'} : { marginTop: '2rem' }} href="https://www.linkedin.com/in/fernando-vasconcelos-melo-costa-725726231/">
            {t('home.linkedin')}
            <Image src={Arrow} alt='Arrow' />
          </A2>
        </Container7>
      </Container12>

      <Container4 id="services" style={{ alignItems: 'center' }}>
        <Container6>
          <ContainerTitle>
            <Text>{t('home.services')}</Text>
            <TitleLine />
          </ContainerTitle>
          <P>{t('home.servicesDescription1')}</P>
          <P>{t('home.servicesDescription2')}</P>
        </Container6>

        <ContainerService>
          <Container11>
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
          </Container11>

          <Container11>
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
          </Container11>
        </ContainerService>
      </Container4>

      <Container4 id="skills" style={{ alignItems: 'center'}}>
        <Ul>
          {skills.map((skill) => (
            <Li key={skill.id} onMouseEnter={() => handleMouseEnter(skill)}>
              <Skill>
                <A3 style={theme === light ? { background: '#fff' } : {}}>
                  <Image src={skill.image} alt={skill.name} style={{ width: '30px', height: '30px' }} />
                </A3>
              </Skill>
            </Li>
          ))}
        </Ul>

        {activeSkill ? (
          <Container9 id="skills2" style={{ marginLeft: '2rem'}}>
            <ContainerTitle>
              <Text>{activeSkill.name}</Text>
              <TitleLine />
            </ContainerTitle>
            <P>{activeSkill.description}</P>
            <P>Rating: {activeSkill.score}</P>
          </Container9>
        ) : (
          <Container9 style={{ marginLeft: '2rem'}}>
            <ContainerTitle>
              <Text>{t('home.skills')}</Text>
              <TitleLine />
            </ContainerTitle>
            <P>{t('home.skillsContainer')}</P>
          </Container9>
        )}
      </Container4>

      <Container5 id="contact" style={{ alignItems: 'center'}}>
        <Container6>
          <ContainerTitle>
            <Text>{t('home.contact')}</Text>
            <TitleLine />
          </ContainerTitle>
          <P>{t('home.contactDescription')}</P>
          <Container3 style={{ justifyContent: 'center', marginTop: '10px', gap: '1rem'}}>
            <A href="https://www.instagram.com/fernando._.mello/">
              <Image src={Instagram} style={{ width: '2rem', height: '2rem'}} alt='Instagram' />
            </A>
            <A href="https://github.com/F3rn4nd0o">
              <Image src={Github2} style={{ width: '2rem', height: '2rem'}} alt='Github' />
            </A>
            <A href="https://www.linkedin.com/in/fernando-vasconcelos-melo-costa-725726231/">
              <Image src={Linkedin} style={{ width: '2rem', height: '2rem'}} alt='Linkedin' />
            </A>
            <A href="mailto:fernandovasconcelosmelo@outlook.com">
              <Image src={Email} style={{ width: '2rem', height: '2rem'}} alt='Email' />
            </A>
          </Container3>
        </Container6>

        <ColInput>
          <TextInput style={theme === light ? { background: '#fff'} : {}}>{t('home.formName')}</TextInput>
            <TextArea2
              value={name}
              onChange={handleNameChange}
              style={theme === light ? { color: '#000', padding: '1rem'} : { padding: '1rem' }}
            />
            <TextInput2 style={theme === light ? { background: '#fff'} : {}}>{t('home.message')}</TextInput2>
            <CustomTextArea
              value={message}
              onChange={handleMessageChange}
              style={theme === light ? { color: '#000', padding: '1rem'} : { padding: '1rem' }}
            />
            <A2 style={theme === light ? { background: '#00c16c', color: '#fff'} : {}} onClick={handleSendEmail}>
              {t('home.sendButton')}
              <Image src={Arrow} alt='Arrow' />
            </A2>
        </ColInput>
      </Container5>
    </Container1>
  );
}
