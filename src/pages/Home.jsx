import EventCard from '../components/EventCard';
import image from '../photo.jpeg'


function Home() {
 

  return (
    
    <div>
        
      <h1 style={{color:'black'}}>Добро пожаловать в нашу платформу событий</h1>
<img src={image} alt="" style={{width: "100%"}}/>
    </div>
  );
}

export default Home;
