import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function UserProfile(props)  {
    const dialogFooter = <div className="flex justify-content-center"><Button label="Go Back" className="p-button-text" autoFocus onClick={() => {navigate(-1)}} /></div>;
    const newId = props.id;
    const navigate = useNavigate();
    const [user,setUser] = useState([]);

    useEffect(() => {loadUserProfile();}, [])
    
    const loadUserProfile = () =>{
        fetch("https://tutorial4-api.herokuapp.com/api/users/"+newId,{
            method : 'GET',
            headers : new Headers({
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }),
            })
            .then(response => response.json())
            .then(data => {
                setUser(data.data)
                console.log(data);
                if(data){
                }
            })
            .catch(error =>{
                console.error(error);
            });
        }
        return (
            <Dialog visible={true} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <div className="avatar">
                        <img  src={user.picture}  className="card-img-top"  alt=""/>
                    </div>
                    <h5 className="card-title">{(user.title) + ". " +(user.firstName) +" " +(user.lastName)}</h5>
                    <p className="card-text">{ user.email}</p>
                </div>
            </Dialog>
        )
}
export default UserProfile;