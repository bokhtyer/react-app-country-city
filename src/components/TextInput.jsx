import React from 'react'

export default function TextInput({id,label,...props}) {
    return (
        <>
            <div className="input-group mb-3">
                <label htmlFor={id}>{label}</label>
                <input className='form-control' id={id} {...props} />
            </div>
        </>
    )
}
