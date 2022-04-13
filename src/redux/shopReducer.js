const toggleCard = 'TOGGLE-IN-OUT-CARD'
let initialState = {
    books: [
        {
            id: 0,
            title: 'Государство и революция',
            authors: ['В.И. Ленин'],
            text: 'Чёт там про государство и чёто там про революцию...',
            image: 'https://cdn.ast.ru/v2/ASE000000000851274/COVER/cover1__w340.jpg',
            isInCard: false,
        },
        {
            id: 1,
            title: 'Манифест коммунистической партии',
            authors: ['Ф. Энегельс', 'К. Маркс'],
            text: 'Ну это манифест... Про партию коммунистическую...',
            image: 'https://s1.livelib.ru/boocover/1000602241/200/eeaf/boocover.jpg',
            isInCard: false,
        },
        {
            id: 2,
            title: 'Незнайка на луне',
            authors: ['Н.Н. Носов'],
            text: 'Прилетел Незнайка на луну...',
            image: 'https://cdn1.ozone.ru/s3/multimedia-p/6153679741.jpg',
            isInCard: true,
        },
    ],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const toggleAddToCard = () => ({ type: toggleCard })
export default shopReducer
