import Question from './components/Question';
import './App.css';
import data from "./components/Data";
import { useState } from 'react';
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main className='container'>
      <h1>question</h1>
      {
        questions.map((question)=> {
          return <Question key={question.id} {...question}/>
        })
      }
      
    </main>
  );
}

export default App;
