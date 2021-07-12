import React from "react";
import { Link } from "react-router-dom";
import api from '../servicios/API';

class Clientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            DatosCargados:false,
            Clientes:[] 
        }
    }

    borrarDatos=(Id)=>{
        console.log(Id);
        fetch(api+"?borrar="+Id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{

            console.log(datosRespuesta);
            this.CargarDatos();

            }
        )
        .catch(console.log)

    }

    CargarDatos(){
        fetch(api)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.setState({DatosCargados:true, Clientes:datosRespuesta})
            })
        .catch(console.log)
    }

    componentDidMount(){
        this.CargarDatos();

    }

    render() { 
        const{DatosCargados, Clientes}=this.state
        if(!DatosCargados){return(<div>Cargando...</div>);}
        else{

        return ( 

            <div className="card">
                <div className="card-header">
                <Link className="btn btn-success" to={"/crear"}>+ Agregar Cliente</Link>
                </div>
                <div className="card-body">
                    <h4>Listado de clientes</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre completo</th>
                                <th>Correo</th>
                                <th>Fecha de nacimiento</th>
                                <th>Fecha de creacion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Clientes.map(
                                    (cliente)=>(
                                        <tr key={cliente.Id}>
                                            <td>{cliente.Nombre}</td>
                                            <td>{cliente.Correo}</td>
                                            <td>{cliente.Nacimiento}</td>
                                            <td>{cliente.Creacion}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="">
                                                    <Link className="btn btn-warning" 
                                                    to={"/editar/"+cliente.Id} 
                                                    >Editar</Link>

                                                    <button type="button" className="btn btn-danger" 
                                                    onClick={()=>this.borrarDatos(cliente.Id)}
                                                    >Borrar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )

                            }
                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
         );

        }
    }
}
 
export default Clientes;