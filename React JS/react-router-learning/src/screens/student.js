import React from 'react';
import { Link } from 'react-router-dom';

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


function Student() {
    return (
        Object.keys(allStudents).map((keys) => {
            let { name, rollNum } = allStudents[keys];
            return <p key={keys}><Link to={`/student-details/${rollNum}/${name}`}>{name}</Link></p>
        })
    )
}

export default Student;