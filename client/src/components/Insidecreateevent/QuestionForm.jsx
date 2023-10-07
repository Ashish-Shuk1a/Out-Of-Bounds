import React, { useState } from 'react';

function QuestionForm({questions,setQuestions}) {
  

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleQuestionChange = (index, event) => {
    const { value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className='pb-6'>
      {questions.map((question, index) => (
        <div key={index}>
            <span className='px-2'>{index+1}</span>
          <input
            type="text"
        className='p-2 m-1 border border-gray-600 outline-none rounded-sm'
            value={question}
            onChange={(event) => handleQuestionChange(index, event)}
            placeholder={`Question ${index + 1}`}
          />
        </div>
      ))}
      <button className='rounded-md mt-3 bg-blue-500 p-2 text-sm  text-white' onClick={handleAddQuestion}>Add Question</button>
      <button className='rounded-md bg-blue-500 p-2 text-sm ml-5 text-white' onClick={() => console.log(questions)}>Submit Questions</button>
    </div>
  );
}

export default QuestionForm;
