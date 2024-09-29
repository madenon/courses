
const FooterTop = () => {
  const incentives = [
    {
      name: "Livraison  à vos frais  ou sur les points relais",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
      description:
        "Ce n'est pas vraiment gratuit, nous le facturons simplement dans les produits. Un service de nos partenaire vous offre cela.",
    },
    {
      name: "garantie sur une période bien definie ",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
      description:
        "En cas d'anomalie services se charges de prendre en charge selon les conditions de ventes",
    },
    {
      name: "Exchanges",
      imageSrc:
        "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
      description:
        "En cas d'échange de produit après  livraison les conditions sont à  vérifier avant de retourner un produit déjà livré.",
    },
  ];
  return (
    <div className="py-0">
      <div className="rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Nous bâtissons notre entreprise afin de faciliter le contact entre vendeurs et acheteurs pour tout type de commerces
            </h2>
          </div>
        </div>
        <div
          className="mx-auto mt-12 grid max-w-sm grid-cols-1
         gap-8 sm:max-w-none lg:grid-cols-3"
        >
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flex-root">
                  <img
                    src={item?.imageSrc}
                    alt="image"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base
                 font-medium  text-gray-900">{item?.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
