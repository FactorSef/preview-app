import React, { createElement } from 'react';
import './App.scss';

import { FormatText } from './components/FormatText';

export const App = () => {
    const [value, setValue] = React.useState('');

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    return (
        <div>
            multiline
            <div>
                <textarea value={value} onChange={handleChange} />
            </div>
            <h3>create element</h3>
            <FormatText value={value} type="ce" />
            <h3>br</h3>
            <FormatText value={value} type="br" />
            <h3>default</h3>
            <FormatText value={value} />
        </div>
    )
}

export default App;