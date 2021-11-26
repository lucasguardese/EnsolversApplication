package com.guardeselucas.EnsolversApp.service;

import com.guardeselucas.EnsolversApp.model.Task;
import com.guardeselucas.EnsolversApp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public String deleteTask(int id) {
        taskRepository.deleteById(id);
        return "The task has been deleted succesfully";
    }

    @Override
    public String editTask(Task task){
        Task taskFromDB = taskRepository.getById(task.getId());
        taskFromDB.setName(task.getName());
        taskRepository.save(taskFromDB);
        return "The task has been edited.";
    }
}


