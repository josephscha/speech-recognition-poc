let initialState = {
    likes: 0
}

export let reducer = (prevState=initialState, action) => {
    switch(action.type){
        case 'LIKE':
            return {...prevState, likes: prevState.likes + 1}
        case 'DISLIKE':
            return {...prevState, likes: prevState.likes - 1}
        default:
            return prevState
    }
}

export const likeCreator = () => ({type: 'LIKE'})
export const dislikeCreator = () => ({type: 'DISLIKE'})