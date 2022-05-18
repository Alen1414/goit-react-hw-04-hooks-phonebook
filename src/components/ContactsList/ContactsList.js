import React from 'react';
import 'components/Form.css';
import 'components/Form.css';
import {ReactComponent as DeleteIcon} from 'components/icons/delete.svg'
import IconButton from 'components/IconButton/IconButton';

const ContactsList = ({contacts,onDeleteContact,}) => (
 <ul  className='main_form '>
        {contacts.map(({ id,  name, number })=>(
          <li className='contacts' key={id}>
            <p>{name}, {number}</p>
            
          {/* <button className='contacts_name' onClick={() => onDeleteContact(id)} >Delete</button>  */}
            <IconButton onClick={() => onDeleteContact(id)}>
              <DeleteIcon width='32' height='32' fill='#black' />
            </IconButton> 
            
            </li>
        ))}
        
    </ul>
);
export default ContactsList;

