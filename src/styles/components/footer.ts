import { styled } from "..";

export const Container1 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Container2 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px'
})

export const Text = styled('text', {
  fontSize: '18px',
})