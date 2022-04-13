import Books from './Books'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        books: state.shop.books,
    }
}
let mapDispatchToProps = (dispatch) => {}
const BooksContainer = connect(mapStateToProps, mapDispatchToProps)(Books)
export default BooksContainer
