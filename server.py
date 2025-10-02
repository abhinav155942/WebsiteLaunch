import http.server
import socketserver
import os

PORT = 5000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        mimetype = super().guess_type(path)
        path_str = str(path)
        if path_str.endswith('.js'):
            return 'application/javascript'
        elif path_str.endswith('.css'):
            return 'text/css'
        return mimetype

os.chdir('.')

with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server running at http://0.0.0.0:{PORT}/")
    httpd.serve_forever()
