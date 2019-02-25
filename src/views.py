import functools

from flask import (
    Blueprint, request, render_template
)

bp = Blueprint('views', __name__, url_prefix='/')


@bp.route('/')
def home():
    return render_template("base.html")

@bp.route('/login/')
def login():
    return 'Not yet'