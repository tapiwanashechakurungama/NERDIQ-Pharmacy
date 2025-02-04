


export const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin C Supplement",
      price: "$19.99",
      image:
        "https://img.freepik.com/free-photo/assortment-with-citrus-slices-black-background_23-2148427755.jpg?t=st=1738588310~exp=1738591910~hmac=8c4215c5951dd0823f4152d329d9c63abdc3162d3fc14bb0612d1e0b89c59c27&w=1060",
    },
    {
      id: 2,
      name: "Multivitamins",
      price: "$24.99",
      image:
        "https://img.freepik.com/premium-photo/vitamins-minerals-orange-3d-rendering_808337-7850.jpg?w=1060",
    },
    {
      id: 3,
      name: "Omega-3 Fish Oil",
      price: "$29.99",
      image:
        "https://img.freepik.com/free-photo/pills-white_144627-15774.jpg?t=st=1738588511~exp=1738592111~hmac=d8e377fa214e78e9f67f18c2bda940e1d736bd1791bad3685fa2157540ad9eee&w=1060",
    },
    {
      id: 4,
      name: "Probiotic Capsules",
      price: "$22.99",
      image:
        "https://img.freepik.com/free-photo/pharmacy-pills-medicine-healthy-close-up-capsules_1391-108.jpg?t=st=1738588549~exp=1738592149~hmac=a9f9f07d81bc7d03eba2146e709c0ae036e336e67cf609438d1d601ad96ecb28&w=1060",
    },
    {
      id: 5,
      name: "Calcium Tablets",
      price: "$15.99",
      image:
        "https://img.freepik.com/premium-photo/pills-are-scattered-table-tablets-green-background-medicinal-tablets-capsules_426900-734.jpg?w=1380",
    },
    {
      id: 6,
      name: "Herbal Tea Blend",
      price: "$12.99",
      image:
        "https://img.freepik.com/free-photo/cup-tea-with-herbs_114579-19991.jpg?t=st=1738588613~exp=1738592213~hmac=d5bc99993e86fd1ee9ad3d3527cc9c0a788d445c3118d67fc647207432674ebc&w=1060",
    },
  ];
  return (
    <section className="py-16 bg-gray-100 cursor-grab">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="overflow-x-auto scrollbar-hide p-5">
          <div className="flex space-x-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-4 min-w-[300px] transition-transform transform "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 bg-gray-800 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
};
