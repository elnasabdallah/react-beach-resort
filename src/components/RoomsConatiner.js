import React from 'react'
import RoomsList from "./RoomsList"
import RoomsFilter from "./RoomsFilter"
import { withRoomConsumer } from "./../context"
import Loading from "./Loading"

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <>

            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );

}

export default withRoomConsumer(RoomContainer)





/* import React from 'react'
import RoomsList from "./RoomsList"
import RoomsFilter from "./RoomsFilter"
import { RoomConsumer } from "./../context"
import Loading from "./Loading"

export default function RoomsConatiner() {


    return (

        <RoomConsumer>
            {value => {
                const { loading, sortedRooms, rooms } = value;

                console.log(value)
                if (loading) {
                    return <Loading />;
                }
                return (
                    <div>
                        hello from rooms container
            <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </div>
                )
            }}

        </RoomConsumer>


    )
}
 */