import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { changeFilter } from "./redux/filtersSlice";
import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearch = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.h1}>Phonebook</h1>
      <ContactForm />
      <SearchBox onSearch={handleSearch} />
      <ContactList />
    </div>
  );
};

export default App;
