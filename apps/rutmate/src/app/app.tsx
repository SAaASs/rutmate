import GreetingsPage from '../greetings-page/greetingsPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from '../sign-up/signUp';
import QuestionPage from '../question-page/questionPage';
import Profile from '../profile/profile';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GreetingsPage/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/questions" element={<QuestionPage/>} />
        <Route path="/id" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
