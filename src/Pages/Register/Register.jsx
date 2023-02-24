import React from "react";
import "./register.css";

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {

  const handleSubmit = async(e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "user", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      
          }
          catch (error) {
            console.log(error);
          }
      

    }

  return (
    <div className="register">
      <div className="reg-box">
        <div className="reg-left">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" placeholder="user name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="file" />
            <button>Register</button>
          </form>
        </div>
        <div className="reg-right">
          <h1>Discord Lite</h1>
          <span>
            Already have an account? <button>Login</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
