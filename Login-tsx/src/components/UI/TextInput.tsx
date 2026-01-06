import type React from "react"

type Props ={
    type: string,
    placeholder : string,
    name : string,
    value: string,
    onChange : React.ChangeEventHandler<HTMLInputElement>,
    className : string,
    onBlur : React.ChangeEventHandler<HTMLInputElement> 
    // gpt
}

export default function TextInput({type , placeholder , name, value , onChange, className, onBlur}:Props ) {
    return (
        <div className="mb-3">
            <input
                type= {type}
                className={className}
                placeholder= {placeholder}
                name= {name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
        </div>
    )
}
