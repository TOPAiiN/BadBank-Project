import Card from "../components/Card/Card.js";

function Home(){
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Project"
        title="Welcome to your beloved new bank."
        text="We have worked hard to fill your needs."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}        
      />    
    );  
  }

export default Home;

