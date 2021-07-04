import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss'


const App = () => {

    const [ videos, setVideos  ] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, [] );
    console.log(videos);

    return(
        <div className="App">
        <Header/>
        <Search/>

        <Categories title="Mi lista">
        <Carousel>
        <CarouselItem title="Titulo 1" subtitle="Subtitle 1"/>
        <CarouselItem title="Titulo 2" subtitle="Subtitle 2"/>
        <CarouselItem title="Titulo 3" subtitle="Subtitle 3"/>
        </Carousel>
        </Categories>

        
        <Categories title="Tendencias">
        <Carousel>
        <CarouselItem title="Titulo 1" subtitle="Subtitle 1"/>
        <CarouselItem title="Titulo 2" subtitle="Subtitle 2"/>
        </Carousel>
        </Categories>


        <Categories title="Originales de Platzi Video">
        <Carousel>
        <CarouselItem title="Titulo 1" subtitle="Subtitle 1"/>
        </Carousel>
        </Categories>

        <Footer/>
        </div>
)};

export default App;