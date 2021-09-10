import React from 'react';

function UserInfo({ userName, organisation, designation, institute, course }) {
    return (
        <div>
            <h1>{userName}</h1>
            {
                organisation ?
                    (
                        <div>
                            <h2>Organisation Name: {organisation}</h2>
                            <h2>Designation: {designation}</h2>
                        </div>
                    ) :
                    (
                        <div>
                            <h2>Institute Name: {institute}</h2>
                            <h2>Course Name: {course}</h2>
                        </div>
                    )
            }
        </div>
    )
}

export default UserInfo;