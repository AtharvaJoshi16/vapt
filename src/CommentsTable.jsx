import React from 'react';
import './index.css';

function CTable ({list}) {
    if(list){
    return (
        <div>
        <table style={{margin:"10px"}}>
            <thead>
                <tr>
                    <th>LOCATION</th>
                    <th>COMMENT</th>
                </tr>
            </thead>
            <tbody>
              {
                   list.map((val)=> {
                   return (<tr>
                   <td>
                       {val[0]}
                   </td>
                   <td>
                       {val[1]}
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

export default CTable;