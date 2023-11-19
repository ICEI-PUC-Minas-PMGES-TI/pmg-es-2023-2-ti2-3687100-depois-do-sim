package com.depoisdosim.depoisdosim.controllers;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.depoisdosim.depoisdosim.domain.others.TaskDTO;
import com.depoisdosim.depoisdosim.models.Task;
import com.depoisdosim.depoisdosim.services.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id) {
        Task obj = this.taskService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TaskDTO>> findAllByUserId(@PathVariable Long userId) {
        List<Task> tasks = this.taskService.findAllByUserId(userId);

        List<TaskDTO> taskDTOs = tasks.stream()
                .map(task -> {
                    TaskDTO dto = new TaskDTO();
                    dto.setId(task.getId());
                    dto.setTitle(task.getTitle());
                    dto.setDescription(task.getDescription());
                    dto.setDate(task.getDate());
                    dto.setTime(task.getTime());
                    dto.setStatus(task.getStatus());
                    dto.setUser(task.getUser().getId());
                    dto.setSupplier(task.getSupplier().getId());
                    return dto;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(taskDTOs);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Task obj) {
        this.taskService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Task obj, @PathVariable Long id) {
        obj.setId(id);
        this.taskService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.taskService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{taskId}/confirmar")
    public void confirmarPresenca(@PathVariable Long taskId) {
        taskService.confirmarPresenca(taskId);
    }

    @PostMapping("/{taskId}/negar")
    public void negarPresenca(@PathVariable Long taskId) {
        taskService.negarPresenca(taskId);
    }

}
