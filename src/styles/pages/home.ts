import { styled } from '..'

export const Container1 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '5rem',
  marginRight: '5rem'
})

export const Container2 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',
})

export const Container3 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',
  position: 'relative',
})

export const Container4 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',
})

export const Container5 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',
})

export const Container6 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Container7 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  gap: '2rem'
})

export const Container8 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '20rem',
  margin: '1rem'
})

export const Container9 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '3rem',
  width: '42.2rem',
})


export const ContainerTitle = styled('div', {
  position: 'relative',
});

export const TitleLine = styled('hr', {
  position: 'absolute',
  width: '2.5rem',
  height: '2px',
  backgroundColor: '$tertiary',
  border: 'none',
});


export const Li = styled('li', {
  display: 'flex',
  flexDirection: 'column',
})

export const Ul = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '20px',
})

export const Text = styled('text', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const TextName = styled('text', {
  fontSize: '1.5rem',
  fontWeight: 'bold',

  marginTop: '10px',
  marginBottom: '20px',

  color: '$tertiary',
})


export const P = styled('p', {
  fontSize: '15px',
  display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
})

export const A = styled('a', {
  display: 'flex',
  flexDirection: 'rows',
})

export const A2 = styled('a', {
  display: 'flex',
  flexDirection: 'rows',

  width: '10rem',

  background: 'linear-gradient(to right, $primary, $tertiary)',
  borderRadius: '5px',

  padding: '1rem',
  gap: '1rem',
})

export const A3 = styled('a', {
  display: 'flex',
  flexDirection: 'rows',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2rem',

  background: '$fourth',
  borderRadius: '30rem',

  padding: '2rem',
})

export const Skill = styled('div', {
  position: 'relative',
  border: '3px solid $tertiary',
  borderRadius: '30rem',
  marginLeft: '10px',
  marginTop: '20px'
});



export const ColInput = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '45.2rem',
  position: 'static',
})

export const TextInput = styled('text', {
  fontsize: '0.75rem',
  color: '$tertiary',
  position: 'relative',
  top: '0.5rem',
  margin: '0 0 0 7px',
  marginBottom: '1rem'
})

export const TextArea = styled('textarea', {
  color: '#fff',
  width: '100%',
  padding: '11px 10px',
  fontSize: '20px',
  border: '2px solid $tertiary',
  borderRadius: '5px',
  background: '$secondary',
  marginBottom: '20px',
  boxSizing: 'border-box',
  resize: 'none'
});




