import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import './post-text-component.css'

export default function PostTextComponent() {
    const { postId } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');
    const [jsonInfo, setJsonInfo] = useState(null);
    const [jsonPostInfo, setJsonPostInfo] = useState(null);

    const filePath = `../../../../posts/post_${postId}.md`;
    const infoPath = `../../../../posts/info.json`;

    useEffect(() => {
        
        fetch(filePath)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.text();
            })
            .then(text => setMarkdownContent(text))
            .catch(error => console.error('Error fetching markdown file:', error));
        
        fetch(infoPath)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.text();
            })
            .then(text => setJsonInfo(JSON.parse(text)))
            .catch(error => console.error('Error fetching json file:', error));
    }, [postId]);
    
    useEffect(() => {
        if (jsonInfo) {
            const foundPost = jsonInfo.find(item => item.id === parseInt(postId));
            setJsonPostInfo(foundPost);
        }
    }, [jsonInfo, postId])

    return (
        <div class="content">
            <div class="post-header">
                <h1>{`${(jsonPostInfo) ? jsonPostInfo.title : ''}`}</h1>
            </div>
            <hr class="post-divider"/>
            <div class="markdown-container">
                <ReactMarkdown children={markdownContent}/>
            </div>
        </div>
    );
}