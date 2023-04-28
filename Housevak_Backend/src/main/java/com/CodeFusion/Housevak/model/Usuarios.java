/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CodeFusion.Housevak.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author Jonathan
 */
@Entity
@Table(name = "USUARIOS")
public class Usuarios
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "usuario")
    private String usuario;

    @Column(name = "correo")
    private String correo;

    @Column(name = "contrasenia")
    private String contrasenia;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido_paterno")
    private String apellido_paterno;

    @Column(name = "apellido_materno")
    private String apellido_materno;
    
    @Column(name = "fecha_nacimiento")
    private String fecha_nacimiento;
    
    @Column(name = "genero")
    private String genero;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "direccion")
    private String direccion;
    
    @Column(name = "ciudad")
    private String ciudad;
    
    @Column(name = "estado")
    private String estado;
    
    @Column(name = "pais")
    private String pais;
    
    @Column(name = "codigo_postal")
    private String codigo_postal;
    
    @Column(name = "imagen_perfil")
    private String imagen_perfil;
    
    @Column(name = "fecha_registro")
    private String fecha_registro;
    
    @Column(name = "rol_usuario")
    private String rol_usuario;

    public Usuarios()
    {
    }

    /**
     * @return the id
     */
    public long getId()
    {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id)
    {
        this.id = id;
    }

    /**
     * @return the usuario
     */
    public String getUsuario()
    {
        return usuario;
    }

    /**
     * @param usuario the usuario to set
     */
    public void setUsuario(String usuario)
    {
        this.usuario = usuario;
    }

    /**
     * @return the correo
     */
    public String getCorreo()
    {
        return correo;
    }

    /**
     * @param correo the correo to set
     */
    public void setCorreo(String correo)
    {
        this.correo = correo;
    }

    /**
     * @return the contrasenia
     */
    public String getContrasenia()
    {
        return contrasenia;
    }

    /**
     * @param contrasenia the contrasenia to set
     */
    public void setContrasenia(String contrasenia)
    {
        this.contrasenia = contrasenia;
    }

    /**
     * @return the nombre
     */
    public String getNombre()
    {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }

    /**
     * @return the apellido_paterno
     */
    public String getApellido_paterno()
    {
        return apellido_paterno;
    }

    /**
     * @param apellido_paterno the apellido_paterno to set
     */
    public void setApellido_paterno(String apellido_paterno)
    {
        this.apellido_paterno = apellido_paterno;
    }

    /**
     * @return the apellido_materno
     */
    public String getApellido_materno()
    {
        return apellido_materno;
    }

    /**
     * @param apellido_materno the apellido_materno to set
     */
    public void setApellido_materno(String apellido_materno)
    {
        this.apellido_materno = apellido_materno;
    }

    /**
     * @return the fecha_nacimiento
     */
    public String getFecha_nacimiento()
    {
        return fecha_nacimiento;
    }

    /**
     * @param fecha_nacimiento the fecha_nacimiento to set
     */
    public void setFecha_nacimiento(String fecha_nacimiento)
    {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    /**
     * @return the genero
     */
    public String getGenero()
    {
        return genero;
    }

    /**
     * @param genero the genero to set
     */
    public void setGenero(String genero)
    {
        this.genero = genero;
    }

    /**
     * @return the telefono
     */
    public String getTelefono()
    {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(String telefono)
    {
        this.telefono = telefono;
    }

    /**
     * @return the direccion
     */
    public String getDireccion()
    {
        return direccion;
    }

    /**
     * @param direccion the direccion to set
     */
    public void setDireccion(String direccion)
    {
        this.direccion = direccion;
    }

    /**
     * @return the ciudad
     */
    public String getCiudad()
    {
        return ciudad;
    }

    /**
     * @param ciudad the ciudad to set
     */
    public void setCiudad(String ciudad)
    {
        this.ciudad = ciudad;
    }

    /**
     * @return the estado
     */
    public String getEstado()
    {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado)
    {
        this.estado = estado;
    }

    /**
     * @return the pais
     */
    public String getPais()
    {
        return pais;
    }

    /**
     * @param pais the pais to set
     */
    public void setPais(String pais)
    {
        this.pais = pais;
    }

    /**
     * @return the codigo_postal
     */
    public String getCodigo_postal()
    {
        return codigo_postal;
    }

    /**
     * @param codigo_postal the codigo_postal to set
     */
    public void setCodigo_postal(String codigo_postal)
    {
        this.codigo_postal = codigo_postal;
    }

    /**
     * @return the imagen_perfil
     */
    public String getImagen_perfil()
    {
        return imagen_perfil;
    }

    /**
     * @param imagen_perfil the imagen_perfil to set
     */
    public void setImagen_perfil(String imagen_perfil)
    {
        this.imagen_perfil = imagen_perfil;
    }

    /**
     * @return the fecha_registro
     */
    public String getFecha_registro()
    {
        return fecha_registro;
    }

    /**
     * @param fecha_registro the fecha_registro to set
     */
    public void setFecha_registro(String fecha_registro)
    {
        this.fecha_registro = fecha_registro;
    }

    /**
     * @return the rol_usuario
     */
    public String getRol_usuario()
    {
        return rol_usuario;
    }

    /**
     * @param rol_usuario the rol_usuario to set
     */
    public void setRol_usuario(String rol_usuario)
    {
        this.rol_usuario = rol_usuario;
    }

}
