import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-[1200px] overflow-hidden">
      <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-[30px] items-start">
        {/* Left side - Heading and description */}
        <div className="max-w-[445px]">
          <h1 className="text-[54px] leading-[48px] font-bold text-[#511f50] mb-[30px]">
            10,000+ of our users love our products.
          </h1>
          <p className="text-[#937b92] text-[17px] leading-[25px]">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        {/* Right side - Ratings */}
        <div className="space-y-4 pt-[15px]">
          {[
            { name: "Reviews", offset: "lg:translate-x-0" },
            { name: "Report Guru", offset: "lg:translate-x-[60px]" },
            { name: "BestTech", offset: "lg:translate-x-[120px]" },
          ].map((rating) => (
            <div
              key={rating.name}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 bg-[#f7f2f7] rounded-[8px] py-3 px-8 w-full lg:w-[445px] ${rating.offset}`}
            >
              <div className="flex gap-2 shrink-0">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-[17px] h-[16px] fill-[#ef9546] text-[#ef9546]"
                    />
                  ))}
              </div>
              <p className="font-bold text-[17px] text-[#511f50]">
                Rated 5 Stars in {rating.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid gap-[30px] lg:grid-cols-3 mt-[70px]">
        {[
          {
            name: "Colton Smith",
            image: "/profile-1.png",
            offset: "md:translate-y-0",
            quote:
              "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
          },
          {
            name: "Irene Roberts",
            image: "/profile-2.png",
            offset: "md:translate-y-[16px]",
            quote:
              "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
          },
          {
            name: "Anne Wallace",
            image: "/profile-3.png",
            offset: "md:translate-y-[32px]",
            quote:
              "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className={`bg-[#511f50] text-white rounded-[8px] p-[40px] ${testimonial.offset}`}
          >
            <div className="flex items-center gap-6 mb-[30px]">
              <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[17px] leading-[25px]">
                  {testimonial.name}
                </p>
                <p className="text-[#bb6c9f] text-[17px] leading-[25px]">
                  Verified Buyer
                </p>
              </div>
            </div>
            <blockquote className="text-[#f7f2f7] text-[17px] leading-[22px]">
              &quot;{testimonial.quote}&quot;
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
