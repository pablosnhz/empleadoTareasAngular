import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// importamos el itask para la lista de tareas
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss']
})

export class KabanTasksComponent {

  todoTasks: ITask[] = [
    {
    title: 'Animacion',
    description: 'Aprender animacion con angular',
    completed: false,
    level: LEVELS.INFO
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comandos y configuraciones en Angular CLI',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Build',
      description: 'Aprender a generar builds con Angular CLI',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en netlify',
      completed: false,
      level: LEVELS.BLOCKING
    }
  ]

  doneTasks: ITask[] = [
    {
    title: 'Configuracion IDE',
    description: 'Configurar e instalar plugins en Visual Studio Code',
    completed: true,
    level: LEVELS.BLOCKING
    },
    {
      title: 'Instalar Angular CLI',
      description: 'Aprender con npm el Angular CLI de forma global',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Hola Mundo',
      description: 'Crear con angular CLI un proyecto inicial',
      completed: true,
      level: LEVELS.URGENT
    }
  ]

  // colocamos el tipo ITASK
  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {

      // traemos todos los datos de la columna, accedimos a eso
      console.log('MISMA COLUMNA:',event.container.data)

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      console.log('ENTRE COLUMNA:',event)
      console.log('Debemos cambiar el estado de las task')

      // ACTUALIZAMOS EL VALOR COMPLETED DE LA TAREA
      event.previousContainer.data[event.previousIndex].completed =
      !event.previousContainer.data[event.previousIndex].completed


      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
