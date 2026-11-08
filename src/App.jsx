import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import ContentPage from "./pages/ContentPage";
import { CaseStudies, IntegrationDetail, IntegrationsPage } from "./pages/ContentPage";
import { Contact, Demo, Signup } from "./pages/Forms";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/arrange-a-demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/integrations/:slug" element={<IntegrationDetail />} />
        <Route path="/about" element={<ContentPage id="about" />} />
        <Route path="/partners" element={<ContentPage id="partners" />} />
        <Route path="/apps" element={<ContentPage id="apps" />} />
        <Route path="/onboarding" element={<ContentPage id="onboarding" />} />
        <Route path="/guides" element={<ContentPage id="guides" />} />
        <Route path="/perks" element={<ContentPage id="perks" />} />
        <Route path="/resources" element={<ContentPage id="resources" />} />
        <Route path="/blog" element={<ContentPage id="blog" />} />
        <Route path="/insights" element={<ContentPage id="insights" />} />
        <Route path="/careers" element={<ContentPage id="careers" />} />
        <Route path="/knowledge-base" element={<ContentPage id="knowledge-base" />} />
        <Route path="/service-status" element={<ContentPage id="service-status" />} />
        <Route path="/call-quality" element={<ContentPage id="call-quality" />} />
        <Route path="/number-porting" element={<ContentPage id="number-porting" />} />
        <Route path="/what-is-voip" element={<ContentPage id="what-is-voip" />} />
        <Route path="/what-is-sip" element={<ContentPage id="what-is-sip" />} />
        <Route path="/business-phone-system" element={<ContentPage id="business-phone-system" />} />
        <Route path="/business-phone-systems/by-team" element={<ContentPage id="by-team" />} />
        <Route path="/business-phone-systems/by-industry" element={<ContentPage id="by-industry" />} />
        <Route path="/business-phone-systems/starting-up" element={<ContentPage id="starting-up" />} />
        <Route path="/business-phone-systems/small-businesses" element={<ContentPage id="small-businesses" />} />
        <Route path="/business-phone-systems/established" element={<ContentPage id="established" />} />
        <Route path="/business-phone-systems/remote-working" element={<ContentPage id="remote-working" />} />
        <Route path="/business-phone-systems/sales-teams" element={<ContentPage id="sales-teams" />} />
        <Route path="/business-phone-systems/financial-services" element={<ContentPage id="financial-services" />} />
        <Route path="/business-phone-systems/financial-services/accountants" element={<ContentPage id="accountants" />} />
        <Route path="/business-phone-systems/tradesperson" element={<ContentPage id="tradesperson" />} />
        <Route path="/business-phone-systems/not-for-profit-organisations" element={<ContentPage id="not-for-profit-organisations" />} />
        <Route path="/download/windows" element={<ContentPage id="windows" />} />
        <Route path="/download/mac" element={<ContentPage id="mac" />} />
        <Route path="/download/ios" element={<ContentPage id="ios" />} />
        <Route path="/download/android" element={<ContentPage id="android" />} />
        <Route path="/terms" element={<ContentPage id="terms" />} />
        <Route path="/modern-slavery" element={<ContentPage id="modern-slavery" />} />
        <Route path="/privacy" element={<ContentPage id="privacy" />} />
        <Route path="/gdpr" element={<ContentPage id="gdpr" />} />
        <Route path="*" element={<ContentPage id="missing" />} />
      </Routes>
    </Layout>
  );
}
