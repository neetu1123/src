<template>
<form @submit.prevent="handleSubmit">
<label >Email</label>
<input type="email" required v-model="email">
<label >Password</label>
<input type="password" required v-model="password">
<div v-if="passwordError" class="error"> {{ passwordError }}</div>
<label >Role</label>
<select v-model="select">
    <option value="designer">web designer</option>
    <option value="developer">web developer</option>
</select>

<label>Skills:</label>
<input type="text" v-model="tempSkill" @keyup.alt="addskill">
<div v-for="skill in skills" :key="skill" class="pills" >
   <span @click="deleteSkill(skill)"> {{ skill }}</span>
</div>

<div class="terms">
<input type="checkbox" v-model="term" required>
Accept terms and condition
</div>

<div class="submit">
    <button>Create an Account</button>
</div>

</form>
<p>Email : {{ email }}</p>
<p>Password : {{ password }}</p>
<p>Role: {{ select }}</p>
<p>Teerms accepted : {{ term}}</p>


</template>

<script>
export default {

  data () {
    return {
      email: '',
      password: '',
      select: 'designer',
      term : false,
     tempSkill :' ',
     skills :[],
     passwordError: ''
    }
  },
  methods : {
    addskill(e) {
        if(e.key === ',' && this.tempSkill) {
            if(!this.skills.includes(this.tempSkill)) {
              this.skills.push(this.tempSkill)
            }
            this.tempSkill = " "
        }
    },
    deleteSkill(skill) {
        this.skills = this.skills.filter((item) => {
            return skill !=item
        })
    },
    handleSubmit() {
       //validate password
       this.passwordError = this.password.length > 5 ?
       ' ' : 'password must be atleast 6 chars long'
       
      if(this.passwordError){
         console.log('email' , this.email)
        console.log('password' , this.password)
        console.log('role',this.select)
        console.log('skills',this.skills)
        console.log('terms accepted',this.term)
       
      }
        
   }
  }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background-image: url(/home/neetu/vue/web-inputform/src/assets/images.jpeg);
    background-position: center;
    background-image: no-repeat;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color:  rgb(207, 32, 32);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 20px;
    text-transform:  uppercase;
    letter-spacing:  1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin:  0 10px 0 0;
    position: relative;
    top: 2px;
}
.pills {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding:  6px 12px;
   background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight:  bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error{
    color: red;
}

</style>
