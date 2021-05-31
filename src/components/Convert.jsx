import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import UnitControl from './UnitControl';
import UnitConverter from './UnitConverter';

const Convert = () => {
    const [inputValue, setInputValue] = useState(0);

    const handleINputerChange = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }

    return (
        <div className="container">
            <Header />
            <div className="card-body">
                <UnitControl />
                <UnitConverter
                 inputValue={inputValue}
                 handleINputerChange={handleINputerChange}
                />
            </div>
            <Footer inputValue={inputValue} /> {/*--將inputValue傳入Footer--*/}
        </div>
    )
}

export default Convert
