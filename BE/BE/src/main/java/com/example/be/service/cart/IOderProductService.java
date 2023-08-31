package com.example.be.service.cart;

import com.example.be.model.OderProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOderProductService {
    OderProduct findByIdOderProduct(int id);

    Page<OderProduct> findAllOderProduct(Pageable pageable);

    Integer getTotalCodeAmount();

    void createOderProduct(OderProduct oderProduct);
}
