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
            src="https://img.freepik.com/free-photo/young-african-american-woman-wearing-doctor-uniform-holding-tuning-fork-relaxed-with-serious-expression-face-simple-natural-looking-camera_839833-14811.jpg?t=st=1738578071~exp=1738581671~hmac=98dde21d8f031fa97c82339d31d9044fbb26bb5c74af2ff52ed7c0c81ee883e2&w=1060"
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
            src="https://img.freepik.com/free-photo/african-american-woman-pharmacist-standing-with-serious-expression-pharmacy_839833-20088.jpg?t=st=1738578122~exp=1738581722~hmac=c8af4e4330b06e3e65a282c2f8ef6531485b830420d572eb7fd44b1860bff27a&w=1060"
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
            src="https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25532.jpg?t=st=1738578150~exp=1738581750~hmac=155b4a067ab4ee6ecc3c7f4b4f689146e421a79db3aae2570778e9492708cab9&w=1060"
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
