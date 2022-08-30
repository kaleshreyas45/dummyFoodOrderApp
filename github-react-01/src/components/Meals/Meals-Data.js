import MealComponent from  './MealsComponent'
import dominos from '../../assets/dominos.jpg'
import burger from '../../assets/burger.jpg'
import pizzahut from '../../assets/pizzahut.jpg'
import momos from '../../assets/momos.jpg'
import './Meals-Data.css'
const MealsData = function(props){
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Paneer Pizza',
          description: "Domino's Pizza",
          price: 99,
          src:`${dominos}`
        },
        {
          id: 'm2',
          name: 'Burger',
          description: 'McDonald\'s Burger',
          price: 165,
          src:`${burger}`
        },
        {
          id: 'm3',
          name: 'Margherita Pizza',
          description: 'Pizza Hut',
          price: 169,
          src:`${pizzahut}`
        },
        {
          id: 'm4',
          name: 'Momos',
          description: 'Indian Momos',
          price: 149,
          src:`${momos}`
        },
      ];
      return(
        <div className="container">
            <h1 className='popular-meals'>Popular Meals</h1>
            {DUMMY_MEALS.map((meal)=>{
                return (
                    <MealComponent key={meal.id} mealID = {meal.id} mealName = {meal.name} mealDesc = {meal.description} mealPrice = {meal.price} mealSrc = {meal.src}></MealComponent>
                )
               
            })}
            
        </div>
      )
}
export default MealsData;