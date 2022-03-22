
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import firebaseInit from "../Firebase/firebase.init";

firebaseInit();

const auth = getAuth();

const useFirebase = () => {
  const userData = useContext(UserContext);

  if (userData) {
    const { setIsLoggedIn, setIsLoading } = userData;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsLoading(false)
      } else {
        console.log('user is signed out');
        setIsLoading(true);
      }
    });
  }
};

export default useFirebase;