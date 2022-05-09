import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './App'
import { useEffect } from 'react';
import Profile from './Profile';

const LoginForm = () =>{
    const [company,setCompany]= useState("");
    const [asset,setAsset]= useState("");
    const [assets,setAssets] = useState([]);
    const [input,setInput] = useState([]);
    const [profile,setprofile] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:3000/input').then((resp)=>{
               setInput([resp.data]) 
            // resp.data.map((val)=>{
            //     setInput([...input,val])
            // })
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const AddCompany = (event) =>{
        setCompany(event.target.value)
        //console.log(company)
    }

    const addAsset = (event) =>{
        setAsset(event.target.value)
        //console.log(asset)
    }

    const addToList = () =>{
        if(asset){
            //get request to assets for available assets for the company, if present display all available assets
            axios.get(`http://localhost:3000/assets`,{params: {comp:company}}).then((resp)=>{
                if(resp.data.includes(asset)){
                    alert('Asset already present in profile!')
                    resp.data.map(val=>{
                        setAssets(oldItems =>{
                            return [...oldItems,val];
                        })
                    })
                    setprofile(true);
                }else{
                    setAssets(oldItems =>{
                        return [...oldItems,asset];
                    })
                    }
                });
            }else{
                alert('Enter something!')
            }
         }

    const onSubmit = () =>{

        if((company=='' || assets==[])){
            alert("Please enter all details")
            return
        }
        
        //add company and its assets to database
        axios.post('http://localhost:3000/input',
                {
                    company1: company,
                    asset1: assets
                })

        //get the input data and load it to state variable : input
        axios.get('http://localhost:3000/input').then((resp)=>{
                setInput([resp.data])
        }).catch(err=>{
            console.log(err)
        })

        alert('Assets added!')
        setprofile(true)
    };

    
    const goToProfile = () =>{
        if(profile){
            ReactDOM.render(
            <Profile comp={company} input={input} assets={assets}/>,
            document.getElementById('root')
            )
        }else{
            alert('Enter details!')
        }
    };


    return (
        
        <div>
        <center>
            <h1 className="larger">Company Details</h1>
            <div>
            <input className="compname" type="text" placeholder='company' name='company' onInput={AddCompany} value={company}></input>
            <div style={{display:"flex",justifyContent:'center',marginLeft:22}}>
            <input className="asset" type="text" placeholder='asset' name='asset' onInput={addAsset} value={asset}></input>
            <button className='addButton' onClick={addToList}>+</button>
            </div>
            <br />
            <br />
            <div className='assetsdiv-login'>
            {
               assets.map((itemval)=>{
                   return (
                   <div>
                   <h2 className='listofassets'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{itemval}</h2>
                   </div>
                   )
               })
            }
            </div>
            </div>
            <div className='buttons'>
            <button className="button" onClick={onSubmit} >Submit</button>
            <button className="button" onClick={goToProfile}>Go To Profile</button>
            </div>
        </center>
        </div>
    );
}
export default LoginForm;