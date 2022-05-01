import DialogItems from './DialogsItems'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogsPage.dialogItems,
    }
}
const DialogsItemsContainer = connect(mapStateToProps, {})(DialogItems)
export default DialogsItemsContainer
