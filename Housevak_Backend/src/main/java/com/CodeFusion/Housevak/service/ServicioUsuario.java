/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.CodeFusion.Housevak.service;

import com.CodeFusion.Housevak.model.Usuarios;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Jonathan
 */
public interface ServicioUsuario
{

    public Usuarios guardarUsuarios(Usuarios usuario);

    public List<Usuarios> obtenerTodosLosUsuarios();

    public Optional<Usuarios> encontrarPorIdentificador(Long id);
    
    public boolean eliminarUsuarioPorIdentificador(Long id);

}
