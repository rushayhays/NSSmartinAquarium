


export const getFishes = () => {

    return fetch("http://localhost:8088/fishes")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const getLocations = () => {

    return fetch("http://localhost:8088/locations")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const getTips = () => {

    return fetch("http://localhost:8088/tips")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}