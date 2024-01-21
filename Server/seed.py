from models import db, Pizza, Restaurant, RestaurantPizza
from server import server 

with server.app_context():
    Restaurant.query.delete()
    Pizza.query.delete()
    RestaurantPizza.query.delete()
    print ("🦸 Seeding pizzas...")
    pizzas =[
        { 
          "name": "Cheese", 
          "ingredients": "Dough, Tomato Sauce, Cheese" 
        },
        { 
          "name": "Pepperoni", 
          "ingredients": "Dough, Tomato Sauce, Cheese, Pepperoni"
        }
    ]

    for pizza_data in pizzas:
       pizza = Pizza (**pizza_data)
       db.session.add(pizza)
    db.session.commit()
    
    print("🦸‍♀️ Seeding restaurants...")
    restaurants = [
        { 
          "name": "Sottocasa NYC", 
          "address": "298 Atlantic Ave, Brooklyn, NY 11201" 
        },
        { 
          "name": "PizzArte", 
          "address": "69 W 55th St, New York, NY 10019" 
        }
      
    ]
    
    for restaurant_data in restaurants:
       restaurant = Restaurant (**restaurant_data)
       db.session.add(restaurant)
    db.session.commit()
    
    print( "🦸‍♀️ Adding pizzas to restaurants...")

   
    print( "🦸‍♀️ Done seeding!")