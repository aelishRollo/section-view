import {useState} from 'react';

import {useActions} from '@/actions/useActions';
import {EntityPointer} from '@/types/music_sniper_types';

type CreateCommentProps = {
    entityPointer: EntityPointer;
}

export const CreateComment = ({entityPointer}: CreateCommentProps) => {
    const actions = useActions();

    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleAddComment = async (e: React.FormEvent) => {
        e.preventDefault();

        await actions.addCommentToEntity(commentText, name, entityPointer);
        setCommentText('');
    };

    return (
        <div>
            <form onSubmit={handleAddComment}>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                />
                <input
                    type='text'
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder='Type your thoughts here'
                />
                <button
                    type='submit'
                    disabled={!(name && commentText)}
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
};
