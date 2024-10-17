import { useState } from "react"

export default function Team(){
    const [team,setteam]=useState(0);
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    const teamAdd=()=>{
        const NewTeam=team+1;
        setteam(NewTeam);
    }
    const teamRemove=()=>{
        const Remove=team-1;
        setteam(Remove);
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={teamAdd}>Team Add</button>
            <button onClick={teamRemove}>Team Remove</button>
        </div>
    )
}