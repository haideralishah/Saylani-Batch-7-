import React, { useEffect, useContext, useState } from 'react';
import { db, getDocs, collection, query, where } from '../configs/firebase';
import { GlobalContext } from '../context/context';

function AllStudent() {
    const { state } = useContext(GlobalContext);
    const [myStudents, setMyStudents] = useState([]);

    useEffect(async () => {
        let studentRef = collection(db, 'students');
        let q = query(studentRef, where("teacherUid", "==", state.authUser.uid))
        let allStudents = await getDocs(q);
        allStudents.forEach((doc) => {
            console.log(doc.id, doc.data());
            let myStudentsClone = myStudents.slice(0);
            myStudentsClone.push(doc.data());
            setMyStudents(myStudentsClone);
        });
    }, [])

    return (
        <div>
            {
                myStudents.map(({ name, rollNumber, marks, feedback }, index) => (
                    <div key={index} >
                        <h2>{name}</h2>
                        <h2>{rollNumber}</h2>
                        <h2>{marks}</h2>
                        <h2>{feedback}</h2>
                    </div >
                ))
            }
        </div >
    );
}

export default AllStudent;


