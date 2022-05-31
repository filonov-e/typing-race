import { useEffect, useState } from 'react';
import './styles/App.css';

let ws: WebSocket;

function App() {
    const [value, setValue] = useState<string>();

    useEffect(() => {
        ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = (event) => {
            const message = event.data;
            setValue(message);
        };
    }, []);

    const onChange = (newValue: string) => {
        ws.send(newValue);
    };

    return (
        <div className="App">
            <input
                type="text"
                value={value}
                onChange={({ target: { value } }) => onChange(value)}
            />
        </div>
    );
}

export default App;
