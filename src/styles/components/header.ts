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
  gap: '1.5rem',
  marginRight: '5rem'
})

export const LinksContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(to right, $primary, $secondary)',
  minHeight: '100vh',
  minWidth: '100vh',
  
  justifyContent: 'center',
  alignItems: 'center',

  WebkitBoxPack: 'center',
  WebkitBoxAlign: 'center',
  
  inset: '0px',
  zIndex: '20',
});

export const A2 = styled('a', {
  transition: 'scroll-behavior 800ms ease-in-out',
  fontSize: '20px',

  '&:hover': {
    borderBottom: '3px solid $tertiary',
  },
  
  marginBottom: '1rem',
});

export const Button = styled('button', {
  backgroundColor: 'transparent',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
});

export const CloseButton = styled(Button, {
  position: 'absolute',
  top: '1rem',
  right: '100px',
});

export const HeaderText = styled('text', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginLeft: '2.5rem'
})

export const A = styled('a', {
  transition: 'scroll-behavior 800ms ease-in-out',

  '&:hover': {
    borderBottom: '3px solid $tertiary',
  }
})