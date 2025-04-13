import s from './typo.module.scss';
import React from 'react';

interface TypoProps {
  weight: number;
  size: number;
  children: React.ReactNode;
  color: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  textAlign?: string;
}

export function Typo({ weight, size, children, color, marginBottom=0, marginTop=0, marginRight=0, marginLeft=0, textAlign='center' }: TypoProps) {
  const styles: React.CSSProperties = {
    fontSize: size+'px', fontWeight: weight, color: color, marginBottom: marginBottom+'px', marginTop: marginTop+'px', marginLeft: marginLeft, marginRight: marginRight, textAlign: textAlign as any
  }
  return (
    <p className={s.typo} style={styles}>
      {children}
    </p>
  );
}

export default Typo;
