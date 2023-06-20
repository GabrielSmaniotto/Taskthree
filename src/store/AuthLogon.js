import { defineStore } from 'pinia'
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, getAuth  } from 'firebase/auth'
import { router } from '@/router'


export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    msg: true,
  }),
  
  actions: {
    initialize() {
      onAuthStateChanged(getAuth(), (user) => {
        this.user = user
      })
    },
    async login(email, password) {
      const result = await signInWithEmailAndPassword(getAuth(), email.value, password.value)
          .then(() => {
              console.log(getAuth().currentUser);
              this.user = getAuth().currentUser; 
              router.push('/register');
          })
          .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
          });
    },

    async loginWithGoogle() {  
      signInWithPopup(getAuth(), new GoogleAuthProvider())
        .then(() => {
            console.log(getAuth().currentUser);
            this.user = getAuth().currentUser;           
            router.push('/register');
            
        })
        .catch((error) => {
            console.log(error);
        });
    },
    
    async logout() {
      try {
        await signOut(getAuth())
        this.user = null
        this.msg = null
        console.log(this.user)
        router.push('/');
      } catch (error) {
        console.error('Erro ao fazer logout:', error)
      }
    },


    async alerta() {
      if(this.msg === null) {
        window.alert("Voce precisa estar logado")

    } 
       
    
    }
  },
})