/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CodeFusion.Housevak.controller;

import com.CodeFusion.Housevak.model.Usuarios;
import com.CodeFusion.Housevak.service.ServicioUsuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jonathan
 */
@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class ControladorUsuarios
{

    @Autowired
    private ServicioUsuario servicioUsuario;

    @PostMapping("/registro")
    public String add(@RequestBody Usuarios usuarios)
    {
        servicioUsuario.guardarUsuarios(usuarios);
        return "Usuario nuevo agregado";
    }

    @GetMapping("/users")
    public List<Usuarios> getTodosLosUsuarios()
    {
        return servicioUsuario.obtenerTodosLosUsuarios();
    }

    @PostMapping("/actualizar")
    public String update(@RequestBody Usuarios usuarios)
    {
        servicioUsuario.guardarUsuarios(usuarios);
        return "Usuario actualizado";
    }

    @GetMapping(path = "/{id}")
    public Optional<Usuarios> encontrarPorIdentificador(@PathVariable("id") Long id)
    {
        return servicioUsuario.encontrarPorIdentificador(id);
    }

    @DeleteMapping(path = "/borrar/{id}")
    public String eliminarPorIdentificador(@PathVariable("id") Long id)
    {
        boolean borrar = servicioUsuario.eliminarUsuarioPorIdentificador(id);
        if (borrar)
        {
            return "Se elimino el usuario con id " + id;
        } else
        {
            return "No se pudo eliminar el usuario con id " + id;
        }
    }

}
