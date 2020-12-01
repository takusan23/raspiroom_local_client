import firebase from "firebase"

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: "AIzaSyDkATaSUT02_RrKYbjEga1zzleG3GDcg9Q",
            authDomain: "raspiroom.firebaseapp.com",
            databaseURL: "https://raspiroom.firebaseio.com",
            projectId: "raspiroom",
            storageBucket: "raspiroom.appspot.com",
            messagingSenderId: "356408840691",
            appId: "1:356408840691:web:5847ec3220d0fde7ba8286",
            measurementId: "G-TD357TK7D7"
        }
    )
}

export default firebase