import dialogReducer from './dialogReducer'
import commentReducer from './commentReducer'

const Store = {
    _state: {
        shop: {
            books: [
                {
                    id: 0,
                    title: 'Государство и революция',
                    authors: ['В.И. Ленин'],
                    text: 'Чёт там про государство и чёто там про революцию...',
                    image: 'https://cdn.ast.ru/v2/ASE000000000851274/COVER/cover1__w340.jpg',
                },
                {
                    id: 1,
                    title: 'Манифест коммунистической партии',
                    authors: ['Ф. Энегельс', 'К. Маркс'],
                    text: 'Ну это манифест... Про партию коммунистическую...',
                    image: 'https://s1.livelib.ru/boocover/1000602241/200/eeaf/boocover.jpg',
                },
                {
                    id: 2,
                    title: 'Незнайка на луне',
                    authors: ['Н.Н. Носов'],
                    text: 'Прилетел Незнайка на луну...',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-p/6153679741.jpg',
                },
            ],
        },
        commentSection: {
            comments: [
                {
                    id: 0,
                    author: 'Eugenue',
                    text: "This book is plohaya, mne don't nravica it",
                },
                {
                    id: 1,
                    author: 'Ivan Temnoholmov',
                    text: "Oh, yeah, don't stop!",
                },
            ],
            newCommentText: 'Semen Evgenuenivch',
        },
        dialogSection: {
            dialogItems: [
                { id: 0, name: 'Billy' },
                { id: 1, name: 'Van' },
            ],
            messages: [
                { id: 0, message: 'Screw you guys' },
                { id: 1, message: "Oh yeah don't stop" },
            ],
            newMessageText: 'Semen',
        },
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.dialogSection = dialogReducer(
            this._state.dialogSection,
            action
        )
        this._state.commentSection = commentReducer(
            this._state.commentSection,
            action
        )
        this._callSubscriber(this._state)
    },
}

export default Store
