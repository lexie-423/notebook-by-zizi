# 解析格式转换工具

在此输入内容，一键生成标准 Callout 格式。

<div class="tpo-formatter-container">
    <div class="form-group">
        <label for="paragraph-input">Paragraph (段落)</label>
        <textarea id="paragraph-input" placeholder="在此输入段落原文..."></textarea>
    </div>
    
    <div class="form-group">
        <label for="question-input">Question (问题与选项)</label>
        <textarea id="question-input" placeholder="在此输入问题及 A/B/C/D 选项..."></textarea>
    </div>

    <div class="form-group">
        <label for="answer-input">Answer (答案与解析)</label>
        <textarea id="answer-input" placeholder="在此输入答案和您的解析..."></textarea>
    </div>

    <div class="controls">
        <button id="generate-btn" class="btn btn-primary">生成格式</button>
        <button id="copy-btn" class="btn btn-success">一键复制</button>
    </div>

    <div class="form-group">
        <label for="output-text">格式化输出 (只读)</label>
        <textarea id="output-text" readonly placeholder="点击“生成格式”后，结果将显示在这里..."></textarea>
    </div>
</div>


