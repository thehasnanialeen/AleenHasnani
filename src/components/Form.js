//Form to input data
import { useState } from "react"

const Form = () => {
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent refresh

        const data = {title, number};

        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(data), //to json
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }

        if(response.ok){
            setTitle('');
            setNumber('');
            setError(null);
            console.log('Data Added');
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h4>New Data</h4>

            <label>Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Number</label>
            <input 
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
            />

            <button>Add Data</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
};

export default Form;