import {useState} from 'react';
import './InputTheme.css'

function InputTheme() {
    const[value, setValue] = useState('');

    return(
    <input className='InputTheme'
    type='text'
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder='Введите заголовок заметки...'
    ></input>
    )
}