import axios from 'axios';

// function to get json data

export default async function getData(userId) {
    
    let {data: user} = await axios ('https://jsonplaceholder.typicode.com/users/${userId}');
    
    let {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts?userId=${userId}');

    user.posts = posts

    return user;


}