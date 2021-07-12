import React from 'react';
import { Link } from "react-router-dom";
import api from '../servicios/API';

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Nombre:"",
            Correo:"",
            Nacimiento:"",
            Creacion:""
         }
    }

cambioValor=(e)=>{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState({ state });
}


enviarDatos = (e) =>{
    e.preventDefault();
    console.log("Formulario enviado...");
    const{Nombre,Correo,Nacimiento,Creacion}=this.state;
    console.log(Nombre);
    console.log(Correo);
    console.log(Nacimiento);
    console.log(Creacion);


    var datosEnviar={Nombre:Nombre,Correo:Correo,Nacimiento:Nacimiento,Creacion:Creacion}

    fetch(api+"?insertar=1",{
        method:"POST",
        body:JSON.stringify(datosEnviar)

    })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{

            console.log(datosRespuesta);
            this.props.history.push("/");
            }
        )
        .catch(console.log)

}


    render() { 

        const{Nombre,Correo,Nacimiento,Creacion}=this.state;

        return ( 
            <div className="card">
                <div className="card-header">
                    Nuevo Cliente
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                          <label htmlFor="">Nombre:</label>
                          <input required type="text" name="Nombre" onChange={this.cambioValor} value={Nombre} id="Nombre" 
                          className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el nombre completo del cliente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Correo:</label>
                          <input required type="text" name="Correo" onChange={this.cambioValor} value={Correo}  id="Correo" 
                          className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el correo del cliente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Fecha de nacimiento:</label>
                          <input required type="date" name="Nacimiento" onChange={this.cambioValor} value={Nacimiento}  id="Nacimiento" 
                          className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Selcciona la fecha de nacimiento del cliente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Fecha de creacion:</label>
                          <input required type="date" name="Creacion" onChange={this.cambioValor} value={Creacion}  id="Creacion" 
                          className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Selecciona la fecha de creacion del cliente</small>
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar cliente</button>
                            <Link to={"/"} className="btn btn-primary" >Cancelar</Link>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
         );
    }
}
 
export default Crear;