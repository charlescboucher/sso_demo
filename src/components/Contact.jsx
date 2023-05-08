import UserService from "../services/UserService";
const Contact = () => {
    if(UserService.hasRole(['Role1']))
    {
        return (<div>
                    <h1>Contact</h1>
                    <span>{UserService.userRoles}</span>
                </div>
        );
    }
    else
        return <h1>No Access</h1>; 

  };
  
  export default Contact;