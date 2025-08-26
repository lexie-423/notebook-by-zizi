// 确保 DOM 加载完毕后再执行脚本
document.addEventListener('DOMContentLoaded', (event) => {
    
    // 检查我们是否在正确的工具页面上，避免脚本在每个页面都运行
    if (document.getElementById('generate-btn')) {
        
        // 获取所有需要的 DOM 元素
        const paragraphInput = document.getElementById('paragraph-input');
        const questionInput = document.getElementById('question-input');
        const answerInput = document.getElementById('answer-input');
        const generateBtn = document.getElementById('generate-btn');
        const copyBtn = document.getElementById('copy-btn');
        const outputText = document.getElementById('output-text');
        const previewArea = document.getElementById('preview-area');

        // 核心功能：生成格式化文本
        function generateFormattedText() {
            const paragraph = paragraphInput.value.trim();
            const question = questionInput.value.trim();
            const answer = answerInput.value.trim();

            if (!paragraph && !question && !answer) {
                alert('请输入至少一项内容！');
                return;
            }
            
            // 辅助函数，处理多行文本，在每一行前加上 "> "
            const formatBlock = (text) => {
                if (!text) return '>';
                return '> ' + text.replace(/\n/g, '\n> ');
            };

            const formattedText = 
`${formatBlock(paragraph)}

> [!question]+ Question
${formatBlock(question)}

> [!check]- Answer
${formatBlock(answer)}`;

            // 将生成的内容放入隐藏的文本域和预览区
            outputText.value = formattedText;
            
            // 检查 marked 是否已加载
            if (typeof marked !== 'undefined') {
                 // 使用 marked.js 将 Markdown 转换为 HTML 并显示
                previewArea.innerHTML = marked.parse(formattedText);
            } else {
                // 如果 marked.js 加载失败，提供备用方案
                previewArea.innerText = 'Markdown 预览加载失败。请检查网络连接。\n\n' + formattedText;
            }
        }

        // 核心功能：复制到剪贴板
        function copyToClipboard() {
            if (outputText.value === "") {
                generateFormattedText(); // 如果输出为空，先尝试生成一次
                if (outputText.value === "") {
                    alert('请输入内容后再复制！');
                    return;
                }
            }

            // 使用现代的 Clipboard API
            navigator.clipboard.writeText(outputText.value).then(() => {
                // 提供反馈
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '复制成功!';
                copyBtn.style.backgroundColor = '#85ce61';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#67c23a';
                }, 2000);
            }).catch(err => {
                console.error('复制失败: ', err);
                alert('复制失败，请检查浏览器权限或手动复制。');
            });
        }
        
        // 绑定事件监听器
        generateBtn.addEventListener('click', generateFormattedText);
        copyBtn.addEventListener('click', copyToClipboard);
    }
});