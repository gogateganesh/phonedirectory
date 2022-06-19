export default function Card(props) {

    return (
        <>
            <div className="singleCard">
                <div>
                <h4>{props.contact.name}</h4>
                </div>
                <div>
                <h4>{props.contact.number}</h4>
                </div>
                <button onClick={()=>{props.deleteContact(props.index)}}>Delete</button>
                <button onClick={()=>{props.updateContact(props.index)}}>Update</button>
            </div>
        </>
    );
}