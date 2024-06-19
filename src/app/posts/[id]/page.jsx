import React from 'react';
const getDetailsPost = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    const data = await res.json();
    return data;
}

export const generateMetadata = async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();
    return {
        title: `${postData.title}`,
        description: postData.body,
        keywords : postData.body.split(' ')
    }
}

const PostDetailsPage = async({params}) => {
    const {title, body, id} = await getDetailsPost(params.id)
    return (
        <div>
            <h6>Title: {title}</h6>
            <h6>Description: {body}</h6>
        </div>
    );
};

export default PostDetailsPage;