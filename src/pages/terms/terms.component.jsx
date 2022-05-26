import React from 'react';
import Footer from "../../components/footer/footer.component";
import Slidedown from "../../components/slidedown/slidedown.component"
import './terms.styles.scss'

function Privacy() {  
       
return (
    <div >
        <div className="privacy">
            <h1>Hanashi&trade; Terms of Use</h1>
            <div>
                <div>
                    <span className='welcome'>You are welcome to Hanashi. You can avail the services offered here or through its affiliates, but prior to that you need to agree to the terms and conditions. If you browse our site or visit our shop, you have to accept these conditions.
                        <br />Make sure that you have read the terms and conditions properly. While availing current or future services that are offered by the site or its affiliates, you will abide by these conditions and guidelines that are applicable.
                        </span>
                </div>
                <div>
                    <span className='heading'>
                        <Slidedown label="The Privacy Policy" >

                            <p>Make sure that you thorough review the privacy policy that governs the visit to our site. You shall understand our practices properly.</p>
                        </Slidedown>
                        <Slidedown label="Terms and conditions for all purchases" >
                            <p>The orders are for you to buy products from us. We will accept your offer by issuing a conformation email or by confirming through mobile about the products that you have ordered. These acceptances are subject to your assent to the conditions of sale. No other conditions will be applicable in this context.</p>
                        </Slidedown>
                        <Slidedown label="Methods of Electronic Communication" >
                            <p>As you visit our site or send any emails to use, you actually are communicating electronically. With this communication you give the consent for receiving communication from our end electronically. We can post notices to our website or communicate with your directly through mail. You will have to agree that all the notices and any other forms of communications that are provided by us electronically completely satisfy any kinds of legal necessities and such communications are in writing terms.</p>
                        </Slidedown>
                        <Slidedown label="Prices" >
                            <p>The prices that we post in this website can be changed without any notice. The prices that are available before the commencement of order will be applicable. The prices that are posted also include charges and taxes. In case, if there are any additional charges, it will be notified on the website.</p>
                        </Slidedown>
                        <Slidedown label="Conditions of Payment" >
                            <p>The payments will have to reach us before shipping unless the order is made on the condition of cash on delivery. We can accept payment through cash, credit cheque, net banking, draft, debit card and even mobile payment.</p>
                        </Slidedown>
                        <Slidedown label="The Return of Products" >
                            <p>If you return any product, we will accept if it is damaged during shipping or it defective. We will also accept the return, if the product is wrongly delivered to you or the packing is incomplete. However, we should be informed about the discrepancies within 72 hours from the delivery date of the product. At the same time, the products should also be returned in the original condition.</p>
                        </Slidedown>
                        <Slidedown label="The replacement conditions" >
                            <p>We offer you a guarantee of 14 days replacement for the products that we have sold in the site adhering to certain conditions that are mentioned. The customers will have to notify us about the defect or the damage within 72 hours from the receipt of the products. In case, if the customer fails to inform us within the due date, we reserve the right to reject or accept the request. We can replace the defective product with a brand new one without charging any extra amount.
                                <br /><br />Bookswagon will also make efforts to replace the specific product that has been ordered. However, we have the right to give an alternate product, if the specified product is out of stock

                                <br /><br />However, the replacement guarantee is valid only if the defect is from the manufacturer or if damages are due to the transport. We will consider the damage as invalid if it is due to normal tearing and wearing or if there has been any kind of negligence on part of the customer. If our customers come across any such issues with any product, they should contact with the customer service within 72 hours. Failing this, we might decide to deny the request for replacement.

                                <br /><br />On the other hand, availing digital contents like e books are not returnable.</p>
                        </Slidedown>
                        <Slidedown label="Policy of Change and Cancellation" >
                            <p>If there is a change in quantity or addition of items or if specific changes have been accepted, we can modify the details of the orders. All the sales are final and the cancellations of the items can be made before the order is finally shipped. Without any liability, we might cancel the accepted order before the shipment, if the credit department does not gives the approval of your credit. We can do the same if there is a problem with the mode of payment that you have selected.</p>
                        </Slidedown>
                        <Slidedown label="Refund Policy" >
                            <p>If you cancel any order after you have procured but before shipping, we will charge the stocking fee that is applicable for each category of product. If you cancel international books, we can charge a restocking fee of 25% of the value of order. The other orders will have the restocking fee of about 10% of the value of order. We will make the refund after the deduction is made of the restocking fee that is applicable within 10 working days.</p>
                        </Slidedown>
                        <Slidedown label="Rights of Intellectual Property" >
                            <p>Copyright: All the contents like graphics, texts, button icons, logos, digital downloads, audio clips is the property of Bookswagon.com and is completely protected by Indian law of Copyright. The content is also the exclusive property of the site including the software in use. 
                                <br /><br />Trademark:</p>
                                <ul>
                                <li>Protected Marks: The protected marks include Hanashi.com & design and other things that are in the website.</li>
                                <li>Protected Graphics: The graphics, page headers, logos, icons, scripts are trademarks of the site. These trademarks and trade dress might not be used in relation to products and services that are not of the company. All the other trademarks are owned by the company and its affiliate sites. These are the property of different owners. They might not be connected to or affiliated with Bookswagon.com.</li>
                                </ul>
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