import React from "react";
import CodeEditor from "../../code-snippets/CodeEditor";

const snippet_code = `import React, {useEffect, useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = ({ code }) => {
    const [copied, setCopied] = useState(true);

    useEffect(() => {
        let timer;
        if (copied) {
            timer = setTimeout(() => {
                setCopied(false); // Reset copied state if needed
            }, 2000);
        }

        return clearTimeout();
    }, [copied])

    const customStyle = {
        ...materialDark,
        'pre[class*="language-"]': {
            ...materialDark['pre[class*="language-"]'],
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
        },
    };

    return (
        <div className="p-2 bg-gray-800 rounded-lg shadow-lg relative">
            {
                copied && <div className={"absolute z-10 p-5 top-2 left-[5%] w-[90%] bg-gray-900 border-white border-2 shadow-2xl text-white rounded flex justify-center"}>
                <p className={"underline"}>Copied to Clipboard</p>
                </div>
            }
            <div className="flex justify-between space-x-1 mb-2 items-center m-2">
                <div className="flex justify-start space-x-1 mb-2">
                    <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <button className={"text-white text-sm p-2 border-2 border-white rounded"} onClick={()=>{setCopied(true)}}>
                    Copy to Clipboard
                </button>
            </div>
            <SyntaxHighlighter language="javascript" style={customStyle}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeEditor;
`

export default function SectionsSection({}) {
    return (
        <div className="container mx-auto p-20 text-white flex items-center max-h-[80vh]">
            <div className={"flex-1 flex flex-col gap-5 items-start"}>
                <h1 className="text-5xl font-bold mb-4">Sections</h1>
                <p className="text-xl my-4">Get pre-baked dynamically configured sections in Tailwind + React</p>
                <ul className={"gap-10 my-4"}>
                    <li><a className={"text-xl p-2"}>Hero Sections</a></li>
                    <li><a className={"text-xl p-2"}>Meet the Team Sections</a></li>
                    <li><a className={"text-xl p-2"}>So much more..</a></li>
                </ul>
                <button className="bg-white text-blue-950 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
                    Sections
                </button>
            </div>
            <div className={"w-[50%] h-[70vh]"}>
                <div className={"rounded-xl bg-amber-950 h-full w-full"}>
                    <CodeEditor code={snippet_code} />
                </div>
            </div>
        </div>
    )
}