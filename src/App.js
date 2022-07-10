import { useState } from 'react';
import './App.css';
function App() {
    const [precentBar, setPrecentBar] = useState('');
    const [passInputChange, setPassInputChange] = useState('');
    const [passInputClasses, setPassInputClasses] =
        useState('pass-input-passive');
    const [toggleIcon, setToggleIcon] = useState('☠️');
    const [toggleIconClasses, setToggleIconClasses] = useState(
        'toggle-icon-passive'
    );
    const [ripple, setRipple] = useState('');
    const [passLabel, setPassLabel] = useState('Strength');
    const [type, setType] = useState('password');

    const addClass = (className) => {
        setPrecentBar('');
        if (className) {
            setPrecentBar(className);
        }
    };

    const handlePassInput = (e) => {
        setPassInputChange(e.target.value);
        if (passInputChange.length === 0) {
            setPassLabel('Strength');
            addClass();
        } else if (passInputChange.length <= 4) {
            setPassLabel('Weak');
            addClass('weak');
        } else if (passInputChange.length <= 7) {
            setPassLabel('Not Bad');
            addClass('average');
        } else {
            setPassLabel('Strong');
            addClass('strong');
        }
    };

    const togglePassInput = (e) => {
        if (type === 'password') {
            setType('text');
            setToggleIcon('💀');
            setRipple('ripple-active');
            setPassInputClasses('pass-input-active');
            setToggleIconClasses('toggle-icon-active');
        } else {
            setType('password');
            setToggleIcon('☠️');
            setRipple('ripple-passive');
            setPassInputClasses('pass-input-passive');
            setToggleIconClasses('toggle-icon-passive');
        }
    };
    return (
        <div className='App'>
            <div className='input-container'>
                <div className='input-group'>
                    <input
                        type={type}
                        className={passInputClasses}
                        placeholder='Enter your password'
                        value={passInputChange}
                        onChange={handlePassInput}
                    />
                    <span
                        onClick={togglePassInput}
                        className={`toggle ${toggleIconClasses}`}
                    >
                        {toggleIcon}
                    </span>
                    <span className={`ripple ${ripple}`}></span>
                </div>
                <div className='pass-strength'>
                    <div className='strength-percent'>
                        <span className={precentBar}></span>
                    </div>
                    <span className='strength-label'>{passLabel}</span>
                </div>
            </div>
        </div>
    );
}

export default App;
