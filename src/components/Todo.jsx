"use client"
import React, { useState } from 'react'

const todo = () => {
  const [list, setList] = useState(["g-owoeowjfm", "eer", "wwiiwjw"]);
  const [name, setName] = useState("");

  function onAddName(){
    setList([...list, name]);
    setName("");
  }

  function onDelete(index){
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  }
  return (
    <div className='flex items-center flex-col justify-center'>
      <h1>Task List</h1>
      <div className='box-1 flex items-center justify-center gap-2 m-6'>
      <input
      type='text'
      placeholder='enter task...'
      className='p-1 outline-none'
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <button className='bg-green-600 rounded p-1' onClick={onAddName}>
        Add
      </button>
      </div>
      <div>
        <ul className='flex flex-col gap-2'>
          {list.map((name, index) => (
            <li key={index} className='bg-gray-200 flex justify-between rounded w-[18rem] basis-[0%] grow shrink p-2'>
              {name}
            <button className='bg-red-600 px-3 py-1 rounded' onClick={() => onDelete(index)}>
              x
            </button>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  )
}

export default todo
