package com.siletti.service;

import com.siletti.domain.Task;
import com.siletti.domain.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> listTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }
}
