import {Component, OnInit} from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";


@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        return this.taskService.getTasks()
            .subscribe(
                (tasks: any[]) => {
                    this.tasks = tasks
                },
                error => console.log(error)
            );
        // this.tasks.push(new Task(1, "First Task", true, "01/01/2020"));
        // this.tasks.push(new Task(2, "Second Task", false, "09/01/2020"));
        // this.tasks.push(new Task(3, "Third Task", false, "10/01/2020"));
    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'badge-success' : 'badge-light';
    }

    onTaskChange(event, task) {
        this.taskService.saveTask(task, event.target.checked)
            .subscribe();
    }

}
