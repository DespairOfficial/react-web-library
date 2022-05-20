import React, { useState, useEffect } from 'react'
import { getBooksRating } from '../../../../http/adminAPI'
import styles from './BooksRated.module.css'
import Table from '../Table/Table'
const BooksRated = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        getBooksRating().then((data) => {
            setData(data.rating)
        })
    }, [])
    return <Table data={data} />
}
export default BooksRated
