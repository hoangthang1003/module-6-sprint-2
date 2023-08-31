package com.example.be.service.cart.impl;

import com.example.be.model.CapacityProduct;
import com.example.be.model.Cart;
import com.example.be.model.User;
import com.example.be.projections.ICartProjection;
import com.example.be.repository.cart.ICartRepository;
import com.example.be.repository.product.IProductRepository;
import com.example.be.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository iCartRepository;
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<ICartProjection> findAllCart(int id, Pageable pageable) {
        return iCartRepository.findAllByDeleteFalse(id, pageable);
    }

    @Override
    public void createCart(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public void deleteCart(Cart cart) {
        iCartRepository.delete(cart);
    }

    @Override
    public Cart findCartByUserAndProduct(User user, CapacityProduct capacityProduct) {
        return iCartRepository.findCartByUserAndProduct(user.getId(), capacityProduct.getId());
    }

    @Override
    public void updateCart(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public Cart findByIdCart(int id) {
        return iCartRepository.findById(id);
    }

}
