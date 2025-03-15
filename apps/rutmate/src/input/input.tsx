import s from './input.module.scss';
interface InputProps {
  placeholder?: string;
  marginTop?: number;
  marginBottom?: number;
}
export function Input({ placeholder, marginBottom, marginTop }: InputProps) {
  return (
    <input style={{marginBottom: marginBottom+'px', marginTop: marginTop+'px'}} placeholder={placeholder} className={s.textInput}/>
  );
}

export default Input;
