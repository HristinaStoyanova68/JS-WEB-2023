import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3030/jsonstore/comments';//JSON Store service
const baseUrl = 'http://localhost:3030/data/comments';//Collections service

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });

    // const result = await request.get(baseUrl);//JSON Store service
    const result = await request.get(`${baseUrl}?${query}`);//Collections service

    //Temp solution until migration to collection service
    // return Object.values(result).filter(comment => comment.gameId === gameId);  //JSON Store service

    return result;  //Collections service
};

export const create = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        text,
    });

    return newComment;
}