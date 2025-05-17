import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Wrench, Paintbrush, CircleDollarSign, Sparkles, ShieldCheck } from "lucide-react";

const services = [
	{
		title: "Full Body Repair",
		description:
			"Our full body repair service covers everything from minor dents and scratches to major collision damage. Using advanced tools and techniques, our skilled technicians restore your vehicle's structure and appearance to factory standards, ensuring safety and a flawless finish. We handle all makes and models, working efficiently to get you back on the road with confidence.",
		image:
			"https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		icon: <Car size={36} strokeWidth={2.2} className="text-blue-400" />,
	},
	{
		title: "Classic Car Restoration",
		description:
			"Bring your vintage or classic car back to life with our comprehensive restoration service. We meticulously restore every detail, from bodywork and paint to interior and trim, preserving the authenticity and value of your cherished vehicle. Our team has decades of experience with rare and collectible models, ensuring your classic is in expert hands.",
		image:
			"https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1444&q=80",
		icon: <Wrench size={36} strokeWidth={2.2} className="text-yellow-500" />,
	},
	{
		title: "Paintwork & Resprays",
		description:
			"Our paintwork and respray services use state-of-the-art spray booths and premium paints for a perfect color match and durable finish. Whether you need a small touch-up or a complete respray, we guarantee a smooth, even coat that revitalizes your car's appearance and protects it from the elements.",
		image:
			"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		icon: <Paintbrush size={36} strokeWidth={2.2} className="text-pink-400" />,
	},
	{
		title: "Alloy Wheel Refurbishment",
		description:
			"Restore your alloy wheels to their original glory with our refurbishment service. We repair curb damage, corrosion, and scratches, then refinish your wheels with high-quality coatings for a like-new look. Our process improves both the appearance and longevity of your wheels, enhancing your vehicle's overall style.",
		image:
			"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
		icon: <CircleDollarSign size={36} strokeWidth={2.2} className="text-orange-400" />,
	},
	{
		title: "Detailing & Valeting",
		description:
			"Our detailing and valeting packages cover both interior and exterior, leaving your car spotless and protected. We deep clean, polish, and treat every surface, removing stubborn dirt and restoring shine. From upholstery shampooing to paint protection, we help maintain your car's value and make it feel like new inside and out.",
		image:
			"https://images.unsplash.com/photo-1600259828526-77f8617ceec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
		icon: <Sparkles size={36} strokeWidth={2.2} className="text-pink-400" />,
	},
	{
		title: "Insurance Work",
		description:
			"We work directly with all major insurance companies to make your repair process as smooth as possible. Our team manages the paperwork, estimates, and repairs, ensuring your vehicle is restored to pre-accident condition with minimal hassle. Trust us to advocate for you and deliver quality results every time.",
		image:
			"https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		icon: <ShieldCheck size={36} strokeWidth={2.2} className="text-blue-500" />,
	},
];

const Services = () => {
	return (
		<>
			<Hero
				title="Our Services"
				subtitle="Explore the range of professional automotive services we offer."
				showButtons={false}
			/>
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="heading-2 text-brand-dark mb-4">What We Offer</h2>
						<p className="text-lg max-w-2xl mx-auto text-gray-600">
							From accident repairs to full restorations, our skilled team delivers
							quality and care for every vehicle.
						</p>
					</div>
					<div className="flex flex-col gap-12">
						{services.map((service, idx) => {
							const isEven = idx % 2 === 0;
							return (
								<Card
									key={idx}
									className={`flex flex-col md:flex-row items-center md:items-stretch md:gap-0 gap-6 hover:shadow-lg transition-shadow rounded-2xl overflow-hidden ${
										!isEven ? "md:flex-row-reverse" : ""
									}`}
								>
									<img
										src={service.image}
										alt={service.title}
										className="w-full md:w-1/2 h-80 object-cover object-center"
									/>
									<CardContent className="flex flex-col justify-center flex-1 p-6">
										<div className="mb-4">{service.icon}</div>
										<h3 className="text-xl font-bold mb-2">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-4">
											{service.description}
										</p>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
