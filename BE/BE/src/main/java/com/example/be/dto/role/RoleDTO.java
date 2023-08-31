package com.example.be.dto.role;

import com.example.be.model.RoleName;

public class RoleDTO {
    private Integer id;
    private RoleName name;

    public RoleDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public RoleName getName() {
        return name;
    }

    public void setName(RoleName name) {
        this.name = name;
    }

}
