import React from 'react';
import './index.css';

function PTable ({list}) {
    if(list){
    return (
        <div>
            <h2 className='heading'>PORTS AND SERVICES</h2>
        <table>
            <thead>
                <tr>
                    <th>PORT</th>
                    <th>SERVICE</th>
                    <th>PROTOCOL</th>
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

export default PTable;