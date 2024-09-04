// import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import GridTable from './common/Grid-Table/GridTable';  



const tableHeader=[
  {
    id:"name",
    label:"Name",
    name:"name",
  },{
    id:"username",
    label:"Username",
    name:"username",
  },
  {
    id:"phone",
    label:"Phone",
    name:"phone",
  },
  {
    id:"email",
    label:"Email",
    name:"email",
  },
  {
    id:"address",
    label:"Address",
    name:"address",
  },
  {
    id:"company",
    label:"Company",
    name:"company",
  },
  {
    id:"website",
    label:"Website",
    name:"website",
  },


]

const App =() => {
  const [showData, setShowData] = useState(false);
  const [tdata, setTData] = useState([]);

  const getPosts= ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(json=>{
      console.log(json);
      setTData(json);
    })
    .catch((error)=>console.log(error))
    .finally(()=>{
      setLoading(false);
    })
  }

  const displayData=(th,tr)=>{
    if(th.name==="company"){
      return `${tr?.company?.name}`;
    }else if (th.name==="address"){
      return `${tr?.address?.street}, ${tr?.address?.suite}, ${tr?.address?.zipcode },${tr?.address?.city }`;
  }
  else{
    return tr?.[th.name]
  }
}









  useEffect(()=>{
    if (showData){
      getPosts();
    }
  },
  [showData])

  return(
    <div className='table_container'>
      <button onClick={()=>setShowData(true)}>Show</button>
              {!!tdata?length
              <GridTable tHeader={tableHeader} data={tdata} displaycb={displayData}/>
              ?showData
              ?Loading


              <div> {}   </div>
              </div>

            )
            
          }





      {/* <div className='table_container_table'>
        <table>
          <thead>
            <tr>
              {tableHeader.map(el=><th key={el.id}>{el.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {tdata.map(tr=><tr key={tr.key}>
              {tableHeader.map(th=><td  key={`${tr.id}-${th.id}`}> {displayData(th,tr)}</td>)}
            </tr>
            )}
          </tbody>
        </table>
      </div> */}


export default App;
