import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})

export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
    }

    onTaskAdd() {

        let date = new Date();
        let todayDateFormatted: string = date.toLocaleDateString("en-US", {year: 'numeric'})
            + "-" + date.toLocaleDateString("en-US", {month: '2-digit'})
            + "-" + date.toLocaleDateString("en-US", {day: '2-digit'})
        let task: Task = new Task(this.addTaskValue, false, todayDateFormatted);
        this.taskService.addTask(task).subscribe(
            (task: Task) => {
                this.addTaskValue = ' ';
                this.taskService.onTaskAdded.emit(task);
            }
        );
    }
}
