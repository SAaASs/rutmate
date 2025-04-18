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
export const UserContext = createContext({});


export function App() {
  const [currentUser, setCurrentUser] = useState({name:'test', lastName:'gnida', role:'skit', questions: {pair:'',maxMates:'',maxMoney:'',possPlace:'',cleanfulness:'',pets:'', alco:'',smoke:''}, email: '', password: ''});
  useEffect(()=>{
    fetch("https://localhost:3001/me", {
      method: "GET",
      credentials: "include", // и тут тоже!
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('getting user in app', data);
        setCurrentUser(data);
      });
  },[])
  return (
    <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/settings" element={<Settings/>} />
          <Route path="/" element={<GreetingsPage/>} />
          <Route path="/chats" element={<ChatList/>} />
          <Route path="/chat/:id" element={<Chat/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/me" element={<MyProfile/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/questions" element={<QuestionPage/>} />
          <Route path="/user/:id" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
