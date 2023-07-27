import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {format, startOfWeek, addDays} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPercent } from '@fortawesome/free-solid-svg-icons';


function WeekData({ changeWeek, habits, activeDay, dateHeader}){
    let habitCount = {};

    const renderWeekRange = () => {
        let week = [];
        const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
        let currentDay = startDate;
        let first;
        let second;
        let ending;
        
    
          for(let day = 0; day < 7; day++){
            week.push(format(addDays(currentDay, day), "d"));

          }
        return <h4 className="weekRange">{week[0]}{ending}-{week[6]}{ending}</h4> 
      }

    habits.forEach((habit) => {
        habitCount[habit.habit] = 0;
         weekday.forEach((day) =>  {if(habit[day]){habitCount[habit.habit] = habitCount[habit.habit]  + 1};
         });
       });

    const habitData = habits.map((habit) => {
        const percent = `${(habitCount[habit.habit]/7 * 100).toFixed(0)}%`;
        return (
            <tr key={habit.habit}>
                <td>{habit.habit}</td>
                <td>{habitCount[habit.habit] > 0 ?  percent : `0%`} </td>
            </tr>  
    );
});

    return (
        <div>
            {dateHeader()}
            {renderWeekRange()}
           <Table>
            <thead>
                <tr>
                    <th>
                        Habits
                    </th>
                    <th>
                    <FontAwesomeIcon icon={faPercent} /> 
                    </th>
                   
                </tr>
            </thead>
            <tbody>
                {habitData}
            </tbody>
         </Table>
         {changeWeek()}
         
        </div>
    )
};

export default WeekData;