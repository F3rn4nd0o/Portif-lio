import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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
  backgroundColor: '$primary'
})

export const ContainerFooter = styled('footer', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})