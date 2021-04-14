import { useEffect, useState } from "react";
import axios from 'axios';



const People = () => {
    const [people, setPeople] = useState([])

    useEffect(async () => {
        const res = await axios.get('https://swapi.dev/api/people')

        setPeople(res.data.results)
    }, [])

        console.log(people)
    return (
        <div className="container">
            {
                people.map(item => (
                    <div key={item.name}>
                        <table className="table"> 
                        <th>
                            {item.name}
                        </th>
                        </table>
                    </div>
                ))
            }
        </div>
    )
}

export default People