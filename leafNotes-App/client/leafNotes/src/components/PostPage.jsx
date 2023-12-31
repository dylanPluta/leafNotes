import { useParams, Link } from "react-router-dom";
import React from 'react';
import Comments from './Comments';
import CreateComment from "./CreateComment";

const PostPage = ({notes, deleteNote, addComment}) => {
    const { id } = useParams();
    const post = notes.find(noteItem => (noteItem._id)?.toString() === id);
    console.log(post);
    return (
        <main className="PostPage">
            <article className="note">
                {post &&
                    <>  
                    <div>
                    <h2>{post.title}</h2>
                        <p className="postBody">{post.content}</p>
                        <button onClick={() => deleteNote(post.id)}>
                            Delete Post
                        </button>
                    </div>
                    <hr/>
                    <Comments notes={notes} />
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                    
                }
            </article>
        </main>
    )
}

export default PostPage