import NoteContext from './noteContext';

const NoteState = (Props) => 
{
    const s1 = 
    {
        "name": "merry",
        "class": "class"
    }
    return(
        <NoteContext.Provider value={s1}>
                {Props.children}
            </NoteContext.Provider  >
    )
}
export default NoteState;
