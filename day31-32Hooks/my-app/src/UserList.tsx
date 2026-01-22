import { useFetch } from "./useFetch";

type User = {
    id: number;
    name: string;
    email: string;
    phone: number
}

const UserList = () => {
    const {data, loading, error} = useFetch<User[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <p> Please wait.........❗</p>
    if (error) return <p className="error"> Check your error...: {error}</p>;
    return (
        <div className="card">
            <div className="box">
                <h1>useFetch</h1>
                <p>User List</p>
            <ul >
                {data?.map(user => (
                    <li key={user.id}>
                        <strong>USER NAME: {user.name}</strong>
                        <p>MAIL ID: {user.email}</p>
                        <p>Contact: {user.phone}</p>
                    </li>
                ))};
            </ul>
            </div>
        </div>
    )

}

export default UserList;