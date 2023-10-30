package com.depoisdosim.depoisdosim.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.depoisdosim.depoisdosim.models.Guest;
import com.depoisdosim.depoisdosim.models.Task;
import com.depoisdosim.depoisdosim.repositories.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task findById(Long id) {
        Optional<Task> Task = this.taskRepository.findById(id);
        return Task.orElseThrow(() -> new RuntimeException("Convidado não encontrado! Id: " + id + ", Tipo: " + Guest.class.getName()));
    }

    public List<Task> findAllByUserId(Long userId) {
        List<Task> tasks = this.taskRepository.findAllByUserId(userId);
        return tasks;
    }

    @Transactional
    public Task create(Task obj) {
        obj.setId(null);
        obj = this.taskRepository.save(obj);
        return obj;
    }

    @Transactional
    public Task update(Task obj) {
        Task newObj = this.findById(obj.getId());
        newObj.setDate(obj.getDate());
        newObj.setTime(obj.getTime());
        return this.taskRepository.save(newObj);
    }

    public void delete(Long id) {
        this.findById(id);
        try {
            this.taskRepository.deleteById(id);
        } catch(Exception e) {
            throw new RuntimeException("Não é possível excluir o convidado!");
        }
    }
    
}
