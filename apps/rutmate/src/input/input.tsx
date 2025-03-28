import s from './input.module.scss';
interface InputProps {
  placeholder?: string;
  marginTop?: number;
  marginBottom?: number;
  store: any;
}
export function Input({ placeholder, marginBottom, marginTop, store }: InputProps) {
  return (
    <input value={store[0]} onChange={(e)=>{store[1](e.target.value)}} style={{marginBottom: marginBottom+'px', marginTop: marginTop+'px'}} placeholder={placeholder} className={s.textInput}/>
  );
}

export default Input;
