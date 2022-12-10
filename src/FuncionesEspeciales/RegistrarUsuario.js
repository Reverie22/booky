import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

async function RegistrarUsuario (valores) {
    const collectionRef = collection(db, 'Usuarios');
    const docRef = doc(collectionRef, valores.uuid);
    setDoc(docRef, valores);

}

export default RegistrarUsuario;