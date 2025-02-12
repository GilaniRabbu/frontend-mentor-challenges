import { League_Spartan } from "next/font/google";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

const spartan = League_Spartan({ subsets: ["latin"], weight: ["500"] });

export default function Social_Proof_Section() {
  return (
    <div
      className={`${spartan.className} max-w-[1120px] mx-auto px-4 py-28 overflow-hidden`}
    >
      <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-8 items-center">
        <div className="max-w-[445px]">
          <h1 className="text-[54px] leading-[48px] font-bold mb-8 text-[#511F50]">
            10,000+ of our users love our products.
          </h1>
          <p className="text-lg text-[#937B92]">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { name: "Reviews", offset: "lg:translate-x-0" },
            { name: "Report Guru", offset: "lg:translate-x-[40px]" },
            { name: "BestTech", offset: "lg:translate-x-[80px]" },
          ].map((rating) => (
            <div
              key={rating.name}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 bg-[#F7F2F7] rounded-lg px-4 py-4 sm:px-8 w-full lg:w-[445px] ${rating.offset}`}
            >
              <div className="flex gap-2 shrink-0">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 fill-[#EF9546] text-[#EF9546]"
                    />
                  ))}
              </div>
              <p className="font-bold text-lg text-[#511F50]">
                Rated 5 Stars in {rating.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mt-16">
        {[
          {
            name: "David Smith",
            image: "/profile-1.png",
            offset: "md:translate-y-0",
            quote:
              "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
          },
          {
            name: "Kevin Roberts",
            image: "/profile-2.png",
            offset: "md:translate-y-[16px]",
            quote:
              "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
          },
          {
            name: "Alan Wallace",
            image: "/profile-3.png",
            offset: "md:translate-y-[32px]",
            quote:
              "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className={`rounded-lg p-8 bg-[#511F50] text-white ${testimonial.offset}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold leading-5">{testimonial.name}</h2>
                <p className="font-medium leading-4 cursor-pointer transition-all text-[#BB6C9F] hover:opacity-80">
                  Verified Buyer
                </p>
              </div>
            </div>
            <blockquote className="text-lg leading-6 text-[#F7F2F7]">
              &quot; {testimonial.quote} &quot;
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
