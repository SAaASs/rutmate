import s from './navBar.module.scss';
import { useNavigate, useLocation } from 'react-router';
export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={s.navBar}>
      <div onClick={()=>{navigate('/users')}} className={s.navBar__option}>
        <div style={location.pathname=='/users'?{ backgroundColor: "#421EB7" } : {}} className={s.navBar__optionImgWrap}><img src={'../../public/images/material-symbols_search.svg'} /></div>
      </div>
      <div className={s.navBar__option}>
        <div style={location.pathname=='/me'?{ backgroundColor: "#421EB7" } : {}} onClick={()=>{navigate('/me')}} className={s.navBar__optionImgWrap}><img src={'../../public/images/mdi_account-outline.svg'} /></div>
      </div>
      <div className={s.navBar__option}>
        <div style={location.pathname=='/chats'?{ backgroundColor: "#421EB7" } : {}} onClick={()=>{navigate('/chats')}} className={s.navBar__optionImgWrap}><img src={'../../public/images/Message.svg'} /></div>
      </div>
      <div className={s.navBar__option}>
        <div style={location.pathname=='/settings'?{ backgroundColor: "#421EB7" } : {}} onClick={()=>{navigate('/settings')}} className={s.navBar__optionImgWrap}><img src={'../../public/images/Vector.svg'} /></div>
      </div>
    </div>
  );
}

export default NavBar;
