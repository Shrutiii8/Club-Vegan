import { useState } from "react";
import { Menu, X, Heart, Activity, Bone, Shield, LeafyGreen, Sparkles, Dna, TrendingDown, LucideIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { RecipeCard } from "./components/RecipeCard";
import { BenefitCard } from "./components/BenefitCard";
import { BenefitDetail } from "./components/BenefitDetail";
import { FloatingButtons } from "./components/FloatingButtons";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import clubVeganLogo from "figma:asset/d8a6b3232194f735786c8a9f1fd9743916afaa8c.png";
import templateRef from "figma:asset/b875e0cbe9bebf96ce6716f9984daffbd87bdb10.png";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  details: string[];
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "917991191510";
  const phoneNumber = "+917991191510";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const recipes = [
    {
      title: "Crispy Tofu Stir-Fry",
      description: "Perfectly crispy tofu with colorful vegetables in a savory sauce. Ready in 20 minutes!",
      imageUrl: "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc3RpciUyMGZyeXxlbnwxfHx8fDE3NjEzODI4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      recipeUrl: "https://minimalistbaker.com/crispy-peanut-tofu-cauliflower-rice-stir-fry/",
    },
    {
      title: "Marinated Tofu Bowl",
      description: "Marinated tofu cubes on a bed of greens with fresh vegetables and sesame dressing.",
      imageUrl: "https://images.unsplash.com/photo-1657195721656-8254f104f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc2FsYWQlMjBib3dsfGVufDF8fHx8MTc2MTQ5NzMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      recipeUrl: "https://cookieandkate.com/baked-tofu-recipe/",
    },
    {
      title: "Tofu Scramble Breakfast",
      description: "A delicious plant-based breakfast alternative packed with protein and flavor.",
      imageUrl: "https://images.unsplash.com/photo-1711488735428-27c6757beb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwc2NyYW1ibGUlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYxNDgxOTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      recipeUrl: "https://minimalistbaker.com/southwest-tofu-scramble/",
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: Activity,
      title: "High Plant-Based Protein",
      description: "Packed with essential amino acids, tofu provides complete protein for muscle growth and repair.",
      fullDescription: "Tofu is an exceptional source of plant-based protein, making it ideal for vegetarians, vegans, and anyone looking to reduce their meat consumption.",
      details: [
        "Contains approximately 8-10 grams of protein per 100 grams, providing substantial protein content comparable to many animal products.",
        "Complete protein source with all essential amino acids required by the human body for optimal health and muscle development.",
        "Highly bioavailable protein that is easily absorbed and utilized by the body for muscle repair, growth, and maintenance.",
        "Ideal for athletes, fitness enthusiasts, and active individuals looking for clean protein sources to support their training.",
        "Supports healthy metabolism and helps maintain lean muscle mass, especially important for weight management and aging.",
        "Provides sustained energy throughout the day without the heavy feeling often associated with animal proteins.",
      ],
    },
    {
      icon: Dna,
      title: "9 Essential Amino Acids",
      description: "Contains all 9 essential amino acids that help digest protein efficiently and support overall health.",
      fullDescription: "Unlike many plant-based proteins, tofu contains all nine essential amino acids that your body cannot produce on its own.",
      details: [
        "Provides histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine - all essential for human health.",
        "These amino acids play crucial roles in protein synthesis, tissue repair, nutrient absorption, and immune function.",
        "Leucine content supports muscle protein synthesis and helps prevent age-related muscle loss.",
        "Tryptophan aids in serotonin production, supporting mood regulation and better sleep quality.",
        "Lysine is essential for calcium absorption, collagen formation, and immune system function.",
        "The balanced amino acid profile makes tofu an excellent meat alternative for complete nutrition.",
      ],
    },
    {
      icon: TrendingDown,
      title: "Weight Loss Benefits",
      description: "Low in calories and high in protein, tofu helps you feel fuller longer and supports healthy weight management.",
      fullDescription: "Tofu is a weight-loss friendly food that helps you achieve your health goals while maintaining proper nutrition.",
      details: [
        "Low in calories (approximately 70-80 calories per 100 grams) while being nutrient-dense and filling.",
        "High protein content increases satiety, helping you feel full longer and reducing overall calorie intake.",
        "Low glycemic index helps maintain stable blood sugar levels, preventing energy crashes and cravings.",
        "Minimal fat content (mostly healthy unsaturated fats) supports healthy weight loss without sacrificing nutrition.",
        "Versatile in cooking, allowing you to create satisfying, low-calorie meals that don't feel restrictive.",
        "Can replace higher-calorie protein sources in your diet, naturally reducing daily caloric intake while maintaining protein levels.",
      ],
    },
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Low in saturated fat and cholesterol-free, supporting cardiovascular health naturally.",
      fullDescription: "Regular tofu consumption has been associated with improved cardiovascular health and reduced risk of heart disease.",
      details: [
        "Completely cholesterol-free, helping maintain healthy blood cholesterol levels and reducing cardiovascular disease risk.",
        "Contains heart-healthy polyunsaturated and monounsaturated fats, including omega-3 fatty acids.",
        "Isoflavones in tofu may help lower LDL (bad) cholesterol while maintaining or increasing HDL (good) cholesterol.",
        "Low in saturated fat, which is associated with reduced risk of heart disease and stroke.",
        "Contains potassium, which helps regulate blood pressure and supports overall cardiovascular function.",
        "Studies suggest soy protein may reduce the risk of coronary heart disease when part of a balanced diet.",
      ],
    },
    {
      icon: Bone,
      title: "Supports Bone Health",
      description: "Rich in calcium and magnesium, helping maintain strong and healthy bones.",
      fullDescription: "Tofu provides essential minerals that are crucial for building and maintaining strong, healthy bones throughout life.",
      details: [
        "Excellent source of calcium, especially when prepared with calcium sulfate, providing up to 35% of daily calcium needs per serving.",
        "Contains magnesium, which works synergistically with calcium for optimal bone mineralization and density.",
        "Isoflavones may help reduce bone loss and increase bone density, particularly beneficial for postmenopausal women.",
        "Provides phosphorus, another essential mineral for bone structure and strength.",
        "Can help prevent osteoporosis and reduce fracture risk when consumed as part of a balanced diet.",
        "Plant-based calcium source that's excellent for those who are lactose intolerant or avoid dairy products.",
      ],
    },
    {
      icon: Shield,
      title: "Antioxidant Rich",
      description: "Contains isoflavones that may reduce the risk of certain diseases and promote overall wellness.",
      fullDescription: "Tofu contains powerful antioxidants and phytonutrients that protect your cells from damage and support long-term health.",
      details: [
        "Rich in isoflavones (genistein and daidzein), which act as antioxidants to neutralize harmful free radicals in the body.",
        "May help reduce the risk of certain cancers, including breast and prostate cancer, according to research studies.",
        "Isoflavones have anti-inflammatory properties that may help reduce chronic inflammation in the body.",
        "Contains selenium and other minerals that support the body's natural antioxidant defense systems.",
        "May help protect against age-related cognitive decline and support brain health.",
        "Phytoestrogens in tofu may help balance hormones and reduce symptoms of menopause.",
      ],
    },
    {
      icon: LeafyGreen,
      title: "Lactose-Free & Digestive",
      description: "Gentle on the stomach and perfect for those with lactose intolerance or sensitive digestion.",
      fullDescription: "Tofu is naturally lactose-free and easy to digest, making it an excellent choice for people with various dietary restrictions.",
      details: [
        "Completely lactose-free, making it ideal for the 65-70% of the world's population with some degree of lactose intolerance.",
        "Easy to digest and gentle on the digestive system, unlike some other protein sources that can cause discomfort.",
        "Low in FODMAPs (fermentable carbohydrates), making it suitable for people with IBS or sensitive digestive systems.",
        "Doesn't cause the bloating, gas, or digestive upset often associated with dairy products.",
        "Contains fiber that supports healthy digestion and promotes beneficial gut bacteria.",
        "Versatile protein source for people with multiple food allergies or intolerances (dairy-free, gluten-free when processed properly).",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img 
              src={clubVeganLogo} 
              alt="Club Vegan Logo" 
              className="h-14 w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[#6B5D3F] leading-tight">CLUB VEGAN</span>
              <span className="text-xs text-[#8B7355]">Soya Paneer & Tofu</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection("recipes")} className="text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
              Recipes
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
              Contact
            </button>
          </div>

          <button className="hidden lg:block text-[#8B7355] hover:text-[#C4896F] transition-colors">
            <Heart className="h-6 w-6" fill="currentColor" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-md p-2 text-[#6B5D3F] hover:bg-[#E8DCC8] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8DCC8] bg-[#F5F1E8] px-6 py-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("products")} className="text-left text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-left text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
                Benefits
              </button>
              <button onClick={() => scrollToSection("recipes")} className="text-left text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
                Recipes
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-[#6B5D3F] hover:text-[#8B7355] transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Template Style */}
      <section id="home" className="relative overflow-hidden bg-[#6B5D3F] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl text-[#F5F1E8] mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
                Healthy and<br />tasty tofu
              </h1>
              <p className="text-[#E8DCC8] text-lg mb-8">
                Fuel Your Body with Flavorful Goodness
              </p>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#F5F1E8] text-[#6B5D3F] px-8 py-3 rounded-md hover:bg-[#E8DCC8] transition-colors"
              >
                Order Now
              </button>
            </div>

            {/* Right Side - Paneer Ki Sabzi Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://bellephant.com/wp-content/uploads/2024/10/0_0-3-2.png"
                  alt="Paneer Ki Sabzi"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Flavors Section - Template Style */}
      <section id="about" className="bg-[#F5F1E8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722635940350-d1b2e5129379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2Z1JTIwYmxvY2tzJTIwZnJlc2h8ZW58MXx8fHwxNzYyOTcwNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fresh Tofu"
                  className="w-full h-[400px] object-cover"
                />
                {/* Decorative herb image overlay */}
                <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1662422325326-19089df23d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGhlcmJzJTIwYmFzaWx8ZW58MXx8fHwxNzYyOTU2NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fresh Herbs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div>
              <h2 className="text-3xl lg:text-5xl text-[#8B7355] mb-6 italic" style={{ fontFamily: 'Georgia, serif' }}>
                Fresh Flavors, Feel-Good Fuel
              </h2>
              <p className="text-[#6B5D3F] text-lg leading-relaxed mb-6">
                We're more than just tofu - we're passionate about creating healthy eating and delicious meals that fuel your day. 
                Our soya paneer (tofu) is crafted with care, ensuring maximum nutrition and taste.
              </p>
              <p className="text-[#6B5D3F] leading-relaxed">
                Made fresh daily with premium quality soybeans, our tofu is the perfect addition to your healthy lifestyle. 
                Whether you choose our plain or masala variety, you're choosing pure, wholesome goodness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Banner */}
      <section className="bg-[#8B7355] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-center text-[#F5F1E8] tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            SOYA PANEER SAFE PANEER
          </h2>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-[#F5F1E8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[#6B5D3F] text-3xl lg:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>Our Premium Products</h2>
            <div className="mx-auto h-1 w-24 bg-[#8B7355] rounded-full mb-4"></div>
            <p className="text-[#6B5D3F] text-lg max-w-2xl mx-auto">
              Choose from our carefully crafted tofu varieties
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Plain Tofu */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-2 ring-[#E8DCC8] transition-all hover:shadow-xl hover:ring-[#8B7355]">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661349008073-136bed6e6788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFpbiUyMHRvZnUlMjB3aGl0ZXxlbnwxfHx8fDE3NjE0OTgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Plain Tofu"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-3 inline-block rounded-full bg-[#E8DCC8] px-4 py-1">
                  <span className="text-sm text-[#6B5D3F]">Classic Choice</span>
                </div>
                <h3 className="mb-3 text-[#6B5D3F] text-2xl" style={{ fontFamily: 'Georgia, serif' }}>PLAIN TOFU</h3>
                <p className="text-[#8B7355] leading-relaxed mb-4">
                  Our classic plain tofu is pure, simple, and versatile. Perfect for absorbing flavors in any dish. 
                  Ideal for stir-fries, soups, grilling, or eating fresh with your favorite seasonings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#6B5D3F]">Versatile</span>
                  <span className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#6B5D3F]">Natural</span>
                  <span className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#6B5D3F]">Protein-Rich</span>
                </div>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-6 bg-[#6B5D3F] hover:bg-[#8B7355] text-white"
                >
                  Order Now
                </Button>
              </div>
            </div>

            {/* Masala Tofu */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-2 ring-[#E8DCC8] transition-all hover:shadow-xl hover:ring-[#8B7355]">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://i.ytimg.com/vi/Ku8Bze61HdA/maxresdefault.jpg"
                  alt="Fried Masala Paneer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-3 inline-block rounded-full bg-[#C4896F] px-4 py-1">
                  <span className="text-sm text-white">Flavor Packed</span>
                </div>
                <h3 className="mb-3 text-[#6B5D3F] text-2xl" style={{ fontFamily: 'Georgia, serif' }}>MASALA TOFU</h3>
                <p className="text-[#8B7355] leading-relaxed mb-4">
                  Infused with fresh coriander and garlic during preparation, our masala tofu brings enhanced flavor 
                  to every dish. Pre-seasoned perfection for quick, delicious meals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#6B5D3F]">Aromatic</span>
                  <span className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#6B5D3F]">Flavorful</span>
                  <span className="rounded-full bg-[#F5F1E8] px-3 py-1 text-sm text-[#6B5D3F]">Ready to Cook</span>
                </div>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-6 bg-[#6B5D3F] hover:bg-[#8B7355] text-white"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section id="benefits" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[#6B5D3F] text-3xl lg:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>Health Benefits</h2>
            <div className="mx-auto h-1 w-24 bg-[#8B7355] rounded-full mb-4"></div>
            <p className="text-[#6B5D3F] text-lg max-w-2xl mx-auto">
              Discover the amazing health benefits that make tofu a superfood for modern living
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                onClick={() => setSelectedBenefit(benefit)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefit Detail Modal */}
      {selectedBenefit && (
        <BenefitDetail
          open={!!selectedBenefit}
          onClose={() => setSelectedBenefit(null)}
          icon={selectedBenefit.icon}
          title={selectedBenefit.title}
          fullDescription={selectedBenefit.fullDescription}
          details={selectedBenefit.details}
        />
      )}

      {/* Recipes Section */}
      <section id="recipes" className="bg-[#F5F1E8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[#6B5D3F] text-3xl lg:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>Try These Tofu Recipes</h2>
            <div className="mx-auto h-1 w-24 bg-[#8B7355] rounded-full mb-4"></div>
            <p className="text-[#6B5D3F] text-lg max-w-2xl mx-auto">
              Get inspired with these delicious and easy-to-make tofu recipes
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                description={recipe.description}
                imageUrl={recipe.imageUrl}
                recipeUrl={recipe.recipeUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-white py-16 lg:py-24">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[#6B5D3F] text-3xl lg:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>Get in Touch</h2>
            <div className="mx-auto h-1 w-24 bg-[#8B7355] rounded-full mb-4"></div>
            <p className="text-[#6B5D3F] text-lg">
              Ready to experience the goodness? Order now or reach out to us!
            </p>
          </div>

          <div className="rounded-2xl bg-[#F5F1E8] p-8 shadow-lg border border-[#E8DCC8] lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-[#6B5D3F]">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-[#E8DCC8] focus:border-[#8B7355] focus:ring-[#8B7355] bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[#6B5D3F]">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[#E8DCC8] focus:border-[#8B7355] focus:ring-[#8B7355] bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[#6B5D3F]">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-[#E8DCC8] focus:border-[#8B7355] focus:ring-[#8B7355] bg-white"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#6B5D3F] hover:bg-[#8B7355] text-white shadow-lg hover:shadow-xl transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B5D3F] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={clubVeganLogo} 
                alt="Club Vegan Logo" 
                className="h-12 w-12 object-contain bg-white rounded-xl p-1"
              />
              <div className="flex flex-col">
                <span className="text-white leading-tight">CLUB VEGAN</span>
                <span className="text-xs text-[#E8DCC8]">Soya Paneer & Tofu</span>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[#E8DCC8] transition-colors hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-[#E8DCC8] transition-colors hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-[#E8DCC8] transition-colors hover:text-white">
                Twitter
              </a>
            </div>
          </div>
          <div className="border-t border-[#8B7355] pt-8 text-center text-[#E8DCC8]">
            <p className="mb-2">© 2025 CLUB VEGAN. All rights reserved.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingButtons whatsappNumber={whatsappNumber} phoneNumber={phoneNumber} />
    </div>
  );
}