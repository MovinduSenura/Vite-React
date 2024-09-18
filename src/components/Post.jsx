import './Post.css'

function Post(props) {

    return (
        <div className="section1">
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;