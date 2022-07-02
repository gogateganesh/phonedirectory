import { useState, useEffect } from "react";
export default function Form(props) {
    let [name, setName] = useState('');
    let [number, setContact] = useState('');

    var onbtnclick = () => {
        var obj = {
            'name': name,
            'number': number
        }
        if (!props.contact) {
            var otp = props.addContact(obj);
            if (otp !== "added") {
                alert(otp);
            }
        }else{
            props.changeNumber(props.selectedIndex,obj);
            console.warn(obj,'inside update');
        }
        
        setName('');
        setContact('');
    }
    useEffect(() => {
        if (props.contact) {
            setName(props.contact.name);
            setContact(props.contact.number);
        }
    }, [props.contact]);
    //implement update functionality using useEffect hooks
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
                        <input type="number" id='Number' value={number} onChange={(e) => { setContact(e.target.value) }} placeholder='Enter Number'></input>
                    </div>
                    <div>
                        <button disabled={!name || !number} onClick={() => onbtnclick()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
Form.defaultProps = {
    selectedIndex: null,
    contact: null
}