import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/context';
import { db, addDoc, collection } from '../configs/firebase';

function AddStudent() {
    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [marks, setMarks] = useState('');
    const [feedback, setFeedback] = useState('');
    const { state } = useContext(GlobalContext);

    const addStudent = async () => {
        let student = { name, rollNum, marks, feedback, teacherUid: state.authUser.uid };
        console.log(student);
        let studentRef = collection(db, 'students');
        await addDoc(studentRef, student);
    }

    return (
        <div>
            <h3>Please add student details.</h3>
            <label>Name: <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></label><br />
            <label>Roll Number:<input type="text" value={rollNum} onChange={(e) => { setRollNum(e.target.value) }} /></label><br />
            <label>Marks: <input type="text" value={marks} onChange={(e) => { setMarks(e.target.value) }} /></label><br />
            <label>Feedback: <input type="text" value={feedback} onChange={(e) => { setFeedback(e.target.value) }} /></label><br />
            <button onClick={addStudent}>Add Student</button>
        </div>
    );
}

export default AddStudent;


