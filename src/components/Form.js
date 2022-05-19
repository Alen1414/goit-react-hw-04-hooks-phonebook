import  React, { useState } from 'react';
import 'components/Form.css';

export default function Form(option) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

  //-------- получаем что вводим в инпуте
 
   const hendelChange = e => {
  setName(e.currentTarget.value);
   };
  
  const hendelChangeNumber = e => {
  setNumber(e.currentTarget.value);
  };
  
  const hendelSubmit = e => {
    e.preventDefault();
    console.log(name, number);
    option.onSubmit({name, number});
    setName('')
     setNumber('')
  };
   
    
  return (
            
            <form className='main_form' onSubmit={hendelSubmit}>
                
          <label className='main_input'>
            Name
            <input
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={hendelChange}
             
            />
          </label>
          <label className='main_input' >
            Number
            <input
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={hendelChangeNumber}
             
            />
          </label>
          <button className='main_buttom' type="submit">Add contact</button>
        </form>);
    }

