import s from './tag.module.scss';

export function Tag({children}: {children: React.ReactNode}) {
  return (
    <div className={s.tag}>
      {children}
    </div>
  );
}

export default Tag;
