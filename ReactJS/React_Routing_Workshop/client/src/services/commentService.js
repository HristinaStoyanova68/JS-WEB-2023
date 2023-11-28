import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3030/jsonstore/comments';//JSON Store service
const baseUrl = 'http://localhost:3030/data/comments';//Collections service

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`,
    });
    
    // const result = await request.get(baseUrl);//JSON Store service
    const result = await request.get(`${baseUrl}?${query}`);//Collections service
    console.log(result);
    //Temp solution until migration to collection service
    // return Object.values(result).filter(comment => comment.gameId === gameId);  //JSON Store service

    return result;  //Collections service
};

export const create = async (gameId, text) => {  // if we have input username => we must include username in params !!!
    const newComment = await request.post(baseUrl, {
        gameId,
        text,
    });

    return newComment;
}