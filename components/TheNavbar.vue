<template>
<header>
    <nav class="navbar navbar-alan navbar-default navbar-fixed-top">
      <div class="container" id="container">
        <div class="navbar-header">
          <button type="button" @click="clickToggle" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link to="/" class="navbar-brand"><img src="~/assets/logo.png" alt=""></nuxt-link>
        </div>
        <div id="navbar" class="navbar-collapse" :class="{ 'collapse' : isCollapse}">
          <ul class="nav navbar-nav navbar-right">
            <li><nuxt-link to="/" >Home</nuxt-link></li>
            <li class="dropdown" >							
              <a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Training Course <span class="caret"></span></a>
							<ul class="dropdown-menu">
                <li><nuxt-link to="/course/ppl" >PPL</nuxt-link></li>
								<li><nuxt-link to="/course/cpl" >CPL</nuxt-link></li>
								<li><nuxt-link to="/course/adv-cpl" >ADV-CPL</nuxt-link></li>
								<li><nuxt-link to="/course/ir" >IR</nuxt-link></li>
								<li><nuxt-link to="/course/me" >ME</nuxt-link></li>
								<li><nuxt-link to="/course/ip" >IP</nuxt-link></li>
              </ul>							
            </li>
						<li><nuxt-link to="/about" >About Us</nuxt-link></li>
						<li class="dropdown" >							
              <a href="#" name="student"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Student<span class="caret"></span></a>
							<ul class="dropdown-menu" >
                <li><nuxt-link to="/alumni" >Alumnis</nuxt-link></li>
                <li><nuxt-link to="/blocktime" >Block Time Calc</nuxt-link></li>
              </ul>							
            </li>
						<li><nuxt-link to="/blog" >Blog</nuxt-link></li>
						<li><nuxt-link to="/contact" >Contact</nuxt-link></li>
						<li><nuxt-link class="enroll-btn"  to="/admissions">Apply Now</nuxt-link></li>
          </ul>
					
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</header>
</template>

<script>
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase. (by vue-strap)
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false)
      return {
        remove () {
          target.removeEventListener(eventType, callback, false)
        }
      }
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback)
      return {
        remove () {
          target.detachEvent('on' + eventType, callback)
        }
      }
    }
  }
}
export default {
  name: 'Navbar',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    clickToggle  () {
      this.isCollapse = !this.isCollapse
    }
  },
  mounted () {
    const dropdowns = document.querySelectorAll('.dropdown > .dropdown-toggle')
    if (dropdowns) {
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', (e) => {
          e.preventDefault()
          e.target.offsetParent.classList.add('open')
        })
      }
    }
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      if (e.target.classList.contains('dropdown-toggle')) {
        return
      }
      const dropdowns = document.querySelectorAll('.dropdown')
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('open')
      }
    })
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>
<style scoped>
.navbar-alan {
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
}
.navbar-alan .navbar-header {
	padding: 0 0 25px 0;
}
.navbar-alan .navbar-brand {
	padding: 10px 12px 0;
}

.navbar-alan .navbar-nav {
	padding: 10px 0;
}

.navbar-alan .navbar-nav > li> a.enroll-btn {
  background: #f5b133 none repeat scroll 0 0;
	border-radius: 3px; border-color: #f5b133;
	font-size: 14px;
	font-weight: 300;padding: 10px; margin: 5px 0 0 0;
	color: #fff;
  text-align: center;
}
.navbar-alan .navbar-nav > li> a.enroll-btn:hover {
  background: #444; border-color:#444; 
  color: #ffffff;
}

.navbar-alan .navbar-nav > li > a {
		color: #444;
		font-family: "Prompt",sans-serif;
		font-size: 15px;
		font-weight: 500;
		text-transform: uppercase;
		transition: all 0.2s ease-out 0s;
}

.navbar-alan .navbar-default .navbar-collapse {
  background-color:#fff;
}

.navbar-alan .navbar-nav > li a.nuxt-link-exact-active {
  color: #895623;
}

.navbar-alan .navbar-nav > li > a:hover,
.navbar-alan .navbar-nav > .open >a {
    color: #f5b133; background-color:#fff;
}

.navbar-alan .navbar-nav .dropdown-menu  { 
  background: #444 none repeat scroll 0 0;
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  top: 66px;
}
.navbar-alan .navbar-nav .dropdown-menu>li>a  { 
  color: #fff;
  text-transform: capitalize;
}
.navbar-alan .navbar-nav .dropdown-menu>li>a:hover,.navbar-alan .navbar-nav .dropdown-menu>li>a:focus  { 
  color: #f5b133;background: #444 none repeat scroll 0 0;
}

.navbar-alan .navbar-toggle {
	margin: 20px 0 0 0;background-color:#f5b133; border: 0px;
}
.navbar-alan .icon-bar {
    background-color:#fff;
}
</style>



