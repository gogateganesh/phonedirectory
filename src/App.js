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

  const [selectedIndex,updateIndex] = useState(null);

  const [contact,setContact] = useState(null);
  const deleteContact = (index) => {
    var list = contactList.filter((v, i) => {
      if (i !== index)
        return v;
    });
    setContactList(list);
  };

  const addContact=(obj)=>{
    var found = contactList.filter((v)=>{
      if(v.number===obj.number)
      {
        return v;
      }
    });
    if(found.length===0)
    {
    var list = [...contactList,obj];
    setContactList(list);
    return "added"
    }
    else{
      return "Number already present in the book";
    }
  }

  const updateContact = (index)=>{
    updateIndex(index)
    var contact = contactList[index];
    setContact(contact);
  }

  const changeNumber = (index,obj) =>{
    var newlist =  [...contactList];
    newlist[index] = obj;
    setContactList(newlist);
    setContact(null);
    updateIndex(null);
  }
  return (
    <div>
      <Form addContact={addContact} changeNumber={changeNumber} selectedIndex={selectedIndex} contact={contact} />
      <div className='ProductList'>
        {contactList.map((v, index) => {
          return <Card contact={v} key={v.number} deleteContact={deleteContact} updateContact={updateContact} index={index}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
