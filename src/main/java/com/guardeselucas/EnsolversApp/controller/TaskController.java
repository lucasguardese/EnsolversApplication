package com.guardeselucas.EnsolversApp.controller;


import com.guardeselucas.EnsolversApp.model.Task;
import com.guardeselucas.EnsolversApp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/add")
    public String add(@RequestBody Task task){
        taskService.saveTask(task);
        return "The task has been added";
    }

    @GetMapping("/getAll")
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        taskService.deleteTask(id);
        return "The task has been deleted";
    }

    @PostMapping("/edit")
    public String edit(@RequestBody Task task){
        taskService.editTask(task);
        return "The task has been edited.";
    }
}
