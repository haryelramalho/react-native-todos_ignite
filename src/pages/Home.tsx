import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '' && newTaskTitle !== undefined && newTaskTitle !== null) {
      const task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      };

      setTasks([...tasks, task]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map<Task>(task => {
      if (task.id === id) {
        task.done = true;
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <>
      <Header darkMode={false}/>

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}