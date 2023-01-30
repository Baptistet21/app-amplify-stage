import './App.css';
import React, {useEffect, useState} from "react";
import {Amplify} from "aws-amplify";
import {withAuthenticator} from "@aws-amplify/ui-react";
import {Auth} from "aws-amplify";
import config from './aws-exports';

Amplify.configure(config);
function App() {
    const [User, setUser] = useState(undefined)

    useEffect(()=>{
        async function getUser() {
            setUser(await Auth.currentAuthenticatedUser())
        }
        getUser()
    },[])

    return User ? <div>

    </div> : null
}

export default withAuthenticator(App);
