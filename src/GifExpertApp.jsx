import { useState } from 'react'
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['Ronaldo']);
    
    const onAddCategory = (newCategory) => {

        if (categories.some(category => category.toLowerCase() === newCategory.toLowerCase())) return;

       setCategories( [newCategory, ...categories] )
        
    }

 
    return (
  <>
        <h3>viva venezuela en esa mierda caballero</h3>
       
        <h1>React Proyect #1</h1>


        <AddCategory 
            onNewValue={ onAddCategory }
        />

        {
            categories.map( category =>(
            <GifGrid 
                key={category} 
                category={category}
            />
        ))
    }

  </>               

)
}
