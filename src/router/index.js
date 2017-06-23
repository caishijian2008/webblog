import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import MyHeader from '@/components/MyHeader'
// import MyNav from '@/components/MyNav'
// import MyArticle from '@/components/index/MyArticle'
// import MyAside from '@/components/MyAside'
// import ToTopBtn from '@/components/ToTopBtn'
// import MyFooter from '@/components/MyFooter'
// import MyBlogList from '@/components/bloglist/MyBlogList'
// import MyPhoto from '@/components/photos/MyPhoto'
// import MyAbout from '@/components/about/MyAbout'
// import Register from '@/components/user/Register'
import MyIndex from '@/components/index/MyIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: MyIndex,
      component: MyIndex
    }
    // {
    //   path: '/',
    //   components: {
    //     // myheader: MyHeader,
    //     // mynav: MyNav,
    //     // myarticle: MyArticle,
    //     // myaside: MyAside,
    //     // totopbtn: ToTopBtn,
    //     // myfooter: MyFooter
    //   }
    // },
    // {
    //   path: '/bloglist',
    //   components: {
    //     myheader: MyHeader,
    //     mynav: MyNav,
    //     default: MyBlogList,
    //     myaside: MyAside,
    //     totopbtn: ToTopBtn,
    //     myfooter: MyFooter
    //   }
    // },
    // {
    //   path: '/photo',
    //   components: {
    //     myheader: MyHeader,
    //     mynav: MyNav,
    //     default: MyPhoto,
    //     myaside: MyAside,
    //     totopbtn: ToTopBtn,
    //     myfooter: MyFooter
    //   }
    // },
    // {
    //   path: '/about',
    //   components: {
    //     myheader: MyHeader,
    //     mynav: MyNav,
    //     default: MyAbout,
    //     myaside: MyAside,
    //     totopbtn: ToTopBtn,
    //     myfooter: MyFooter
    //   }
    // }
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // }
  ]
})
