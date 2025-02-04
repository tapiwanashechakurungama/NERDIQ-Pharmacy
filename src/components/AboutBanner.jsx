export const AboutBanner = () => {
  return (
    <section
      className="relative md:h-[60vh] h-[50vh] bg-fixed bg-center bg-cover md:pt-10"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/smiling-african-american-pharmacist-checking-drugs-shelves-pharmacy-helping-clients-with-medicine-holding-pills-bottles-boxes-vitamins-working-drugstore-desk-handheld-shot_482257-52431.jpg?w=1380')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center  h-full  text-white p-6">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
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
 