import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import loadImage from "./plugins/loadImage";
//뒤에 /index.js 생략 가능

createApp(App)
  .use(router) //$route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount("#app");

// use라는 메소드를 통해서 플러그인으로 등록해서 사용하고 있는 것
// $route, $router, $store 라는 개념으로 앞에 this를 붙여서 뷰 컴포넌트 내부에서 언제든지 사용 가능
