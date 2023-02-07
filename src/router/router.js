import Vue from 'vue'
import Router from 'vue-router'
import AboutCoding from '@/components/AboutCoding'
import SchoolProfiles from '@/components/SchoolProfiles'
import ClassPresents from '@/components/ClassPresents'
import ContactUs from '@/components/ContactUs'
import AccountDetails from '@/components/AccountDetails'
import MyCourse from '@/components/MyCourse'
import AbilityAnalysis from '@/components/AbilityAnalysis'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactUs',
      component: ContactUs,
/*      children: [
        {
          path: 'about_programming',
          name: 'AboutProgramming',
          component: AboutProgramming
        },
        {
          path: '/class_preview',
          name: 'ClassPreview',
          component: ClassPreview
        },
        {
          path: '/contact_us',
          name: 'ContactUs',
          component: ContactUs
        },
        {
          path: '/school_profiles',
          name: 'SchoolProfiles',
          component: SchoolProfiles
        }
      ]*/
    }
  ]
})
