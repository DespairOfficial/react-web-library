import DialogItems from './DialogsItems'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogsPage.dialogItems,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const DialogsItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogItems)
export default DialogsItemsContainer
