import React from 'react';
import { useParams } from 'react-router-dom';

const allStudents = {
    2643: {
        name: 'haider',
        rollNum: 2643,
        subject: 'JavaScript'
    },
    2644: {
        name: 'abdullah',
        rollNum: 2644,
        subject: 'React'
    },
    2645: {
        name: 'muzammil',
        rollNum: 2645,
        subject: 'HTML'
    },
    2646: {
        name: 'ahmed',
        rollNum: 2646,
        subject: 'CSS'
    }
}


function StudentDetails() {
    let { rollNumber } = useParams();
    let { name, rollNum, subject } = allStudents[rollNumber];

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>You are enrolled in {subject} course. Your roll number is {rollNum}.</p>
        </div>
    )
}

export default StudentDetails;