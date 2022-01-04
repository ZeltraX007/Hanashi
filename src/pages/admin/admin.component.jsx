import React from "react";
import Footer from "../../components/footer/footer.component"
import "./admin.styles.scss";

export default function About() {
  return(
  <div className="frst">
    <div className="heady"><img src="https://i.ibb.co/KwxWKG8/arr-left.png"></img><p>Admin</p><img src="https://i.ibb.co/HnKGrD9/arr-right.png"></img></div>
    <div className="box">
    <div className="row row1">
    <div></div><p>"I need a dog"<br/></p><div><img className="id" src="https://i.ibb.co/yh7WR9L/photo-2022-01-01-12-15-06.jpg"></img></div>
   </div>
   <div className="row row2">
    <div><img className="id" src="https://i.ibb.co/VtG0jDK/Whats-App-Image-2020-01-23-at-8-26-01-PM-Copy.jpg"></img></div><p>"zdvzsfsdbcvxvzsss<br />ssssssdfsdxssssssssxv<br/>sfdgxdgsssgzzzczfsgs"</p><div>Priyanka Sarkar</div>
   </div>
   <div className="row row3">
    <div>Aritra Sarkar</div><p>"What I wish I could tell myself<br /> that painting and photography <br />remains a small part in my life"</p><div><img className="id" src="https://i.ibb.co/XF5KS2m/Whats-App-Image-2022-01-01-at-9-35-32-AM.jpg"></img></div>
   </div>
   <div className="row row4">
    <div><img className="id" src="https://i.ibb.co/3W6GmPz/Whats-App-Image-2022-01-01-at-9-41-38-AM.jpg"></img></div><p>BCA,Final year</p><div>Sanchari Chakraborty</div>
   </div>
   <div className="row row5">
    <div>Sreejita Rakshit</div><p><br /> <br /></p><div></div>
   </div>
   </div>
   <div className="foott"> <Footer /></div>
  </div>
    
  )
  
}

