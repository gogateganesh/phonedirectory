import { useState } from "react";
export default function Form(props) {
    const [name, setName] = useState('');
    const [number, setContact] = useState('');
    const [isValid, toggelValid] = useState(false);

    var deleteClick = () => {
        var obj = {
            'name': name,
            'number': number
        }
        if (props.addContact(obj)) {
            setContact('')
            setName('')
        }
    }

    return (
        <div>
            <div className="App">
                <h1>Phone Directory</h1>
            </div>
            <div>
                <div className='contactform'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id='name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name'></input>
                    </div>
                    <div>
                        <label htmlFor='Number'>Number</label>
                        <input type="text" id='Number' value={number} onChange={(e) => { setContact(e.target.value) }} placeholder='Enter Number'></input>
                    </div>
                    <div>
                        <button disabled={!name||!number} onClick={() => deleteClick()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}