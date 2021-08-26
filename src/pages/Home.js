import Card from "../components/Card/Card.js";

function Home(){
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Project"
        title="Welcome to the your new bank"
        text="You can move around using the navigation bar."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}        
      />    
    );  
  }

export default Home;

