import s from './userList.module.scss';
import VerticalContainer from '../vertical-container/verticalContainer';
import Typo from '../typo/typo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import NavBar from '../nav-bar/navBar';
export function UserList() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState()
  useEffect(()=>{
    fetch('https://localhost:3001/users/all', {
      method: 'GET',
      credentials: 'include',
    }).then((res)=>{return  res.json()}).then(data => {
      console.log(data);
      setUserList(data);
    })
  },[])
  return (
      userList!=undefined&&<VerticalContainer>
        <Typo marginBottom={20} marginTop={25} weight={700} size={24} color={"#000000"}>Анкеты</Typo>
          <div className={s.grid}>
            {userList.map((leUser:object, index:number) => {
              return (
                <div key={index} className={s.card} onClick={()=>{
                  navigate('/user/'+leUser._id);
                }}>
                  <div className={s.imageWrapper}>
                    <img src={leUser.avatar?`https://localhost:3001/image/${leUser.avatar}`:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s'}
                         alt="avatar" />
                  </div>
                  <div className={s.match}>94% Match</div>
                  <div className={s.name}>{leUser.name}</div>
                </div>
              );
            })}
          </div>
        <NavBar/>
      </VerticalContainer>
  );
}

export default UserList;
