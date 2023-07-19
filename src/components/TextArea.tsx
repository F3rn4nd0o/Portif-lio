import { useRef } from 'react';
import { TextArea } from '../styles/pages/home';

export default function CustomTextArea(props) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = '5rem'; // Redefinir a altura para recalcular corretamente
    textarea.style.height = `${textarea.scrollHeight}px`; // Definir a altura com base no scrollHeight
  };

  return <TextArea ref={textareaRef} onInput={handleInput} {...props} />;
}