import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsBanner } from './components/HighlightsBanner';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { ProgramsSection } from './components/ProgramsSection';
import { ClassSchedule } from './components/ClassSchedule';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BmiCalculator } from './components/BmiCalculator';
import { MembershipPlans } from './components/MembershipPlans';
import { ReviewsSection } from './components/ReviewsSection';
import { FreeTrialForm } from './components/FreeTrialForm';
import { LocationHours } from './components/LocationHours';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const handleOpenTrialModal = () => {
    setTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-stone-100 flex flex-col selection:bg-[#ccff00] selection:text-black">
      {/* Navigation Bar */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Page Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero onOpenTrialModal={handleOpenTrialModal} />

        {/* Feature Highlights Banner */}
        <HighlightsBanner />

        {/* Facilities & Zones (Rooftop CrossFit, Aesthetic Cardio, Strength, Studio) */}
        <FacilitiesShowcase onOpenTrialModal={handleOpenTrialModal} />

        {/* Programs & Classes */}
        <ProgramsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* Weekly Timetable & Batches */}
        <ClassSchedule onOpenTrialModal={handleOpenTrialModal} />

        {/* Why Choose Us / Culture & Hygiene */}
        <WhyChooseUs />

        {/* Interactive BMI & Daily Protocol Calculator */}
        <BmiCalculator onOpenTrialModal={handleOpenTrialModal} />

        {/* Membership Plans & Pricing */}
        <MembershipPlans onOpenTrialModal={handleOpenTrialModal} />

        {/* Member Reviews & 4.7★ Rating */}
        <ReviewsSection />

        {/* Interactive Free Trial Pass Generator */}
        <FreeTrialForm />

        {/* Location, Contact & Interactive Maps */}
        <LocationHours />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Quick Trial Pass */}
      <TrialModal isOpen={trialModalOpen} onClose={handleCloseTrialModal} />

      {/* Mobile Bottom Conversion Floating Bar */}
      <MobileActionBar onOpenTrialModal={handleOpenTrialModal} />
    </div>
  );
}
