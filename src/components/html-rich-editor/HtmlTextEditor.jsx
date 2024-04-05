"use client"
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';

import './htmlTextEditor.scss'
const HtmlTextEditor = ({ value, setDescription }) => {
    // const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };



    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script',
        'header', 'blockquote', 'code-block',
        'indent', 'list',
        'direction', 'align',
        'link', 'image', 'video', 'formula',
    ];

    return (
        <div>

            <ReactQuill className="quill" id="quill-editor" theme="snow" modules={modules} formats={formats} value={value} onChange={(e) => setDescription(e)} />
        </div>
    )
}

export default HtmlTextEditor