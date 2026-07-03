import React, { useState, useEffect } from 'react';
import { 
  Coins, 
  Hammer, 
  Building2, 
  TrendingUp, 
  GraduationCap, 
  BadgePercent, 
  Users, 
  Wine, 
  Gift, 
  MapPin, 
  HelpCircle,
  Play,
  FileText,
  Smartphone,
  Laptop,
  Bike,
  Calendar,
  Rocket,
  Zap,
  Maximize2,
  X
} from 'lucide-react';
import './App.css';

const renderIcon = (name, className = "icon-linear") => {
  switch (name) {
    case 'coins': return <Coins className={className} />;
    case 'hammer': return <Hammer className={className} />;
    case 'building': return <Building2 className={className} />;
    case 'trending': return <TrendingUp className={className} />;
    case 'graduation': return <GraduationCap className={className} />;
    case 'percent': return <BadgePercent className={className} />;
    case 'users': return <Users className={className} />;
    case 'wine': return <Wine className={className} />;
    case 'gift': return <Gift className={className} />;
    case 'map-pin': return <MapPin className={className} />;
    case 'help': return <HelpCircle className={className} />;
    case 'play': return <Play className={className} />;
    case 'file': return <FileText className={className} />;
    case 'phone': return <Smartphone className={className} />;
    case 'laptop': return <Laptop className={className} />;
    case 'bike': return <Bike className={className} />;
    case 'calendar': return <Calendar className={className} />;
    case 'rocket': return <Rocket className={className} />;
    case 'zap': return <Zap className={className} />;
    default: return null;
  }
};

