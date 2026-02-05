"use client";
import React from "react";
import shopifyBanner from "@/assets/Images/Group-105527.webp";
import Group105518 from "@/assets/Images/Group-105518.webp";
import service1 from "@/assets/Images/services1.webp";
import service2 from "@/assets/Images/services2.webp";
import service3 from "@/assets/Images/services3.webp";
import service4 from "@/assets/Images/services4.webp";
import service5 from "@/assets/Images/services5.webp";
import service6 from "@/assets/Images/services6.webp";
import HeroServices from "@/components/HeroServices/HeroServices";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import KeyPointSection from "@/components/KeyPointSection/KeyPointSection";
import Experience from "@/components/Experience/Experience";
import Process from "@/components/ProcessSection/Process";
import AppImages from "@/config/constant/app.images";
import Industry from "@/components/Industry/Industry";
import ServicesCaseStudy from "@/components/ServicesCaseStudy/ServicesCaseStudy";
import Magento_service_card from "@/components/Magento_service_card/Magento_service_card";

const Shopifydev = () => {
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Technology"}
          pageName={"Shopify Development"}
          pageHeading={"Leading Shopify Development Agency in Singapore"}
          pagePara={
            "We engineer high-converting Shopify stores that combine world-class design with localized e-commerce strategies to scale your brand across the region."
          }
          pageImg={shopifyBanner}
          pageAlt={"Website Designing Company in Singapore"}
        />

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>Comprehensive Shopify Solutions</h2>
              <p>Tailored strategies to elevate your digital storefront.</p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="Magento Website Development Singapore"
                    cardHeading="Custom Shopify Development"
                    cardPara="We build bespoke, scalable stores optimized for the unique shopping behaviors of the Singaporean market."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="Magento Web Design Singapore"
                    cardHeading="Theme Architecture"
                    cardPara="Creating high-fidelity, mobile-first themes that ensure a seamless user journey from discovery to checkout."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="Custom Magento Development Singapore"
                    cardHeading="App Ecosystems"
                    cardPara="Custom app development and integration with local logistics like NinjaVan and payment gateways like PayNow."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service5}
                    altText="Commerce website development Singapore"
                    cardHeading="Seamless Migration"
                    cardPara="Risk-free data migration from platforms like Magento or WooCommerce with zero impact on your SEO."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service4}
                    altText="Magento Web development provider in Singapore"
                    cardHeading="Headless Commerce"
                    cardPara="Implementing fast, flexible headless architectures to provide app-like speeds on mobile browsers."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service6}
                    altText="Magento Website comapny in Singapore"
                    cardHeading="Store Configuration"
                    cardPara="Expert setup of shipping rules, GST compliance, and backend workflows for operational excellence."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Revolutionize Your Retail Experience
            </>
          }
          keyPara={
            <>
              Leverage our specialized Shopify expertise to transform your online presence into a high-performance sales engine.
            </>
          }
          keyPoint1="Optimized Checkout Flows: Reducing friction to maximize conversion rates."
          keyPoint2="Cross-Channel Integration: Syncing your store with marketplaces like Shopee and Lazada."
          keyPoint3="Robust Data Protection: Ensuring full compliance with Singapore’s PDPA standards."
          keyPoint4="24/7 Strategic Support: Proactive maintenance to keep your business running smoothly."
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Consult Our Architects"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development Singapore",
          }}
        />

        <Experience
          expTitle={<>Why Partner with Layerex??</>}
          ExpPara={
            <>
              Delivering market-ready Shopify products that drive real business value.
            </>
          }
          point1="Proven Mastery"
          pointPara1={
            <>
              Deep technical expertise in Shopify Plus and advanced Liquid programming.
            </>
          }
          point2="Client-First Focus"
          pointPara2={
            <>
              Personalized development journeys designed to hit your specific 2026 growth targets.
            </>
          }
          point3="Quality Assurance"
          pointPara3={
            <>
              Rigorous testing protocols ensuring a flawless, high-performance shopping experience.
            </>
          }
          point4="Direct Communication"
          pointPara4={
            <>
              Transparent, local support that keeps you informed at every stage of the project.
            </>
          }
          altTags={{
            group1: "mobile app development company",
            group2: "android app development company",
            group3: "mobile app development companies in Singapore",
            group4: "best app development company",
            mockups: "e commerce app development services",
            whiteLogo: "android application development services",
          }}
        />

        <Process
          heading="Our Mission: Empowering Singaporean Brands to Lead"
          para="At Layerex, we are dedicated to bridging the gap between sophisticated technology and seamless retail. Our mission is to provide local businesses with the agile Shopify tools they need to achieve sustainable, global-scale growth."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in mohali"
          col1head="Strategy"
          col1para="Defining your niche and optimizing for the local retail landscape."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="UX Design"
          col2para="Designing intuitive, high-conversion interfaces for the modern shopper."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Development"
          col3para="Building your store with clean, scalable code and high-value integrations."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Optimization"
          col4para="Fine-tuning speed and performance to pass all Core Web Vitals."
          col5Img={AppImages.processImg.test}
          col5Alt="Support & Maintenance"
          col5head="QA & Launch"
          col5para="Exhaustive cross-device testing to ensure a perfect launch day."
        />

        {/* <ServicesCaseStudy /> */}

        {/* <Industry /> */}
      </main>
    </>
  );
};

export default Shopifydev;
