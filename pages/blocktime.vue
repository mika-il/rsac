<template>
 <div>
    <page-banner :pageBanner="pageBanner"></page-banner>
    <div class="contact-page-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <form  class="comment-form row altered" id="contact-form" @submit.prevent="validateBeforeSubmit">
                        <div class="form-group col-sm-3" :class="{'has-error': errors.has('out') }">
                            <label for="out">OUT</label>
                            <input type="text" v-model="form.outTime" name="out"  v-validate="'required|numeric'" maxlength="4"  class="form-control"  />
                            <p class="text-danger" v-show="errors.has('out')">{{ errors.first('out') }}</p>
                        </div>
                        <div class="form-group col-sm-3" :class="{'has-error': errors.has('off') }">
                            <label for="off">OFF</label>
                            <input type="text" v-model="form.offTime" name="off"  v-validate="'required|numeric'" maxlength="4" class="form-control"  />
                            <p class="text-danger" v-show="errors.has('off')">{{ errors.first('off') }}</p>
                        </div>
                        <div class="form-group col-sm-3" :class="{'has-error': errors.has('on') }">
                            <label for="on">ON</label>
                            <input type="text" v-model="form.onTime" name="on"  v-validate="'required|numeric'" maxlength="4"  class="form-control"  />
                            <p class="text-danger" v-show="errors.has('on')">{{ errors.first('on') }}</p>
                        </div>
                        <div class="form-group col-sm-3" :class="{'has-error': errors.has('in') }">
                            <label for="in">IN</label>
                            <input type="text" v-model="form.inTime" name="in"  v-validate="'required|numeric'" maxlength="4"  class="form-control"  />
                            <p class="text-danger" v-show="errors.has('in')">{{ errors.first('in') }}</p>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="name">BLOCK TIME</label>
                            <input type="text" :value="form.blockTime" disabled  class="form-control"  />
                        </div>  
                        <div class="form-group col-sm-6">
                            <label for="name">ARBN TIME</label>
                            <input type="text" :value="form.arbnTime" disabled   class="form-control"  />
                        
                        </div>
                        <div class="field col-sm-4">
                            <button type="submit" :disabled="errors.any()" class="btn btn-big btn-solid"><i class="fa fa-calculator"></i><span>Calculate</span></button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import moment from 'moment'
import PageBanner from '~/components/TheBanner'

export default {
  components: {
    PageBanner
  },
  data () {
    return {
      form: {
        outTime: '',
        offTime: '',
        onTime: '',
        inTime: '',
        blockTime: '',
        arbnTime: ''
      },
      pageBanner: {
        title: 'Block Time Calculator',
        bg: 'background: url(/img/banner/about.jpg) center center no-repeat;'
      }
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      if (!this.errors.any()) {
        this.form.blockTime = this.timeDiff(this.form.inTime, this.form.outTime)
        this.form.arbnTime = this.timeDiff(this.form.onTime, this.form.offTime)
      }
    },
    timeDiff (startTime, endTime) {
      let ms = moment(startTime, 'HHmm').diff(moment(endTime, 'HHmm'))
      var hrs = moment.duration(ms).hours()
      var mins = moment.duration(ms).minutes()
      if (hrs < 10) hrs = '0' + hrs
      if (mins < 10) mins = '0' + mins
      return hrs + ':' + mins
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og-image', property: 'og:image', content: 'http://www.royalskyavaitioncenter.com/img/fb-og-blocktime.jpg' },
        { hid: 'og-title', property: 'og:title', content: 'Block Time Calculator' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'fb-app_id', property: 'fb:app_id', content: '400736526646234' }
      ],
      title: 'Block Time Calculator | Royal Sky Aviation Center'
    }
  }
}
</script>

