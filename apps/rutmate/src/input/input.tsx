import s from './input.module.scss';
interface InputProps {
  placeholder?: string;
  marginTop?: number;
  marginBottom?: number;
  store: any;
  width?: number;
  height?: number;
}
export function Input({ placeholder, marginBottom, marginTop, store, width=325, height=56 }: InputProps) {
  return (
    <input value={store[0]} onChange={(e)=>{store[1](e.target.value)}} style={{marginBottom: marginBottom+'px', marginTop: marginTop+'px', height: height+'px', width: width+'px'}} placeholder={placeholder} className={s.textInput}/>
  );
}

export default Input;
