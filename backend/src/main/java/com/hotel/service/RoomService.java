package com.hotel.service;

import com.hotel.exception.BusinessException;
import com.hotel.exception.GlobalExceptionHandler;
import com.hotel.model.Room;
import com.hotel.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    public RoomService (RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    public Room findById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new BusinessException("Room not found"));
    }

}