const SLIDES = [
  {
    id: 1,
    type: 'portada',
    title: '¡BIENVENIDOS!',
    subtitle: 'Grupo Inmobiliario Delanova',
    logoText: 'DELANOVA',
    logoSub: 'GRUPO INMOBILIARIO',
    description: 'Lanzamiento Oficial del Proyecto "Portal del Valle"',
  },
  {
    id: 2,
    type: 'quienes-somos',
    title: '¿Quiénes Somos?',
    content: 'GRUPO INMOBILIARIO DELANOVA SAC cuenta con 8 años de experiencia en el rubro inmobiliario, conformado por un equipo multidisciplinario encargado de desarrollar proyectos inmobiliarios horizontales en el centro y norte peruano.',
  },
  {
    id: 3,
    type: 'actividades-grid',
    title: 'Actividades Económicas',
    items: [
      { name: 'Financiamiento de Proyectos', icon: 'coins', desc: 'Estructuración financiera y capital para obras.' },
      { name: 'Construcción', icon: 'hammer', desc: 'Ejecución de obras con altos estándares de calidad.' },
      { name: 'Desarrollo Inmobiliario', icon: 'building', desc: 'Conceptualización y creación de proyectos sostenibles.' },
      { name: 'Fondo de Inversión', icon: 'trending', desc: 'Gestión y maximización del retorno de capital.' },
      { name: 'Centro de Formación Financiera', icon: 'graduation', desc: 'Capacitación financiera para asesores y socios.' }
    ]
  },
  {
    id: 4,
    type: 'imagen-sola',
    title: 'Lanzamiento de Proyecto',
    imageSrc: '/lanzamiento-proyecto.svg',
    imageLabel: 'Lanzamiento de Proyecto',
    imageIcon: '🚀'
  },
  {
    id: 5,
    type: 'ubicacion',
    title: 'Conociendo Portal del Valle',
    subtitle: 'Ubicación Estratégica',
    details: [
      '📍 A tan solo 4 minutos de la vía principal.',
      '🗺️ Accesibilidad garantizada y conectividad fluida.',
      '🚗 Zona de alta proyección y expansión urbana.'
    ],
    mapLabel: 'Mapa de Ubicación (Línea roja indicando el trayecto a 4 minutos)',
    imageSrc: '/mapa-ubicacion_1.svg',
  },
  {
    id: 6,
    type: 'imagen-sola',
    title: 'Brochure - Vista Exterior',
    imageSrc: '/Triptico_1.svg',
    imageLabel: 'Tríptico - Vista Exterior',
    imageIcon: '📄'
  },
  {
    id: 7,
    type: 'imagen-sola',
    title: 'Brochure - Vista Interior',
    imageSrc: '/Triptico_2.svg',
    imageLabel: 'Tríptico - Vista Interior',
    imageIcon: '📄'
  },
  {
    id: 8,
    type: 'lotizacion',
    title: 'Plano de Lotización',
    subtitle: 'Distribución Urbana',
    mapLabel: 'Plano completo de lotización y manzanas con el mapa de ubicación integrado.',
    description: 'Lotes diseñados de forma óptima para optimizar la luz natural y el tránsito.',
    pdfSrc: '/plano-lotes-portal.pdf'
  },
  {
    id: 9,
    type: 'imagen-sola',
    title: 'Espacios Comunes - Parque Interno',
    imageSrc: '/parque-park.jpeg',
    imageLabel: 'Render / Imagen de Parque Interno',
    imageIcon: '🌳'
  },
  {
    id: 10,
    type: 'pregunta-clave',
    title: 'La Gran Oportunidad',
    question: '¿Qué hace mucho más interesante este proyecto?',
  },
  {
    id: 11,
    type: 'destacado',
    title: 'El Corazón del Proyecto',
    logoText: 'PORTAL PARK',
    description: 'La propuesta exclusiva que redefine el concepto de recreación en la zona.',
    subText: 'LOGO DE PORTAL PARK EN EL CENTRO',
    imageSrc: '/portal-park.png',
  },
  {
    id: 12,
    type: 'video',
    title: 'Presentación Audiovisual',
    subtitle: 'Video del Proyecto',
    description: 'Recorrido en 3D y presentación animada de Portal del Valle.',
    videoLabel: 'Reproductor de Video (Render 3D de Portal del Valle)',
  },
  {
    id: 13,
    type: 'imagen-texto',
    title: 'Oportunidad de Inversión',
    subtitle: '¿Cómo puedo ser parte hoy de Portal del Valle?',
    description: 'Adquiere tu lote de forma sencilla con facilidades de pago y respaldo legal absoluto.',
    imageLabel: 'Esquema de Pasos de Compra (Separación, Contrato, Entrega)',
    imageIcon: '🔑',
    imageSrc: '/Foto-delanova-1.png'
  },
  {
    id: 14,
    type: 'beneficios',
    title: 'Beneficios para Asesores Comerciales',
    subtitle: 'Portal del Valle premia tu esfuerzo',
    benefits: [
      {
        num: '1',
        title: 'Plan de Comisiones',
        desc: 'Comisiones competitivas de hasta el 12% por venta cerrada.'
      },
      {
        num: '2',
        title: 'Bonos Personales',
        desc: 'Recompensas adicionales por liquidez generada.'
      },
      {
        num: '3',
        title: 'Bonos Grupales',
        desc: 'Premios por cumplimiento de metas grupales de ventas.'
      }
    ]
  },
  {
    id: 15,
    type: 'comisiones',
    title: '1) Plan de Comisiones',
    subtitle: 'Estructura detallada',
    plans: [
      {
        pct: '8%',
        cond: 'Ventas con inicial de S/. 3,000 y saldo financiado hasta en 18 meses.'
      },
      {
        pct: '10%',
        cond: 'Ventas con el 50% de inicial y saldo financiado hasta en 12 meses.'
      },
      {
        pct: '12%',
        cond: 'Ventas al contado (pago inmediato).'
      }
    ]
  },
  {
    id: 16,
    type: 'bonos-personales-especial',
    title: 'GRAN BONO',
    subtitle: 'POR VENTAS',
    lastTitle: 'PERSONALES',
    description: '¡Sé uno de los asesores ganadores! Conoce los increíbles premios que tenemos preparados para reconocer tu esfuerzo y dedicación.',
    imageSrc: '/collage-bonos.png',
    tapaSrc: '/regalo-tapa.svg'
  },
  {
    id: 22,
    type: 'premios-tecnologicos',
    title: 'PREMIOS',
    subtitle: 'TECNOLÓGICOS',
    bono1Title: 'Bono 1:',
    bono1Text: 'Samsung Galaxy A56 o Laptop ASUS VivoBook GO E410KA. Herramientas perfectas para potenciar tus cierres.',
    bono2Title: 'Bono 2:',
    bono2Text: 'Laptop MacBook Air 13 M1. Rendimiento superior y elegancia para los asesores más destacados.',
    imageTapa: '/regalo-tapa.svg',
    imageMain: '/tecnologia-premios.png'
  },
  {
    id: 23,
    type: 'bono-movilidad',
    title: 'BONO 3:',
    subtitle: 'MOVILIDAD',
    itemTitle: 'Moto Navi',
    itemText: 'Acelera tus ventas y llévate una espectacular motocicleta. Ideal para moverte por la ciudad con total libertad y estilo.',
    imageBase: '/regalo-base-1.svg',
    imageTapa: '/regalo-tapa.svg',
    motoImage: '/navi-moto.png'
  },
  {
    id: 24,
    type: 'premio-equipo-plus',
    title: 'PREMIO DE',
    subtitle: 'EQUIPO PLUS',
    mainText: '¡Nos vamos a Cusco!',
    subText: 'Por 5 ventas en 1 mes',
    badgeText: '1 viaje ida y vuelta',
    dateText: '01 - 05 SEPTIEMBRE',
    imageBase: '/regalo-base-1.svg',
    imageTapa: '/regalo-tapa.svg',
    confeti: '/confeti-acompanamiento-1.png',
    machuPicchu: '/machu-pichu.png'
  },
  {
    id: 18,
    type: 'accion-rapida',
    title: '⚡ Premios por Acción Rápida ⚡',
    subtitle: '¡Solo por el día de hoy!',
    items: [
      {
        icon: 'gift',
        title: 'Bono de Separación',
        text: 'Bono de S/. 100 para las primeras 10 separaciones de proyecto.'
      },
      {
        icon: 'rocket',
        title: 'Bono para Campañas Meta Ads',
        text: 'Bono de S/. 100 para complementar campañas de Meta Ads (primeras 5 personas registradas con experiencia previa en publicidad pagada).'
      },
      {
        icon: 'percent',
        title: 'Descuento Adicional Exclusivo',
        text: 'Descuento adicional de S/. 1,000 para lotes al crédito y S/. 2,000 al contado, separados el día de hoy (exclusivo para asesores).'
      }
    ]
  },
  {
    id: 19,
    type: 'imagen-sola',
    title: 'Visualización del Proyecto',
    imageSrc: '/motivador-imagen.jpg',
    imageLabel: 'Galería Fotográfica del Proyecto / Render Destacado',
    imageIcon: '🖼️'
  },
  {
    id: 20,
    type: 'premios-participacion',
    title: 'Delanova Premia tu Participación',
    items: [
      {
        side: 'Izquierda',
        title: 'Detalle de Cortesía',
        desc: 'Vino con moños para celebrar el lanzamiento.',
        icon: 'wine',
        imageSrc: '/bebida-vino.png'
      },
      {
        side: 'Derecha',
        title: 'Pack Especial',
        desc: 'Pack de Mikes con hermosos moños y escarcha.',
        icon: 'gift',
        imageSrc: '/bebida-1.png'
      }
    ]
  },
  {
    id: 21,
    type: 'portada',
    title: '¡Muchas Gracias!',
    subtitle: 'Sesión de Preguntas y Respuestas',
    description: 'Estamos listos para resolver todas tus dudas sobre el proyecto Portal del Valle.',
    logoText: 'Q&A',
    logoSub: 'Preguntas y Respuestas',
    imageLabel: 'Representación de Persona Dubitativa / Consultas',
    imageSrc: '/pregunta-duda.jpg'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [maximizedImage, setMaximizedImage] = useState(null);

  const goToNext = () => {
    if (currentSlide < SLIDES.length - 1 && !transitioning && !maximizedImage) {
      triggerTransition(() => setCurrentSlide(prev => prev + 1));
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0 && !transitioning && !maximizedImage) {
      triggerTransition(() => setCurrentSlide(prev => prev - 1));
    }
  };

  const triggerTransition = (action) => {
    setTransitioning(true);
    setTimeout(() => {
      action();
      setTransitioning(false);
    }, 300); // matches CSS animation duration
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (maximizedImage) {
        if (e.key === 'Escape') setMaximizedImage(null);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, transitioning, maximizedImage]);

  const slide = SLIDES[currentSlide];

  return (
    <div className="presentation-container">
      {/* Background with watercolor image */}
      <div className="watercolor-bg"></div>
      
      {/* Header Info */}
      <header className="presentation-header">
        <div className="company-logo">
          <span className="brand-primary">DELANOVA</span>
          <span className="brand-secondary">GRUPO INMOBILIARIO</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
          ></div>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className={`slide-content ${transitioning ? 'fade-out' : 'fade-in'}`}>
        
        {/* Portada / Q&A Slide */}
        {slide.type === 'portada' && (
          <div className="slide-layout-center">
            {slide.id === 1 ? (
              <div className="logo-image-container">
                <img src="/logo-delanova.svg" alt="Delanova Grupo Inmobiliario" className="delanova-logo-large" />
              </div>
            ) : (
              <div className="logo-badge-placeholder">
                <span className="badge-title">{slide.logoText}</span>
                <span className="badge-sub">{slide.logoSub}</span>
              </div>
            )}
            <h1 className="slide-title-large animate-title">{slide.title}</h1>
            <p className="slide-subtitle animate-subtitle">{slide.subtitle}</p>
            <div className="decorative-divider"></div>
            <p className="slide-desc">{slide.description}</p>
            {slide.imageSrc ? (
              <div className="q-and-a-image-container">
                <img src={slide.imageSrc} alt="Q&A" className="q-and-a-img" />
              </div>
            ) : slide.imageLabel ? (
              <div className="grey-placeholder-image mt-8">
                <span className="emoji-large">❓</span>
                <p>{slide.imageLabel}</p>
              </div>
            ) : null}
          </div>
        )}

        {/* ¿Quiénes Somos? Slide with Epic Reveal Animation */}
        {slide.type === 'quienes-somos' && (
          <div className="slide-layout-quienes-somos">
            <div className="epic-logo-wrapper">
              <img src="/logo-delanova.svg" alt="Delanova Logo" className="epic-animated-logo" />
              <div className="epic-glow-ring"></div>
              <div className="epic-light-sweep"></div>
            </div>
            <h2 className="slide-title-standard text-center">{slide.title}</h2>
            <div className="quienes-somos-card">
              <p className="paragraph-large">{slide.content}</p>
            </div>
          </div>
        )}

        {/* Actividades Económicas Slide with Grid of 5 Cards */}
        {slide.type === 'actividades-grid' && (
          <div className="slide-layout-actividades">
            <h2 className="slide-title-standard text-center mb-6">{slide.title}</h2>
            <div className="actividades-cards-grid">
              {slide.items.map((item, idx) => (
                <div key={idx} className="actividad-card">
                  <span className="actividad-icon">{renderIcon(item.icon, "icon-linear")}</span>
                  <h4 className="actividad-name">{item.name}</h4>
                  <p className="actividad-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Simple Text Slide */}
        {slide.type === 'texto-simple' && (
          <div className="slide-layout-text">
            <div className="slide-icon-header">{slide.icon}</div>
            <h2 className="slide-title-standard">{slide.title}</h2>
            <div className="text-card-content">
              <p className="paragraph-large">{slide.content}</p>
            </div>
          </div>
        )}

        {/* Image + Text Slide */}
        {slide.type === 'imagen-texto' && (
          <div className="slide-layout-two-col">
            <div className="col-info">
              <h2 className="slide-title-standard">{slide.title}</h2>
              {slide.subtitle && <h3 className="slide-subtitle-sub">{slide.subtitle}</h3>}
              <p className="slide-desc-left">{slide.description}</p>
            </div>
            <div className="col-media">
              {slide.imageSrc ? (
                <div className="real-image-wrapper">
                  <img src={slide.imageSrc} alt={slide.title} className="real-slide-image" />
                </div>
              ) : (
                <div className="grey-placeholder-image">
                  <span className="emoji-large">{slide.imageIcon || '🖼️'}</span>
                  <p className="placeholder-text">{slide.imageLabel}</p>
                </div>
              )}
            </div>
          </div>
        )}



        {/* Ubicación Slide */}
        {slide.type === 'ubicacion' && (
          <div className="slide-layout-two-col">
            <div className="col-info">
              <h2 className="slide-title-standard">{slide.title}</h2>
              <h3 className="slide-subtitle-sub">{slide.subtitle}</h3>
              <ul className="bullets-list">
                {slide.details.map((detail, idx) => (
                  <li key={idx} className="bullet-item">{detail}</li>
                ))}
              </ul>
            </div>
            <div className="col-media">
              {slide.imageSrc ? (
                <div className="map-image-wrapper">
                  <img src={slide.imageSrc} alt={slide.title} className="map-image-svg" />
                </div>
              ) : (
                <div className="grey-placeholder-image map-style">
                  <span className="emoji-large">🗺️</span>
                  <p className="placeholder-text">{slide.mapLabel}</p>
                  <div className="map-road-effect"></div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tríptico / Brochure Slide */}
        {slide.type === 'triptico' && (
          <div className="slide-layout-two-col">
            <div className="col-info">
              <h2 className="slide-title-standard">{slide.title}</h2>
              <h3 className="slide-subtitle-sub">{slide.subtitle}</h3>
              <p className="slide-desc-left">{slide.description}</p>
            </div>
            <div className="col-media">
              {slide.imageSrc ? (
                <div className="real-image-wrapper">
                  <img src={slide.imageSrc} alt={slide.subtitle} className="real-slide-image" />
                </div>
              ) : (
                <div className="grey-placeholder-image triptico-style">
                  <div className="triptico-fold"></div>
                  <div className="triptico-fold"></div>
                  <div className="triptico-fold"></div>
                  <span className="emoji-large">📖</span>
                  <p className="placeholder-text">{slide.mockLabel}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Lotización Slide */}
        {slide.type === 'lotizacion' && (
          <div className="slide-layout-fullscreen-cover" style={{ background: '#ffffff' }}>
            {slide.pdfSrc ? (
              <iframe 
                src={`${slide.pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} 
                title={slide.title} 
                className="pdf-iframe-fullscreen"
              />
            ) : (
              <div className="slide-layout-fullscreen-media">
                <h2 className="slide-title-standard text-center mb-4">{slide.title}</h2>
                <div className="grey-placeholder-image fullscreen-style">
                  <span className="emoji-large">📐</span>
                  <p className="placeholder-text">{slide.mapLabel}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pregunta Clave Slide */}
        {slide.type === 'pregunta-clave' && (
          <div className="slide-layout-center">
            <div className="question-mark-bg">?</div>
            <h3 className="badge-tag">{slide.title}</h3>
            <h1 className="question-text">{slide.question}</h1>
          </div>
        )}

        {/* Destacado Slide */}
        {slide.type === 'destacado' && (
          <div className="slide-layout-center">
            <h3 className="badge-tag">{slide.title}</h3>
            <div className="brand-focus-card">
              {slide.imageSrc ? (
                <div className="brand-logo-container">
                  <img src={slide.imageSrc} alt={slide.logoText} className="brand-logo-img" />
                </div>
              ) : (
                <div className="grey-placeholder-logo">
                  <span className="logo-text">{slide.logoText}</span>
                </div>
              )}
              <p className="brand-desc">{slide.description}</p>
              {!slide.imageSrc && <div className="grey-label-tag">{slide.subText}</div>}
            </div>
          </div>
        )}

        {/* Video Slide */}
        {slide.type === 'video' && (
          <div className="slide-layout-two-col">
            <div className="col-info">
              <h2 className="slide-title-standard">{slide.title}</h2>
              <h3 className="slide-subtitle-sub">{slide.subtitle}</h3>
              <p className="slide-desc-left">{slide.description}</p>
              <div className="video-tip">
                💡 Puedes dar doble clic o usar el botón de las opciones del video para verlo en pantalla completa.
              </div>
            </div>
            <div className="col-media">
              <div className="video-player-wrapper">
                <video 
                  src="/video-ptt.mp4" 
                  controls 
                  preload="metadata"
                  className="real-video-player"
                  poster="/image2_1_28770.jpeg"
                >
                  Tu navegador no soporta el formato de video.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Beneficios Asesores Slide */}
        {slide.type === 'beneficios' && (
          <div className="slide-layout-cards">
            <div className="cards-header">
              <h2 className="slide-title-standard">{slide.title}</h2>
              <p className="slide-subtitle-sub">{slide.subtitle}</p>
            </div>
            <div className="cards-grid">
              {slide.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card">
                  <div className="card-number">{benefit.num}</div>
                  <h4 className="card-title">{benefit.title}</h4>
                  <p className="card-desc">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Plan de Comisiones Slide */}
        {slide.type === 'comisiones' && (
          <div className="slide-layout-cards">
            <div className="cards-header">
              <h2 className="slide-title-standard">{slide.title}</h2>
              <p className="slide-subtitle-sub">{slide.subtitle}</p>
            </div>
            <div className="cards-grid">
              {slide.plans.map((plan, idx) => (
                <div key={idx} className="commission-card">
                  <div className="commission-percentage">{plan.pct}</div>
                  <p className="commission-desc">{plan.cond}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bonos Personales Especial Slide (Slide 16) */}
        {slide.type === 'bonos-personales-especial' && (
          <div className="slide-layout-bono-especial">
            <div className="col-info bono-especial-text-col">
              <h1 className="bono-title-large">
                <span className="bono-text-white">{slide.title}</span>
                <span className="bono-badge-red">{slide.subtitle}</span>
                <span className="bono-text-white">{slide.lastTitle}</span>
              </h1>
              
              <p className="bono-description">
                ¡Sé uno de los asesores ganadores! Conoce los <strong>increíbles premios</strong> que tenemos preparados para reconocer tu esfuerzo y dedicación.
              </p>
            </div>
            
            <div className="col-media bono-especial-img-col">
              {/* Floating Gift Lid */}
              <div className="floating-gift-lid-container">
                <img src={slide.tapaSrc} alt="Tapa de regalo" className="floating-gift-lid-img" />
              </div>
              
              <div className="bono-collage-container">
                <img src={slide.imageSrc} alt="Collage Bonos" className="bono-collage-img" />
              </div>
            </div>
          </div>
        )}

        {/* Premios Tecnológicos Slide (Bono 1 & 2) */}
        {slide.type === 'premios-tecnologicos' && (
          <div className="slide-layout-tech">
            <div className="col-info tech-text-col">
              <h1 className="tech-title-large">
                <span className="tech-text-white">{slide.title}</span>
                <span className="tech-badge-red">{slide.subtitle}</span>
              </h1>
              
              <div className="tech-bonos-list">
                <div className="tech-bono-item">
                  <div className="tech-bono-icon-wrapper">
                    {renderIcon('phone', 'tech-bono-icon')}
                  </div>
                  <div className="tech-bono-details">
                    <h4>{slide.bono1Title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: slide.bono1Text }}></p>
                  </div>
                </div>
                
                <div className="tech-bono-item">
                  <div className="tech-bono-icon-wrapper">
                    {renderIcon('laptop', 'tech-bono-icon')}
                  </div>
                  <div className="tech-bono-details">
                    <h4>{slide.bono2Title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: slide.bono2Text }}></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-media tech-media-col">
              {/* Main Tech Bundle Image */}
              <img src={slide.imageMain || "/tecnologia-premios.png"} alt="Premios Tecnológicos" className="tech-premios-main-img" />
              
              {/* Box Lid */}
              <div className="floating-gift-lid-container-right">
                <img src={slide.imageTapa || "/regalo-tapa.svg"} alt="Tapa de regalo" className="floating-gift-lid-img-right" />
              </div>
            </div>
          </div>
        )}

        {/* Bono 3: Movilidad Slide */}
        {slide.type === 'bono-movilidad' && (
          <div className="slide-layout-movilidad">
            <div className="col-info movilidad-text-col">
              <h1 className="movilidad-title-large">
                <span className="movilidad-text-white">{slide.title}</span>
                <span className="movilidad-badge-red">{slide.subtitle}</span>
              </h1>
              
              <div className="movilidad-item">
                <div className="movilidad-icon-wrapper">
                  {renderIcon('bike', 'movilidad-icon')}
                </div>
                <div className="movilidad-details">
                  <h4>{slide.itemTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: slide.itemText }}></p>
                </div>
              </div>
            </div>
            
            <div className="col-media movilidad-media-col">
              {/* Box Lid */}
              <div className="floating-gift-lid-container-right">
                <img src={slide.imageTapa || "/regalo-tapa.svg"} alt="Tapa de regalo" className="floating-gift-lid-img-right" />
              </div>
              
              {/* Moto popping out */}
              <img src={slide.motoImage} alt="Moto Navi" className="pop-moto-item" />
            </div>
          </div>
        )}

        {/* Premio de Equipo Plus Slide */}
        {slide.type === 'premio-equipo-plus' && (
          <div className="slide-layout-equipo-plus">
            <div className="col-media equipo-plus-media-col">
              {/* Confetti Background */}
              <img src={slide.confeti} alt="Confeti" className="gift-confetti-accompaniment-img" />
              
              {/* Machu Picchu Background Image */}
              <img src={slide.machuPicchu} alt="Machu Picchu" className="machu-picchu-img" />
              
              {/* Gift base and lid */}
              <img src={slide.imageBase} alt="Base de regalo" className="gift-base-img-equipo" />
              <div className="floating-gift-lid-container-equipo">
                <img src={slide.imageTapa} alt="Tapa de regalo" className="floating-gift-lid-img-equipo" />
              </div>
            </div>
            
            <div className="col-info equipo-plus-text-col">
              <h1 className="equipo-plus-title-large">
                <span className="equipo-plus-text-white">{slide.title}</span>
                <span className="equipo-plus-badge-red">{slide.subtitle}</span>
              </h1>
              
              <div className="equipo-plus-card">
                <h2 className="equipo-plus-main-text">{slide.mainText}</h2>
                <p className="equipo-plus-sub-text">{slide.subText}</p>
                
                <div className="equipo-plus-pill-yellow">
                  {slide.badgeText}
                </div>
                
                <div className="equipo-plus-date-badge">
                  {renderIcon('calendar', 'calendar-icon')}
                  <span>{slide.dateText}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bonos Personales / Grupales Slide */}
        {slide.type === 'bonos' && (
          <div className="slide-layout-two-col">
            <div className="col-info">
              <h2 className="slide-title-standard">{slide.title}</h2>
              <h3 className="slide-subtitle-sub">{slide.subtitle}</h3>
              <div className="range-badge">{slide.range}</div>
              <p className="slide-desc-left mt-4">{slide.description}</p>
            </div>
            <div className="col-media">
              <div className="grey-placeholder-image table-style">
                <div className="table-header-mock"></div>
                <div className="table-row-mock"></div>
                <div className="table-row-mock"></div>
                <div className="table-row-mock"></div>
                <span className="emoji-large">📊</span>
                <p className="placeholder-text">{slide.placeholderLabel}</p>
              </div>
            </div>
          </div>
        )}

        {/* Premios Acción Rápida Slide */}
        {slide.type === 'accion-rapida' && (
          <div className="slide-layout-accion-rapida">
            <div className="accion-rapida-header">
              <h2 className="slide-title-standard text-center">{slide.title}</h2>
              <h3 className="accion-rapida-badge">{slide.subtitle}</h3>
            </div>
            <div className="accion-rapida-grid">
              {slide.items.map((item, idx) => (
                <div key={idx} className="accion-rapida-card" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="accion-rapida-icon-wrapper">
                    {renderIcon(item.icon, "accion-rapida-icon")}
                    <div className="icon-pulse-ring"></div>
                  </div>
                  <div className="accion-rapida-content">
                    {item.title && <h4 className="accion-rapida-card-title">{item.title}</h4>}
                    <p className="accion-rapida-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Imagen Sola Slide (Slider 21: Motivador Imagen) */}
        {slide.type === 'imagen-sola' && (
          <div className={`slide-layout-fullscreen-cover ${(slide.id === 6 || slide.id === 7) ? 'bg-white-cover' : 'bg-clean-cover'}`}>
            {slide.imageSrc ? (
              <div 
                className="fullscreen-cover-interactive" 
                onClick={() => setMaximizedImage(slide.imageSrc)}
                title="Clic para maximizar y ver en tamaño completo"
              >
                <img src={slide.imageSrc} alt="Motivador" className={`fullscreen-cover-img ${slide.imageSrc && slide.imageSrc.endsWith('.svg') ? ((slide.id === 6 || slide.id === 7) ? 'contain-style-white' : 'contain-style-clean') : ''}`} />
                <div className="maximize-prompt-badge">
                  <Maximize2 size={20} className="maximize-icon" />
                  <span>Ver en Tamaño Completo</span>
                </div>
              </div>
            ) : (
              <div className="slide-layout-fullscreen-media">
                <h2 className="slide-title-standard text-center mb-4">{slide.title}</h2>
                <div className="grey-placeholder-image fullscreen-style">
                  <span className="emoji-large">{slide.imageIcon}</span>
                  <p className="placeholder-text">{slide.imageLabel}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Premios de Participación Slide */}
        {slide.type === 'premios-participacion' && (
          <div className="slide-layout-cards">
            <div className="cards-header text-center">
              <h2 className="slide-title-standard">{slide.title}</h2>
            </div>
            <div className="cards-grid cols-2">
              {slide.items.map((item, idx) => (
                <div key={idx} className="prize-card">
                  {item.imageSrc ? (
                    <div className="prize-image-container">
                      <img src={item.imageSrc} alt={item.title} className="prize-item-img" />
                    </div>
                  ) : (
                    <div className="prize-icon">{renderIcon(item.icon, "icon-linear")}</div>
                  )}
                  <h4 className="prize-title">{item.title}</h4>
                  <p className="prize-desc">{item.desc}</p>
                  <span className="prize-side-label">{item.side}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer controls */}
      <footer className="presentation-footer">
        <div className="slide-indicator">
          Slider <span className="current-number">{currentSlide + 1}</span> de <span className="total-number">{SLIDES.length}</span>
        </div>
        
        {/* Navigation Buttons in Bottom-Right */}
        <div className="controls-group">
          <button 
            className="nav-btn btn-prev" 
            onClick={goToPrev} 
            disabled={currentSlide === 0 || transitioning}
            title="Anterior"
          >
            ← Regresar
          </button>
          <button 
            className="nav-btn btn-next" 
            onClick={goToNext} 
            disabled={currentSlide === SLIDES.length - 1 || transitioning}
            title="Siguiente"
          >
            Continuar →
          </button>
        </div>
      </footer>

      {/* Fullscreen Image Lightbox Modal */}
      {maximizedImage && (
        <div className="lightbox-overlay animate-fade-in" onClick={() => setMaximizedImage(null)}>
          <button className="lightbox-close-btn" onClick={() => setMaximizedImage(null)} title="Cerrar (Esc)">
            <X size={28} />
          </button>
          <div className="lightbox-content animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <img src={maximizedImage} alt="Vista Completa" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
