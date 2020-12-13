
import React, {ChangeEvent, useState} from 'react';
import classes from "./EditableSpan.module.css";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string, id:number) => void
    style: string
    id:number
}

const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title, props.id);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input min={1} max={5} type={'number'} className={classes.inputStyle} value={title} onChange={changeTitle}  onBlur={activateViewMode} />
        : <span className={props.style} onDoubleClick={activateEditMode}>{props.value}</span>
});
export default EditableSpan;