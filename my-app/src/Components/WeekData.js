import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";


function WeekData({ habits}){
    let habitCount = {};

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
           <Table>
            <thead>
                <tr>
                    <th>
                        Habits
                    </th>
                    <th>
                        % of Weekly Goal
                    </th>
                </tr>
            </thead>
            <tbody>
                {habitData}
            </tbody>
         </Table>
        </div>
    )
};

export default WeekData;