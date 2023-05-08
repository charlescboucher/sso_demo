import UserService from "../services/UserService";
import HttpService from "../services/HttpService";
HttpService.configure();

const Contact = () => {
    if(UserService.hasRole(['Role1']))
    {
        return (<div>
                    <h1>Contact</h1>
                </div>
        );
    }
    else
        return <h1>No Access</h1>; 

  };
  
  export default Contact;