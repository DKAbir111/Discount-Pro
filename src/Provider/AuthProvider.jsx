import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../Context/AuthContext";
import auth from "../Firebase/firebase.init";

export default function AuthProvider({ children }) {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
