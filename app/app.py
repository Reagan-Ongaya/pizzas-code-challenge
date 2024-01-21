from flask import Flask, make_response, request
from flask_migrate import Migrate

from flask_restful import Resource, Api

from models import db, Restaurant, Pizza, RestaurantPizza

app = Flask(__name__)
app.debug = True


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


migrations = Migrate(app, db)

db.init_app(app)

api = Api(app)

class Home(Resource):
    def get (self):
        return make_response({"greetings":"Hello Pro Programmer."})
    
api.add_resource(Home, '/')

class Restaurants(Resource):
    def get (self):
        restaurants = Restaurant.query.all()
        return make_response(
            [ restaurant.to_dict() 
             for restaurant in restaurants
            ],
            
            200,
        )
    
api.add_resource(Restaurants, '/restaurants')

class RestuarantByID(Resource):
    def get (self, restuarant_id):
        restuarant = Restaurant.query.filter(Restaurant.id == restuarant_id).first()
        
        if not restuarant:
            return make_response({
                "error":"Restuarant not Found"
                },
                
                404,
            )
        
        return make_response(
            restuarant.to_dict(adds_pizzas=True),
            
            200,
        )
    
api.add_resource(RestuarantByID, '/restuarants/<int:restuarants_id>')


class Pizzas(Resource):
    def get(self):
        pizzas = Pizza.query.all()
        
        return make_response(
           [pizza.to_dict(
            
            ) 
            for pizza in pizzas],
           200
        )
        
api.add_resource(Pizzas, '/pizzas')

class RestaurantPizza(Resource):
    def post(self):   
        try:
            restaurant_pizza = RestaurantPizza(
                price=request.json.get('price'),
                pizza_id=request.json.get('pizza_id'),
                restaurant_id=request.json.get('restaurant_id'),
            
            )
            
        except:
            return make_response(
               {'error':'validation errors occured'},
            
               404,
            )
            
        db.session.add(restaurant_pizza),
        db.session.commit()    
      
        restaurant = Restaurant.query.filter(
            restaurant_pizza.restaurant_id == Restaurant.id
        ).first()
        
        return make_response(
            restaurant.to_dict(adds_pizzas=True),
            
            200,
        )
    
api.add_resource(RestaurantPizza, '/restaurant_pizzas')
    




if __name__ == '__main__':
    app.run(port=7000, debug=True)