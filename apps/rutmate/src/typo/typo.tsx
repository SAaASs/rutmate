import s from './typo.module.scss';
interface TypoProps {
  weight: number;
  size: number;
  children: React.ReactNode;
  color: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export function Typo({ weight, size, children, color, marginBottom=0, marginTop=0, marginRight=0, marginLeft=0 }: TypoProps) {
  return (
    <p className={s.typo} style={{fontSize: size+'px', fontWeight: weight, color: color, marginBottom: marginBottom+'px', marginTop: marginTop+'px', marginLeft: marginLeft, marginRight: marginRight}}>
      {children}
    </p>
  );
}

export default Typo;
