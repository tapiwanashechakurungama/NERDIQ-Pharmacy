export const ProductsBanner = () => {
  return (
    <section
      className="relative md:h-[60vh] h-[50vh] bg-fixed bg-center bg-cover md:pt-10"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/medical-bottles-pills-shelf_392895-115436.jpg?w=1060')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center  h-full  text-white p-6">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">Products</h1>
          <p className="text-lg md:text-xl mb-6">
            Welcome to our Products Page, where health meets quality! At Nerdiq
            Pharmacy, we pride ourselves on offering <br/> a wide range of premium
            pharmacy products designed to support your health and well-being
          </p>
        </div>
      </div>
    </section>
  );
};
