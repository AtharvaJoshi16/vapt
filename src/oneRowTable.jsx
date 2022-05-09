import React from 'react';
import './index.css';

function OneRowTable ({list}) {
    if(list){
    return (
        <div>
        <table style={{margin:"10px"}}>

            <tbody>
              {
                   list.map((val)=> {
                   return (<tr>
                   <td>
                       {val}
                   </td>
                </tr>)
                   })}
            </tbody>
        </table>
        </div>
    )}else{
        return null
    }
}

export default OneRowTable;