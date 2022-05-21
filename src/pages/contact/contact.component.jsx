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
        <div className="form">
        <div className="headt"><img src="https://i.ibb.co/KwxWKG8/arr-left.png"></img><h1 className="owText">Contact Us</h1><img src="https://i.ibb.co/HnKGrD9/arr-right.png"></img></div>
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