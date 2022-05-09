import React from 'react';
import './index.css';

function XSSTable ({list}) {
    if(list){
    return (
        <div>
        <table style={{margin:"10px"}}>
            <thead>
                <tr>
                    <th>COMPONENT</th>
                    <th>LOCATION</th>
                    <th>DETAILS</th>
                </tr>
            </thead>
            <tbody>
              {
                   list.map((val)=> {
                   return (<tr>
                   <td>
                       {val.component}
                   </td>
                   <td>
                       {val.location}
                   </td>
                             <tr>
                            <th>SUMMARY</th>
                            <th>SEVERITY</th>
                            <th>CVE</th>
                            </tr>
                    {
                        val.vulns.map(val1=>{
                            return (<>
                            
                            <tr>
                            <td>
                                {val1.summary}
                            </td>
                            <td>
                                {val1.severity}
                            </td>
                            <td>
                                {val1.CVE}
                            </td>
                            </tr>
                            </>
                            )
                        })
                    }
                </tr>)
                   })}
            </tbody>
        </table>
        </div>
    )}else{
        return null
    }
}

function SSLTable ({list}) {
    if(list){
    return (
        <div>
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SEVERITY</th>
                    <th>CVE</th>
                    <th>CWE</th>
                    <th>FINDING</th>
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

export {XSSTable,SSLTable};