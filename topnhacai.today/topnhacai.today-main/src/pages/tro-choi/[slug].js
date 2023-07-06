import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PostContentPages from '../[slug]';
import { useRouter } from 'next/router';
library.add(fab, faCheck, faMinus, faPlus);

function PostGame(props) {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div>
            <PostContentPages slug={slug} />
        </div>
    );
}

export default PostGame;