import GreetingsPage from '../greetings-page/greetingsPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from '../sign-up/signUp';
import QuestionPage from '../question-page/questionPage';
import Profile from '../profile/profile';
import { createContext, useState } from 'react';
export const UserContext = createContext({});


export function App() {
  const [currentUser, setCurrentUser] = useState({name:'', lastName:'', role:'', questions: {pair:'',maxMates:'',maxMoney:'',possPlace:'',cleanfulness:'',pets:'', alco:'',smoke:''},});
  return (
    <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GreetingsPage/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/questions" element={<QuestionPage/>} />
          <Route path="/id" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
