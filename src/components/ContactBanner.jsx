export const ContactBanner = () => {
  return (
    <section
      className="relative md:h-[60vh] h-[50vh] bg-fixed bg-center bg-cover md:pt-10"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/african-woman-sitting-computer-science-class-lady-with-glasses-female-student-sitting-computer_1157-42317.jpg?t=st=1738660870~exp=1738664470~hmac=29632bed87554726d4482f081bac3eea184a9a2568aa4cb7bddb784c66972d2b&w=1060')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center  h-full  text-white p-6">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">ContactUs</h1>
          <p className="text-lg md:text-xl mb-6">
            Your trusted partner in health and wellness. At Nerdiq Pharmacy, we
            are committed to providing <br /> personalized care and quality
            medications to help you live your best life.
          </p>
        </div>
      </div>
    </section>
  );
};
