import { styled } from '..'

export const Container1 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Container2 = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '6rem',

  '@media (max-width: 870px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginRight: '20rem',
    marginTop: '7rem',
  }
});

export const Container3 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',
  position: 'relative',

  
  '@media (max-width: 1010px)': {
    marginBottom: '3rem'
  }
});

export const Container4 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',

  '@media (max-width: 1410px)': {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const Container5 = styled('div', {
  display: 'flex',
  flexDirection: 'rows',
  justifyContent: 'space-between',
  marginTop: '6rem',

  '@media (max-width: 1010px)': {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const Container6 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Container7 = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginRight: '3rem'
})

export const Container8 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
})

export const Container9 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '3rem',
  
  '@media (max-width: 1410px)': {
    marginTop: '6rem'
  }
})

export const Container10 = styled('div', {
  width: '30rem', 
  height: '30rem', 
  borderRadius:'10rem', 
  marginLeft: '10rem',
  
  '@media (max-width: 870px)': {
    display: 'none'
  }
})

export const Container11 = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '6rem',

  '@media (max-width: 850px)': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
  }
})

export const Container12 = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '6rem',

  '@media (max-width: 870px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    
    marginTop: '3rem',
  }
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

  marginRight: '20rem',

  '@media (max-width: 1410px)': {
    marginRight: '2rem'
  }
})

export const TextName = styled('text', {
  fontSize: '2rem',
  fontWeight: 'bold',

  marginTop: '10px',
  marginBottom: '20px',

  color: '$tertiary',
})


export const P = styled('p', {
  fontSize: '18px',
  display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
})

export const A = styled('a', {
  display: 'flex',
  flexDirection: 'rows',
  cursor: 'pointer',

})

export const A2 = styled('a', {
  display: 'flex',
  flexDirection: 'rows',
  cursor: 'pointer',

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
  marginTop: '20px',
});



export const ColInput = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '45rem',
  position: 'relative',
  marginLeft: '4rem',

  '@media (max-width: 1010px)': {
    marginLeft: '24rem',
  }
});

export const Text = styled('text', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

export const TextInput = styled('text', {
  color: '$tertiary',
  position: 'absolute',
  top: '-10px',
  backgroundColor: '$secondary',
  paddingLeft: '3px',
  paddingRight: '3px',
  marginLeft: '20px',
});

export const TextInput2 = styled('text', {
  color: '$tertiary',
  position: 'absolute',
  top: '5rem',
  backgroundColor: '$secondary',
  paddingLeft: '3px',
  paddingRight: '3px',
  marginLeft: '20px',
});

export const TextArea = styled('textarea', {
  color: '#fff',
  width: '80%',
  height: '5rem',
  fontSize: '20px',
  border: '2px solid $tertiary',
  borderRadius: '5px',
  background: '$secondary',
  marginBottom: '20px',
  resize: 'none',
  overflowX: 'hidden',
  overflowY: 'hidden',

  '&:focus': {
    border: '2px solid $fourth',
    outline: 'none',
  },

  '@media (max-width: 1010px)': {
    width: '40%',
  }
});

export const TextArea2 = styled('textarea', {
  color: '#fff',
  width: '80%',
  height: '2rem',
  fontSize: '20px',
  border: '2px solid $tertiary',
  borderRadius: '5px',
  background: '$secondary',
  marginBottom: '20px',
  resize: 'none',
  overflowX: 'hidden',
  overflowY: 'hidden',

  '&:focus': {
    border: '2px solid $fourth',
    outline: 'none',
  },

  '@media (max-width: 1010px)': {
    width: '40%',
  }
});