import { useEffect } from 'react'
import Book from '../Book/Book'
import styles from './AddedBooks.module.css'
import { connect } from 'react-redux'
import { getFavoriteBooks } from '../../../../../../redux/profileReducer'
const AddedBooks = (props) => {
    useEffect(() => {
        props.getFavoriteBooks()
    }, [])
    if (props.books.length) {
        return (
            <div className={styles.content}>
                <p>Понравившиеся</p>
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
    return { books: state.profile.books }
}

export default connect(mapStateToProps, { getFavoriteBooks })(AddedBooks)
