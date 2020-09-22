import React from 'react';
import PersonInf from "../PersonInf"

export default class Imformation extends React.Component{
    // constructor(){
    //     super()
        
    // }
    render(){
        return (
            <>
        <b style={{fontSize:"20px"}}>个人信息</b>
        <div style={{display:"flex",marginTop:"50px"}}>
        <PersonInf ></PersonInf>

        </div>
        </>
        )
        
    }
}