import { useContext } from "react"
import PropTypes from "prop-types"
import AuthContext from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"


export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center items-center mt-20">
            <span className="loading loading-bars loading-md"></span>
        </div>
    }
    if (user && user?.email) {
        return children
    }
    return (

        <Navigate to='/auth/login' state={location.pathname} />


    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}