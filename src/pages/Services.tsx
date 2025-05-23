import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Wrench, Paintbrush, CircleDollarSign, Sparkles, ShieldCheck } from "lucide-react";

const services = [
	{
		title: "Full Body Repair",
		description:
			'Our comprehensive Full Body Repair service addresses everything from "minor dings to significant dents" and major collision damage. We handle "all classic and modern cars", restoring your vehicle’s bodywork to its original condition. Our "Highly skilled technicians" utilize "cutting-edge technology" and perform repairs with "unmatched attention to detail", ensuring every repair is completed to perfection. Trust us to bring your vehicle back to its best, safeguarding its aesthetics and value with a flawless finish.',
		image:
			"https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		icon: <Car size={36} strokeWidth={2.2} className="text-blue-400" />,
	},
	{
		title: "Classic Car Restoration",
		description:
			'Restore your cherished classic car to its former glory with our dedicated restoration services. We provide "top-quality repairs" and "complete restoration" for all classic cars, understanding that your vehicle is more than just a car—it’s an investment and a statement. Our "experienced professionals" specialize in classic vehicles, applying "over 28 years of experience" with a "passion for precision" to every project. We meticulously restore bodywork and paintwork to the "highest industry standards", aiming to exceed your expectations and preserve the unique character and value of your classic automobile.',
		image:
			"https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1444&q=80",
		icon: <Wrench size={36} strokeWidth={2.2} className="text-yellow-500" />,
	},
	{
		title: "Specialist Paintwork",
		description:
			'For vehicle owners seeking a truly unique touch and a standout appearance, our specialist paintwork services offer bespoke solutions. We cater to custom requests, from intricate designs to rare colour formulations, ensuring your vehicle perfectly reflects your personal style. Our expert technicians employ the "latest techniques" and use only the "highest quality materials" within our "state-of-the-art heated spray booth" to achieve a "stunning and long-lasting result" that is both visually impactful and exceptionally durable. Trust SuperSpray BodyShop to deliver a custom finish that makes your vehicle one-of-a-kind.',
		image:
			"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		icon: <Paintbrush size={36} strokeWidth={2.2} className="text-pink-400" />,
	},
	{
		title: "Fiberglass Repair",
		description:
			'SuperSpray BodyShop also provides expert "Fiber glass repair" services. Ideal for vehicles with fiberglass body components, often found on sports cars, classic models, or custom vehicles, our technicians are skilled in addressing issues such as cracks, holes, and structural damage. We carefully restore the integrity and smooth finish of fiberglass parts, preparing them for perfect paint application. You can rely on our meticulous approach to ensure all fiberglass repairs are completed to the highest standard, maintaining your vehicle\'s specific requirements and aesthetic.',
		image:
			"https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
		icon: <ShieldCheck size={36} strokeWidth={2.2} className="text-blue-500" />,
	},
	{
		title: "Alloy Wheel Refurbishment",
		description:
			'Revitalise your wheels with our expert Alloy Wheel Refurbishment service, designed to "restore your alloy wheels to their original glory." We meticulously address common issues such as "curb damage, corrosion, and scratches." Following repair, your wheels are refinished "with high-quality coatings for a like-new look." This process not only "improves both the appearance and longevity of your wheels" but also significantly "enhanc[es] your vehicle\'s overall style."',
		image:
			"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
		icon: <CircleDollarSign size={36} strokeWidth={2.2} className="text-orange-400" />,
	},
];

const Services = () => {
	return (
		<>
			<Hero
				title="Our Services"
				subtitle="From flawless paintwork and precision collision repairs to complete classic and modern car restorations, discover expert services tailored to meet the highest industry standards and bring your vehicle back to its best."
				showButtons={false}
			/>
			<section className="section-padding bg-white">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="heading-2 text-brand-dark mb-4">What We Offer</h2>
						<p className="text-lg max-w-2xl mx-auto text-gray-600">
							From expert collision repairs to complete restorations, our skilled
							technicians deliver unwavering quality and dedicated care for your
							vehicle.
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
