import React from 'react';
import './index.css';

function Wtable({str}) {
    if(str){
    const list = str.split('\n')
    return (
        <div>
        <table style={{margin:"10px"}}>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
              {    
                   list.map((val)=> {
                    const line= val.split(': ')
                   return (<tr>
                   <td>
                       {line[0]}
                   </td>
                   <td>
                       {line[1]}
                   </td>
                </tr>)
                   })}
            </tbody>
        </table>
        </div>
    )}else{
        return null
    }
};

export default Wtable;