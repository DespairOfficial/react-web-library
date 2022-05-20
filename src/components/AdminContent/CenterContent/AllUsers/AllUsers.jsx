import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../../http/adminAPI'
import styles from './AllUsers.module.css'
import Table from '../Table/Table'
const AllUsers = () => {
    const [users, setUsers] = useState({})

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data.users)
        })
    }, [])
    return <Table data={users} />
}
export default AllUsers
