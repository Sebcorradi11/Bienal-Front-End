import { getDocs, query, where, updateDoc, collection, doc } from "firebase/firestore";
import { db } from './firebase';
import { updateRole } from '../store/userSlice';

export const updateUserRoleByEmail = (email, newRole) => async (dispatch) => {
    try {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log("No se encontró ningún usuario con el email proporcionado.");
            return;
        }

        const userDoc = querySnapshot.docs[0];
        const userRef = doc(db, "users", userDoc.id);

        await updateDoc(userRef, {
            role: newRole
        });

        console.log(`El rol del usuario con email ${email} se ha actualizado a ${newRole}`);

        // Actualiza el estado en Redux
        dispatch(updateRole(newRole));

    } catch (error) {
        console.error("Error al actualizar el rol del usuario:", error);
    }
};