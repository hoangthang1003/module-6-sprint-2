package com.example.be.service.product;

import com.example.be.model.Capacity;

import java.util.List;

public interface ICapacityService {
    List<Capacity> findAllCapacity();

    Capacity findByCapacityId(int id);
}
