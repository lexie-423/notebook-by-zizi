"""Check local href/src targets in the built site, including raw HTML embeds."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

ROOT = Path("site").resolve()
BASE = "https://lexie-423.github.io/notebook-by-zizi/"
PREFIX = urlsplit(BASE).path
errors = []
count = 0


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in ("href", "src") and value:
                self.urls.append(value)


for page in ROOT.rglob("*.html"):
    # Error pages use relative links at an unknown requested URL.
    if page.name == "404.html":
        continue
    relative = page.relative_to(ROOT).as_posix()
    page_url = urljoin(BASE, relative)
    parser = Links()
    parser.feed(page.read_text(encoding="utf-8"))
    for link in parser.urls:
        if link.startswith("#"):
            continue
        url = urlsplit(urljoin(page_url, link))
        if url.scheme not in ("http", "https") or url.netloc != urlsplit(BASE).netloc:
            continue
        if not url.path.startswith(PREFIX):
            errors.append(f"{relative}: outside project base: {link}")
            continue
        target = ROOT / unquote(url.path[len(PREFIX):])
        if target.is_dir():
            target /= "index.html"
        count += 1
        if not target.is_file():
            errors.append(f"{relative}: missing target: {link}")

if errors:
    raise SystemExit("\n".join(sorted(set(errors))))
print(f"Checked {count} local links and asset references.")
