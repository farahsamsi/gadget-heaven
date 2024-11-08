import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './question';

const FAQ = () => {
    const data = useLoaderData();
    return (
        <div className='px-4'>
            <h1 className="text-2xl font-bold my-4 md:my-6">Frequently Asked Questions :</h1>
            <div className='space-y-5'>
                {
                    data.map(item => <Question key={item.question_number} item={item}></Question>)
                }
            </div>
        </div>
    );
};

export default FAQ;