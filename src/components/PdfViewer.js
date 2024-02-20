import React, { useEffect, useState, useRef } from 'react';
import { pdfjs, Document, Page} from 'react-pdf';
import {Box, Button, Text} from "@chakra-ui/react";
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfViewer({pdfFile}) {

    // 控制当前渲染的pdf的页面缩放比例
    const [scale, setScale] = useState(1.0);
    // 当前渲染的pdf中选中的文字
    const [selectedText, setSelectedText] = useState('');

    const pdfViewerRef = useRef(); // 创建一个ref来引用PDF Viewer的容器

    useEffect(() => {
        // 获取PDF Viewer容器的DOM元素
        const pdfViewerElement = pdfViewerRef.current;

        const handleTextSelect = () => {
            const text = window.getSelection().toString();
            setSelectedText(text);
        };

        // 如果pdfViewerElement存在，则在该元素上添加事件监听器
        if (pdfViewerElement) {
            pdfViewerElement.addEventListener('mouseup', handleTextSelect);
        }

        // 组件卸载时移除事件监听器
        return () => {
            if (pdfViewerElement) {
                pdfViewerElement.removeEventListener('mouseup', handleTextSelect);
            }
        };
    }, []); // 依赖数组为空，意味着这个effect只在组件挂载和卸载时运行

    function handleZoomIn(){
        setScale(Math.min(2.0, scale + 0.1));
    }

    function handleZoomOut(){
        setScale(Math.max(0.5,scale - 0.1));
    }


    return (
        <Box>
            <Button onClick={handleZoomIn}>放大</Button>
            <Button onClick={handleZoomOut}>缩小</Button>
            <Text>当前显示比例：{scale}</Text>
            <Text>选中的文字：{selectedText}</Text>
            <div ref={pdfViewerRef}>
                <Document file={pdfFile}>
                    <Page pageNumber={1} renderTextLayer={true} renderAnnotationLayer={false}
                          scale={scale}/>
                </Document>
            </div>
        </Box>
    );
}

export default PdfViewer;