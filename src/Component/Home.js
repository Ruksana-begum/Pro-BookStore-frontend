import React from 'react'
import './Home.css';
import home from "../assets/home.jpg"
import img1 from "../assets/img1.webp"
import { useNavigate } from 'react-router-dom'

const Home=()=>{
    const navigate = useNavigate()
    return(<div className='Sar'>
        <div className='home'>
            
            <div className='info'>
                <h1>BOOK STORE</h1>
                <h3>For You</h3>
                <h2>Check out the books from here</h2>
                <button onClick={()=> navigate("/all-books",{replace:true})}>View Books</button>

            </div>
            <div className='homeimg'>
            <img src={img1} alt="Book Store"/>
            </div>
        </div>
        </div>
        
    )
}
export default Home