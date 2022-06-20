// Importación de Hooks
import { useState } from "react";

// Importaciones de components
import { AddCategory } from "./AddCategory";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories( [ ...categories, 'Valorant' ] )
    }

    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories = { setCategories } />

            {/* Listado de Gif */}
            <ol>
                { categories.map( category => {
                    return <li key={ category } > {category} </li>
                } ) }
            </ol>
                {/* Gif Item */}
        </>
    
  )
}
