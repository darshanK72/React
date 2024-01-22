import './App.css';
import MyComponent from './MyComponent/MyComponent.js';

function App() {
    return (
        <>
            <div className="border">
                <h1 className="red">This is App Component</h1>
                <MyComponent/>
            </div>
        </>
    )
}

export default App;