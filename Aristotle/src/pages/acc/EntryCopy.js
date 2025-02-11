import React, { useState, useEffect } from 'react';
// import ApiService from '../../Api.service.jsx';
import ApiService from '../../service/Api.service';
export default function AccEntry() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const testApi = async () => {
        // Test Get DATA
        try {
            setLoading(true);
            const usersData = await ApiService.httpGet('/users','https://jsonplaceholder.typicode.com');
            setUsers(usersData);
            setLoading(false);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        testApi();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>

            <ul>
                {users.map((user) => {
                    return <li key={user.id}>Name: {user.name}</li>;
                })}
            </ul>
        </div>
    );


}; 