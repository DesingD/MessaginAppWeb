import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import ForgotView from "@/views/auth/ForgotView.vue";
import ResetView from "@/views/auth/ResetPassView.vue";

const authRoutes = [
  {
    path: "/SignUp",
    name: "SignUp",
    component: RegisterView,
    meta: { requireAuth: false },
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: LoginView,
    meta: { requireAuth: false },
  },
  {
    path: "/ForgotPassword",
    name: "ForgotPassword",
    component: ForgotView,
    meta: { requireAuth: false },
  },
  {
    path: "/ResetPassword/:token",
    name: "ResetPassword",
    component: ResetView,
    meta: { requireAuth: false },
  },
];

export default authRoutes;
