import React from 'react'
import { LuSettings } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";



const foryouexploredata=[{
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











const News = () => {
  return (
    
    <div>
    {foryouexploredata.map(el=>{
      return <div className='trand' key={el.id}>
        <p>{el.tradein}</p>
              <h5>{el.trade}</h5>
              <p>{el.post}</p>
        
        </div>
      
     
    })}
    </div>
  
  )
}

export default News
