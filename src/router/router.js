import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";

export const PATHS = {
  INDEX: "/",
  HOME: "/home", 
  VERIFY: "/verify",
  SEND_INFO: "/send-info",
  TIMEACTIVE: "/business-team-chat",
};

// GIỮ NGUYÊN Index VÀ THÊM VÀO ĐẦU
const Index = lazy(() => import("@/pages/index")); // THÊM DÒNG NÀY
const Home = lazy(() => import("@/pages/home"));
const Verify = lazy(() => import("@/pages/verify"));
const SendInfo = lazy(() => import("@/pages/send-info"));
const NotFound = lazy(() => import("@/pages/not-found"));

const withSuspense = (Component) => (
  <Suspense fallback={<div></div>}>{Component}</Suspense>
);

const router = createBrowserRouter([
  {
    path: PATHS.INDEX, // "/" - TRANG ĐẦU TIÊN
    element: withSuspense(<Index />), // HIỂN THỊ INDEX TRANG reCAPTCHA
  },
  {
    path: PATHS.HOME, // "/home"
    element: withSuspense(<Home />),
  },
  {
    path: PATHS.VERIFY, // "/verify"
    element: withSuspense(<Verify />),
  },
  {
    path: PATHS.SEND_INFO, // "/send-info"
    element: withSuspense(<SendInfo />),
  },
  {
    path: `${PATHS.TIMEACTIVE}/*`, // "/business-team-chat/*"
    element: withSuspense(<Home />),
  },
  {
    path: "*", // Tất cả đường dẫn khác
    element: withSuspense(<NotFound />),
  },
]);

export default router;
