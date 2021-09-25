import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://api.publicapis.org/entries';


function FreeAPI() {
    const [animalData, setAnimalData] = useState([]);

    useEffect(async () => {
        let { data } = await axios.get(URL);
        setAnimalData(data.entries);
    }, []);

    useEffect(() => {
        console.log(animalData, 'Animal data found.');
    }, [animalData])

    return (
        animalData.map(({Category, Link, Description}, index) => {
            return (
                <div key={Category + index}>
                    <h3>{Category}</h3>
                    <a href={Link} target="_blank"><p>{Description}</p></a>
                </div>
            )
        })
    );
}

export default FreeAPI;


