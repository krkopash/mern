import React,
{
    useState,
    useEffect
} from 'react';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setData(data));
        }, []
    ); // No dependencies, run only on mount

    return (
        <div>
            {
                data ?
                    <p>Data: {JSON.stringify(data)}</p> :
                    <p>Loading...</p>
            }
        </div>
    );
}

export default MyComponent;