import React from 'react';

const Question = ({ item }) => {
    const { answer, question, question_number } = item;

    return (
        <div className='space-y-2'>
            <h1 className='text-xl font-medium'>
                <span className='mr-3'>{question_number}.</span> {question}
            </h1>
            <p>Answer : {answer}</p>
        </div>
    );
};

export default Question;