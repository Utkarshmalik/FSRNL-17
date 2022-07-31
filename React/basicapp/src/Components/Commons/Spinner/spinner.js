import Spinner from 'react-bootstrap/Spinner';


function SpinnerComponent({message}){
    return  <div>
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>
        <p>{message}</p>
     </div>

}

export default SpinnerComponent;