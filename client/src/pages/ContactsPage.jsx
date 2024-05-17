import ContactForm from "../components/Contacts/ContactFrom";
import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";

const ContactsPage = () => {
  return (
    <>
      <Hero {...heroData.contacts} />
      <ContactForm />
    </>
  );
};
export default ContactsPage;
