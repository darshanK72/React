import ReactDOM from 'react-dom';
import './Model.css';

function Model(props) {
    return ReactDOM.createPortal(
        <>
            <div className={`model ${props.showModel ? '' : 'hidden'}`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <button onClick={props.closeModel}>Close</button>
            </div>
            <div className={`overlay ${props.showModel ? '' : 'hidden'}`}></div>
        </>
        , document.getElementById('portal')
    )
}

export default Model