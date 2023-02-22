
import { obtener, obtenerEpisodio } from "./Functions/Funcion";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode?page=1")
  const [siguiente, setSiguiente] = useState(null)
  const [anterior, setAnterior] = useState(null)
  const [paginas, setPaginas] = useState(null)
  const [total, setTotal] = useState(null)
  const [episodios, setEpisodios] = useState([])
  const [episodio, setEpisodio]= useState(null)
  

  const irSiguiente=(url)=>{
    setUrl(url)
  }
  const irAnterior=(url)=>{
    setUrl(url)
  }


  




  useEffect (()=>{
      obtener(url, setSiguiente, setAnterior, setPaginas, setTotal, setEpisodios)
  }, [url])
  return (
    <div className="contenedor">
        <div>
        <h2>Rick & Morty</h2>
      <p>Episodios: {total}</p>


        {anterior!=null?(
          <button onClick={()=>irAnterior(anterior)}>anterior</button>
        ):('')}
        

        {siguiente!=null?(
          <button onClick={()=>irSiguiente(siguiente)}>siguiente</button>
        ):('')}
        
        
          
        <div>
        <h4>Exportar datos de la taba a excel</h4>
        <CSVLink data={ episodios} className="btn btn_success mb-3">Exportar API</CSVLink>
        <table id="tabla" className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Episodio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                 <td>{episodios !=null ?(
              episodios.map(episodio=>(
                <p key={episodio.id} onClick={()=>obtenerEpisodio(episodio.id, setEpisodio)}>{episodio.name}</p>
              ))
            ):('')}</td>
            <td>{episodios !=null ?(
              episodios.map(episodio=>(
                <p key={episodio.id} onClick={()=>obtenerEpisodio(episodio.id, setEpisodio)}>{episodio.air_date}</p>
              ))
            ):('')}</td>
            <td>{episodios !=null ?(
              episodios.map(episodio=>(
                <p key={episodio.id} onClick={()=>obtenerEpisodio(episodio.id, setEpisodio)}>{episodio.episode}</p>
              ))
            ):('')}</td>
              </tr>
            </tbody>
            
          </table>
          
                
         
          <script type="text/javascript">
              
          </script>
        </div>
        <div className="episodio">
          
                {episodio!=null ?(
                  <div>
                    <h2>Protagonista: {episodio.name}</h2>
                    <img src={episodio.image} alt=""/>
                    <p>Genero: {episodio.gender}</p>
                  </div>
                ):('')}
        </div>
        <h3><p>Paginas {paginas}</p></h3>
        
        </div>
        
    </div>
    
  );

}

//npm install react-csv --save
//npm install pdfmake

export default App;
