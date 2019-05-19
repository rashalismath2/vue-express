<template>
   <div id="register">
        <input v-model="email" type="email" name="email" placeholder="email" />
        <input v-model="password" type="password" name="password" placeholder="password" />
        <button v-on:click="register" type="submit" class="btn">Register</button>
   </div>
</template>

<script>
    
    export default {
       data(){
           return {
               email:'',
               password:''
           }
       },
       methods: {
           register(){
               console.log(this.email);
              this.$http.post('http://localhost:8585/register',{
                email:this.email,
                password:this.password
            }).then((message)=>{
                   console.log(message);
               }).catch((e)=>{
                   console.log(e);
               })
           }
       },
    }
</script>