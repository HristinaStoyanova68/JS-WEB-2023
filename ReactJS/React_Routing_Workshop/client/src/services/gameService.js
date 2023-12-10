import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/jsonstore/games'; //JSON Store service from server

const baseUrl = 'http://localhost:3030/data/games'; //Collections service from server

export const getAll = async () => {
    const result = await request.get(baseUrl);

    // return Object.values(result);//JSON Store service from server

    return result;//the server returns array with objects
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
};

export const getLatestGames = async () => {
    const query = encodeURIComponent(`offset=0&pageSize=3`);
    console.log(query);

    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    console.log(result);
    return result;
}

// export const getLatestGames = async () => {
//     const queryParams = {
//         offset: 0,
//         pageSize: 3
//     };

//     const result = await request.get(baseUrl, {
//         params: {
//             sortBy: '_createdOn desc',
//             ...queryParams
//         }
//     });

//     console.log(result);
//     return result;
// }

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    //without using request function
    // const response = await fetch (baseUrl, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(gameData),
    // });

    // const result = await response.json();

    return result;
};

export const edit = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData);

    return result;
};

export const remove = async (gameId) => {
    request.remove(`${baseUrl}/${gameId}`);
}