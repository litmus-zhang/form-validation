import { useState } from 'react';
import './formInput.css'

export default function FormInput(props)
{
    const [focused, setFocused] = useState(false);
    const { id, onChange, label, errorMessage, ...inputProps } = props;
    const handleFocus = () => setFocused(true);
  return (
      <div className='FormInput'>
          <label>{ label}</label>
          <input
             {...inputProps}
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              onFocus={()=>inputProps.name === 'confirmPassword' && setFocused(true)}
            //   required
          />
          <span>{errorMessage }</span>
    </div>
  )
}
