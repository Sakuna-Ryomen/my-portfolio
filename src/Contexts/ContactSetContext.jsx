import { ContactContext } from './ContactContext'
import { useState } from 'react';

const ContactSetContext = (props) => {

    const [click, setClick] = useState(false);

  return (
    <div>
      <ContactContext.Provider value={[click,setClick]}>
        {props.children}
      </ContactContext.Provider>
    </div>
  )
}

export default ContactSetContext
