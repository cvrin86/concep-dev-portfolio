import React from 'react'


const categories = ["Tous","Site vitrine","Application web" ]

export default function CategoryFilter({activeCategory,onCategoryChange}) {

  return (

<div className='d-flex justify-content-center flex-wrap gap-2 mb-4'>
    {categories.map(category=>(
<button 
key={category}
className={`btn category ${activeCategory===category ? 'active' : ''}`}
onClick={()=>onCategoryChange(category)}
>
    {category}
</button>

    ))}
</div>
  )
}
