from flask import Blueprint

navbar = Blueprint('navbar',__name__)

@navbar.route('/navbar/getLists')
def getLists():
    # result = Article.query.all()
    # return list(result)
    return '252'