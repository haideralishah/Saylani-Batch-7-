import React, { useState } from 'react';
import './student.css';
import StudentTable from './student-table';


function Student() {
    const [stName, setStName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [studentData, setStudentData] = useState([]);

    return (
        <div>
            Student Name: <input type="text"
                onChange={(event) => { setStName(event.target.value) }}
                value={stName} />
            <br />
            Roll Number: <input type="text"
                onChange={(event) => { setRollNum(event.target.value) }}
                value={rollNum} />

            <button onClick={() => {
                let student = {
                    name: stName,
                    rollNum: rollNum
                }

                setStudentData(studentData.concat([student]))

                // let studentDataClone = studentData.slice(0);
                // studentDataClone.push(student);
                // setStudentData(studentDataClone);

                setStName('');
                setRollNum('');
            }}>Save Student</button>


            {
                studentData.length > 0 ? <StudentTable allStudents={studentData} /> : null
            }

        </div>
    )
}

export default Student;