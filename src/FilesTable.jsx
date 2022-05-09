import React from 'react';
import './index.css';
function Table ({list}) {
    if(list){
    return (
        <div>
        <table >
            <thead>
                <tr>
                    <th>FILENAME</th>
                    <th>STATUS CODE</th>
                    <th>PATH</th>
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
                </tr>)
                   })}
            </tbody>
        </table>
        </div>
    )}else{
        return null
    }
}

export default Table;