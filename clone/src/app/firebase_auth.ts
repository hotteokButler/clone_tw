import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default class FirebaseAuth {
  firebaseApp: any;
  auth: any;

  constructor(firebaseApp: object) {
    this.firebaseApp = firebaseApp;
    this.auth = getAuth(this.firebaseApp);
  }

  // Sign up new users
  signUp(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      updateProfile(user, { displayName: name });
    });
  }
  // Sign in
  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password);
  }
}
