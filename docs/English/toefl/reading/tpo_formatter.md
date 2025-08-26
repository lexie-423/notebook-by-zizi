# TPO 格式转换工具

<div class="container">
    <div class="input-grid">
        <div class="input-group">
            <label for="paragraph-input">Paragraph (段落)</label>
            <textarea id="paragraph-input" placeholder="在此输入段落原文..."></textarea>
        </div>
        
        <div class="input-group">
            <label for="question-input">Question (问题)</label>
            <textarea id="question-input" placeholder="在此输入问题..."></textarea>
        </div>

        <div class="input-group">
            <label for="answer-input">Answer (答案与解析)</label>
            <textarea id="answer-input" placeholder="在此输入答案和解析..."></textarea>
        </div>
    </div>

    <div class="controls">
        <button id="generate-btn">生成与预览</button>
        <button id="copy-btn">一键复制</button>
    </div>

    <div class="output-section">
        <h2>Markdown 预览</h2>
        <div id="preview-area">
            <p style="color: #999;">这里将显示格式化后的预览效果...</p>
        </div>
    </div>

    <!-- 用于复制的隐藏文本域 -->
    <textarea id="output-text" style="position: absolute; left: -9999px;"></textarea>
</div>