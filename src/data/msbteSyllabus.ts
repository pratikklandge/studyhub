export interface SyllabusUnit {
  unitNumber: number;
  unitTitle: string;
  marks: number;
  hours: number;
  topics: string[];
}

export interface PracticalExperiment {
  expNumber: number;
  title: string;
}

export interface SubjectSyllabus {
  courseCode: string;
  courseTitle: string;
  abbreviation: string;
  semester: string;
  scheme: string;
  credits: number;
  teachingScheme: {
    theoryHours: number;
    practicalHours: number;
    totalHours: number;
  };
  examScheme: {
    theoryESE: number; // End Semester Exam
    theoryPA: number;  // Progressive Assessment
    practicalESE: number;
    practicalPA: number;
    totalMarks: number;
  };
  rationale: string;
  courseOutcomes: string[];
  units: SyllabusUnit[];
  practicals: PracticalExperiment[];
  referenceBooks: string[];
}

export const MSBTE_K_SCHEME_SYLLABUS: Record<string, SubjectSyllabus> = {
  "Mathematics": {
    courseCode: "311302",
    courseTitle: "Basic Mathematics",
    abbreviation: "BMS",
    semester: "Semester 1",
    scheme: "K-Scheme (MSBTE)",
    credits: 4,
    teachingScheme: {
      theoryHours: 4,
      practicalHours: 0,
      totalHours: 4,
    },
    examScheme: {
      theoryESE: 70,
      theoryPA: 30,
      practicalESE: 0,
      practicalPA: 0,
      totalMarks: 100,
    },
    rationale:
      "Basic Mathematics is designed to impart fundamental mathematical knowledge and analytical tools necessary for analyzing and solving engineering and scientific problems across all diploma engineering programs.",
    courseOutcomes: [
      "Apply laws of logarithms to simplify engineering and mathematical calculations.",
      "Solve simultaneous linear equations using determinants and matrix algebra.",
      "Evaluate trigonometric functions of compound, allied, and multiple angles.",
      "Determine geometric properties, slopes, and equations of straight lines.",
      "Calculate derivatives of standard functions using rules of differential calculus.",
      "Calculate measures of dispersion to analyze engineering and statistical data.",
    ],
    units: [
      {
        unitNumber: 1,
        unitTitle: "Logarithms",
        marks: 8,
        hours: 6,
        topics: [
          "Concept and definition of logarithms",
          "Laws of logarithms (Product, Quotient, Power, and Base Change laws)",
          "Characteristics and mantissa of logarithms",
          "Applications of logarithms in solving engineering numerical problems",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Determinants and Matrices",
        marks: 14,
        hours: 12,
        topics: [
          "Determinants of order 2 and 3: expansion, properties and minors/cofactors",
          "Cramer's rule to solve system of linear equations in 2 and 3 variables",
          "Types of matrices: row, column, square, diagonal, scalar, unit, zero, symmetric, and skew-symmetric",
          "Matrix operations: addition, subtraction, scalar multiplication, and matrix multiplication",
          "Transpose of a matrix and adjoint of a square matrix",
          "Inverse of a matrix by adjoint method",
          "Solution of simultaneous linear equations by matrix inversion method",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Trigonometry",
        marks: 14,
        hours: 14,
        topics: [
          "Trigonometric ratios of allied angles and standard quadrant signs",
          "Compound angles formulas: sin(A±B), cos(A±B), tan(A±B)",
          "Multiple and sub-multiple angle formulas: sin 2A, cos 2A, tan 2A, sin 3A, cos 3A",
          "Factorization and Defactorization formulas",
          "Inverse trigonometric functions, principal values, and standard identities",
        ],
      },
      {
        unitNumber: 4,
        unitTitle: "Straight Line",
        marks: 10,
        hours: 10,
        topics: [
          "Cartesian coordinate system, distance formula, and section formula",
          "Slope of a straight line, parallel lines, and perpendicular lines conditions",
          "Standard forms of equations of a straight line: slope-point form, two-point form, slope-intercept form, intercept form, normal form, and general form",
          "Angle between two intersecting straight lines",
          "Perpendicular distance of a given point from a straight line and distance between two parallel lines",
        ],
      },
      {
        unitNumber: 5,
        unitTitle: "Differential Calculus",
        marks: 16,
        hours: 14,
        topics: [
          "Definition of function, types of algebraic and trigonometric functions",
          "Concept of limits and evaluation of standard limits",
          "Derivatives from first principles and derivatives of standard algebraic, trigonometric, exponential, and logarithmic functions",
          "Rules of differentiation: Sum rule, Difference rule, Product rule (UV rule), and Quotient rule (U/V rule)",
          "Differentiation of composite functions (Chain Rule)",
          "Logarithmic differentiation and parametric differentiation",
          "Successive differentiation up to second order derivatives",
        ],
      },
      {
        unitNumber: 6,
        unitTitle: "Statistics",
        marks: 8,
        hours: 8,
        topics: [
          "Measures of central tendency: Mean, Median, and Mode review",
          "Measures of dispersion: Range and coefficient of range",
          "Mean Deviation about mean and median",
          "Standard Deviation, Variance, and Coefficient of Variation (C.V.) for ungrouped and grouped frequency distributions",
          "Comparison of consistency of two data distributions using C.V.",
        ],
      },
    ],
    practicals: [
      { expNumber: 1, title: "Solve logarithmic expressions using standard logarithmic laws." },
      { expNumber: 2, title: "Calculate values of determinants and verify Cramer's Rule for linear equations." },
      { expNumber: 3, title: "Perform matrix algebra operations (addition, multiplication, adjoint & inverse)." },
      { expNumber: 4, title: "Verify trigonometric identities using allied and compound angle formulas." },
      { expNumber: 5, title: "Determine equations and perpendicular distances of straight lines." },
      { expNumber: 6, title: "Compute derivatives and rate of change using differentiation rules." },
      { expNumber: 7, title: "Analyze engineering measurement data and determine Standard Deviation & Variance." },
    ],
    referenceBooks: [
      "Higher Engineering Mathematics - B.S. Grewal (Khanna Publishers)",
      "Applied Mathematics - P.N. Wartikar & J.N. Wartikar (Vidyarthi Griha Prakashan)",
      "Basic Mathematics (K-Scheme) - MSBTE Official Learning Material",
    ],
  },

  "Physics": {
    courseCode: "311305 (Section I)",
    courseTitle: "Basic Science (Physics)",
    abbreviation: "BSC-PHY",
    semester: "Semester 1",
    scheme: "K-Scheme (MSBTE)",
    credits: 2,
    teachingScheme: {
      theoryHours: 2,
      practicalHours: 2,
      totalHours: 4,
    },
    examScheme: {
      theoryESE: 35,
      theoryPA: 15,
      practicalESE: 25,
      practicalPA: 25,
      totalMarks: 100,
    },
    rationale:
      "Physics provides the fundamental scientific foundation for engineering principles. It equips diploma students with core concepts of measurements, electricity, magnetism, optics, and matter properties.",
    courseOutcomes: [
      "Estimate errors in physical measurements using precision instruments (Vernier Caliper and Micrometer Screw Gauge) and understand ancient Indian astronomical instruments.",
      "Apply Ohm's law, Coulomb's law, magnetic flux laws, and semiconductor P-N junction diode rectifier properties in electrical circuits.",
      "Apply principles of thermometry, gas laws, thermal conductivity, Snell's law of refraction, and optical fibers in engineering devices.",
    ],
    units: [
      {
        unitNumber: 1,
        unitTitle: "Unit and Measurements",
        marks: 9,
        hours: 7,
        topics: [
          "1.1 Physical Quantities: Fundamental, Derived and Supplementary quantities with SI units; Systems of units (CGS, MKS, FPS, SI)",
          "1.2 Scalar and Vector quantities: Definitions, differences, and practical engineering examples",
          "1.3 Dimensions: Dimensional formula of physical quantities; Applications of dimensional analysis (checking formula correctness, deriving relationships, unit conversions)",
          "1.4 Errors: Instrumental, systematic, and random errors; Absolute error, Relative error, and Percentage error; Rules of significant figures and rounding off",
          "1.5 Ancient Indian Astronomical Instruments (Bhaskaracharya's Siddhanta Shiromani): Chakra Yantra, Dhanu Yantra, Yasti Yantra, and Phalaka Yantra",
          "1.6 Precision Measuring Instruments: Principle, Least Count (LC), and zero error determination for Vernier Calipers and Micrometer Screw Gauge",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Electricity, Magnetism and Semiconductors",
        marks: 14,
        hours: 13,
        topics: [
          "2.1 Electrostatics: Electric charge, Coulomb's inverse square law, Electric field, Electric field intensity, Electric potential, Potential difference, and Electric lines of force",
          "2.2 Magnetism: Magnetic field, Magnetic lines of force, Magnetic flux (Φ = B·A·cos θ), Magnetic flux density (B = Φ/A), Permeability (μ), Magnetic field intensity (H), and B = μ·H relation",
          "2.3 Current Electricity: Electric current, Ohm's law, Resistance, Resistivity (ρ = R·A/L), Resistors in series and parallel, Galvanometer conversion to Ammeter (Shunt S) & Voltmeter (Multiplier R), and Joule's law of heating (H = I²·R·t)",
          "2.4 Energy Band Theory: Valence band, Conduction band, Forbidden energy gap; Conductors, Insulators, and Semiconductors; Intrinsic vs Extrinsic semiconductors (P-type with trivalent dopants & N-type with pentavalent dopants)",
          "2.5 P-N Junction Diode: Formation, Depletion layer, Barrier potential (0.7V for Si, 0.3V for Ge), Forward and Reverse bias V-I characteristics, Static & Dynamic resistance, and Half-Wave Rectifier circuit & efficiency (40.6%)",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Thermometry and Fiber Optics",
        marks: 12,
        hours: 10,
        topics: [
          "3.1 Heat and Temperature: Difference between heat and temperature; Temperature scales (Celsius, Fahrenheit, Kelvin) and interconversion formula: C/5 = (F-32)/9 = (K-273.15)/5",
          "3.2 Heat Transfer: Modes of heat transfer (Conduction, Convection, Radiation) with engineering applications",
          "3.3 Gas Laws: Boyle's law (P ∝ 1/V), Charles's law (V ∝ T), Gay-Lussac's law (P ∝ T), and Ideal gas equation (P·V = n·R·T)",
          "3.4 Thermal Properties: Specific heat at constant pressure (Cp) and constant volume (Cv); Mayer's relation (Cp - Cv = R/J); Law of thermal conductivity (Fourier's law: Q = k·A·(θ1-θ2)·t/d); Newton's law of cooling",
          "3.5 Optics: Laws of reflection, Laws of refraction, Snell's law (μ = sin i / sin r), Total Internal Reflection (TIR), and Critical angle (θc = sin⁻¹(1/μ))",
          "3.6 Optical Fiber: Structure (Core, Cladding, Protective Jacket); Principle of Total Internal Reflection; Numerical Aperture (NA = √(n1² - n2²)); Acceptance angle (θa = sin⁻¹(NA)); Step-Index vs Graded-Index fibers; Single-Mode vs Multi-Mode fibers; Telecommunication applications",
        ],
      },
    ],
    practicals: [
      { expNumber: 1, title: "Determine dimensions and volume of a cylinder using Vernier Caliper." },
      { expNumber: 2, title: "Measure diameter of a thin wire using Micrometer Screw Gauge." },
      { expNumber: 3, title: "Verify Ohm's Law and calculate specific resistance of a given wire." },
      { expNumber: 4, title: "Plot forward and reverse V-I characteristics of a P-N junction diode." },
      { expNumber: 5, title: "Determine coefficient of thermal conductivity using Searle's apparatus." },
      { expNumber: 6, title: "Determine refractive index of a glass prism using spectrometer/pins." },
      { expNumber: 7, title: "Determine numerical aperture and acceptance angle of an optical fiber cable." },
    ],
    referenceBooks: [
      "Basic Science Physics (K-Scheme) - MSBTE Official Curriculum (Course Code: 311305)",
      "Engineering Physics - R.K. Gaur & S.L. Gupta (Dhanpat Rai Publications)",
      "Basic Physics - StudyHub Notes & Question Bank (MSBTE K-Scheme)",
    ],
  },

  "Chemistry": {
    courseCode: "311305 (Section II)",
    courseTitle: "Basic Science (Chemistry)",
    abbreviation: "BSC-CHM",
    semester: "Semester 1",
    scheme: "K-Scheme (MSBTE)",
    credits: 2,
    teachingScheme: {
      theoryHours: 2,
      practicalHours: 2,
      totalHours: 4,
    },
    examScheme: {
      theoryESE: 35,
      theoryPA: 15,
      practicalESE: 25,
      practicalPA: 25,
      totalMarks: 100,
    },
    rationale:
      "Chemistry provides engineering diploma students with fundamental understanding of materials, chemical reactions, electrochemistry, water purification, and protective coatings essential for manufacturing and civil engineering.",
    courseOutcomes: [
      "Distinguish chemical bonds, atomic structures, and catalytic reactions.",
      "Analyze extraction of metals, alloy properties, and industrial electroplating.",
      "Determine water hardness parameters and apply industrial softening processes.",
      "Select protective coatings, polymers, paints, and lubricants for engineering maintenance.",
    ],
    units: [
      {
        unitNumber: 1,
        unitTitle: "Chemical Bonding and Catalysis",
        marks: 8,
        hours: 6,
        topics: [
          "Bohr's atomic model, electron configuration, and orbital energy states",
          "Types of chemical bonds: Electrovalent (ionic), Covalent, Coordinate, and Hydrogen bonding",
          "Concept and characteristics of catalysis",
          "Types of catalysts: positive, negative, auto, and induced catalysts; Industrial catalytic applications",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Metals, Alloys and Electrochemistry",
        marks: 10,
        hours: 10,
        topics: [
          "Metallurgy: Extraction of Iron from hematite ore and Copper from copper pyrites",
          "Alloys: Definition, classification, and preparation methods",
          "Composition, properties, and applications of Steels, Brass, Bronze, and Duralumin",
          "Electrolysis: Arrhenius theory of electrolytic dissociation, Faradays laws of electrolysis",
          "Industrial applications: Electroplating of metals and electro-refining of blister copper",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Water Treatment and Corrosion",
        marks: 9,
        hours: 8,
        topics: [
          "Sources of water, types of impurities, and concept of hard and soft water",
          "Temporary and permanent hardness of water; EDTA titration method for hardness estimation",
          "Water softening methods: Permutit (Zeolite) process and Ion-exchange demineralization process",
          "Corrosion: Definition, economic impact, chemical (dry) and electrochemical (wet) corrosion mechanisms",
          "Corrosion protection: Galvanizing, Tinning, Sacrificial Anode, and Impressed Current cathodic protection",
        ],
      },
      {
        unitNumber: 4,
        unitTitle: "Paints, Varnishes, Polymers and Lubricants",
        marks: 8,
        hours: 8,
        topics: [
          "Paints: Definition, constituents (pigments, vehicles, thinners, driers, fillers) and their functions",
          "Polymers: Monomers, polymers, addition polymerization (Polyethylene) and condensation polymerization (Bakelite)",
          "Plastics: Distinction between Thermoplastics and Thermosetting plastics",
          "Lubricants: Definition, functions, classification (solid, semi-solid, liquid lubricants)",
          "Lubrication mechanisms (Fluid film and Thin film); Physical properties: Viscosity index, flash point, and pour point",
        ],
      },
    ],
    practicals: [
      { expNumber: 1, title: "Determine pH and electrical conductivity of given water and chemical samples." },
      { expNumber: 2, title: "Determine total hardness of a given water sample using standard EDTA solution." },
      { expNumber: 3, title: "Estimate chloride content in a given water sample by Mohr's method." },
      { expNumber: 4, title: "Determine electrochemical equivalent (ECE) of copper using copper voltameter." },
      { expNumber: 5, title: "Determine rate of corrosion of iron in different acidic and saline environments." },
      { expNumber: 6, title: "Measure viscosity of given lubricating oil samples using Redwood Viscometer." },
      { expNumber: 7, title: "Determine Flash and Fire point of lubricating oil using Pensky-Martens apparatus." },
    ],
    referenceBooks: [
      "Engineering Chemistry - Jain & Jain (Dhanpat Rai Publishing)",
      "Textbook of Engineering Chemistry - S.S. Dara & S.S. Umare (S. Chand)",
      "Applied Chemistry (K-Scheme) - MSBTE Official Curriculum",
    ],
  },

  "Communication Skills (English)": {
    courseCode: "311303",
    courseTitle: "Communication Skills (English)",
    abbreviation: "ENG",
    semester: "Semester 1",
    scheme: "K-Scheme (MSBTE)",
    credits: 3,
    teachingScheme: {
      theoryHours: 2,
      practicalHours: 2,
      totalHours: 4,
    },
    examScheme: {
      theoryESE: 70,
      theoryPA: 30,
      practicalESE: 25,
      practicalPA: 25,
      totalMarks: 150,
    },
    rationale:
      "Communication Skills (English) empowers technical students with oral, written, and interpersonal communication capabilities necessary for professional engineering reporting, interviews, and team coordination.",
    courseOutcomes: [
      "Use technical vocabulary and correct grammatical structures in professional contexts.",
      "Compose coherent technical paragraphs and structured summaries.",
      "Deliver professional oral presentations and practice effective situational dialogues.",
      "Draft formal business letters, inquiry notes, and official technical email correspondence.",
    ],
    units: [
      {
        unitNumber: 1,
        unitTitle: "Vocabulary Building and Word Formation",
        marks: 12,
        hours: 6,
        topics: [
          "Root words, prefixes, and suffixes to expand technical vocabulary",
          "Synonyms, antonyms, homophones, and frequently confused engineering terms",
          "Idiomatic expressions, collocations, and contextual vocabulary usage",
          "One-word substitutions and technical jargon in engineering disciplines",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Paragraph Writing and Technical Summarization",
        marks: 14,
        hours: 6,
        topics: [
          "Structure of a paragraph: Topic sentence, supporting details, and concluding sentence",
          "Types of paragraphs: Descriptive, comparative, cause-and-effect, and technical process paragraphs",
          "Techniques for coherence and unity using transitional connectives",
          "Reading comprehension and precise writing of technical articles",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Communicative English and Situational Dialogues",
        marks: 14,
        hours: 6,
        topics: [
          "Basics of human communication: Sender, message, channel, receiver, and feedback loop",
          "Barriers to communication: Physical, linguistic, psychological, and organizational barriers",
          "Verbal vs. Non-verbal communication (Body language, gestures, posture, eye contact)",
          "Drafting situational dialogues: Greetings, making requests, giving directions, and telephonic conversations",
        ],
      },
      {
        unitNumber: 4,
        unitTitle: "Applied Grammar and Mechanics of Writing",
        marks: 16,
        hours: 8,
        topics: [
          "Parts of speech and their appropriate syntactic placement",
          "Tenses and subject-verb agreement in technical documentation",
          "Voice: Active and Passive voice transformations in process descriptions",
          "Direct and Indirect speech transformations for meeting minutes and reporting",
          "Punctuation marks, capitalization, and spelling rules",
        ],
      },
      {
        unitNumber: 5,
        unitTitle: "Professional Business Correspondence",
        marks: 14,
        hours: 6,
        topics: [
          "Essential components and formats of formal business letters",
          "Drafting letters of inquiry, quotation requests, and placing orders",
          "Drafting complaint letters and seeking adjustments/replacements",
          "Formal email etiquette, subject line creation, and professional sign-offs",
        ],
      },
    ],
    practicals: [
      { expNumber: 1, title: "Pronunciation practice of phonetic sounds and word stress." },
      { expNumber: 2, title: "Deliver an impromptu 2-minute oral presentation on an engineering topic." },
      { expNumber: 3, title: "Role-play situational conversations in pairs (Customer support / Client meeting)." },
      { expNumber: 4, title: "Draft a formal technical paragraph describing an engineering machine/process." },
      { expNumber: 5, title: "Write a business letter placing an order for laboratory equipment." },
      { expNumber: 6, title: "Draft a professional email seeking clarification on semester schedule." },
      { expNumber: 7, title: "Listen to audio recordings of technical speeches and summarize key takeaways." },
    ],
    referenceBooks: [
      "Communication Skills - Sanjay Kumar & Pushp Lata (Oxford University Press)",
      "Technical Communication: Principles and Practice - Meenakshi Raman & Sangeeta Sharma (OUP)",
      "Communication Skills (K-Scheme Course Handbook) - MSBTE Official",
    ],
  },
};
