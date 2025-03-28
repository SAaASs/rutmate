import s from './button.module.scss';
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
  iconOnly?: boolean;
  standart?: boolean;
}
export function Button({children, marginBottom, marginTop, width, height, backgroundColor= '#ED4D00', onClick, isOption, borderColor = backgroundColor, iconOnly = false, standart=true}: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} style={{borderColor: borderColor, backgroundColor: backgroundColor, width: width+'px', height: height+'px', marginBottom: marginBottom+'px', marginTop: marginTop+'px'}} className={`${standart && s.button} ${isOption && s.button_answer} ${iconOnly && s.button_icon}`}>
      {children}
    </button>
  );
}

export default Button;
