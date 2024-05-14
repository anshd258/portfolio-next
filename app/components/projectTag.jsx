import React from 'react'

function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyle = isSelected ? "border-2 border-primary-500" : "hover:border-2 hover:border-slate-300"
  return (
    <button onClick={onClick} className={`${buttonStyle} rounded-full border-primary-500 mx-2 px-6 py-3`}>{name}</button>
  )
}

export default ProjectTag