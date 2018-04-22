import {auth, twitterProvider, googleProvider} from '../firebase';

export function googleLogin(){
    return dispatch=>auth.signInWithPopup(googleProvider)
}

export function twitterLogin(){
    return dispatch=>auth.signInWithPopup(twitterProvider)
}