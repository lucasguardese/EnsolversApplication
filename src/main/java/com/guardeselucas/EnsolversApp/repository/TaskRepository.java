package com.guardeselucas.EnsolversApp.repository;

import com.guardeselucas.EnsolversApp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
