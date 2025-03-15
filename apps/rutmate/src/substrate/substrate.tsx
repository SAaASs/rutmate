import s from './substrate.module.scss';

export function Substrate({children}) {
  return (
    <div className={s.background}>
      {children}
    </div>
  );
}

export default Substrate;
