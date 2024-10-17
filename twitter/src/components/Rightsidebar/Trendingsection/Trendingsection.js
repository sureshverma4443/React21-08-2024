import { useMemo, useState } from "react"
import "./Trendingsection.scss"


const Trending=[{
  id:1,
  tradein:"Entertaninment.Tranding",
  trade:"#RajaDalal",
  post:"1505k posts"
},{
  id:2,
  tradein:"Entertaninment.Tranding",
  trade:"#Salasar2",
  post:"15k posts"
  
},
{
  id:3,
  tradein:"politics.Tranding",
  trade:"#Hamas",
  post:"36.5k posts"
},
{id:4,
tradein:"cricket.Tranding",
trade:"#Zaheer Khan",
post:"3654.52k posts"
},
{id:5,
  tradein:"India.Tranding",
  trade:"#OlaElectric",
  post:"2545.52k posts"
  },
  {id:5,
    tradein:"India.Tranding",
    trade:"#OlaElectric",
    post:"2545.52k posts"
    },
    {id:6,
      tradein:"Tranding",
      trade:"#IranAttack",
      post:"2545.52k posts"
      },
]


 const Trendingsection =()=>{
const [showMoreTrending,setShowMoreTrending]=useState(0);
const _TrendingArr = useMemo(()=>{
  let counter= showMoreTrending+1;
  let _trending=Trending.slice(0,2*counter)
  return _trending
},[showMoreTrending]);
const _trendingStatus=_TrendingArr ?.length >=Trending?.length;




    return(
        <div className="Trendingsection">
      <div className="Trendingsectionitem">
        <h4>What’s happening</h4>
        <div className="Ammssection">
          <div><img src='https://pbs.twimg.com/media/GZP_WToWMAA9NaW?format=jpg&name=small'></img></div>
          <div>
            <h6>AMAs 50th Anniversary Special</h6>
            <p>Awards Show·3 hours ago</p>
          </div>
        </div>
        <div>
        {_TrendingArr.map(el=>{
          return(
            <div key={el.id}>
              <p>{el.tradein}</p>
              <h5>{el.trade}</h5>
              <p>{el.post}</p>
        </div>
         )
         
        })}
        <button className="Trendingseebtn" onClick={()=>
          setShowMoreTrending((prev)=>(_trendingStatus?0:prev+1
          ))
        }>{_trendingStatus?"See less":"See more"}
        </button>
      </div>
      </div>
    
      </div>
      
    ) 
    

 }


 export default Trendingsection

 