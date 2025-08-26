# 即时 PDF 打印工具

生成一个带有网站主题样式的 PDF 文档。

<div class="printer-container">
    <div class="form-group">
        <label for="markdown-input">在此输入您的 Markdown 内容</label>
        <textarea id="markdown-input" placeholder="例如：&#10;&#10;## 这是一个二级标题&#10;&#10;* 这是一个列表项&#10;* 这是另一个列表项&#10;&#10;普通段落文本..."></textarea>
    </div>

    <div class="controls">
        <button id="print-btn" class="btn btn-primary">生成 PDF</button>
    </div>
</div>

<!-- 这是一个隐藏的容器，专门用来存放要打印的内容 -->
<!-- CSS 会确保它在打印时可见，在屏幕上不可见 -->
<div id="print-content-area"></div>