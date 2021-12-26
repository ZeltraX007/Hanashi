import React from 'react';
import Footer from "../../components/footer/footer.component";
import ContactForm from "../../components/form/form.component.jsx";
import { useEffect} from "react";
import './contact.styles.scss'

function ContactUs() {
     
    useEffect(() => {
        if (document) {
          const stylesheet = document.createElement("link");
          stylesheet.rel = "stylesheet";
          stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
    
          document.head.appendChild(stylesheet);
        }
      }, []);
       
return (
    <div className="contact-us">
        <div className="form"><h1 className="owText">Contact US</h1>
        <div className="py-6">
          <ContactForm />
        </div></div>
        <div>
          <div className="foot-wrap"><Footer className="footer"/></div>
      </div>
    </div>
  );
}

export default ContactUs;