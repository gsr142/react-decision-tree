import { data } from '../utils/data';
import { useState, useEffect } from 'react';

const data = data;
export default function Questions({ data }) {
    const [questions, setQuestions] = useState([]);
    
    return (
        <div>
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
}
    