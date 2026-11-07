document$.subscribe(({ body }) => { 
    if (typeof renderMathInElement !== 'function') return;
    renderMathInElement(body, {
      throwOnError: false,
      delimiters: [
        { left: "$$",  right: "$$",  display: true },
        { left: "$",   right: "$",   display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
    })
  })