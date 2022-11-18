import React from 'react'
import { contact } from '../portfolio'
import './Contact/Contact.css'

function Contactos() {
    if (!contact.email) return null

    return (
      <section className='section contact center' id='contact'>
        <h2 className='section__title'>Contacto</h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email
          </span>
        </a>
      </section>
    )
  }

export default Contactos