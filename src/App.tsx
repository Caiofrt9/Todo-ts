import React, { useState } from 'react';

//CSS
import styles from './App.module.css'

//Components
import Footer from './components/Footer';
import Hearder from './components/Hearder';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// Interface
import {ITask} from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")
    if(display) {
      modal!.classList.remove("hide")
    }else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty:number) => {

    const updatedTask: ITask = {id, title, difficulty}

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)

  }

  return (
    <div className="App">
        <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />}/>
        <Hearder/>
        <main className={styles.main}>
          <div>
            <h2>O que você vai fazer ?</h2>
            <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div>
            <h2>Suas tarefas:</h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
          </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
