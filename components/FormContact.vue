<template>
<div>
  <div class="alert alert-success" role="alert" v-if="showMessage">
    <strong>Thank You.</strong> RSAC has received your message. We will get back to you soon with the requested information.
  </div>
  <form v-else  class="comment-form row altered" id="contact-form" @submit.prevent="validateBeforeSubmit">
    <div class="form-group col-sm-4" :class="{'has-error': errors.has('name') }">
		    <label for="name"> Name</label>
		    <input type="text" v-model="form.name" name="name"  v-validate="'required'"  class="form-control"  />
        <p class="text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</p>
	  </div>
	  <div class="form-group col-sm-4" :class="{'has-error': errors.has('email') }" >
		    <label  for="Email"> Email</label>
		    <input type="text" v-model="form.email"  v-validate="'required|email'"  name="email" class="form-control"    />
        <p class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
	  </div>
	  <div class="form-group col-sm-4" :class="{'has-error': errors.has('subject') }" >
		    <label  for="Subject"> Subject</label>
		    <input type="text" v-model="form.subject"  v-validate="'required'"  name="subject"  class="form-control"    />
        <p class="text-danger" v-show="errors.has('subject')">{{ errors.first('subject') }}</p>
	  </div>
	  <div class="col-sm-12">
		<label for="Message"> Message</label>
	    <textarea v-model="form.message" class="form-control" rows="5"></textarea>
	  </div>
	  <div class="field col-sm-4">
			<button type="submit" :disabled="errors.any()" class="btn btn-big btn-solid"><i class="fa fa-paper-plane"></i><span>Send Message</span></button>
	  </div>
  </form>
  
</div>
</template>

<script>
import { postNewContact } from '~/api/contact.js'

export default {
  name: 'FormContact',
  data () {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      showMessage: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.$store.dispatch('enrollSubmitted')
        postNewContact(this.form)
          .then((res) => {
            this.$store.dispatch('enrollSuccess')
            this.showMessage = true
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

