
import { useRef,useState,useEffect } from "react"




const CardItems = ({profile,img,title,desc,category,like,comment,userName}) => {
  
  const [isFollowed, setİsFollowed] = useState(false)

  const handleFollowed = ()=> {
    setİsFollowed(!isFollowed);
  }
  
  const maximizeRef = useRef(null)
  const btnRef = useRef(null)
  const imgRef= useRef(null)

  useEffect(() => {

    const handleClickOut = (e) => {
      if(imgRef.current && !imgRef.current.contains(e.target)){
        setMaximized(false);
           
    }
  };
     document.addEventListener("click",handleClickOut);
    
  
    return () => {
     document.removeEventListener("click",handleClickOut);
    }
  }, [])
  
  

  
 const handleMax = () => {
  maximizeRef.current.classList.remove("hidden");
   
 };

 const handleMaxi = () => {
  maximizeRef.current.classList.add("hidden");
    btnRef.current.classList.remove("hidden");
 };

  const [maximized, setMaximized] = useState(false);
 
 
const handleMaxClick = (e)=> {
   e.stopPropagation(); 
  setMaximized(!maximized)
   btnRef.current.classList.add("hidden");
}






  return (
   


    <div className={`flex justify-center items-center bg-[#EBCB90] rounded-2xl overflow-visible ${
        maximized ? "z-50" : "z-0"
      }`}>

  <div  className='flex flex-col items-center gap-3 p-6 border-2 border-gray-300   rounded-2xl shadow-2xl relative    '>
    
     <section className='border-2  rounded-full absolute top-2 left-2   '> 
      <img className='size-12 rounded-full object-cover ' src={profile} alt="" /> 
    
    </section>
     
      <section className='absolute top-6 left-18'>
    <a href="#">{userName}</a>
      </section>


 <div onMouseEnter={handleMax} onMouseLeave={handleMaxi}>
   <img ref={imgRef}
   className={`w-52 h-72  rounded mt-16 transition-transform duration-300 ${ maximized ? "scale-200 z-50" : ""}`} 
   src={img} alt="Kombin" />


    <button 
    ref={btnRef}
    onClick={handleFollowed}
    className={`absolute top-3 right-2  rounded-2xl p-2 text-white ${ isFollowed ? "bg-green-500" : "bg-sky-500"}`}>
      {isFollowed ? "followed" : "follow" } </button>

   {!maximized && (  
    <img ref={maximizeRef} onClick={handleMaxClick} 
    className ='size-7 absolute top-23 right-16 hidden cursor-pointer' src="../images/maximiz.png  " alt="" />
      )} 

   {maximized && (
    <div>
     <img
        onClick={handleMaxClick}
      className="size-8  absolute -top-12 -right-10 hover:cursor-pointer " src="../images/minimize.png" alt="" />
      
    </div>

   )}
    
  </div>


    <h2 className='text-lg font-bold'>{title}</h2> 
    <p className=''>{desc}</p>
     <p className='text-gray-600'>{category}</p>
    
    
    <div className='flex justify-center items-center gap-3'>

    <button className='flex items-center gap-1 px-4 py-1 rounded '>
    <img className='size-9' src="../images/likes.png" alt="Like" />
    <span>{like}</span>
  </button>
    
     <button className='flex items-center gap-1 px-4 py-1 rounded'>
    <img 
     className='size-9'
     src="../images/comment.png" alt="" />{comment}</button>
     <button className=' px-4 py-1 rounded'>
    
    <img 
     className='size-7'
     src="../images/send.png" alt="" /></button>
    </div>
  </div>
 </div>
  
  )
}

export default CardItems