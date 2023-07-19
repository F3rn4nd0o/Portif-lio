import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100vh',
  minHeight: '100vh',
  background: "linear-gradient(to right, $primary, $secondary)",
  color: '$text',
})

export const ContainerHeader = styled('header', {
  padding: '1rem',
  width: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  backgroundColor: '$primary',
  zIndex: '9999'
})

export const ContainerFooter = styled('footer', {
  padding: '2rem 0',
  backgroundColor: '$primary',
  width: '100%',
  marginTop: '5rem'
})