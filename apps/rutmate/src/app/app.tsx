import GreetingsPage from '../greetings-page/greetingsPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from '../sign-up/signUp';
import QuestionPage from '../question-page/questionPage';
import Profile from '../profile/profile';
import SignIn from '../sign-in/signIn';
import UserList from '../user-list/userList';
import MyProfile from '../my-profile/myProfile';
import ChatList from '../chat-list/chatList';
import { createContext, useEffect, useState } from 'react';
import Chat from '../chat/chat';
import Settings from '../settings/Settings';
import ProtectedRouteElement from '../protected-route-element/protectedRouteElement';
import Loader from '../loader/loader';
export const UserContext = createContext({});


export function App() {
  const [currentUser, setCurrentUser] = useState({name:'', lastName:'gnida', role:'skit', questions: {pair:'',maxMates:'',maxMoney:'',possPlace:'',cleanfulness:'',pets:'', alco:'',smoke:''}, email: '', password: ''});
  const [isUserChecked, setIsUserChecked] = useState(false);
  useEffect(()=>{
    fetch("https://89.169.174.180:3001/me", {
      method: "GET",
      credentials: "include", // и тут тоже!
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.name) {
          setCurrentUser(data);
        }
        console.log('getting user in app', data);
      }).finally(() => {
      setIsUserChecked(true);
    });
  },[])
  return (
    <>
      {isUserChecked? <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/questions" element={<QuestionPage />} />
            <Route path="/" element={<GreetingsPage />} />
            <Route
              path="/settings"
              element={
                <ProtectedRouteElement
                  isLoggedIn={currentUser.name == '' ? false : true}
                  element={Settings}
                />
              }
            />
            <Route
              path="/chats"
              element={
                <ProtectedRouteElement
                  isLoggedIn={currentUser.name == '' ? false : true}
                  element={ChatList}
                />
              }
            />
            <Route
              path="/chat/:id"
              element={
                <ProtectedRouteElement
                  isLoggedIn={currentUser.name == '' ? false : true}
                  element={Chat}
                />
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRouteElement
                  isLoggedIn={currentUser.name == '' ? false : true}
                  element={UserList}
                />
              }
            />
            <Route
              path="/me"
              element={
                <ProtectedRouteElement
                  isLoggedIn={currentUser.name == '' ? false : true}
                  element={MyProfile}
                />
              }
            />
            <Route
              path="/user/:id"
              element={
                <ProtectedRouteElement
                  isLoggedIn={currentUser.name == '' ? false : true}
                  element={Profile}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      :<Loader/>}
    </>
  );
}

export default App;
