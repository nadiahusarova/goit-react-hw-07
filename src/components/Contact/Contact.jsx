import { FaRegUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ contact, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaRegUser className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => handleDelete(contact.id)}
        type="button"
        className={s.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
