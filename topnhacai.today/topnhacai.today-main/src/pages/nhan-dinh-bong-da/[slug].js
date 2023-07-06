import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';
import PostContentPages from '../[slug]';
library.add(fab, faCheck, faMinus, faPlus);

function PostCommentaryFootball(props) {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <PostContentPages slug={slug} />
        </div>
    );
}

export default PostCommentaryFootball;