import './posts.scss'
import { MdOutlineVerified } from "react-icons/md";

const post=[{
    id:1,
    image:"https://pbs.twimg.com/profile_images/1634821129738280960/5azZpwGl_400x400.jpg",
    
    name:"Sach Bedhadak",
    icon:<MdOutlineVerified />,
    twitterid:"@SachBedhadak",
    time:"5s",
    content:"#Jaipur: रसद विभाग की ओर से अवैध सिलेंडर पर कार्रवाई जारी विभाग ने आज एक ही दिन में 51 सिलेंडर किए जब्त, विभाग की ओर से चलाया जा रहा सघन अभियान...",
    post:"https://pbs.twimg.com/media/GYOr9LiaMAABXfz?format=jpg&name=small"
    },{
        id:2,
        image:"https://play-lh.googleusercontent.com/FRa7i9tPSRuSLqIvaasjGKjkqDSaH_PW72naiplcau3624gzUZIV8IziMRCggsj6sA",
        name:"First India News",
        icon:<MdOutlineVerified />,
        twitterid:"1stIndiaNews",
        time:"1hs",
        content:"#Karauli #हिण्डौनसिटीः श्रीमहावीरजी पंचायत समिति में धरना दे प्रदर्शन कर रहे राजस्थान ग्राम विकास अधिकारी संघ के बैनर तले कल से चल रहा अनिश्चितकालीन धरना, ग्राम विकास अधिकारी से मारपीट ...@DmKarauli #SachBedhadak",
        // post:"https://pbs.twimg.com/media/GYOr2I3XQAAmMYq?format=jpg&name=medium"
},
     {id:3,
    image:"https://pbs.twimg.com/profile_images/1663829042255241216/ipVRkUIc_400x400.jpg",
    name:"Arvind chotola",
    icon:<MdOutlineVerified />,
    twitterid:"151@Arvindchotola",
    time:"2hr",
    content:"आज दैनिक जागरण वालों का हार्दिक आभार व्यक्त करता हूं। मतलब, कोई तो है जो देख रहा है। अब तो कुमारी सैलजा को आगे आ ही जाना चाहिए।",
    post:"https://pbs.twimg.com/media/GYOrka1a0AA8Eg5?format=jpg&name=large"
    },
    {id:4,
        image:"https://play-lh.googleusercontent.com/FRa7i9tPSRuSLqIvaasjGKjkqDSaH_PW72naiplcau3624gzUZIV8IziMRCggsj6sA",
        name:"Sach Bedhadak",
        icon:<MdOutlineVerified />,
        twitterid:"@SachBedhadak",
        time:"5s",
        content:"#Jaipur: रेल मंत्री अश्विनी वैष्णव पहुंचे गांधी नगर रेलवे स्टेशन गांधीनगर स्टेशन के पुनर्निर्माण कार्य का लेंगे जायजा,200 करोड़ रु.से ज्यादा की लागत से चल रहे निर्माण कार्य...",
        post:"https://pbs.twimg.com/media/GYOu3uOacAAn5Tn?format=jpg&name=small"
        },
        {id:5,
            image:"data:image/jpeg;base64,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",
            name:"ZEE Rajasthan",
            icon:<MdOutlineVerified />,
            twitterid:"@zeerajasthan",
            time:"35m",
            content:"#Sriganganagar #सूरतगढ़ भोजेवाला गांव में पेयजल आपूर्ति की समस्याओं को लेकर धरना मामला सुबह से ग्रामीण बैठे हैं धरने पर, लेकिन अभी तक नहीं पंहुचा कोई भी प्रशासनिक अधिकारी मौके पर, आक्रोशित ग्रामीणों ने दी पानी की टंकी पर चढ़ने की चेतावनी गांव में वाटरवर्क्स की खस्ता हालात व पेयजल की डिग्गियों की सफाई व गांव में पेयजल आपूर्ति को लेकर कर रहे हैं ग्रामीण प्रदर्शन, ग्रामीण बोले पिछले छह महीनों से प्रशासन से लगा रहे है गुहार",
            post:"https://pbs.twimg.com/media/GYOyThgXgAAU6w2?format=jpg&name=small"
            },
            {id:6,
                image:"https://pbs.twimg.com/profile_images/1633676802689318917/_PCH-Mzy_400x400.jpg",
                name:"Rajasthan Patrika",
                icon:<MdOutlineVerified />,
                twitterid:"@Rajasthanpatrika",
                time:"5hrs",
                content:"राजकुमार रोत का ‘हिंदू मंदिर’ जाने पर क्यों हो रहा है विरोध? सांसद बोले- माहौल खराब करने की कोशिश@roat_mla @madandilawar @RawatML7",
                post:"https://pbs.twimg.com/card_img/1838495904694964225/TX4IL8yQ?format=jpg&name=small"
                },
                {id:7,
                    image:"https://pbs.twimg.com/profile_images/1532011067085189120/cZRpIuBq_400x400.jpg",
                    name:"LP Pant",
                    icon:<MdOutlineVerified />,
                    twitterid:"@pantlp",
                    time:"Sep21",
                    content:"डिंपल हत्याकांड मामले में पुलिस ने चार्जशीट पेश कर दी है। मामला कोर्ट में हैं। लेकिन जांच से कुछ लोग असंतुष्ट हैं। समाज को संतुष्ट करने के लिए पुलिस ने जनता की अदालत लगाई और सारे सबूत सार्वजनिक कर दिए। अब बड़ा सवाल यह है कि क्या यह फैसला पुलिस के मनोबल को तोड़ने वाला नहीं है?",
                    post:"https://pbs.twimg.com/media/GX-Dx6PXsAA3NWh?format=jpg&name=small"
                    },
                    {id:8,
                        image:"https://pbs.twimg.com/media/GXwa-VfXIAAbRgz?format=jpg&name=small",
                        name:"SURESH VERMA",
                        icon:<MdOutlineVerified />,
                        twitterid:"@SURESHSV67477994",
                        time:"Sep 17",
                        content:"ना युनियन है ना संगठन है मेरा फर्ज वतन है 🚓भर्ती योग्यता ग्रेजुएशनवेतनमान ग्रेड पे 3600 डीपसी से समयबद्ध 9,18,27 प्रमोशन साप्ताहिक अवकाश आठ घंटे ड्यूटी #पुलिस_डिमांड ",
                        post:"https://pbs.twimg.com/media/GQucvNXbIAADbDM?format=jpg&name=small"
                        },

]


const Posts =()=>{
    return(
        <div className="posts">
            {post.map(el=>{
                return(
                    <div className='post' key={el.id}>
                        <div className='postimage'><img src={el.image}></img></div>
                    <div className='postitem'>
                <div className='postitemnameid'><h5>{el.name}</h5>{el.icon}<p>{el.twitterid}.</p>{el.time}</div>
                <div>{el.content}</div>
                <div postedimage><img src={el.post}></img></div>

                    </div>             
                  </div>
            )})}
    </div>
    )}

export default Posts