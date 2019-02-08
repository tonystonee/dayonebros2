import Vue from 'vue'
import slugify from 'slugify'
import Router from 'vue-router'
import Category from './views/Category'
import Home from './views/Home'
import categories from '@/config/categories'
import colors from 'vuetify/es5/util/colors'

Vue.use(Router);

function desc(category){
  return `The top ${category} videos of the day.`;
}

function categoryRoute(category){
  const slug = slugify(category.name);
  return {
    path: `/${slug}`,
    name: category.name,
    component: Category,
    props: {
      categoryId: category.categoryId,
      primary: category.color,
    },
    meta: {
      title: `DayOneBros: ${category.name}`,
      metaTags: [
        {
          name: 'description',
          content: desc(category.name),
        }
      ],
    },
  };
}

const categoryRoutes = [];

categories.forEach((category)=>{
  categoryRoutes.push(categoryRoute(category));
});

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: {
      primary: colors.red,
    },
    meta: {
      title: 'Home - Day One Bros',
      metaTags: [
        {
          name: 'description',
          content: 'Bored? Browse the top ten videos of the day at dayonebros.com.',
        }
      ],
    },
  },
  ...categoryRoutes,
  { path: '*', redirect: '/' }
];

console.log(routes)

const router = new Router({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;