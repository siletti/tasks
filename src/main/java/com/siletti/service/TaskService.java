package com.siletti.service;


import com.siletti.domain.Task;
import org.springframework.stereotype.Service;


public interface TaskService {

    Iterable<Task> listTasks();

    Task saveTask(Task task);

}
