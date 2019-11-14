import React from 'react';
// import ProtoTypes from "prop-types"

function Post({ match }) {
    return (
        <div>
            <div>PostId : {match.params.id}</div>
            <div>title : </div>
            <div>content</div>
            <div>image</div>
        </div>
    );
}

export default Post;