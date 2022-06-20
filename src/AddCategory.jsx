import React, { useState } from 'react'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = () =>{
        setInputValue(event.target.value)
    }

    const onSubmit = ( evento ) => {
        evento.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        setCategories( categories => [ ...categories, inputValue ] );
        setInputValue('');
        
    }
    
    return (

        <form onSubmit={onSubmit} >
            <input 
                type='text'
                placeholder='Buscar gift'
                value = {inputValue}
                onChange= {onInputChange}
            />
        </form>

    )
}
