const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders, no minimum required!"
    },
    {
      id: 2,
      icon: "🔒",
      title: "Secure Payments",
      description: "We ensure your payment details are encrypted and safe."
    },
    {
      id: 3,
      icon: "🎧",
      title: "24/7 Support",
      description: "Our support team is available anytime to assist you."
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {features.map(feature => (
          <div 
            key={feature.id} 
            className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 flex flex-col items-center"
          >
            <div className="text-5xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
