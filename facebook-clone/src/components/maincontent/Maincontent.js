 import './Maincontent.scss'


 const status ={
    contact:[
        {
            id:1,
            name:'Suresh verma ',
            image:"https://scontent.fjai2-6.fna.fbcdn.net/v/t39.30808-1/279583217_3103072810021763_5516429117844340829_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=bvIzDp5nDBMQ7kNvgG2s9up&_nc_ht=scontent.fjai2-6.fna&_nc_gid=AaEkS10o2vRqayj8putfIIp&oh=00_AYDmEY22Zoqv75YOSuKNPAFwjdiWOkM3ABJ-fCPkNyGMxg&oe=66E47A78",
            story:"https://cdn.pixabay.com/video/2022/10/04/133507-756991150_tiny.mp4",
            type:"video"
        },
        {
            id:2,
            name:'mukesh bhai ',
            image:"https://images.forbesindia.com/media/images/2021/Nov/img_171081_mrmukeshambani_1.jpg?impolicy=website&width=865&height=577",
            story:"https://cdn.pixabay.com/video/2022/10/07/133925-758328055_tiny.mp4",
            type:"video"
        },
        {
            id:3,
            name:'Narendra modi',
            image:"https://upload.wikimedia.org/wikipedia/commons/4/44/Shri_Narendra_Modi%2C_Prime_Minister_of_India.jpg",
            story:"https://cdn.pixabay.com/video/2022/06/23/121903-724720200_large.mp4",
            type:"video"
        },
        {
            id:4,
            name:'shree ganesh ',
            image:"https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-lord-ganesh-png-image_11385250.png",
            story:"https://cdn.pixabay.com/video/2023/03/17/155109-809859903_tiny.mp4",
            type:"video"
        },
        {
            id:5,
            name:'rahul baba',
            image:"https://upload.wikimedia.org/wikipedia/commons/9/91/Rahul_Gandhi.png",
            story:"https://cdn.pixabay.com/video/2022/10/05/133644-757816799_tiny.mp4",
            type:"video"
        },
        {
            id:6,
            name:'kajriwal ji',
            image:"https://indianexpress.com/wp-content/uploads/2023/10/Kejriwal-removebg-preview.png",
            story:"https://cdn.pixabay.com/video/2024/08/15/226609_tiny.mp4",
            type:"video"
        },
        
    ]
}


const Maincontent=()=>{
    return(
        <div className="maincontent">
            {status.contact.map((el)=>{
                return(
                    <div className='maincontentitems' key={el.id}>
                      <p>{el.name}</p><img src={el.image}/>
                       <video autoPlay muted ><source src={el.story} type="video/mp4"/></video>
                    </div>
                )
            })}


            
        </div>
    )
    
   
 }

 export default Maincontent