import s from './verticalContainer.module.scss';

export function VerticalContainer({children}: {children: React.ReactNode}) {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
}

export default VerticalContainer;
