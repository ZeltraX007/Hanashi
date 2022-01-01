import React from "react";
import Footer from "../../components/footer/footer.component"
import "./admin.styles.scss";

export default function About() {
  return(
  <div className="frst">
    <div className="heady"><img src="https://i.ibb.co/KwxWKG8/arr-left.png"></img><p>Admin</p><img src="https://i.ibb.co/HnKGrD9/arr-right.png"></img></div>
    <div className="box">
    <div className="row row1">
    <div>Priyanka Sarkar</div><p>BCA,Final year</p><div><img src="https://i.ibb.co/R2yNp2T/IMG-20210514-023918-790.jpg"></img></div>
   </div>
   <div className="row row2">
    <div><img src="https://i.ibb.co/VtG0jDK/Whats-App-Image-2020-01-23-at-8-26-01-PM-Copy.jpg"></img></div><p>BCA,Final year</p><div>Aritra Sarkar</div>
   </div>
   </div>
   <div className="foott"> <Footer /></div>
  </div>
    
  )
  
}

