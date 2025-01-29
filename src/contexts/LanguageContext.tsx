import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.services': 'Servicios',
    'nav.materials': 'Materiales',
    'nav.equipment': 'Equipos',
    'nav.philosophy': 'Filosofía',
    'hero.title': 'Excelencia en manufactura metálica y soluciones industriales avanzadas',
    'hero.subtitle': 'Integración • Eficiencia • Adaptación',
    'hero.contact': 'Contáctanos',
    
    // Servicios
    'services.title': 'Nuestros Servicios',
    'services.cutting.title': 'Corte Láser',
    'services.cutting.description': 'Corte preciso de metales con tecnología láser de última generación',
    'services.bending.title': 'Doblado',
    'services.bending.description': 'Doblado de precisión para piezas metálicas complejas',
    'services.machining.title': 'Maquinado CNC',
    'services.machining.description': 'Maquinado de alta precisión con centros de control numérico',
    'services.printing3d.title': 'Impresión 3D',
    'services.printing3d.description': 'Fabricación aditiva para prototipos y piezas finales',
    'services.vacuumCasting.title': 'Vaciado al Vacío',
    'services.vacuumCasting.description': 'Producción de piezas de alta calidad mediante vaciado al vacío',
    'services.welding.title': 'Soldadura',
    'services.welding.description': 'Soldadura especializada para diversos tipos de metales',
    'services.inserts.title': 'Insertos',
    'services.inserts.description': 'Instalación de insertos y elementos de fijación',
    'services.assembly.title': 'Ensamble',
    'services.assembly.description': 'Servicios de ensamble y montaje de componentes',
    'services.design.title': 'Diseño',
    'services.design.description': 'Diseño y desarrollo de productos industriales',
    'services.finishing.title': 'Acabados',
    'services.finishing.description': 'Acabados superficiales y tratamientos especiales',

    // Metales
    'metals.title': 'Metales',
    'metals.carbonSteel.title': 'Acero al Carbono',
    'metals.carbonSteel.description': 'Ideal para estructuras y componentes de alta resistencia',
    'metals.stainlessSteel.title': 'Acero Inoxidable',
    'metals.stainlessSteel.description': 'Resistente a la corrosión y durabilidad excepcional',
    'metals.aluminum.title': 'Aluminio',
    'metals.aluminum.description': 'Ligero y versátil para múltiples aplicaciones',
    'metals.copper.title': 'Cobre',
    'metals.copper.description': 'Excelente conductividad térmica y eléctrica',
    'metals.brass.title': 'Latón',
    'metals.brass.description': 'Aleación duradera con excelente maquinabilidad',
    'metals.titanium.title': 'Titanio',
    'metals.titanium.description': 'Alta resistencia y peso ligero para aplicaciones especializadas',
    'metals.galvanized.title': 'Acero Galvanizado',
    'metals.galvanized.description': 'Protección superior contra la corrosión',

    // Polímeros
    'polymers.title': 'Polímeros',
    'polymers.abs.title': 'ABS',
    'polymers.abs.description': 'Resistente al impacto y fácil de procesar',
    'polymers.san.title': 'SAN',
    'polymers.san.description': 'Excelente transparencia y resistencia química',
    'polymers.nylon.title': 'Nylon',
    'polymers.nylon.description': 'Alta resistencia mecánica y al desgaste',
    'polymers.polycarbonate.title': 'Policarbonato',
    'polymers.polycarbonate.description': 'Transparencia y resistencia al impacto excepcionales',
    'polymers.polyurethane.title': 'Poliuretano',
    'polymers.polyurethane.description': 'Versatilidad en dureza y aplicaciones',
    'polymers.teflon.title': 'Teflón',
    'polymers.teflon.description': 'Bajo coeficiente de fricción y resistencia química',

    // Equipos
    'equipment.title': 'Nuestro Equipo',
    'equipment.trulaser.title': 'TruLaser 5030 Fiber',
    'equipment.trulaser.spec1': 'Potencia láser: 6kW',
    'equipment.trulaser.spec2': 'Área de trabajo: 3000 x 1500 mm',
    'equipment.trulaser.spec3': 'Precisión de posicionamiento: ±0.1 mm',
    'equipment.trubend.title': 'TruBend 3120',
    'equipment.trubend.spec1': 'Fuerza de prensado: 120 toneladas',
    'equipment.trubend.spec2': 'Longitud de doblado: 3100 mm',
    'equipment.trubend.spec3': 'Control CNC de 6 ejes',
    'equipment.prox.title': 'ProX SLS 6100',
    'equipment.prox.spec1': 'Volumen de construcción: 381 x 330 x 460 mm',
    'equipment.prox.spec2': 'Resolución: 0.08 - 0.15 mm',
    'equipment.prox.spec3': 'Materiales: PA, TPU, PP',
    'equipment.haas.title': 'Haas VF-2',
    'equipment.haas.spec1': 'Recorridos: 762 x 406 x 508 mm',
    'equipment.haas.spec2': 'Velocidad husillo: 8100 RPM',
    'equipment.haas.spec3': 'Precisión: ±0.0076 mm',
    'equipment.dt2.title': 'Torno CNC DT-2',
    'equipment.dt2.spec1': 'Diámetro máximo: 400 mm',
    'equipment.dt2.spec2': 'Longitud máxima: 1000 mm',
    'equipment.dt2.spec3': 'Control Fanuc 0i-TF',
    'equipment.tm2p.title': 'TM-2P Plus',
    'equipment.tm2p.spec1': 'Área de trabajo: 600 x 400 mm',
    'equipment.tm2p.spec2': 'Potencia: 2.2 kW',
    'equipment.tm2p.spec3': 'Precisión: ±0.01 mm',

    // Filosofía
    'philosophy.title': 'Nuestra Filosofía',
    'philosophy.description': 'En TORSA, nos dedicamos a la excelencia en la manufactura metálica y soluciones industriales. Nuestra filosofía se basa en tres pilares fundamentales: integración de procesos, eficiencia operativa y adaptación a las necesidades específicas de cada cliente. Esto nos permite ofrecer soluciones de la más alta calidad, con tiempos de entrega competitivos y costos optimizados.',

    // Contacto
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.company': 'Empresa',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Describe tus necesidades específicas...',
    'contact.submit': 'Enviar Mensaje',
    'contact.confirmation': '¡Mensaje enviado! Nos pondremos en contacto contigo pronto.',

    // WhatsApp
    'whatsapp.message': 'Hola, me gustaría obtener más información sobre sus servicios.',

    // Footer
    'footer.description': 'Soluciones integrales en manufactura metálica y servicios industriales avanzados.',
    'footer.contact': 'Contacto',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.followUs': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.linkedin': 'LinkedIn',
    'footer.email': 'Correo',
    'footer.phone': 'Teléfono',
    'footer.address': 'Dirección',

    // Común
    'common.quote': 'Solicitar cotización ahora',

    // Clients Section
    'clients.title': 'Clientes que confían en nosotros'
  },
  en: {
    'nav.services': 'Services',
    'nav.materials': 'Materials',
    'nav.equipment': 'Equipment',
    'nav.philosophy': 'Philosophy',
    'hero.title': 'Excellence in metal manufacturing and advanced industrial solutions',
    'hero.subtitle': 'Integration • Efficiency • Adaptation',
    'hero.contact': 'Contact Us',
    
    // Services
    'services.title': 'Our Services',
    'services.cutting.title': 'Laser Cutting',
    'services.cutting.description': 'Precise metal cutting with state-of-the-art laser technology',
    'services.bending.title': 'Bending',
    'services.bending.description': 'Precision bending for complex metal parts',
    'services.machining.title': 'CNC Machining',
    'services.machining.description': 'High-precision machining with numerical control centers',
    'services.printing3d.title': '3D Printing',
    'services.printing3d.description': 'Additive manufacturing for prototypes and final parts',
    'services.vacuumCasting.title': 'Vacuum Casting',
    'services.vacuumCasting.description': 'High-quality parts production through vacuum casting',
    'services.welding.title': 'Welding',
    'services.welding.description': 'Specialized welding for various types of metals',
    'services.inserts.title': 'Inserts',
    'services.inserts.description': 'Installation of inserts and fastening elements',
    'services.assembly.title': 'Assembly',
    'services.assembly.description': 'Component assembly and mounting services',
    'services.design.title': 'Design',
    'services.design.description': 'Industrial product design and development',
    'services.finishing.title': 'Finishing',
    'services.finishing.description': 'Surface finishing and special treatments',

    // Metals
    'metals.title': 'Metals',
    'metals.carbonSteel.title': 'Carbon Steel',
    'metals.carbonSteel.description': 'Ideal for high-strength structures and components',
    'metals.stainlessSteel.title': 'Stainless Steel',
    'metals.stainlessSteel.description': 'Corrosion resistant with exceptional durability',
    'metals.aluminum.title': 'Aluminum',
    'metals.aluminum.description': 'Lightweight and versatile for multiple applications',
    'metals.copper.title': 'Copper',
    'metals.copper.description': 'Excellent thermal and electrical conductivity',
    'metals.brass.title': 'Brass',
    'metals.brass.description': 'Durable alloy with excellent machinability',
    'metals.titanium.title': 'Titanium',
    'metals.titanium.description': 'High strength and lightweight for specialized applications',
    'metals.galvanized.title': 'Galvanized Steel',
    'metals.galvanized.description': 'Superior corrosion protection',

    // Polymers
    'polymers.title': 'Polymers',
    'polymers.abs.title': 'ABS',
    'polymers.abs.description': 'Impact resistant and easy to process',
    'polymers.san.title': 'SAN',
    'polymers.san.description': 'Excellent transparency and chemical resistance',
    'polymers.nylon.title': 'Nylon',
    'polymers.nylon.description': 'High mechanical strength and wear resistance',
    'polymers.polycarbonate.title': 'Polycarbonate',
    'polymers.polycarbonate.description': 'Exceptional transparency and impact resistance',
    'polymers.polyurethane.title': 'Polyurethane',
    'polymers.polyurethane.description': 'Versatility in hardness and applications',
    'polymers.teflon.title': 'Teflon',
    'polymers.teflon.description': 'Low friction coefficient and chemical resistance',

    // Equipment
    'equipment.title': 'Our Equipment',
    'equipment.trulaser.title': 'TruLaser 5030 Fiber',
    'equipment.trulaser.spec1': 'Laser power: 6kW',
    'equipment.trulaser.spec2': 'Work area: 3000 x 1500 mm',
    'equipment.trulaser.spec3': 'Positioning accuracy: ±0.1 mm',
    'equipment.trubend.title': 'TruBend 3120',
    'equipment.trubend.spec1': 'Press force: 120 tons',
    'equipment.trubend.spec2': 'Bending length: 3100 mm',
    'equipment.trubend.spec3': '6-axis CNC control',
    'equipment.prox.title': 'ProX SLS 6100',
    'equipment.prox.spec1': 'Build volume: 381 x 330 x 460 mm',
    'equipment.prox.spec2': 'Resolution: 0.08 - 0.15 mm',
    'equipment.prox.spec3': 'Materials: PA, TPU, PP',
    'equipment.haas.title': 'Haas VF-2',
    'equipment.haas.spec1': 'Travel: 762 x 406 x 508 mm',
    'equipment.haas.spec2': 'Spindle speed: 8100 RPM',
    'equipment.haas.spec3': 'Accuracy: ±0.0076 mm',
    'equipment.dt2.title': 'CNC Lathe DT-2',
    'equipment.dt2.spec1': 'Maximum diameter: 400 mm',
    'equipment.dt2.spec2': 'Maximum length: 1000 mm',
    'equipment.dt2.spec3': 'Fanuc 0i-TF control',
    'equipment.tm2p.title': 'TM-2P Plus',
    'equipment.tm2p.spec1': 'Work area: 600 x 400 mm',
    'equipment.tm2p.spec2': 'Power: 2.2 kW',
    'equipment.tm2p.spec3': 'Accuracy: ±0.01 mm',

    // Philosophy
    'philosophy.title': 'Our Philosophy',
    'philosophy.description': 'At TORSA, we are dedicated to excellence in metal manufacturing and industrial solutions. Our philosophy is based on three fundamental pillars: process integration, operational efficiency, and adaptation to each client\'s specific needs. This allows us to offer the highest quality solutions, with competitive delivery times and optimized costs.',

    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Describe your specific needs...',
    'contact.submit': 'Send Message',
    'contact.confirmation': 'Message sent! We will contact you soon.',

    // WhatsApp
    'whatsapp.message': 'Hello, I would like to get more information about your services.',

    // Footer
    'footer.description': 'Comprehensive solutions in metal manufacturing and advanced industrial services.',
    'footer.contact': 'Contact',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.linkedin': 'LinkedIn',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.address': 'Address',

    // Common
    'common.quote': 'Request quote now',

    // Clients Section
    'clients.title': 'Clients Who Trust Us'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'es' ? saved : 'es') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}