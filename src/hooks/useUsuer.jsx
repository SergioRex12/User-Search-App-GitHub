import { useContext } from "react";
import userProvider from "../context/userProvider.jsx";

const useUser = () => {
    return useContext(userProvider);
}

export default useUser;