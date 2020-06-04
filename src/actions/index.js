export function moviesList()
{
    return{
        type: 'MOVIES_LIST',
        payload: [
            {id:1, name:'Rambo'},
            {id:2, name:'Kim Tae Pyu'},
            {id:3, name:'Maggi'}
        ]
    }
}

export function artistList()
{
    return{
        type: 'ARTISTS_LIST',
        payload: [
            {id:1, name:'artist-1'},
            {id:2, name:'artist-2'},
            {id:3, name:'artist-3'}
        ]
    }
}
