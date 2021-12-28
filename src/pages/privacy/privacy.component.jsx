import React from 'react';
import Footer from "../../components/footer/footer.component";
import Slidedown from "../../components/slidedown/slidedown.component"
import './privacy.styles.scss'

function Privacy() {  
       
return (
    <div >
        <div className="privacy">
            <h1>Hanashi&trade; Privacy Policy</h1>
            <div>
                <div>
                    <span className='welcome'>Hanashi&trade; website strictly focuses on the privacy of our customers’ and our loyalty towards our commitment. The policy discloses the practice by which we gather the necessary information through our website.</span>
                </div>
                <div>
                    <span className='heading'>
                        <Slidedown label="The Information that is collected" >

                            <p>When you sign up for a Hanashi&trade; account and want to avail the products & services that is offered by our website, we safely store all the information that is provided by you. We make use of an order form whereby we provide the opportunity to our customers to request for information, products & services. We also collect the contact information (email address & mobile number) of our visitors along with the financial information (credit card & debit card). We use contact information to send orders to the customers along with the information of our company. The information can also be used to communicate with the customers, as and when need arises. On the other hand, financial information gathered to invoice customer for different kinds of products and services. The mailing and promotional calls can be stopped by the user if required by following the steps given in Choice/Opt-out below.<br />
                                <br />The information of your browser along with your IP address is stored in the form of “cookie”. This makes it easy for us to identify you and the shopping cart with added products & services. Cookie is a tiny data file which is store in your hard drive. Cookie file neither read stored in your hard drive nor read the other cookie file. You can reject the storage of the cookie in your hard drive by simply switching off this option in your browser. For purchasing, it’s not necessary to switch on the cookie in the browser option.</p>
                        </Slidedown>
                        <Slidedown label="Uses of the collected information" >
                            <p>In order to improve the online customer experience, Hanashi&trade; makes use of the information collected. Thus when you sign in, it authenticate you and send notification through email. Your request can be fulfilled for different product & services. We will use the information for customizing the advertisements and content according to the customer’s need. Information used for capturing data insights for internal and external clients.</p>
                        </Slidedown>
                        <Slidedown label="Sharing of Information" >
                            <p>You can be assured that Hanashi&trade; does not believe in sharing any personal information with any individual, company or organization. Information is only shared if we have consent from your side unless</p>
                            <ul>
                                <li>We are working with some reliable partners that agree to accept our terms & conditions and also agree to sign a confidentiality agreement.</li>
                                <li>We also respond to court orders or any other legal processes in order to exercise or establish the legal rights for defending any claims.</li>
                                <li>We may also disclose the information of those customers who may come in terms of suspicion for any fraud or illegal transaction. Then their information will be used for legal processes or investigation by the court.</li>
                                <li>Choice/Opt-out</li>
                                <li>This website may have pop-ups of other website and the information given to them is not our responsibility</li>
                            </ul>
                        </Slidedown>
                        <Slidedown label="Data integrity" >
                            <p>Hanashi&trade; collected the customer’s personal information and processes it in accordance with the privacy policy. We ensure that the data we collected, stored for different process practices needed to provide the meaningful online service to the customer. Thus, we request our customer’s to provide the data as accurate as possible.</p>
                        </Slidedown>
                        <Slidedown label="Security &amp; Confidentiality" >
                            <p>Hanashi&trade; restricts access of the personal information to the employees, moderator, contractors and agents for updates, delivery and for improvement of the product and services. They have to abide to the confidentiality agreement failing which they will be terminated.
                                <br /><br />We make use of the best security measures for the protection against the misuse, loss of information that is under our control. We go through the SSL secure commerce server which uses the military grade encryption to protect all the information with specific codes. Each customer is important to us and we consider their approval with due respect.</p>
                        </Slidedown>
                        <Slidedown label="Choice/Opt-out" >
                            <p>Customers can unsubscribe the email at any point of time according to their desire by following the suggestion given at the bottom of the Hanashi&trade; email/newsletter.</p>
                        </Slidedown>
                        <Slidedown label="Contacting Hanashi&trade;" >
                            <p>If there is any changes that you would like to make in your current information then do remove your previous contact details so that you don’t get any updates in your old contacts. You can also be with us through the following contacts:
                                <br />Email: hanashi.books@gmail.com
                                <br />Mail: SR Ecommerce Factory Pvt. Ltd., 2/14, ground floor
                                <br />Ansari road , Daryaganj Delhi 110002
                                <br />Call: 011-41521153, 011-40159253</p>
                        </Slidedown>
                    </span>
                </div>
            </div>
        </div>
        <div>
          <div><Footer className="footer"/></div>
      </div>
    </div>
  );
}

export default Privacy;