import * as types from '@/types/music_sniper_types';

type ChordProgressionProps = {
    chordProgression: types.ChordProgression;
}

export const ChordProgression = ({chordProgression}: ChordProgressionProps) => {
    return (
        <div className='chords'>
            <ol>
                {chordProgression.map((chord, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>{chord}</li>
                ))}
            </ol>
        </div>
    );
};
