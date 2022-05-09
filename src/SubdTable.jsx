import React from 'react';
import './index.css';

function STable ({list}) {
    if(list){
    return (
        <div>
            <h2 className='heading'>SUBDOMAINS</h2>
        <table style={{margin:"10px"}}>
            <thead>
                <tr>
                    <th>SUBDOMAINS</th>
                </tr>
            </thead>
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

export default STable;