/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CodeFusion.Housevak.service;

import com.CodeFusion.Housevak.model.Usuarios;
import com.CodeFusion.Housevak.repository.RepositorioUsuarios;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jonathan
 */
@Service
public class ImplementacionServicioUsuario implements ServicioUsuario
{

    @Autowired
    private RepositorioUsuarios repositorioUsuarios;

    @Override
    public Usuarios guardarUsuarios(Usuarios usuario)
    {
        return repositorioUsuarios.save(usuario);
    }

    @Override
    public List<Usuarios> obtenerTodosLosUsuarios()
    {
        return repositorioUsuarios.findAll();
    }

    @Override
    public Optional<Usuarios> encontrarPorIdentificador(Long id)
    {
        return repositorioUsuarios.findById(id);
    }

    @Override
    public boolean eliminarUsuarioPorIdentificador(Long id)
    {
        try
        {
            repositorioUsuarios.deleteById(id);
            return true;
        } catch (Exception err)
        {
            return false;
        }
    }

}
