export function getProprietaires(){
        const url = 'http://192.168.43.242/api/proprietaire'

        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
}

export function getPropById(id){

    const url = 'http://192.168.43.242/api/proprietaire/'+id

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}