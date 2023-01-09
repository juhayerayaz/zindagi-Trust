import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import FinancialPage from "./pages/aboutUsPage/FinancialPage";
import LeadershipPage from "./pages/aboutUsPage/LeadershipPage";
import OurStoryPage from "./pages/aboutUsPage/OurStoryPage";
import CareerPage from "./pages/careerPage/CareerPage";
import ContactOfficePage from "./pages/contactOfficePage/ContactOfficePage";
import OurChaptersPage from "./pages/contactUsPage/OurChaptersPage";
import OurOfficePage from "./pages/contactUsPage/OurOfficePage";
import HomePage from "./pages/HomePage";
import AcademicsPage from "./pages/impactPage/AcademicsPage";
import ACRToPERPage from "./pages/impactPage/ACRToPERPage";
import GovernancePage from "./pages/impactPage/governancePage/GovernancePage";
import InfrastructurePage from "./pages/impactPage/InfrastructurePage";
import NewProgramsPage from "./pages/impactPage/NewProgramsPage";
import PolicyPagePage from "./pages/impactPage/PolicyPagePage";
import AKhatoonEPakistanPage from "./pages/ourSchoolsPage/AKhatoonEPakistanPage";
import SMBFatimaJinnahPage from "./pages/ourSchoolsPage/SMBFatimaJinnahPage";
import AdvocacyPage from "./pages/ourWorkPage/AdvocacyPage";
import PastProjectsPage from "./pages/ourWorkPage/PastProjectsPage";
import SchoolReformPage from "./pages/ourWorkPage/SchoolReformPage";
import AisaPakistanPage from "./pages/theLatestPage/AisaPakistanPage";
import AReviewOf2019Page from "./pages/theLatestPage/AReviewOf2019Page";
import AReviewOf2020Page from "./pages/theLatestPage/AReviewOf2020Page";
import AReviewOf2021Page from "./pages/theLatestPage/AReviewOf2021Page";
import NewsAndEventsPage from "./pages/theLatestPage/NewsAndEventsPage";
import OurCOVID19ResponsePage from "./pages/theLatestPage/OurCOVID19ResponsePage";
import VolunteerProgramPage from "./pages/VolunteerPage/VolunteerProgramPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route element={<FinancialPage />}></Route>
      <Route path="/about-us/leadership" element={<LeadershipPage />}></Route>
      <Route path="/about-us/ourstory" element={<OurStoryPage />}></Route>
      <Route element={<OurChaptersPage />}></Route>
      <Route element={<OurOfficePage />}></Route>
      <Route path="/akhatoonpakistan" element={<AKhatoonEPakistanPage />}></Route>
      <Route path="/fatimajinnah" element={<SMBFatimaJinnahPage />}></Route>
      <Route element={<AcademicsPage />}></Route>
      <Route path="/acrt-to-per-page" element={<ACRToPERPage />}></Route>
      <Route path="/governance" element={<GovernancePage />}></Route>
      <Route path="/infrastructure" element={<InfrastructurePage />}></Route>
      <Route element={<NewProgramsPage />}></Route>
      <Route element={<PolicyPagePage />}></Route>
      <Route path="/our-work/advocacy" element={<AdvocacyPage />}></Route>
      <Route element={<PastProjectsPage />}></Route>
      <Route
        path="/our-work/school-reform"
        element={<SchoolReformPage />}
      ></Route>
      <Route path="/AisaPakistan" element={<AisaPakistanPage />}></Route>
      <Route path="/a-review-of-2021" element={<AReviewOf2021Page />}></Route>
      <Route path="/a-review-of-2020" element={<AReviewOf2020Page />}></Route>
      <Route path="/a-review-of-2019" element={<AReviewOf2019Page />}></Route>
      <Route path="/news-events" element={<NewsAndEventsPage />}></Route>
      <Route path="/our-covid-19-response" element={<OurCOVID19ResponsePage />}></Route>
      <Route
        path="/volunteer-program"
        element={<VolunteerProgramPage />}
      ></Route>
      <Route
        path="/career"
        element={<CareerPage />}
      ></Route>
      <Route
        path="/contact/our-office"
        element={<ContactOfficePage />}
      ></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
