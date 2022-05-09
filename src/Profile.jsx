import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './Login';
import {AppBar, Link} from '@material-ui/core';
import App from './App';
import axios from 'axios';

const Profile = (props) =>{
    const [input,setInput] = useState(props.input);

    var lastScanned = [];

    const goToAssets = () =>{
        ReactDOM.render(
            <LoginForm />,
            document.getElementById('root')
        )
    };

    const startScan = (scan_asset) =>{

        //update scanStatus variable to 's' : scan started
        axios.post('http://localhost:3000/scan',{
            scanAsset:scan_asset,
            company: props.comp
        }).then(alert('Scan Started!'))

        //update input data so that the scanStatus field has the recently updated value
        axios.get('http://localhost:3000/input').then(resp=>{
            setInput([resp.data])
        })
        
    }
    const getAssetScanResults = (asset) =>{

        if(asset){
            for(let i=0;i<input.length;i++){
                for(var obj in input[i]){
                    var comp=input[i][obj]['_id'];
                    var assetss = input[i][obj]['assets'];
                    if(comp===props.comp){
                        for(let j=0;j<assetss.length;j++){
                            var url = assetss[j]['url']
                            var scanStatus = assetss[j]['scanStatus']
                            if(url===asset){
                                if(scanStatus==='c'){ //if scan is complete, load results
                                    alert('Loading results!')
                                    //load results for the input asset of company
                                    ReactDOM.render(<>
                                    <App company={comp} asset={asset} input={input} assets={props.assets}/>
                                    </>,document.getElementById('root'))
                                    break;
                                }else if(scanStatus==='o'){
                                    alert('Scan ongoing! Loading available results!')
                                    //load results for the input asset of company
                                    ReactDOM.render(<>
                                    <App company={comp} asset={asset} input={input} assets={props.assets}/>
                                    </>,document.getElementById('root'))
                                    break;
                                }
                                else if(scanStatus==='s'){ //scan is running
                                    alert('Scan in Progress!')    
                                }
                                else{ //not scanned
                                    alert('Not yet scanned!')
                                }
                                
                            }
                        }
                    }
                }
            }
        }else{
            alert('Refresh!')
        }
    }

    for(let i=0;i<input.length;i++){
        for(var obj in input[i]){

            var comp=input[i][obj]['_id'];
            var assetss = input[i][obj]['assets'];
            if(comp===props.comp){
                for(let j=0;j<assetss.length;j++){
                    var datetime = assetss[j]['scanDateTime']
                    if(datetime==null){
                        lastScanned.push('Not yet scanned')
                    }else{
                        lastScanned.push(datetime)
                    }
                }
            }
        }
    }

    return (
        <>
        <AppBar style={{backgroundColor:"#b8ccc8",color:'black',height:'70px'}}>
            <div  className='navbar'>
            <h1 className='text1'>{props.comp}</h1>
            <h1 className='text1' style={{cursor: 'pointer'}} onClick={goToAssets}>Add Assets</h1>
            </div>
        </AppBar>
        
        <center>
        <div className='assetsdiv'>
            {
                
                props.assets.map((val,idx)=>{
                   return (
                    <div className='getresults'>
                            <h2 className='text1'>{val}</h2>
                            <h2 className='lastscan'>Last Scanned: {lastScanned[idx]}</h2>
                            <button style={{marginTop:'-1px'}} className='scan' onClick={()=>{startScan(val)}}>Start Scan</button>
                            <button style={{marginTop:'-1px',marginLeft: '1000px'}} className='button1' onClick={()=>{getAssetScanResults(val)}}>Get Results</button>
                    </div>
                    )
                })
            }
        </div>
        </center>
        </>
    )
}

export default Profile;