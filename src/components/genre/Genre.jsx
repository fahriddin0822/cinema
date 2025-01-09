import React from 'react'

const Genre = ({data, setSelectedGenre, selectedGenre, setPage}) => {

    const handleChange = id => {
        setPage(1)
        if(selectedGenre.includes(id)){
            setSelectedGenre(prev => prev.filter(selectedId => selectedId !== id))
        }else{
            setSelectedGenre(prev => ([...prev, id]))
        }
    }

  return (
    <div className='flex gap-3 overflow-auto p-2 container'>
        {
            data?.map((item)=>(
                <div onClick={()=> handleChange(item.id)} className={`whitespace-nowrap p-1 bg-slate-200 rounded-md cursor-pointer select-none ${selectedGenre.includes(item.id) ? "bg-slate-400": ""} "`} key={item.id}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Genre