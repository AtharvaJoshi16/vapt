import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from './FilesTable';
import PTable from './PortsTable';
import CTable from './CommentsTable';
import STable from './SubdTable';
import PCTable from './PassCracksTable';
import {SSLTable,XSSTable} from './VulnsTable';
import ETable from './emailTable';
import Wtable from './WhoisTable';
import {AppBar} from '@material-ui/core';
import LoginForm from './Login';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import OneRowTable from './oneRowTable';
const App = (props) =>{
    const [results,setResults] = useState({
        subdomains:[],
        ports:[],
        whois: "",
        extLinks:[],
        rel_domains: [],
        cracks: [],
        emails: [],
        files: [],
        spfrecs: [],
        XSSvulns: [],
        SSLvulns: [],
        comments: [],
        dirs: [],
        webArchives: [],
        cmsDetails: "",
        openDirs: [],
        waf: "",
        sqli: "",
        phones: [],
        adminPanels: []
    })
    useEffect(()=>{
         axios.get('http://localhost:3000/results',{params: {comp:props.company,asset:props.asset}}).then((response)=>{
            setResults(response.data)
        })
    },[])
    const goToAssets = () =>{
        ReactDOM.render(
            <LoginForm />,
            document.getElementById('root')
        )
    };
    const goToProfile = () =>{
        ReactDOM.render(
            <Profile comp={props.company} input={props.input} assets={props.assets}/>,
            document.getElementById('root')
            )
    }


    return (
        <div>
            <AppBar style={{backgroundColor:"#b8ccc8",color:'black',height:'70px'}}>
                <div className='navbar'>
            <h2 className='text1' style={{cursor: 'pointer'}} onClick={goToProfile}>{props.company}</h2>
            <h2 className='text1'>{props.asset}</h2>
            <h1 className='text1' style={{cursor: 'pointer'}} onClick={goToAssets}>Add Assets</h1>
            </div>
            </AppBar>
        <center>
         
        <div className='subdDiv1'>
            {   (()=>{
                    if(results.subdomains?.length>0){
                    return (<div className='subds' style={{overflowY:'scroll',minHeight:'max-content',maxHeight:'600px'}}>
                        <STable list={results.subdomains}/>
                        </div>)
                    }else{
                        return <div className='files'><h4 className='text'>No subdomains found!</h4></div>
                    }
            })()    
        }
            {(()=>{
                if(results.ports?.length>0){
                    return (<div className='ports' style={{overflowY:'scroll',minHeight:'max-content',maxHeight:'600px'}}>
                    <PTable list={results.ports} />
                    </div>)
                }else{
                    return <div className='files'><h4 className='text'>No open ports found!</h4></div>
                }
            })()}
            
        </div>
            <div>
                <h2 className='heading'>WAF Details</h2>
                {
                    (()=>{
                        if(results.waf){
                            return (<div className='whois'>
                            <OneRowTable list={[results.waf]} />
                        </div>)
                        }else{
                            return <div className='files'><h4 className='text'>No waf found!</h4></div>
                        }
                    })()
                }
            </div>
        <div>
            <h2 className='heading'>Service Password Cracks</h2>
            {(()=>{
                if(results.cracks?.length>0){
                    return (<div className='whois'>
                    <PCTable list={results.cracks} />
                </div>)
                }else{
                    return <div className='files'><h4 className='text'>No password cracks found!</h4></div>
                }
            })()}
            
            
        </div>
        <div>
            <h2 className='heading'>Company Employee and Service Emails</h2>
            {(()=>{
                if(results.emails?.length>0){
                    return (<div className='whois'>
                    {
                        <ETable list={results.emails} />
                    }
                </div>)
                }else{
                    return <div className='files'><h4 className='text'>No emails extracted!</h4></div>
                }
            })()}
            
            
        </div>

        <div>
            <h2 className='heading'>Phone Numbers Extracted</h2>
            {(()=>{
                if(results.phones?.length>0){
                    return (<div className='whois'>
                    {
                        <OneRowTable list={results.phones} />
                    }
                </div>)
                }else{
                    return <div className='files'><h4 className='text'>No phones extracted!</h4></div>
                }
            })()}
        </div>

        <div>
            <h2 className='heading'>Files Extracted</h2>
            {(()=>{
                if(results.files?.length>0){
                    return (<div className='files'>
                    {
                        <Table list={results.files} />
                        
                    }
                </div>)
                }else{
                    return <div className='files'><h4 className='text'>No files extracted!</h4></div>
                }
            })()}
            
            
        </div>
        <div>
            <h2 className='heading'>Directories Extracted</h2>
            {(()=>{
                if(results.dirs?.length>0){
                    return (
                        <div className='files'>
                        {
                            <Table list={results.dirs} />
                            
                        }
                        </div>  
                    )
                }else{
                    return <div className='files'><h4 className='text'>No directories extracted!</h4></div>
                }
            })()}
           
        </div>

        <div>
            <h2 className='heading'>Whois Information</h2>
            {(()=>{
                if(results.whois){
                    return (
                        <div className='files'>
                        <Wtable str={results.whois} />    
                    </div>
                    )
                }else{
                    return <div className='files'><h4 className='text'>No whois information extracted!</h4></div>
                }
            })()}
        </div>

        <div>
            <h2 className='heading'>SQL Injection Details</h2>
            {(()=>{
                if(results.sqli){
                    return (
                        <div className='files'>
                        <Wtable str={results.sqli} />    
                    </div>
                    )
                }else{
                    return <div className='files'><h4 className='text'>No database details found!</h4></div>
                }
            })()}
        </div>

        <div>
            <h2 className='heading'>Related Domains</h2>
            {(()=>{
                if(results.rel_domains?.length>0){
                    return (
                        <div className='files'>
                        <OneRowTable list={results.rel_domains} />    
                    </div>
                    )
                }else{
                    return <div className='files'><h4 className='text'>No related domains found!</h4></div>
                }
            })()}
            
        </div>

        <div>
            <h2 className='heading'>URLs from Wayback Machine</h2>
            {(()=>{
                if(results.webArchives?.length>0){
                    return (
                        <div className='files'>
                            <OneRowTable list={results.webArchives} />    
                        </div>
                    )
                }else{
                    return <div className='files'><h4 className='text'>No wayback urls found!</h4></div>
                }
            })()}
            
            
        </div>
        
        <div>
            <h2 className='heading'>External Links from Website</h2>
            {(()=>{
                if(results.extLinks?.length>0){
                    return (
                    <div className='files'>
                        <OneRowTable list={results.extLinks} />    
                            </div>
                    )
                }else{
                    return <div className='files'><h4 className='text'>No external links found!</h4></div>
                }
            })()}
            
        </div>

        <div>
            <h2 className='heading'>Admin Panels</h2>
            {(()=>{
                if(results.adminPanels?.length>0){
                    return (<div className='files'>
                    <OneRowTable list={results.adminPanels} />
                </div>)
                }else{
                    return <div className='files'><h4 className='text'>No Admin Panel found!</h4></div>
                }
            })()}
            
        </div>

        <div>
            <h2 className='heading'>CMS Details</h2>
            {(()=>{
                if(results.cmsDetails){
                    return (<div className='files'>
                    <OneRowTable list={[results.cmsDetails]} />
                </div>)
                }else{
                    return <div className='files'><h4 className='text'>No CMS Details found!</h4></div>
                }
            })()}
            
        </div>
        
        <div>
            <h2 className='heading'>Open Directory Listings</h2>
            <div className='files'>
                { (()=>{
                    if(results.openDirs?.length>0){
                    return <OneRowTable list={results.openDirs} />
                    }else{
                        return <div className='files'><h4 className='text'>No Open Directories found!</h4></div>
                    }
                })()
            }
            </div>
        </div>

        <div>
            <h2 className='heading'>SPF Records</h2>
            <div className='whois'>
                {
                    
                    (()=>{
                        if(results.spfrecs){
                            return(<div className='files'><h4 className='text'>{results.spfrecs[0]?.records}</h4></div>)
                        }else{
                            return <div className='files'><h4 className='text'>No SPF Records Found!</h4></div>
                        }
                    })
                    ()
                }
            </div>
        </div>

        <div>
            <h2 className='heading'>Vulnerabilities</h2>
            <div className='whois'>
                <h3 className='text'>SSL Vulnerabilities</h3>
                <br />
                {   
                (()=>{
                        if(results.SSLvulns?.length>0){
                            return <SSLTable list={results.SSLvulns} />
                        }else{
                            return <div className='files'><h4 className='text'>No SSL vulnerabilities Found!</h4></div>
                        }
                    })()
                    
                }
            </div>
        </div>
        
            <div>
                <h2 className='heading'>Comments from HTML</h2>
                {(()=>{
                    if(results.comments?.length>0){
                        return (<div className='comments' >               
                        {
                            <CTable list={results.comments} />
                        }
                        </div> )
                    }else{
                        return <div className='files'><h4 className='text'>No comments extracted!</h4></div>
                    }
                })()}
                
            </div>

            </center>
        </div>
    )
};

export default App;
