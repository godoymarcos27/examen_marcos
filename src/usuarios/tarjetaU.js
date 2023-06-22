

export function Tarjetausuario({id,  nombre, apellido, correo}){

     
    // const[cargando, setcargando]= useState(true)
    // if(cargando){
    //     return <Mensaj setCargando={setcargando}></Mensaj>
    // }
       return<>
        <div  className="row row-cols-1 row-cols-md-4 g-4 mt-4 p-2 "  style={{ display: "flex",justifyContent:"center"}} >
     
       <div className="card p-2">
       {/* <img src={img} className="card-img-top p-3 " alt="..."/> */}
       <div className="card-body"  >
         <h5 className="card-title" ><b>id</b> {id}</h5>
         
         <p className="card-text"><b>Nombre:</b> {nombre}</p>
         <p className="card-text"><b>apellido:</b> {apellido}</p>
         <p className="card-text"><b>E-mail:</b> {correo}</p>
         
       </div>
       
     </div>
    
    </div> 
    </>
    }