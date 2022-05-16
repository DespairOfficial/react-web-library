import React, { useState } from 'react'
import styles from './JumpToPage.module.css'
const JumpToPage = (props) => {
    const [newPage, setNewPage] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')

    const onChangeNewPage = (e) => {
        const regEx = new RegExp('^[0-9]+$|^$')
        const inputValue = Number(e.target.value)

        if (regEx.test(inputValue)) {
            setNewPage(inputValue)
            props.jumpToExactPage(inputValue)
            setErrorMessage('')
        } else {
            setErrorMessage('Только цифры!')
        }
    }
    return (
        <div>
            <p>
                <label htmlFor="inputPage">
                    {errorMessage ? errorMessage : 'Введите номер страницы'}
                </label>
            </p>

            <input
                id="inputPage"
                type="text"
                value={newPage}
                onChange={onChangeNewPage}
            />
        </div>
    )
}
export default JumpToPage
