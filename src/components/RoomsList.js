import React from 'react'
import Room from "./../pages/Room"
import Rooms from '../pages/Rooms'



export default function RoomsList({rooms}) {

    if(rooms.length==0){
        return(
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
       <section className="roomlist">
            <div className="roomslist-center">
                {
                    rooms.map((item)=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
       </section>
        )
}
