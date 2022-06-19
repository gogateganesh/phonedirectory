import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx'
import Form from './components/Form.jsx'

function App() {
  const [contactList, setContactList] = useState([{
    name: 'Ganesh Gogate',
    number: '9960631931'
  }, {
    name: 'xyz',
    number: '9987621931'
  }]);

  const deleteContact = (index) => {
    var list = contactList.filter((v, i) => {
      if (i !== index)
        return v;
    });
    setContactList(list);
  };

  const addContact=(obj)=>{
    console.log(obj);
    var list = [...contactList,obj];
    setContactList(list);
    return true
  }


  return (
    <div>
      <Form addContact={addContact} />
      <div className='ProductList'>
        {contactList.map((v, index) => {
          return <Card contact={v} key={v.number} deleteContact={deleteContact} index={index}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
