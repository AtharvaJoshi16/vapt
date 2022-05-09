import React from 'react';
import './index.css';

function PCTable ({list}) {
    if(list){
    return (
        <div>
        <table style={{margin:"10px"}}>
            <thead>
                <tr>
                    <th>PORT</th>
                    <th>SERVICE</th>
                    <th>HOST</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
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
                   <td>
                       {val[2]}
                   </td>
                   <td>
                       {val[3]}
                   </td>
                   <td>
                       {val[4]}
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

export default PCTable;