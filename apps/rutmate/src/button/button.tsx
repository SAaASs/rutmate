import s from './button.module.scss';
import Typo from '../typo/typo';
import { JSX } from 'react';
interface ButtonProps {
  children: React.ReactNode;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  onClick?: (e?: React.MouseEvent) => void;
  isOption?: boolean;
  borderColor?: string;
}
export function Button({children, marginBottom, marginTop, width, height, backgroundColor= '#ED4D00', onClick, isOption, borderColor = backgroundColor}: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} style={{borderColor: borderColor, backgroundColor: backgroundColor, width: width+'px', height: height+'px', marginBottom: marginBottom+'px', marginTop: marginTop+'px'}} className={`${s.button} ${isOption ? s.button_answer : ""}`}>
      {children}
    </button>
  );
}

export default Button;
