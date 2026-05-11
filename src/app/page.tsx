"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';
import { Bell, CheckCircle, Sparkles, Star, Utensils, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Rooms",
          id: "features",
        },
        {
          name: "Dining",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Burj Al Arab"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "sparkles-gradient",
      }}
      title="The World's Most Iconic Hotel"
      description="Experience the pinnacle of luxury, service, and architectural brilliance at Jumeirah Burj Al Arab."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-business-man-texting-smartphone-cafe_1262-3308.jpg",
          alt: "happy guest hotel portrait luxury",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-man-with-glasses-bed-near-food-breakfast-table_23-2148007293.jpg",
          alt: "smiling luxury traveler interior portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-beautiful-woman-dressed-elegant-blue-suit-sitting-cafe-sunny-autumn-day_285396-7922.jpg",
          alt: "traveler portrait hotel lobby luxury",
        },
        {
          src: "http://img.b2bpic.net/free-photo/restful-man_1098-13866.jpg",
          alt: "happy guest portrait hotel balcony",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-luxury-hotel_641386-198.jpg",
          alt: "portrait of a young woman in a luxury hotel",
        },
      ]}
      avatarText="Join our elite circle of guests"
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "7-Star Luxury",
          icon: Star,
        },
        {
          type: "text-icon",
          text: "Private Butler",
          icon: Bell,
        },
        {
          type: "text-icon",
          text: "World-Class Dining",
          icon: Utensils,
        },
        {
          type: "text-icon",
          text: "Seafront Views",
          icon: Waves,
        },
        {
          type: "text-icon",
          text: "Exclusive Spa",
          icon: Sparkles,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="A Legacy of Opulence"
      buttons={[
        {
          text: "Our Story",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Royal Suite",
          description: "Experience unparalleled grandeur with private elevator access and 24-hour butler service.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/wooden-sauna-with-mountain-view-panoramic-calm_169016-70823.jpg",
            imageAlt: "luxury hotel suite panoramic ocean view",
          },
          items: [
            {
              icon: CheckCircle,
              text: "Private Elevator",
            },
            {
              icon: CheckCircle,
              text: "Butler Service",
            },
            {
              icon: CheckCircle,
              text: "Sea View",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/yokohama-boat-bay-harbor-tourist_1203-6180.jpg",
          imageAlt: "luxury hotel suite panoramic ocean view",
        },
        {
          title: "Panorama Suite",
          description: "Floor-to-ceiling windows offering mesmerizing vistas of the Arabian Gulf.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/bedroom-interior-lighting-luxury-home_1203-4564.jpg",
            imageAlt: "modern luxury bedroom hotel interior",
          },
          items: [
            {
              icon: CheckCircle,
              text: "Panoramic Views",
            },
            {
              icon: CheckCircle,
              text: "Luxury Amenities",
            },
            {
              icon: CheckCircle,
              text: "King-size Bed",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-timber-house-interior-with-wooden-decor-furnishings_23-2151263633.jpg",
          imageAlt: "luxury hotel suite panoramic ocean view",
        },
        {
          title: "Deluxe Marina",
          description: "Sophisticated living areas complemented by state-of-the-art technology.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/bathrobe-modern-bathtub_1203-1498.jpg",
            imageAlt: "lavish bathroom hotel marble gold",
          },
          items: [
            {
              icon: CheckCircle,
              text: "High-tech Systems",
            },
            {
              icon: CheckCircle,
              text: "Spacious Living",
            },
            {
              icon: CheckCircle,
              text: "Refined Decor",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/wine-glass_1203-3448.jpg",
          imageAlt: "luxury hotel suite panoramic ocean view",
        },
      ]}
      title="Unrivaled Comfort"
      description="Discover our collection of spacious suites designed for the ultimate luxury living."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Al Muntaha",
          price: "Fine Dining",
          imageSrc: "http://img.b2bpic.net/free-photo/wine-glass_1203-3448.jpg",
        },
        {
          id: "2",
          name: "Nathan Outlaw",
          price: "Seafood",
          imageSrc: "http://img.b2bpic.net/free-photo/beverage-topped-with-fried-orange-slice_141793-1126.jpg",
        },
        {
          id: "3",
          name: "Sahn Eddar",
          price: "Afternoon Tea",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-friends-having-lunch-luxury-restaurant_23-2151081460.jpg",
        },
        {
          id: "4",
          name: "Juna Lounge",
          price: "Cocktails",
          imageSrc: "http://img.b2bpic.net/free-photo/virtual-love-cute-blonde-girl-red-dress-distance-date-with-wine-phone_140725-163962.jpg",
        },
        {
          id: "5",
          name: "Bab Al Yam",
          price: "International",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-glass-wine_140725-4323.jpg",
        },
        {
          id: "6",
          name: "Culinary Journey",
          price: "Set Menu",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-shot-chef-plating-dish_23-2148794098.jpg",
        },
      ]}
      title="Gourmet Dining Experiences"
      description="Savor world-class culinary delights crafted by our master chefs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          handle: "@sarahm",
          testimonial: "An absolutely perfect experience, from check-in to checkout.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-home-doing-her-beauty-routine_23-2150420952.jpg",
        },
        {
          id: "2",
          name: "James Chen",
          handle: "@jchen",
          testimonial: "The service is unparalleled. Truly a world-class hotel.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-hotel_1157-18568.jpg",
        },
        {
          id: "3",
          name: "Elena Rossi",
          handle: "@elena",
          testimonial: "Breathtaking views and impeccable attention to detail.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-coffee-cup_23-2149429376.jpg",
        },
        {
          id: "4",
          name: "Mark Wilson",
          handle: "@mwilson",
          testimonial: "Every moment spent here was pure luxury.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-female-model-posing-sea-city-background_8353-12054.jpg",
        },
        {
          id: "5",
          name: "Sofia Khan",
          handle: "@sofia",
          testimonial: "A dream destination. Can't wait to come back again.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-people-getting-their-kite-up_23-2149233234.jpg",
        },
      ]}
      title="Guest Voices"
      description="What our distinguished guests have to say about their stay."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "7",
          title: "Star Rating",
          items: [
            "The ultimate standard",
          ],
        },
        {
          id: "2",
          value: "202",
          title: "Luxury Suites",
          items: [
            "Exclusively designed",
          ],
        },
        {
          id: "3",
          value: "100%",
          title: "Guest Satisfaction",
          items: [
            "Committed to excellence",
          ],
        },
      ]}
      title="Hotel Achievements"
      description="A glimpse into the standards we uphold."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How do I make a reservation?",
          content: "Book directly through our website for exclusive rates.",
        },
        {
          id: "2",
          title: "Are there dining packages available?",
          content: "Yes, we offer various dining packages for our guests.",
        },
        {
          id: "3",
          title: "Is there a dress code?",
          content: "Smart elegant attire is appreciated in our restaurants.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Plan Your Escape"
      title="Ready to Experience Burj Al Arab?"
      description="Contact our reservations team today to secure your suite."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Jumeirah Burj Al Arab"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Rooms",
              href: "#features",
            },
            {
              label: "Dining",
              href: "#products",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
