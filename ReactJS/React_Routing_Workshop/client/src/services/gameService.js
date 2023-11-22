import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    // console.log(result);
    console.log(Object.values(result));
    return Object.values(result);
}

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    console.log(result);
    return result;
}

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
}