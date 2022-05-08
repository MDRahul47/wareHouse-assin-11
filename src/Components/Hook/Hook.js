import { useEffect, useState } from "react";




const useUsers = () =>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://rocky-eyrie-40092.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return [users, setUsers]
}

export default useUsers ;