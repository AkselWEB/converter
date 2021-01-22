import React, { useState } from 'react'
import StyledContact from './StyledContact'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

const Contact = () => {
    const [formulaire, setFormulaire] = useState({
      name: '',
      object: '',
      message: ''
    })
    init("user_sLxa79xfMFNi04FmCKhvW");

    const handleChange = (event) => {
      const input = event.target.name
      const value = event.target.value
      setFormulaire({
        ...formulaire,
        [input]: value
      })
    }

    const sendEmail = (event) => {
      event.preventDefault()
      emailjs.send('service_duo8iz6', 'template_fywa9lr', formulaire, 'user_sLxa79xfMFNi04FmCKhvW')
        .then(() => {
          setFormulaire({
            name: '',
            object: '',
            message: ''
          })
        })
        .catch(err => console.log(err))
    }

    return (
      <StyledContact>
        <div className='container-bottom'>
            <form onSubmit={sendEmail} className='container-input'>
              <label>Name</label>
              <input onChange={handleChange} value={formulaire.name} name='name' required className="input1" />
              <label>Object</label>
              <input onChange={handleChange} value={formulaire.object} name='object' required className="input2" />
              <label >Message</label>
              <textarea onChange={handleChange} value={formulaire.message} name='message' required className="input3" />
              <button type='submit'>
                ENVOYER
              </button>
            </form>
          </div>
      </StyledContact>
    )
}

export default Contact
