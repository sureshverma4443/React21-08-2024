import './Mainright.scss'

const friendrequest={
    contact:[{
        id:1,
        "name": "dinesh kumar",
        "image": "https://randomuser.me/api/portraits/men/1.jpg",


    }
]

}





const Mainright=()=>{
   return(
       <div className="mainright">
           <div className='friendrequest'>
            <h2>Friend Request</h2> 
            <p>sell all</p>
            {friendrequest.contact.map((el)=>{
                return(
                   
              <div>    
                <img src={el.image} alt=""/><p>25 mutual friend</p>
                <button>Confirm</button> <button>Delete</button>
              </div>

                )
               
            })}

           </div>




       </div>
   )
}

export default Mainright