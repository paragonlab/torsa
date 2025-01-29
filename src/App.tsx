import React, { useState } from 'react';
import { Settings2, Wrench, Printer as Printer3d, Zap, Factory, Shield, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { Logo } from './components/Logo';

function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a
      href={`https://wa.me/1234567890?text=${encodeURIComponent(t('whatsapp.message'))}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25D366] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-square">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function MetalCard({ title, description, image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-square">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/80" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function MaterialCard({ title, description, image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-square">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/80" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function EquipmentCard({ title, specs, image = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-6 bg-black rounded-lg border border-gray-800 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 ${
          isHovered ? 'opacity-20' : ''
        }`}
        style={{ 
          backgroundImage: `url('${image}')`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {specs.map((spec, index) => (
            <li key={index} className="text-gray-400">• {spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-green-900/40 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4 }}
        >
          <source 
            src="https://videos.pexels.com/video-files/11595382/11595382-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        <nav className="relative z-20 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <Logo />
            </div>
            <div className="flex items-center space-x-8">
              <LanguageToggle />
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="hover:text-green-400 transition">{t('nav.services')}</a>
                <a href="#materials" className="hover:text-green-400 transition">{t('nav.materials')}</a>
                <a href="#equipment" className="hover:text-green-400 transition">{t('nav.equipment')}</a>
                <a href="#about" className="hover:text-green-400 transition">{t('nav.philosophy')}</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t('hero.subtitle')}
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              {t('common.quote')}
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title={t('services.cutting.title')}
              description={t('services.cutting.description')}
              image="https://images.unsplash.com/photo-1596552571892-2dda2c594670?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <ServiceCard
              title={t('services.bending.title')}
              description={t('services.bending.description')}
              image="https://www.3ds.com/assets/invest/2023-02/bending-sheet-metals-1-1.jpg"
            />
            <ServiceCard
              title={t('services.machining.title')}
              description={t('services.machining.description')}
              image="https://maquinadocnc.com.mx/wp-content/uploads/2021/01/que-es-el-maquinado-cnc.png"
            />
            <ServiceCard
              title={t('services.printing3d.title')}
              description={t('services.printing3d.description')}
              image="https://images.squarespace-cdn.com/content/v1/5af1803d506fbef0bc69bead/1693561981716-L5QYAQCFQRITZQLYLNSI/SLS_Banner.jpg?format=2500w"
            />
            <ServiceCard
              title={t('services.vacuumCasting.title')}
              description={t('services.vacuumCasting.description')}
              image="https://hlhrapid.com/wp-content/uploads/2023/01/vacuum-casting-services.jpg"
            />
            <ServiceCard
              title={t('services.welding.title')}
              description={t('services.welding.description')}
              image="https://images.squarespace-cdn.com/content/v1/651a564bbd3235089d101f98/1715434848258-WIBTUMTBCYRVVIKPVCC0/iStock-1359352103.jpg"
            />
            <ServiceCard
              title={t('services.inserts.title')}
              description={t('services.inserts.description')}
              image="https://www.metcaseusa.com/en/Fixings-Inserts/inserting_tisw_TitleImageSwap500x408.jpg"
            />
            <ServiceCard
              title={t('services.assembly.title')}
              description={t('services.assembly.description')}
              image="https://vikingplastics.com/wp-content/uploads/2015/12/20150910-TRR_0458-314-300x200.jpg"
            />
            <ServiceCard
              title={t('services.design.title')}
              description={t('services.design.description')}
              image="https://en.idei.club/uploads/posts/2023-06/thumbs/1686753413_en-idei-club-p-ingenieria-mecanica-dizain-krasivo-69.jpg"
            />
            <ServiceCard
              title={t('services.finishing.title')}
              description={t('services.finishing.description')}
              image="https://assets.de.pferd.com/fs/Content-Images/Produkte/feinschleif-polier-combiclick-vrw_CONTENT_IMAGE.jpg"
            />
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition"
            >
              {t('common.quote')}
            </button>
          </div>
        </div>
      </section>

      {/* Metals Section */}
      <section id="materials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('metals.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <MetalCard
              title={t('metals.carbonSteel.title')}
              description={t('metals.carbonSteel.description')}
              image="https://maxacero.com/images/que-es-el-acero-al-carbon-lo-que-nadie-te-ha-contado/acercamiento-a-laminas-de-acero-al-carbon-apiladas.webp"
            />
            <MetalCard
              title={t('metals.stainlessSteel.title')}
              description={t('metals.stainlessSteel.description')}
              image="https://www.enaceroinox.com/web/image/product.template/784/image_1024?unique=4ab797f"
            />
            <MetalCard
              title={t('metals.aluminum.title')}
              description={t('metals.aluminum.description')}
              image="https://m.media-amazon.com/images/I/61udxS2PtAL._AC_UF894,1000_QL80_.jpg"
            />
            <MetalCard
              title={t('metals.copper.title')}
              description={t('metals.copper.description')}
              image="https://threedmetals.com/wp-content/uploads/2021/07/copper-sheet.jpg"
            />
            <MetalCard
              title={t('metals.brass.title')}
              description={t('metals.brass.description')}
              image="https://www.aluminioymetaleselsocorro.com/productos/laton/lamina.jpg"
            />
            <MetalCard
              title={t('metals.titanium.title')}
              description={t('metals.titanium.description')}
              image="https://zanewmetal.com/wp-content/uploads/2024/01/titanium-plate-1.jpg"
            />
            <MetalCard
              title={t('metals.galvanized.title')}
              description={t('metals.galvanized.description')}
              image="https://villalaminados.com/wp-content/uploads/2018/08/proveedor-de-lamina-galvanizada.jpg"
            />
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition"
            >
              {t('common.quote')}
            </button>
          </div>
        </div>
      </section>

      {/* Polymers Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('polymers.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <MaterialCard
              title={t('polymers.abs.title')}
              description={t('polymers.abs.description')}
              image="https://www.aceromafe.com/wp-content/uploads/2022/12/material-ABS-1024x512.jpg"
            />
            <MaterialCard
              title={t('polymers.san.title')}
              description={t('polymers.san.description')}
              image="https://s.alicdn.com/@sc04/kf/H316c536d65aa4deeb6e9cb437761a997a.jpg_720x720q50.jpg"
            />
            <MaterialCard
              title={t('polymers.nylon.title')}
              description={t('polymers.nylon.description')}
              image="https://www.alloys.com.ar/fotos/poliamida1645627888.jpg"
            />
            <MaterialCard
              title={t('polymers.polycarbonate.title')}
              description={t('polymers.polycarbonate.description')}
              image="https://5198708837705329-1701163078178.cdn.site.joinf.com/5198708837705329/WN5YFtCKmD.jpg?imageMogr2/format/webp/thumbnail/!10p/thumbnail/500x500/pad/1/color/I0ZGRkZGRg==/sharpen/100/format/webp/ignore-error/1"
            />
            <MaterialCard
              title={t('polymers.polyurethane.title')}
              description={t('polymers.polyurethane.description')}
              image="https://plasticentro.cl/wp-content/uploads/2018/07/POLIURETANO_PIEZAS-1.jpg"
            />
            <MaterialCard
              title={t('polymers.teflon.title')}
              description={t('polymers.teflon.description')}
              image="https://www.vazbros.com/wp-content/uploads/2019/06/TEFLON-REDONDO-3.jpg"
            />
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition"
            >
              {t('common.quote')}
            </button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('equipment.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <EquipmentCard
              title="TruLaser 5030 Fiber"
              specs={[
                t('equipment.trulaser.spec1'),
                t('equipment.trulaser.spec2'),
                t('equipment.trulaser.spec3')
              ]}
              image="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/2/5/csm_TruLaser-5030-fiber-L76-2021-product-picture_c08746bf92_0134796260.jpg"
            />
            <EquipmentCard
              title="TruBend 3120"
              specs={[
                t('equipment.trubend.spec1'),
                t('equipment.trubend.spec2'),
                t('equipment.trubend.spec3')
              ]}
              image="https://www.trumpf.com/fileadmin/_processed_/9/4/csm_TruBend-Series-3000-B26-product-picture-2024_802492c5b3_50d631f1ac.jpg"
            />
            <EquipmentCard
              title="ProX SLS 6100"
              specs={[
                t('equipment.prox.spec1'),
                t('equipment.prox.spec2'),
                t('equipment.prox.spec3')
              ]}
              image="https://3dz.es/app/uploads/2022/08/ProX-6100-SLS-3dsystems-3dz-2-9.jpg"
            />
            <EquipmentCard
              title="Haas VF-2"
              specs={[
                t('equipment.haas.spec1'),
                t('equipment.haas.spec2'),
                t('equipment.haas.spec3')
              ]}
              image="https://img.directindustry.es/images_di/photo-g/7235-11417232.jpg"
            />
            <EquipmentCard
              title="DT-2 CNC Lathe"
              specs={[
                t('equipment.dt2.spec1'),
                t('equipment.dt2.spec2'),
                t('equipment.dt2.spec3')
              ]}
              image="https://www.haascnc.com/content/dam/haascnc/machines/vertical-mills/drill-tap-mill/models/dt-2/gallery/DT2%20langle.jpg"
            />
            <EquipmentCard
              title="TM-2P Plus"
              specs={[
                t('equipment.tm2p.spec1'),
                t('equipment.tm2p.spec2'),
                t('equipment.tm2p.spec3')
              ]}
              image="https://www.haascnc.com/content/dam/haascnc/machines/vertical-mills/toolroom/models/tm-2p/gallery/TM-2P_000.jpg"
            />
          </div>
          <div className="flex justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('common.quote')}
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('philosophy.title')}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300">
              {t('philosophy.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('contact.title')}</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition"
                >
                  {t('contact.submit')}
                </button>
              </div>
            </form>

            {/* Confirmation Message */}
            {showConfirmation && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-center space-x-4">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <p className="text-white">{t('contact.confirmation')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <Logo />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">{t('footer.linkedin')}</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">{t('footer.email')}</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">{t('footer.contact')}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
}
