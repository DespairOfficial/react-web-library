import React, { useEffect, useState } from 'react'
import { getBoughtBooksUsers } from '../../../../http/adminAPI'
import Table from '../Table/Table'
import styles from './BooksBought.module.css'
const BooksBought = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        getBoughtBooksUsers().then((data) => {
            setData(data.stats)
        })
    }, [])

    return <Table data={data} />
}
export default BooksBought
