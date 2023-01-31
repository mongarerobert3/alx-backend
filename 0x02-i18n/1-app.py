#!/usr/bin/env python3
"""Flask app.
"""
from flask_babel import Babel
from flask import Flask, render_template


class Config:
    """Flask babel config"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"

app = Flask(__name__)
app.config.from_object(config)
app.url_map.strict_slashes = False
babel = Babel(app)

@app.route('/')
def get_index() -> str:
    """Index page"""
    return render_template('1-index.html')

if __name__ == '_main__':
    app.run(host = '0.0.0.0', port=5000)
