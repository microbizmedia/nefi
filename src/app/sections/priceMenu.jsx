
const PriceMenu = () => {
   
        const services = [
          { name: "Haarschnitt", price: "23€" },
          { name: "Kinderschnitt", price: "15€" },
          { name: "Haarschnitt mit Übergang", price: "25€" },
          { name: "Augenbrauen", price: "10€" },
          { name: "Haar- u. Bartschnitt", price: "38€" },
          { name: "Heißwachs", price: "10€" },
          { name: "Bartschnitt", price: "15€" },
          { name: "Haarwäsche", price: "5€" },
        ];
    return (
     <div id="price-menu"
     className='global-container relative py-10 md:py-24 w-full text-black  m-auto'>
       <h2 className="text-center pb-10">HAWAII Barbershop Preise</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-lg font-medium  "
          >
            <span className="font-bold">{service.name}</span>
            <span className="flex-grow h-px bg-dotted mx-2"></span>
            <span className="text-[#91765a] font-bold">{service.price}</span>
          </div>
        ))}
      </div>
     </div>
    );
  };
  
  export default PriceMenu;
  