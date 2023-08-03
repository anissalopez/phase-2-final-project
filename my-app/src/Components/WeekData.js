import { Table, Container } from "react-bootstrap";
import {format, startOfWeek, addDays, endOfWeek} from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPercent, faDash } from '@fortawesome/free-solid-svg-icons';
import DateHeader from "./Header";


function WeekData({ changeWeek, habits, activeDay}){
    const startWeek = startOfWeek(activeDay, { weekStartsOn: 1 });
    const endWeek = endOfWeek(activeDay, {weekStartsOn:1});
    let habitCount = {};

    const renderWeekRange = () => {
        let week = [];
        let currentDay = startWeek;
          for(let day = 0; day < 7; day++){
            week.push(format(addDays(currentDay, day), "MMMM dd, yyyy"));
          };
        return <Container fluid className="mt-5 mb-5"><h2 className="dateHeader">{week[0]} - {week[6]}</h2></Container> 
      };

    habits.forEach((habit) => {
        habitCount[habit.habit] = 0;
        Object.keys(habit).forEach((key) => {
            if(new Date(key) >= startWeek &&  new Date(key) <= endWeek)
            habitCount[habit.habit] = habitCount[habit.habit] + 1
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
        <>
            {renderWeekRange()}
          <Container className="d-grid pt-5" fluid>
           <Table className="weekData" bordered >
            <thead className="thead-dark">
                <tr>
                    <th >
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
         </Container>
         </>
        
      
    );
};

export default WeekData;