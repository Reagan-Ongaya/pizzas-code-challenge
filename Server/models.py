from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

    
class Restaurant(db.Model):
    __tablename__ = 'restaurants'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.Text, nullable=False)
    
class Pizza(db.Model):
    __tablename__ = 'pizzas'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    ingredients = db.Column(db.String, nullable=False)
    
class RestaurantPizza(db.Model):
    __tablename__ = 'restaurant_pizzas'
    
    price = db.Column(db.Integer, primary_key=True)
    pizza_id = db.Column(db.String, nullable=False)
    restaurant_id = db.Column(db.String, nullable=False)