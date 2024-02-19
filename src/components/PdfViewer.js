import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';

function PdfViewer({pdfFile}) {
    const [selectedText, setSelectedText] = useState('');

    useEffect(() => {
        const loadPdf = async () => {
            const loadingTask = pdfjsLib.getDocument(pdfFile);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);

            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            const canvas = document.getElementById('pdf-canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            await page.render(renderContext).promise;
        };

        loadPdf();
    }, [pdfFile]);

    useEffect(() => {
        const handleTextSelect = () => {
            const text = window.getSelection().toString();
            setSelectedText(text);
        };

        document.addEventListener('mouseup', handleTextSelect);

        return () => {
            document.removeEventListener('mouseup', handleTextSelect);
        };
    }, []);

    return (
        <div>
            <canvas id="pdf-canvas"></canvas>
            <div>
                Selected text: <span>{selectedText}</span>
            </div>
        </div>
    );
}

export default PdfViewer;