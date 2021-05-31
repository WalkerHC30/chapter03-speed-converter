import React from 'react'

const UnitConverter = (props) => {
    const {inputValue, handleINputerChange} = props;

    return (
        <div className="converter">
        <div className="flex-1">
            <div className="converter-title">Set</div>
            <input 
            type="number" 
            className="input-number" 
            value={inputValue}
            onChange={handleINputerChange} 
            min="0"/>
        </div>
        
        <span className="angle-icon fa-2x" style={{ marginTop: '30px'}}>
            <i className="fas fa-angle-right"></i>
        </span>

        <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input type="text" className="input-number text-right" value={inputValue/8} disabled/>
        </div>
    </div>
    )
}

export default UnitConverter
