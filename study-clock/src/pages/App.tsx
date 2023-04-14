import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import { ITask } from '../types/task';

function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask){
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function killTask(){
    if(selected){
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          return{
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <Timer 
        selected={selected}
        killTask={killTask}
      />
      <List tasks={tasks} selectTask={selectTask}/>
    </div>
  );
}

export default App;
