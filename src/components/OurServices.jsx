import { ArrowRight, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Artificial Intelligence (AI/ML)",
      description:
        "Revolutionizing decisions through intelligent solutions. We use latest AI solutions to enhance and digitalize your operations.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-white",
      linkColor: "text-[#3A6EB3]",
      linkTextColor: "text-[#3A6EB3]",
      iconBgColor: "#3A6EB3",
      width: "592px",
      height: "362px",
      minWidth: "280px",
      gap: "64px",
      borderRadius: "12px",
      padding: "24px",
    },
    {
      title: "Automation",
      description: "Streamlining processes for greater efficiency.",
      icon: <Zap size={24} color="#1D315F" />,
      bgColor: "bg-[#1D315F]",
      textColor: "text-white",
      linkColor: "text-white",
      linkTextColor: "text-white",
      iconBgColor: "#F9FAFB",
      width: "280px",
      height: "362px",
      minWidth: "280px",
      gap: "64px",
      borderRadius: "12px",
      padding: "24px",
      headingColor: "text-white", // Added heading color
      descriptionColor: "#D9D9D9", // Added description color
    },
    {
      title: "Cybersecurity",
      description: "Protecting your business from evolving threats.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-white",
      linkColor: "text-[#3A6EB3]",
      linkTextColor: "text-[#3A6EB3]",
      iconBgColor: "#3A6EB3",
      width: "280px",
      height: "362px",
      minWidth: "280px",
      gap: "64px",
      borderRadius: "12px",
      padding: "24px",
    },
    {
      title: "Custom Solutions",
      description: "Tech built uniquely for your needs.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-white",
      linkColor: "text-[#3A6EB3]",
      linkTextColor: "text-[#3A6EB3]",
      iconBgColor: "#3A6EB3",
      width: "280px",
      height: "362px",
      minWidth: "280px",
      gap: "64px",
      borderRadius: "12px",
      padding: "24px",
    },
    {
      title: "DevOps",
      description: "Optimizing development and deployment pipelines.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-white",
      linkColor: "text-[#3A6EB3]",
      linkTextColor: "text-[#3A6EB3]",
      iconBgColor: "#3A6EB3",
      width: "280px",
      height: "362px",
      minWidth: "280px",
      gap: "64px",
      borderRadius: "12px",
      padding: "24px",
    },
    {
      title: "Web & Mobile Apps",
      description:
        "Building high-performance, user-friendly applications tailored to your business needs. From sleek mobile experiences to robust web platforms, we ensure seamless functionality and scalability.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99962 14C8.99962 14 10.3121 15.5 12.4996 15.5C14.6871 15.5 15.9996 14 15.9996 14M15.2496 9H15.2596M9.74962 9H9.75962M12.4996 20C17.194 20 20.9996 16.1944 20.9996 11.5C20.9996 6.80558 17.194 3 12.4996 3C7.8052 3 3.99962 6.80558 3.99962 11.5C3.99962 12.45 4.15547 13.3636 4.443 14.2166C4.55119 14.5376 4.60529 14.6981 4.61505 14.8214C4.62469 14.9432 4.6174 15.0286 4.58728 15.1469C4.55677 15.2668 4.48942 15.3915 4.35472 15.6408L2.71906 18.6684C2.48575 19.1002 2.36909 19.3161 2.3952 19.4828C2.41794 19.6279 2.50337 19.7557 2.6288 19.8322C2.7728 19.9201 3.01692 19.8948 3.50517 19.8444L8.62619 19.315C8.78127 19.299 8.85881 19.291 8.92949 19.2937C8.999 19.2963 9.04807 19.3029 9.11586 19.3185C9.18478 19.3344 9.27145 19.3678 9.44478 19.4345C10.3928 19.7998 11.4228 20 12.4996 20ZM15.7496 9C15.7496 9.27614 15.5258 9.5 15.2496 9.5C14.9735 9.5 14.7496 9.27614 14.7496 9C14.7496 8.72386 14.9735 8.5 15.2496 8.5C15.5258 8.5 15.7496 8.72386 15.7496 9ZM10.2496 9C10.2496 9.27614 10.0258 9.5 9.74962 9.5C9.47348 9.5 9.24962 9.27614 9.24962 9C9.24962 8.72386 9.47348 8.5 9.74962 8.5C10.0258 8.5 10.2496 8.72386 10.2496 9Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-[#F9FAFB]",
      textColor: "text-white",
      linkColor: "text-[#3A6EB3]",
      linkTextColor: "text-[#3A6EB3]",
      iconBgColor: "#3A6EB3",
      width: "592px",
      height: "362px",
      minWidth: "280px",
      gap: "64px",
      borderRadius: "12px",
      padding: "24px",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Badge */}

      <div className="flex justify-center mb-4">
        <span
          style={{
            width: "112px",
            height: "28px",
            paddingTop: "4px",
            paddingRight: "12px",
            paddingBottom: "4px",
            paddingLeft: "12px",
            borderRadius: "18px",
            borderWidth: "1px",
            background: "#F5F5FF",
            border: "1px solid #D7DEFE",
            fontFamily: "Urbanist",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#414EC6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Our Services
        </span>
      </div>

      {/* Heading */}
      <h2
        className="mb-4"
        style={{
          fontFamily: "Urbanist",
          fontWeight: 600,
          fontSize: "36px",
          lineHeight: "44px",
          letterSpacing: "-2%",
          textAlign: "center",
        }}
      >
        Services We Offer
      </h2>
      {/* Subtitle */}
      <p
        className="max-w-2xl mx-auto mb-16"
        style={{
          fontFamily: "Urbanist",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "30px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#475467",
        }}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users.
      </p>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {services.map((service, index) => (
          // <div
          //   key={index}
          //   className={`p-8 rounded-lg ${
          //     service.bgColor === "bg-[#1D315F]" ? "shadow-lg relative" : ""
          //   }`}
          //   style={{
          //     background:
          //       service.bgColor === "bg-[#1D315F]" ? "#1D315F" : "#F9FAFB",
          //     boxShadow:
          //       service.bgColor === "bg-[#1D315F]"
          //         ? "0px 8px 32px 0px #1D396699"
          //         : "none",
          //     width: service.width,
          //     height: service.height,
          //     minWidth: service.minWidth,
          //     gap: service.gap,
          //     borderRadius: service.borderRadius,
          //     padding: service.padding,
          //   }}
          // >
          //   <div
          //     className={`${service.textColor} p-3 rounded-lg w-fit mb-6`}
          //     style={{ background: service.iconBgColor }}
          //   >
          //     {service.icon}
          //   </div>
          //   <h3
          //     className={`text-xl font-bold mb-3 ${
          //       service.title === "Automation" ? "text-white" : ""
          //     }`}
          //   >
          //     {service.title}
          //   </h3>
          //   <p
          //     className={`text-gray-600 mb-6 ${
          //       service.bgColor === "bg-[#1D315F]" ? "text-[#D9D9D9]" : ""
          //     }`}
          //   >
          //     {service.description}
          //   </p>
          //   <a
          //     href="#"
          //     className={`${service.linkColor} font-medium flex items-center gap-2`}
          //   >
          //     View Service{" "}
          //     <ArrowRight size={16} className={service.linkTextColor} />
          //   </a>
          // </div>
          <div
  key={index}
  className={`p-8 rounded-lg ${
    service.bgColor === "bg-[#1D315F]" ? "shadow-lg relative" : ""
  }`}
  style={{
    background:
      service.bgColor === "bg-[#1D315F]" ? "#1D315F" : "#F9FAFB",
    boxShadow:
      service.bgColor === "bg-[#1D315F]"
        ? "0px 8px 32px 0px #1D396699"
        : "none",
    width: service.width,
    height: service.height,
    minWidth: service.minWidth,
    gap: service.gap,
    borderRadius: service.borderRadius,
    padding: service.padding,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>
  <div>
    <div
      className={`${service.textColor} p-3 rounded-lg w-fit mb-6`}
      style={{ background: service.iconBgColor }}
    >
      {service.icon}
    </div>
    <h3
      className={`text-xl font-bold mb-3 ${
        service.title === "Automation" ? "text-white" : ""
      }`}
    >
      {service.title}
    </h3>
    <p
      className={`text-gray-600 mb-6 ${
        service.bgColor === "bg-[#1D315F]" ? "text-[#D9D9D9]" : ""
      }`}
    >
      {service.description}
    </p>
  </div>
  <a
    href="#"
    className={`${service.linkColor} font-medium flex items-center gap-2`}
  >
    View Service{" "}
    <ArrowRight size={16} className={service.linkTextColor} />
  </a>
</div>
        ))}
      </div>
    </section>
  );
}
