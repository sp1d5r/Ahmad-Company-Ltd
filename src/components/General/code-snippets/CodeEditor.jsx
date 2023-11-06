import React, {useEffect, useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = ({ code }) => {
    const [copied, setCopied] = useState(false);

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
            height: 'calc(100% - 60px)'
        },
    };

    return (
        <div className="p-2 bg-gray-800 rounded-lg shadow-lg h-full relative">
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
                <button className={"text-white text-sm p-2 border-2 border-white rounded"} onClick={()=>{setCopied(true); navigator.clipboard.writeText(code)}}>
                    Copy to Clipboard
                </button>
            </div>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={customStyle}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeEditor;
