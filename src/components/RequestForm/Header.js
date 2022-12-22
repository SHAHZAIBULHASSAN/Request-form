import Alert from 'react-bootstrap/Alert';
import Image from "react-bootstrap/Image";
function Header() {
  return (
    <>
      {[
        'success',
        
      ].map((variant) => (
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
        
        <Image  className="m-0 " constant style={{width:160,height:60,}}
        src=
            "src\Assets\logo.png" 
        rounded
      />
      
        
        </div>
       
      ))}
    </>
  );
}

export default Header;