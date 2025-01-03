import React from 'react'
import { useNavigate } from 'react-router-dom';

function PasswordResetButton({children }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/password-reset');
    };
    return (
        <button
            onClick={handleClick}
            className="text-stone-800 hover:text-stone-800 transition-colors"
            type="button"
        >
            {children}
        </button>
    )
}

export default PasswordResetButton
