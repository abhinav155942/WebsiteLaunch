import http.server
import socketserver
import os
from urllib.parse import unquote

PORT = 5000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        path_str = str(path)
        if path_str.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        elif path_str.endswith('.css'):
            return 'text/css; charset=utf-8'
        elif path_str.endswith('.html'):
            return 'text/html; charset=utf-8'
        return super().guess_type(path)
    
    def translate_path(self, path):
        # Remove query parameters before translating path
        path = path.split('?', 1)[0]
        path = unquote(path)
        return super().translate_path(path)

os.chdir('.')

with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server running at http://0.0.0.0:{PORT}/")
    httpd.serve_forever()
