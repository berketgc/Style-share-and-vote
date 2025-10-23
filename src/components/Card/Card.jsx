
import CardItems from './CardItems'
import { mockCombinations } from '../../database/mockData'


const Card = () => {
  return (
  
  
  <div>
  <h2 className="text-2xl font-bold  text-center mt-20 mb-10 text-white ">Haftanın Combinleri</h2>
 <div className='flex flex-wrap justify-center gap-6  p-8  bg-gray-100 w-5/6 m-auto rounded-2xl '>
    {mockCombinations.map((combi) => (
      <CardItems 
        key={combi.id}
        profile={combi.profile}
        userName={combi.username}
        img={combi.image}
        title={combi.title}
        desc={combi.description}
        category={combi.category}
        like={combi.likes}
        comment={combi.comment}
      />
    ))} 
  </div>
  


  </div>





  )
}

export default Card