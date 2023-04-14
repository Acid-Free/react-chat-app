import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (
  displayName,
  email,
  password,
  file,
  navigate,
  setError,
  setUploading
) => {
  try {
    setUploading(true);

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Uses current datetime and username for referencing user image
    const dateTime = new Date().getTime();
    const storageRef = ref(storage, `${dateTime + displayName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      (error) => {
        console.error(error);
        setError(error.code);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Add updated name and avatar URL to user data in auth
        await updateProfile(response.user, {
          displayName,
          photoURL: downloadURL,
        });

        // Save user information to users collection (this is separate from authentication db)
        await setDoc(doc(db, "users", response.user.uid), {
          uid: response.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });

        // Create a document for a list of people a user interacted to
        await setDoc(doc(db, "userChats", response.user.uid), {});

        // Redirect to home page after successful registration
        navigate("/");
      }
    );
  } catch (error) {
    console.error(error);
    setError(error.code);
    setUploading(false);
    await auth.currentUser.delete();
    console.log("User account revoked successfully");
  }
};
