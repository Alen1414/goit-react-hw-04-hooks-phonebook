import React, { Component } from 'react';
import 'components/Form.css';
class Form extends Component{
    state = {
        name: '',
        number: '',
    };
    

   //-------- получаем что вводим в инпуте
    hendelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    };
    hendelSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
    };
    //-----очищаем инпут после отправки 
    
  reset = () => {
    this.setState({ name: '', number: '' });
  };
    render() {
        return (
            
            <form className='main_form' onSubmit={this.hendelSubmit}>
                
          <label className='main_input'>
            Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.hendelChange}
             
            />
          </label>
          <label className='main_input' >
            Number
            <input
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.hendelChange}
             
            />
          </label>
          <button className='main_buttom' type="submit">Add contact</button>
        </form>);
    }
}
export default Form;