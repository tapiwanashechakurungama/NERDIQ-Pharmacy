import { useState } from "react";

const productsData = {
  painRelievers: [
    {
      id: 1,
      name: "Ibuprofen",
      image:
        "https://img.freepik.com/free-photo/pills-out-from-bottle_144627-33887.jpg?t=st=1738659055~exp=1738662655~hmac=b7cb4206e6c7de70fa9f8e784f4e68d42537158c33c6a5450d638ca810d4a6c0&w=1060",
      description: "Pain reliever and anti-inflammatory.",
      price: "$9.99",
    },
    {
      id: 2,
      name: "Acetaminophen",
      image:
        "https://img.freepik.com/free-photo/close-up-african-american-hand-with-bottle-pills_482257-21310.jpg?t=st=1738659019~exp=1738662619~hmac=53bac3465107897569e61de4030d250cf58694cbed5117f82fafbc6d18b86e13&w=1060",
      description: "Effective pain relief for headaches and more.",
      price: "$7.99",
    },
    {
      id: 3,
      name: "Aspirin",
      image:
        "https://img.freepik.com/free-vector/effervescent-pills-falling-water-vector-realistic-illustration-fizzy-round-tablets-underwater-view-with-bubbles-painkiller-medicine-dissolving-liquid-soluble-medication-disease-treatment_107791-23522.jpg?t=st=1738658980~exp=1738662580~hmac=869adf7cce408671b07f8ea5f830484f52257b4243da2fc0918d9f4039bdaf53&w=1380",
      description: "Relieves pain, reduces fever, and inflammation.",
      price: "$5.99",
    },
  ],
  supplements: [
    {
      id: 4,
      name: "Vitamin C",
      image:
        "https://img.freepik.com/free-vector/effervescent-soluble-tablet-with-vitamin-c-glass-water-container-vector-realistic-banner-fizzy-pill-dissolving-medicine-drug-with-orange-flavour_107791-4171.jpg?t=st=1738658743~exp=1738662343~hmac=2fb1abfe6500f0e2c1a63e30fead7a0454b5c6c01314cba0ff9bd7c1f6d2b011&w=1380",
      description: "Supports immune health.",
      price: "$19.99",
    },
    {
      id: 5,
      name: "Omega-3 Fish Oil",
      image:
        "https://img.freepik.com/free-vector/two-shiny-capsules-with-natural-extract-fish-oil-skin_1268-16100.jpg?t=st=1738658785~exp=1738662385~hmac=dd86eea8232b72230abaacbb0ed9e0b6b6d2cdbe4a4e1bfbd2283faabe0742ae&w=1060",
      description: "Promotes heart health.",
      price: "$24.99",
    },
    {
      id: 6,
      name: "Probiotics",
      image:
        "https://img.freepik.com/free-photo/closeup-view-microscopic-bacteria-biology-science-background_157027-3266.jpg?t=st=1738658824~exp=1738662424~hmac=4fa3e3ddf2ba531e52191dd94d19780273c26cf6a1022311818daed4afd24fec&w=1380",
      description: "Supports digestive health.",
      price: "$22.99",
    },
  ],
  skincare: [
    {
      id: 7,
      name: "Moisturizing Cream",
      image:
        "https://img.freepik.com/premium-photo/woman-posing-camera-with-happy-smile-while-holding-bottle-with-moisturizer-happy-woman-taking-care-her-skin-beauty-concept_2221-8291.jpg?w=1060",
      description: "Hydrates and nourishes skin.",
      price: "$15.99",
    },
    {
      id: 8,
      name: "Sunscreen SPF 50",
      image:
        "https://img.freepik.com/free-vector/sunscreen-cream-bottle-tube-with-yellow-cap_107791-30201.jpg?t=st=1738658897~exp=1738662497~hmac=271e37ce75aab2d4f0ec3fc6d100dab82983c6cdc09d4a3939e92d352c5dc547&w=1060",
      description: "Protects skin from harmful UV rays.",
      price: "$12.99",
    },
    {
      id: 9,
      name: "Acne Treatment Gel",
      image:
        "https://img.freepik.com/premium-photo/closeup-severe-monkeypox-rash-mpox-rash-symptoms-clinical-setting-with-pox-mpox-monkey-pox_524325-11127.jpg?w=1380",
      description: "Reduces acne breakouts effectively.",
      price: "$10.99",
    },
  ],
};

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:bg-gray-50">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-32 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
    <p className="text-gray-600">{product.description}</p>
    {product.price && (
      <p className="text-gray-800 font-bold">{product.price}</p>
    )}
  </div>
);

export const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("painRelievers");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Products</h2>
        <div className="mb-6">
          <button
            onClick={() => handleTabChange("painRelievers")}
            className={`py-2 px-4 mx-2 rounded-lg ${
              activeTab === "painRelievers"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-blue-500"
            } transition duration-300`}
          >
            Pain Relievers
          </button>
          <button
            onClick={() => handleTabChange("supplements")}
            className={`py-2 px-4 mx-2 rounded-lg ${
              activeTab === "supplements"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-blue-500"
            } transition duration-300`}
          >
            Supplements
          </button>
          <button
            onClick={() => handleTabChange("skincare")}
            className={`py-2 px-4 mx-2 rounded-lg ${
              activeTab === "skincare"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-blue-500"
            } transition duration-300`}
          >
            Skincare
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsData[activeTab].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
