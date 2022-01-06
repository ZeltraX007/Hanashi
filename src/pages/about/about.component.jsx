import React from "react";
import Footer from "../../components/footer/footer.component"
import "./about.styles.scss";

export default function About() {
  return(
  <div className="main">
    <div className="head"><img src="https://i.ibb.co/KwxWKG8/arr-left.png"></img><p>About</p><img src="https://i.ibb.co/HnKGrD9/arr-right.png"></img></div>
    <div className="flex_abs">
    
    <div className="log"><img src="https://img.dtcn.com/image/themanual/best-history-books-to-read-2021.jpg"></img></div>
    <div className="bout part">
    <div className="col-1"><p> Searching book sites usually means keying in an author&rsquo;s name or a book title.But if you know the name already, your search is likely to turn up books you’ve already heard about. No surprises there.</p></div><div className="col-2"><p>  How about if you didn’t need an author name at all? If you could start with what you as a reader are looking for right now? You might be in the mood for a funny read, or something to make you think. Do you want a book that’s easy going or more of a challenge to get your teeth into? </p></div>  
    </div></div>
   <div className="foot"> <Footer className="footer"/></div>
  </div>
    
  )
  
}

