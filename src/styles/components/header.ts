import { styled } from "..";

export const Container1 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between'
})

export const Container2 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
})

export const Container3 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  gap: '1.5rem'
})

export const HeaderText = styled('text', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const A = styled('a', {
  transition: 'scroll-behavior 800ms ease-in-out;'
})

export const Button = styled('button', {
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none'
})