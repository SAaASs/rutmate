import s from './loader.module.scss';

export function Loader() {
  return (
    <div className={s.loaderWrap}>
      <img className={s.loaderGif} style={{ width: '150px', height: '150px', margin: 'auto' }} src={'/gifs/loader.gif'} />
    </div>

  );
}

export default Loader;
