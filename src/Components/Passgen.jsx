import { useState } from "react";

const Passgen = () => {
    const [newPass, setNewPass] = useState('');
    const [length, setLength] = useState(8);
    const [upperCase, setUpperCase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbol, setSymbol] = useState(true);

    function PassLength(e) {
        if(e.target.value>8){
            setLength(e.target.value);
        }
        else{
            setLength(8);
        }
       
    }

    function generatePassword() {
        let passString = '';
        if (upperCase) {
            passString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (lowercase) {
            passString += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (numbers) {
            passString += '1234567890';
        }
        if (symbol) {
            passString += '!@#$%^&*()-+{}[]|?.,<>';
        }
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * passString.length);
            newPassword += passString[randomIndex];
        }  
        setNewPass(newPassword);
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(newPass);
    }

    return (
        <div className="p-4 h-96 w-1/3 shadow-lg bg-gray-100 rounded-md">
            <div className="mb-4">
                <input
                    type="text"
                    className="border border-gray-400 px-4 py-2 mr-2 rounded text-black w-3/4"
                    value={newPass}
                    readOnly
                />
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={copyToClipboard}
                >
                    Copy
                </button>
            </div>
            <div className="mb-4">
                <h1 className="text-lg font-bold mb-2">Select Password length: (8-50 characters)</h1>
                <input
                    type="number"
                    className="border border-gray-400 px-4 py-2 rounded w-1/4"
                    value={length}
                    onChange={PassLength}
                />
            </div>
            <div className="mb-4">
                <input
                    type="checkbox"
                    id="includeUpper"
                    className="mr-2"
                    checked={upperCase}
                    onChange={() => setUpperCase(!upperCase)}
                />
                <label htmlFor="includeUpper">Include upper case</label>
                <br />
                <input
                    type="checkbox"
                    id="includeLower"
                    className="mr-2"
                    checked={lowercase}
                    onChange={() => setLowercase(!lowercase)}
                />
                <label htmlFor="includeLower">Include lower case</label>
                <br />
                <input
                    type="checkbox"
                    id="includeNumbers"
                    className="mr-2"
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                />
                <label htmlFor="includeNumbers">Include numbers</label>
                <br />
                <input
                    type="checkbox"
                    id="includeSymbols"
                    className="mr-2"
                    checked={symbol}
                    onChange={() => setSymbol(!symbol)}
                />
                <label htmlFor="includeSymbols">Include symbols</label>
                <br />
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={generatePassword}
                >
                    Generate Password
                </button>
            </div>
        </div>
    );
};

export default Passgen;
