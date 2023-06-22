import axios from "axios";
import { useEffect, useState } from "react";
import { Tarjetausuario } from "./tarjetaU";

;
export function Usuarios(){
const [datos, setdatos_usuario]=useState([])
const [id, setid_usuario]= useState("")

  const [nombre, setnombre_usuario] = useState("");
  const [apellido, setapellido_usuario] = useState("");
  const [correo, setcorreo_usuario] = useState("");


// useEffect(function, Array de dependencias)
useEffect(()=>{

    
    var requestOptions = {
        method: 'GET',
        Accept: 'application/json'
        
      
      };
    
        fetch("http://localhost:4000/api/usuarios", requestOptions)
        .then(response => response.json())
        .then(result => setdatos_usuario(result))
        .catch(error => console.log('error', error));
      
      
      
}
, [id])

const post_cliente = () => {
    axios.post("http://localhost:4000/api/usuarios", {
        id: id,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
      })
      .then((response) => {
        setid_usuario("");
        setnombre_usuario("");
        setapellido_usuario("");
        setcorreo_usuario("");
        console.log(response);
        alert("POST EXITOSO");
      })

      .catch((error) => console.log("error", error));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    post_cliente();
  };


if (datos.length  < 1) {
   return<>


   
   
   <h3>No se encontraron datos</h3>
   </> 
}

const list_clientes =datos.map(clientes=> <Tarjetausuario
    key={clientes.id}
        nombre={clientes.nombre}
        apellido={clientes.apellido}
    correo={clientes.correo}
    
   
/>)



    return <>
  

       <div style={ {marginLeft:"00px"}} >         <a type="button"  className="btn btn-success " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
add 
</a>
         </div>
        
     
  

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{width: "400px",  marginLeft:"100px" }}>
      <div className="">
      </div>
      <div className="">
        {/* form */}


<div className="">
<div
className="containerform mt-5  " 
id="ong"
style={{ marginLeft: "390px"}}
>
<div className="row justify-content-md-center" >
<div className="col-xl-5 col-md-12" >
  <div className=" c"style={{ width: "20rem", height: "40rem", marginLeft:"-350px"}} >
    <div className="card-header">
      <h3>Ingresar un Nuevo Cliente</h3>
    </div>
    <div className="card-body" >
     <form onSubmit={handlesubmit}>
                <div className=" mb-3">
                  <label className="form-label">IngresarID</label>

                  <input
                    value={id}  onChange={(e) => setid_usuario(e.target.value)}
                    type="text"
                    className="form-control"
                    id="DNI"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Nombre</label>

                  <input
                    value={nombre}
                    onChange={(e) => setnombre_usuario(e.target.value)}
                    type="text"
                    className="form-control"
                    id="Nombre"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">apellido</label>

                  <input
                    value={apellido}
                    onChange={(e) => setapellido_usuario(e.target.value)}
                    type="text"
                    className="form-control"
                    id="apellido"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">E-mail</label>

                  <input
                    value={correo}
                    onChange={(e) => setcorreo_usuario(e.target.value)}
                    type="text"
                    className="form-control"
                    id="E-mail"
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Agregar
                </button>

                <div className="mb-3"></div>
              </form>
    </div>
  </div>
</div>
</div>
</div> 
</div> 




         {/* form */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    


       {/* <FormulariopostCliente></FormulariopostCliente>
       <FormularioputCliente></FormularioputCliente>
        */}
        <div className="container">
            {list_clientes} 
        </div>





     
  
    </>

  
}