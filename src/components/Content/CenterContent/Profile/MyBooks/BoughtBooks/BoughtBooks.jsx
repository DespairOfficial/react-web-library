import { useEffect } from 'react'
import Book from '../Book/Book'
import styles from './BoughtBooks.module.css'
import { connect } from 'react-redux'
import { getCurrentBoughtBooks } from '../../../../../../redux/profileReducer'
const BoughtBooks = (props) => {
    useEffect(() => {
        props.getCurrentBoughtBooks()
    }, [])
    if (props.books.length) {
        return (
            <div className={styles.content}>
                <p>Купленные</p>
                <div className={styles.books}>
                    {props.books.map((book, index) => (
                        <Book {...book} key={index} />
                    ))}
                </div>
            </div>
        )
    } else {
        return <div>Тут ничего нет, а вы что ожидали?</div>
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.profile.books,
    }
}
export default connect(mapStateToProps, { getCurrentBoughtBooks })(BoughtBooks)
