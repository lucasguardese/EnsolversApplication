package com.guardeselucas.EnsolversApp.service;

import com.guardeselucas.EnsolversApp.model.Task;

import java.util.List;

public interface TaskService {
    public Task saveTask(Task task);
    public List<Task> getAllTasks();
    public String deleteTask(int id);
    public String editTask(Task task);
}
