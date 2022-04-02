import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../App.css'
function Card() {
    const [items,setItem]= useState([])
    useEffect(()=>{
        axios.get('https://api.pokemontcg.io/v2/cards?page=1&pageSize=10')
        .then((response)=>{
            let data = response.data.data
            console.log('data>>>>>>>>>',data)
            setItem(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    const itemsList = items.map((obj)=>{
        return (
            <div className="main-content">
                 <div className="card shadow p-3 mb-5 bg-white rounded" style={{width:'18rem'}}>
                 <img className="card-img-top" src ={obj.images.small}/>
                <div className="body" style={{display:'flex',justifyContent: 'space-between'}}>
                <p><b>{obj.name}</b></p>
                <p><b>HP:</b>{obj.hp}</p>
                </div>
                <h6>Attacks:</h6>
                <p className="text">{obj.attacks[0].name}</p>
                <h6>Abilities:</h6>
                <p className="text">{obj.abilities != undefined && obj.abilities.length > 0 &&  obj.abilities[0].name || "N/A"}</p>
                 </div>
            </div>
        )
    })
  return (
    <div className="container">
    <div className="main">
    {itemsList}
    </div>
    </div>
  )
}

export default Card