import React from 'react';
import './index.css';

function ETable ({list}) {
    if(list){
    return (
        <div>
        <table style={{margin:"10px"}}>
            <thead>
                <tr>
                    {/* <th>EMPLOYEE NAME</th> */}
                    <th>EMAILS</th>
                </tr>
            </thead>
            <tbody>
              {
                   list.map((val)=> {
                    var fname = val.substring(0, val.indexOf("."));
                    var lname = val.split('@')[0].split('.')[1]
                   return (<tr>
                   {/* <td>
                       {fname} {lname}
                   </td> */}
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

export default ETable;