import React from "react";
import "./index.css";
interface ContactProps{}
const Contact: React.FC<ContactProps> = (props) => {
    const {} = props;
      return (
        <div className="contact">
         <h1 className="big-title">Hello Contact</h1>
         <p className="description">
         We offer full-service catering for any event, 
         large or small. We understand your needs and 
         we will cater the food to satisfy the biggerst 
         criteria of them all, both look and taste. 
         Do not hesitate to contact us.
         </p>
         <p className="address">Catering Service, 42nd Living St, 43043 New York, NY</p>
         <p className="address">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

         <form>
            <div className="form-group">
        <input type="text" placeholder="Name" required
        className="form-control"/>
            </div>
        <div className="form-group">
             <input type="number" placeholder="How many people" required
             className="form-control" />
        </div>
        <div className="form-group">
            <input type={"datetime-local"} className="form-control"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" 
            placeholder="Messenge \ Spacailrequirements"/>
        </div>
        <input type="button" value="SENDMESSENGE" className="btn-submit"/>
         </form>
        </div>
      );
};
export default Contact;