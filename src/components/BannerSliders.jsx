import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export const BannerSliders = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <div className="relative w-full  bg-black bg-opacity-50">
          <CImage
            className="d-block w-100 h-auto"
            src="https://img.freepik.com/free-photo/portrait-woman-working-pharmaceutical-industry_23-2151684893.jpg?t=st=1739266909~exp=1739270509~hmac=9892d46d37ba222a477d181e5d6bb097d9bfbdd75efc335526bd05375d862c02&w=1380"
            alt="slide 1"
          />
          <CCarouselCaption className="absolute inset-0 flex items-center justify-center text-white">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h2 className="text-3xl font-bold mb-2">
                Welcome to NerdIQ Pharmacy
              </h2>
              <p className="text-lg text-center">
                Your trusted partner in health and wellness! We provide
                comprehensive pharmacy services tailored to your needs.
              </p>
            </div>
          </CCarouselCaption>
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="relative w-full bg-black bg-opacity-60">
          <CImage
            className="d-block w-100 h-auto"
            src="https://img.freepik.com/free-photo/medical-specialist-consulting-patient-with-disease-while-wearing-face-mask-annual-checkup-visit-young-person-receiving-consultation-from-doctor-healthcare-covid-19-epidemic_482257-38455.jpg?t=st=1739267012~exp=1739270612~hmac=f024b352402fbbe0f59e8881c3ef825ab6335fb26894f8a951bdb9db7797dbee&w=1380"
            alt="slide 2"
          />
          <CCarouselCaption className="absolute inset-0 flex items-center justify-center text-white ">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h2 className="text-3xl font-bold mb-2">
                We Value Your Time & Health
              </h2>
              <p className="text-lg text-center">
                Our dedicated team ensures fast and efficient service for all
                your pharmacy needs.
              </p>
            </div>
          </CCarouselCaption>
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="relative w-full  bg-black bg-opacity-60">
          <CImage
            className="d-block w-100 h-auto"
            src="https://i.pinimg.com/736x/2e/d9/3e/2ed93e669a5f89b10df01a5e0669e655.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className="absolute inset-0 flex items-center justify-center text-white">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h2 className="text-3xl font-bold mb-2">
                Reliable Prescription Services
              </h2>
              <p className="text-lg text-center">
                Our experienced pharmacists ensure accuracy and safety in every
                prescription.
              </p>
            </div>
          </CCarouselCaption>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};
