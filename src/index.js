import { lazy } from "react";

const AboutUs = lazy(() => import("./pages/aboutUs/AboutUs"));
const OurServices = lazy(() => import("./pages/ourServices/sections/OurServices"));
const OurTrackingDevices = lazy(() => import("./pages/ourTrackingDevices/sections/OurTrackingDevicesSection"))
const OurClients = lazy(() => import("./pages/ourClients/OurClients"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const Error400 = lazy(() => import("./pages/errorPages/Error400"));
const Error403 = lazy(() => import("./pages/errorPages/Error403"));
const Error404 = lazy(() => import("./pages/errorPages/Error404"));
const Error500 = lazy(() => import("./pages/errorPages/Error500"));
const ErrorBoundary = lazy(() => import("./pages/errorPages/ErrorBoundary"));

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const Layout = lazy(() => import("./pages/Layout"));

export {
  AboutUs,
  OurServices,
  OurTrackingDevices,
  OurClients,
  ContactUs,
  Error400,
  Error403,
  Error404,
  Error500,
  ErrorBoundary,
  LandingPage,
  Layout
};
