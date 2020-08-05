package com.siletti.controller;

import com.siletti.domain.Task;
import com.siletti.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping({"","/"})
    public Iterable<Task> getTask(){
        return taskService.listTasks();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task){
        return taskService.saveTask(task);
    }
}
