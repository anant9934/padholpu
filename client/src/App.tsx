import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import { Layout } from "@/components/layout";
import { ScrollToTop } from "@/components/ScrollToTop";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ForbiddenPage, UnauthorizedPage } from "@/components/ErrorPage";

import HomePage from "@/pages/home-page";
const AuthPage = lazy(() => import("@/pages/auth-page"));
const ResourcesPage = lazy(() => import("@/pages/resources-page"));
const UploadPage = lazy(() => import("@/pages/upload-page"));
const QuizzesPage = lazy(() => import("@/pages/quizzes-page"));
const QuizPage = lazy(() => import("@/pages/quiz-page"));
const QuizDetailPage = lazy(() => import("@/pages/quiz-detail-page"));
const QuizReviewPage = lazy(() => import("@/pages/quiz-review-page"));
const SubjectPage = lazy(() => import("@/pages/subject-page"));
const SubjectsDirectoryPage = lazy(() => import("@/pages/subjects-directory-page"));
const SemesterPage = lazy(() => import("@/pages/semester-page"));
const ProgrammesDirectoryPage = lazy(() => import("@/pages/programmes-directory-page"));
const ProgrammeDetailPage = lazy(() => import("@/pages/programme-detail-page"));
const ResourceDetailPage = lazy(() => import("@/pages/resource-detail-page"));
const AboutPage = lazy(() => import("@/pages/about-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const ExamGeneratorPage = lazy(() => import("@/pages/exam-generator-page"));
const ExamStartPage = lazy(() => import("@/pages/exam-start-page"));
const ExamResultPage = lazy(() => import("@/pages/exam-result-page"));
const LeaderboardPage = lazy(() => import("@/pages/leaderboard-page"));
const ProgressPage = lazy(() => import("@/pages/progress-page"));
const ProfileEditPage = lazy(() => import("@/pages/profile-edit-page"));
const UserProfilePage = lazy(() => import("@/pages/user-profile-page"));
const AdminLogin = lazy(() => import("@/pages/admin/Login"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const DisclaimerPage = lazy(() => import("@/pages/disclaimer"));
const PrivacyRequestsPage = lazy(() => import("@/pages/privacy-requests"));
const SupportTracker = lazy(() => import("@/pages/SupportTracker"));
const AdminSupport = lazy(() => import("@/pages/AdminSupport"));
const FlashcardsPage = lazy(() => import("@/pages/flashcards-page"));
const SubjectivePage = lazy(() => import("@/pages/subjective-page"));
const StudyPlannerPage = lazy(() => import("@/pages/study-planner-page"));
const WorkspacePage = lazy(() => import("@/pages/workspace-page"));
const ContributionsPage = lazy(() => import("@/pages/contributions-page"));
const StudyGroupsPage = lazy(() => import("@/pages/study-groups-page"));
const SubjectOverviewPage = lazy(() => import("@/pages/subject-overview-page"));
const UnitNotesPage = lazy(() => import("@/pages/unit-notes-page"));
const UnitMcqPage = lazy(() => import("@/pages/unit-mcq-page"));
const UnitSubjectivePage = lazy(() => import("@/pages/unit-subjective-page"));
const UnitFlashcardsPage = lazy(() => import("@/pages/unit-flashcards-page"));
const NotFound = lazy(() => import("@/pages/not-found"));
import { Loader2 } from "lucide-react";
import { PageSkeleton } from "@/components/ui/LoadingSkeleton";

function ProtectedRoute({ 
  component: Component, 
  allowedRoles 
}: { 
  component: React.ComponentType;
  allowedRoles?: string[];
}) {
  const { user, isLoading } = useAuth();
  const [location] = useLocation();

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (!user) {
    // Show proper 401 page with return-to URL so user is returned after login
    return <UnauthorizedPage returnPath={location} />;
  }

  if (allowedRoles && !(user.roles || []).some(role => allowedRoles.includes(role))) {
    // Show proper 403 page — never expose role/permission internals
    return <ForbiddenPage />;
  }

  return <Component />;
}

function Router() {
  const [location] = useLocation();

  return (
    <>
      <ScrollToTop />
      <div key={location} className="w-full animate-in fade-in duration-200">
        <Suspense fallback={<PageSkeleton />}>
            <Switch location={location}>
            <Route path="/auth" component={AuthPage} />
            <Route path="/auth/google">
              {() => {
                window.location.href = "/api/auth/google";
                return (
                  <div className="flex items-center justify-center min-h-screen">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                );
              }}
            </Route>
            <Route path="/demo-quiz">
              <Redirect to="/practice" />
            </Route>
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin/dashboard">
              <Layout>
                <ProtectedRoute 
                  component={AdminDashboard} 
                  allowedRoles={["ADMIN", "SUPER_ADMIN"]} 
                />
              </Layout>
            </Route>
            <Route path="/admin/support">
              <Layout>
                <ProtectedRoute 
                  component={AdminSupport} 
                  allowedRoles={["ADMIN", "SUPER_ADMIN"]} 
                />
              </Layout>
            </Route>
            
            {/* Wrap all main pages in Layout */}
            
            <Route path="/about">
              <Layout>
                <AboutPage />
              </Layout>
            </Route>

            <Route path="/contact">
              <Layout>
                <ContactPage />
              </Layout>
            </Route>


            <Route path="/support/track/:ticketId">
              <SupportTracker />
            </Route>

            <Route path="/privacy">
              <Layout>
                <PrivacyPolicy />
              </Layout>
            </Route>

            <Route path="/terms">
              <Layout>
                <TermsOfService />
              </Layout>
            </Route>

            <Route path="/cookie-policy">
              <Layout>
                <CookiePolicy />
              </Layout>
            </Route>

            <Route path="/disclaimer">
              <Layout>
                <DisclaimerPage />
              </Layout>
            </Route>

            <Route path="/privacy-requests">
              <Layout>
                <PrivacyRequestsPage />
              </Layout>
            </Route>

            <Route path="/privacy-policy">
              <Redirect to="/privacy" />
            </Route>

            <Route path="/terms-of-service">
              <Redirect to="/terms" />
            </Route>


            {/* Multidisciplinary Programmes Architecture */}
            <Route path="/programmes">
              <Layout>
                <ProgrammesDirectoryPage />
              </Layout>
            </Route>
            <Route path="/programmes/:code">
              <Layout>
                <ProgrammeDetailPage />
              </Layout>
            </Route>
            {/* Syllabus-Oriented Subject Learning System (Programmes Architecture) */}
            <Route path="/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/notes">
              <Layout>
                <UnitNotesPage />
              </Layout>
            </Route>
            <Route path="/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/mcqs">
              <Layout>
                <UnitMcqPage />
              </Layout>
            </Route>
            <Route path="/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/subjective">
              <Layout>
                <UnitSubjectivePage />
              </Layout>
            </Route>
            <Route path="/programmes/:programmeCode/semesters/:semester/:subjectCode/units/:unitNumber/flashcards">
              <Layout>
                <UnitFlashcardsPage />
              </Layout>
            </Route>
            <Route path="/programmes/:programmeCode/semesters/:semester/:subjectCode">
              <Layout>
                <SubjectOverviewPage />
              </Layout>
            </Route>

            <Route path="/programmes/:code/semesters/:semester">
              <Layout>
                <ProgrammeDetailPage />
              </Layout>
            </Route>
            <Route path="/programmes/:code/semester/:semester">
              <Layout>
                <ProgrammeDetailPage />
              </Layout>
            </Route>

            {/* LPU Semester Architecture */}
            <Route path="/semesters">
              <Layout>
                <SemesterPage />
              </Layout>
            </Route>
            <Route path="/semester/:id">
              <Layout>
                <SemesterPage />
              </Layout>
            </Route>

            {/* Syllabus-Oriented Learning System (Direct Subject Routes) */}
            <Route path="/subjects/:subjectCode/units/:unitNumber/notes">
              <Layout>
                <UnitNotesPage />
              </Layout>
            </Route>
            <Route path="/subjects/:subjectCode/units/:unitNumber/mcqs">
              <Layout>
                <UnitMcqPage />
              </Layout>
            </Route>
            <Route path="/subjects/:subjectCode/units/:unitNumber/subjective">
              <Layout>
                <UnitSubjectivePage />
              </Layout>
            </Route>
            <Route path="/subjects/:subjectCode/units/:unitNumber/flashcards">
              <Layout>
                <UnitFlashcardsPage />
              </Layout>
            </Route>
            <Route path="/subjects/AEE103">
              <Layout>
                <SubjectOverviewPage />
              </Layout>
            </Route>
            <Route path="/subjects/aee103">
              <Layout>
                <SubjectOverviewPage />
              </Layout>
            </Route>

            {/* Subject Hubs, Directories & Subroutes */}
            <Route path="/subjects/:code/units/:unitNumber">
              <Layout>
                <SubjectPage />
              </Layout>
            </Route>
            <Route path="/subjects/:code/notes">
              <Layout>
                <SubjectPage />
              </Layout>
            </Route>
            <Route path="/subjects/:code/quiz">
              <Layout>
                <SubjectPage />
              </Layout>
            </Route>
            <Route path="/subjects/:code/pyq">
              <Layout>
                <SubjectPage />
              </Layout>
            </Route>
            <Route path="/subjects/:code/syllabus">
              <Layout>
                <SubjectPage />
              </Layout>
            </Route>
            <Route path="/subjects/:code">
              <Layout>
                <SubjectPage />
              </Layout>
            </Route>
            <Route path="/subjects">
              <Layout>
                <SubjectsDirectoryPage />
              </Layout>
            </Route>

            {/* Core Academic Pillars: Resources & Deep Detail Pages */}
            <Route path="/library">
              <Redirect to="/learn" />
            </Route>
            <Route path="/notes">
              <Redirect to="/resources?type=Notes" />
            </Route>
            <Route path="/study-material">
              <Redirect to="/learn" />
            </Route>
            <Route path="/previous-year-papers">
              <Redirect to="/resources?type=Past+Paper" />
            </Route>
            <Route path="/pyq">
              <Redirect to="/resources?type=Past+Paper" />
            </Route>
            <Route path="/syllabus">
              <Redirect to="/subjects" />
            </Route>
            <Route path="/learn">
              <Layout>
                <ResourcesPage />
              </Layout>
            </Route>
            <Route path="/resources">
              <Layout>
                <ResourcesPage />
              </Layout>
            </Route>
            <Route path="/resources/:id">
              <Layout>
                <ResourceDetailPage />
              </Layout>
            </Route>
            
            <Route path="/practice">
              <Layout>
                <QuizzesPage />
              </Layout>
            </Route>
            <Route path="/quizzes">
              <Layout>
                <QuizzesPage />
              </Layout>
            </Route>
            
            {/* Public Quiz Landing (SEO Indexable, 0 answers leaked) */}
            <Route path="/quizzes/:id">
              <Layout>
                <QuizDetailPage />
              </Layout>
            </Route>

            {/* Active Quiz Session (Protected, Noindex, 0 ads) */}
            <Route path="/quiz/:id">
              <Layout>
                <ProtectedRoute component={QuizPage} />
              </Layout>
            </Route>

            <Route path="/quizzes/:id/review/:attemptId">
              <Layout>
                <ProtectedRoute component={QuizReviewPage} />
              </Layout>
            </Route>

            {/* Exam Assessment Hubs (Public Landing with login on simulation generation) */}
            <Route path="/exams">
              <Layout>
                <ExamGeneratorPage />
              </Layout>
            </Route>
            <Route path="/exams/midterm">
              <Layout>
                <ExamGeneratorPage />
              </Layout>
            </Route>
            <Route path="/exams/end-term">
              <Layout>
                <ExamGeneratorPage />
              </Layout>
            </Route>
            <Route path="/exams/ca">
              <Layout>
                <ExamGeneratorPage />
              </Layout>
            </Route>
            <Route path="/exam-generator">
              <Layout>
                <ExamGeneratorPage />
              </Layout>
            </Route>

            <Route path="/progress">
              <Layout>
                <ProtectedRoute component={ProgressPage} />
              </Layout>
            </Route>

            <Route path="/rankings">
              <Layout>
                <LeaderboardPage />
              </Layout>
            </Route>
            <Route path="/leaderboard">
              <Layout>
                <LeaderboardPage />
              </Layout>
            </Route>

            <Route path="/contribute">
              <Layout>
                <ProtectedRoute component={UploadPage} />
              </Layout>
            </Route>
            <Route path="/upload">
              <Layout>
                <ProtectedRoute component={UploadPage} />
              </Layout>
            </Route>

            <Route path="/exam/start/:id">
              <Layout>
                <ProtectedRoute component={ExamStartPage} />
              </Layout>
            </Route>

            <Route path="/exam/result/:id">
              <Layout>
                <ProtectedRoute component={ExamResultPage} />
              </Layout>
            </Route>

            {/* Padho LPU 2.0 Academic Ecosystem Routes */}
            <Route path="/flashcards">
              <Layout>
                <FlashcardsPage />
              </Layout>
            </Route>

            <Route path="/subjective">
              <Layout>
                <SubjectivePage />
              </Layout>
            </Route>

            <Route path="/study-planner">
              <Layout>
                <ProtectedRoute component={StudyPlannerPage} />
              </Layout>
            </Route>

            <Route path="/workspace">
              <Layout>
                <ProtectedRoute component={WorkspacePage} />
              </Layout>
            </Route>

            <Route path="/contributions">
              <Layout>
                <ProtectedRoute component={ContributionsPage} />
              </Layout>
            </Route>

            <Route path="/study-groups">
              <Layout>
                <ProtectedRoute component={StudyGroupsPage} />
              </Layout>
            </Route>

            {/* Legacy AI Route Redirects */}
            <Route path="/ai-exam-generator">
              <Redirect to="/exams" />
            </Route>
            <Route path="/ai-exam/:rest*">
              <Redirect to="/exams" />
            </Route>
            <Route path="/ai-tutor">
              <Redirect to="/learn" />
            </Route>
            <Route path="/qwen-ai">
              <Redirect to="/learn" />
            </Route>

            <Route path="/profile/edit">
              <Layout>
                <ProtectedRoute component={ProfileEditPage} />
              </Layout>
            </Route>

            <Route path="/user/:username">
              <Layout>
                <ProtectedRoute component={UserProfilePage} />
              </Layout>
            </Route>

            <Route path="/">
              <Layout>
                <HomePage />
              </Layout>
            </Route>

            <Route>
              <Layout>
                <NotFound />
              </Layout>
            </Route>
            </Switch>
          </Suspense>
        </div>
    </>
  );
}

function App() {
  // Clean up lingering OAuth parameters (e.g. Google OAuth ?code=...&iss=...) from the browser URL
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.search) return;
    try {
      const params = new URLSearchParams(window.location.search);
      const oauthParams = ["code", "iss", "state", "scope", "authuser", "prompt", "session_state"];
      let modified = false;
      for (const param of oauthParams) {
        if (params.has(param)) {
          params.delete(param);
          modified = true;
        }
      }
      if (modified) {
        const cleanSearch = params.toString();
        const newUrl = window.location.pathname + (cleanSearch ? `?${cleanSearch}` : "") + window.location.hash;
        window.history.replaceState({}, document.title, newUrl);
      }
    } catch {
      // Gracefully ignore in non-browser environments
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
