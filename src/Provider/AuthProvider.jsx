import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthContext from "../Context/AuthContext";
import auth from "../Firebase/firebase.init";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login an existing user
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Set up auth state listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // Google sign-in provider
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    // Logout the user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Profile update
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then(() => {

            setUser({
                ...auth.currentUser,
                displayName: name,
                photoURL: photo,
            });
        });
    };

    const authInfo = {
        createUser,
        Login,
        user,
        logOut,
        loading,
        signInWithGoogle,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
