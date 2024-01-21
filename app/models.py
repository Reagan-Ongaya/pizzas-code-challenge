from flask_sqlalchemy import SQLAlchemy

from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

    
class Restaurant(db.Model, SerializerMixin):
    __tablename__ = 'restaurants'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.Text, nullable=False)
    
    pizzas = db.relationship('RestaurantPizza', backref='restaurant', lazy=True, primaryjoin='Restaurant.id == RestaurantPizza.restaurant_id')
    
    def to_dict(self, adds_pizzas=False):
        restaurant_dict = super().to_dict(
            only={
                    'id',
                    'name',
                    'address'
                  }
        )
        
        if adds_pizzas:
            restaurant_dict['pizza'] = [
                restaurant_pizza.pizza.to_dict() for restaurant_pizza in self.restaurant_pizzas
                ]
        
        return restaurant_dict

    
class Pizza(db.Model,SerializerMixin):
    __tablename__ = 'pizzas'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    ingredients = db.Column(db.String, nullable=False)
    
    restaurant_pizza = db.relationship('RestaurantPizza', backref='pizza')
    
    def to_dict(self):
        
        return super().to_dict(
            only={
                    'id', 
                    'name', 
                    'ingredients'
                }
        )
        
    
class RestaurantPizza(db.Model):
    __tablename__ = 'restaurant_pizzas'
    
    price = db.Column(db.Integer, primary_key=True)
    pizza_id = db.Column(db.Integer, db.ForeignKey('pizzas.id'))
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))