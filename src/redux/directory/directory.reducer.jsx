const INITIAL_STATE = {
    sections: [
        {
            title: "Sci-Fi",
            imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            id: 1,
            linkUrl: "shop/science-fiction"
        },
        {
            title: "Mystery",
            imageUrl: "https://images.pexels.com/photos/8369526/pexels-photo-8369526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            id: 2,
            linkUrl: "shop/mystery"
        },
        {
            title: "Romance",
            imageUrl: "https://images.pexels.com/photos/3673460/pexels-photo-3673460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            id: 3,
            linkUrl: "shop/romance"
        },
        {
            title: "Horror",
            imageUrl: "https://images.pexels.com/photos/3343253/pexels-photo-3343253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            size: "large",
            id: 4,
            linkUrl: "shop/horror"
        },
        {
            title: "Non-Fiction",
            imageUrl: "https://images.pexels.com/photos/7014878/pexels-photo-7014878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            
            size:"medium",
            id: 5,
            linkUrl: "shop/non-fiction"
        },
        {
            title: "Classics",
            imageUrl: "https://images.pexels.com/photos/1560093/pexels-photo-1560093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            id: 6,
            linkUrl: "shop/classics"
        },
        {
            title: "Fantasy",
            imageUrl: "https://i.pinimg.com/750x/4d/08/35/4d0835c25a73d7702bea3747f6575cae.jpg",
            id: 7,
            linkUrl: "shop/fantasy"
        }
        
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer