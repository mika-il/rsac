<template>
 <div>
    <form v-if="!showMessage" class="form-horizontal" @submit.prevent="validateBeforeSubmit">
        <div class="form-group"  :class="{'has-error': errors.has('name') }">
            <label for="name" class="col-sm-2 control-label"  >Full name</label>
            <div class="col-sm-10">
                <input name="name" type="text" v-model="enroll.name"  v-validate="'required'"   class="form-control"  placeholder="Full name">
                <p class="text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
        </div>
        <div class="form-group" :class="{'has-error': errors.has('email') }">
            <label for="email" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
                <input type="email" v-model="enroll.email" v-validate="'required|email'" class="form-control" name="email" placeholder="Email">
                <p class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
            </div>
        </div>
        <div class="form-group"  :class="{'has-error': errors.has('mobile') }">
            <label for="mobile" class="col-sm-2 control-label">Mobile</label>
            <div class="col-sm-10">
            <input type="text" v-model="enroll.mobile" v-validate="'required'" class="form-control" name="mobile" placeholder="Mobile">
            <p class="text-danger" v-show="errors.has('mobile')">{{ errors.first('mobile') }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="jobTitle" class="col-sm-2 control-label">Sex</label>
            <div class="col-sm-10">
                <label class="radio-inline">
                    <input type="radio" name="sex" v-model="enroll.sex"  value="Male"> Male
                </label>
                <label class="radio-inline">
                    <input type="radio" name="sex" v-model="enroll.sex"  value="Female"> Female
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="jobTitle" class="col-sm-2 control-label">Job Title</label>
            <div class="col-sm-10">
            <input type="text" v-model="enroll.jobTitle" class="form-control" name="jobTitle" placeholder="Job Title">
            </div>
        </div>
        <div class="form-group"  :class="{'has-error': errors.has('course') }">
            <label for="course" class="col-sm-2 control-label">Course</label>
            <div class="col-sm-10">
            <select  type="text" class="form-control" v-model="enroll.course" v-validate="'required'" name="course">
                <option  value="">-- select course --</option>
                <option v-for="option in options.courses" :key="option.value" :value="option.value">{{ option.text }}</option>
            </select>
            <p class="text-danger" v-show="errors.has('course')">{{ errors.first('course') }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="medical" class="col-sm-2 control-label">Medical Certificate</label>
            <div class="col-sm-10">
            <select class="form-control" v-model="enroll.medical">
                    <option v-for="option in options.medicals" :key="option.value" :value="option.value">{{ option.text }}</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" :disabled="errors.any()"  class="btn btn-big btn-solid"><i class="fa fa-paper-plane"></i><span>Send Message</span></button>
            </div>
        </div>
    </form>
  <div class="alert alert-success" role="alert" v-else>
    <strong>Thank You.</strong> RSAC has received your request for training information. We will be sending you information by mail or e-mail within the next few days. After allowing time for you to receive and review this material, we will contact you to answer any questions you may have.
  </div>
 </div>
</template>

<script>
import {postNewAsanaTask} from '~/api/enroll.js'

export default {
  name: 'FormEnroll',
  data () {
    return {
      enroll: {
        name: '',
        email: '',
        mobile: '',
        sex: 'Male',
        jobTitle: '',
        course: '',
        medical: 'Don\'t have'
      },
      options: {
        courses: [
          { value: 'PPL', text: 'PPL' },
          { value: 'CPL', text: 'CPL' }
        ],
        medicals: [
          { value: 'Don\'t have', text: "Don't have/RSW can provide a fully support of ICAO medical examination on date" },
          { value: 'CLASS 1', text: 'CLASS 1' },
          { value: 'CLASS 2', text: 'CLASS 2' }
        ]
      },
      showMessage: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.$store.dispatch('enrollSubmitted')
        let notes = `Email: ${this.enroll.email}\n 
                     Mobile: ${this.enroll.mobile}\n
                     Sex: ${this.enroll.sex}\n
                     Job Title: ${this.enroll.jobTitle}\n
                     Course: ${this.enroll.course}\n
                     Medical Certificate: ${this.enroll.medical}
        `
        let names = `${this.enroll.name} (enroll from website)`

        postNewAsanaTask(notes, names)
          .then((res) => {
            this.$store.dispatch('enrollSuccess')
            this.showMessage = true
          })
      }
    }
  }
}
</script>

