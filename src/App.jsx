import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter, changeFilter } from "./redux/filtersSlice";
import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const searchName = useSelector(selectNameFilter);

  const filtredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleSearch = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.h1}>Phonebook</h1>

      <ContactForm />

      <SearchBox onSearch={handleSearch} />

      <ContactList data={filtredContact} />
    </div>
  );
};

export default App;
