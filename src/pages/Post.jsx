import React from 'react';
import { useParams,useNavigate } from "react-router-dom";


function Post(props) {

    const { postId } = useParams();
    const navigate = useNavigate()

    const handleOnclick = () => {
        const nextPostId = Number(postId) + 1 ;
        const nextPath = `/post/${nextPostId}`
        navigate(nextPath)
        
    }
    return (
        <div> 
            <h1>Post {postId}</h1>
            <button onClick={handleOnclick}>next page</button>
        </div>
    );
}

export default Post;