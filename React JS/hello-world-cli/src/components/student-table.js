import React, { useState } from 'react';
import './student.css';

function StudentTable({ allStudents }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Sr#</th>
                    <th>Student Name</th>
                    <th>Roll Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allStudents.map((student, index) => (
                        <tr key={student.name + index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.rollNum}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default StudentTable;













