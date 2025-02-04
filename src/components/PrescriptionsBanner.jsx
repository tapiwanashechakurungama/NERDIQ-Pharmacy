export const PrescriptionsBanner = () => {
  return (
    <section
      className="relative md:h-[60vh] h-[50vh] bg-fixed bg-center bg-cover md:pt-10"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/pharmacist-prescription-stock-photo-ar-21-style-raw-job-id-1e6d848295004f1abed6b4082efcf218_997534-20370.jpg?w=1380')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center  h-full  text-white p-6">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">Prescriptions</h1>
          <p className="text-lg md:text-xl mb-6">
            Welcome to our Prescriptions Page, your trusted resource for
            managing your medication needs at Nerdiq Pharmacy. We understand
            that each patient's <br /> health journey is unique, which is why we
            offer personalized prescription services designed to ensure you
            receive the best possible care
          </p>
        </div>
      </div>
    </section>
  );
};
