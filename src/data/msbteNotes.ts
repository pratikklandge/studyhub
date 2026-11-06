export interface NoteSection {
  sectionTitle: string;
  summary: string;
  keyPoints: string[];
  formulas?: string[];
  solvedExample?: {
    question: string;
    steps: string[];
    answer: string;
  };
  examTip?: string;
}

export interface MCQItem {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UnitNote {
  unitNumber: number;
  unitTitle: string;
  overview: string;
  sections: NoteSection[];
  quickRevisionPoints: string[];
  mcqs?: MCQItem[];
}

export interface SubjectNotesData {
  courseCode: string;
  subjectTitle: string;
  noteTag?: string; // Displayed as prominent banner e.g. "StudyHub Notes"
  units: UnitNote[];
}

export const MSBTE_SUBJECT_NOTES: Record<string, SubjectNotesData> = {
  "Physics": {
    courseCode: "311305 (Section I)",
    subjectTitle: "Basic Science (Physics)",
    noteTag: "StudyHub Notes",
    units: [
      {
        unitNumber: 1,
        unitTitle: "Unit and Measurements",
        overview:
          "StudyHub Notes for Unit 1 (Weightage: 9 Marks, 7 Hours). Comprehensive coverage of Physical Quantities (Fundamental, Derived & Supplementary), SI Base Units, Dimensional Analysis & Applications, Instrumental Errors & Estimation, 6 Rules of Significant Figures, Ancient Indian Astronomical Instruments (Chakra, Dhanu, Yasti, Phalaka yantras), and Precision Gauges (Vernier Caliper & Micrometer Screw Gauge).",
        sections: [
          {
            sectionTitle: "1.1 Physical Quantities, Systems of Units & Dimensions",
            summary:
              "Physics describes physical phenomena by measuring quantities. The SI system is the international standard comprising 7 base fundamental quantities and 2 supplementary quantities from which all engineering units are derived.",
            keyPoints: [
              "Physical Quantity: Any quantity that can be measured and expressed in numbers with a suitable unit (e.g., length, mass, time).",
              "Fundamental Quantities (7 Base Units): Length (meter, m), Mass (kilogram, kg), Time (second, s), Electric Current (Ampere, A), Thermodynamic Temperature (Kelvin, K), Luminous Intensity (candela, cd), Amount of Substance (mole, mol).",
              "Supplementary Quantities (2 Units): Plane angle (radian, rad) and Solid angle (steradian, sr).",
              "Derived Quantities: Quantities expressed in terms of fundamental quantities by multiplication or division. Examples: Velocity (m/s), Acceleration (m/s²), Force (kg·m/s² = Newton, N), Work/Energy (N·m = Joule, J), Power (J/s = Watt, W), Pressure (N/m² = Pascal, Pa).",
              "Systems of Units: CGS (Centimeter, Gram, Second), MKS (Meter, Kilogram, Second), FPS (Foot, Pound, Second), and SI (Système International d'Unités - universally adopted worldwide).",
              "Scalar Quantities: Quantities having magnitude only, no direction (Mass, Time, Speed, Distance, Volume, Work, Energy, Temperature).",
              "Vector Quantities: Quantities having both magnitude and direction, and obey vector addition laws (Displacement, Velocity, Acceleration, Force, Momentum, Weight, Electric field).",
              "Dimensions: Powers to which fundamental units [M, L, T, I/A, K] must be raised to represent a physical quantity. Force = [M¹ L¹ T⁻²], Work/Energy = [M¹ L² T⁻²], Power = [M¹ L² T⁻³], Surface Tension = [M¹ L⁰ T⁻²].",
              "Principle of Homogeneity: The dimensions of each term on both sides of a physically valid equation must be identical.",
              "Three Applications of Dimensional Analysis: (1) Checking correctness of a physical equation, (2) Deriving relationships between physical quantities, (3) Finding conversion factor between different systems of units.",
              "Limitations of Dimensional Analysis: Cannot determine dimensionless constants (like 1/2, 2π); cannot derive formulas containing trigonometric, exponential, or logarithmic functions.",
            ],
            formulas: [
              "Velocity: [v] = [M⁰ L¹ T⁻¹]",
              "Acceleration: [a] = [M⁰ L¹ T⁻²]",
              "Force / Weight: [F] = [M¹ L¹ T⁻²]",
              "Work / Energy / Heat: [W] = [M¹ L² T⁻²]",
              "Power: [P] = [M¹ L² T⁻³]",
              "Pressure / Stress / Modulus: [P] = [M¹ L⁻¹ T⁻²]",
              "Frequency: [f] = [M⁰ L⁰ T⁻¹]",
              "Surface Tension: [T] = [M¹ L⁰ T⁻²]",
              "Universal Gravitational Constant: [G] = [M⁻¹ L³ T⁻²]",
            ],
            solvedExample: {
              question:
                "Check the dimensional correctness of the kinematic equation: v² = u² + 2as, where v = final velocity, u = initial velocity, a = acceleration, and s = displacement.",
              steps: [
                "Step 1: Write dimensions of LHS (v²):",
                "[LHS] = [v]² = [M⁰ L¹ T⁻¹]² = [M⁰ L² T⁻²]",
                "Step 2: Write dimensions of first term of RHS (u²):",
                "[u²] = [M⁰ L¹ T⁻¹]² = [M⁰ L² T⁻²]",
                "Step 3: Write dimensions of second term of RHS (2as):",
                "Constant '2' is dimensionless [M⁰ L⁰ T⁰].",
                "[2as] = [a] · [s] = [M⁰ L¹ T⁻²] · [M⁰ L¹ T⁰] = [M⁰ L² T⁻²]",
                "Step 4: Verify Principle of Homogeneity:",
                "Dimensions of LHS = Dimensions of each term of RHS = [M⁰ L² T⁻²].",
                "Conclusion: Since dimensions on both sides match, the given equation is dimensionally correct.",
              ],
              answer: "The equation v² = u² + 2as is dimensionally correct.",
            },
            examTip:
              "MSBTE frequently asks 2-mark questions: 'Define Fundamental & Derived units with 2 examples each' or 'State the Principle of Homogeneity with 1 example'.",
          },
          {
            sectionTitle: "1.2 Errors in Measurement & Rules for Significant Figures",
            summary:
              "Every engineering measurement has associated uncertainty. Mastering absolute, relative, and percentage errors, together with rigorous significant figure rules, is essential for laboratory data analysis.",
            keyPoints: [
              "Accuracy vs Precision: Accuracy is how close a measured value is to the true/standard value. Precision is the degree of agreement and reproducibility among repeated measurements of the same quantity.",
              "Types of Errors: (1) Instrumental Error (due to faulty calibration or zero error), (2) Systematic Error (consistent directional deviation due to environmental or observer bias), (3) Random Error (unpredictable fluctuations in temperature, voltage, or human reaction).",
              "Mean Value (a_mean): Arithmetic average of n independent readings = (∑ a_i) / n.",
              "Absolute Error (Δa_i): Magnitude of difference between mean value and measured reading: Δa_i = |a_mean - a_i| (Always positive).",
              "Mean Absolute Error (Δa_mean): (∑ |Δa_i|) / n.",
              "Relative Error (Fractional Error): Ratio of mean absolute error to mean value = Δa_mean / a_mean.",
              "Percentage Error (% Error): Relative error expressed as percentage = (Δa_mean / a_mean) × 100%.",
              "Combination of Errors: In addition/subtraction, absolute errors add: ΔZ = ΔA + ΔB. In multiplication/division, relative errors add: (ΔZ/Z) = (ΔA/A) + (ΔB/B). For powers Z = Aⁿ, (ΔZ/Z) = n × (ΔA/A).",
              "Rule 1 of Significant Figures: All non-zero digits are significant (e.g., 2845 has 4 significant figures).",
              "Rule 2 of Significant Figures: All zeros between two non-zero digits are significant (e.g., 5008 has 4 significant figures).",
              "Rule 3 of Significant Figures: Leading zeros before the first non-zero digit are NOT significant (e.g., 0.0034 has only 2 significant figures: 3 and 4).",
              "Rule 4 of Significant Figures: Trailing zeros after a decimal point ARE significant (e.g., 4.500 has 4 significant figures; 0.0200 has 3 significant figures).",
              "Rule 5 of Significant Figures: Trailing zeros in a whole number without a decimal point are NOT significant (e.g., 4500 has 2 significant figures; written as 4.5 × 10³).",
              "Rule 6 of Significant Figures: In addition/subtraction, the final result must retain only as many decimal places as the reading with the least decimal places. In multiplication/division, result retains as many significant figures as the factor with the fewest significant figures.",
            ],
            formulas: [
              "Mean Value: a_mean = (a1 + a2 + ... + an) / n",
              "Absolute Error: Δa_i = |a_mean - a_i|",
              "Mean Absolute Error: Δa_mean = (Δa1 + Δa2 + ... + Δan) / n",
              "Relative Error: R.E. = Δa_mean / a_mean",
              "Percentage Error: % Error = (Δa_mean / a_mean) × 100%",
              "Error in Product Z = A × B: (ΔZ / Z) = (ΔA / A) + (ΔB / B)",
              "Error in Power Z = Aⁿ: (ΔZ / Z) = n · (ΔA / A)",
            ],
            solvedExample: {
              question:
                "In an experiment, the thickness of a glass slab measured using a screw gauge gave the following values: 2.53 mm, 2.55 mm, 2.54 mm, 2.56 mm, and 2.52 mm. Calculate: (i) Mean thickness, (ii) Absolute error in each reading, (iii) Mean absolute error, (iv) Relative error, and (v) Percentage error.",
              steps: [
                "Step 1: Calculate Mean Value (t_mean):",
                "t_mean = (2.53 + 2.55 + 2.54 + 2.56 + 2.52) / 5 = 12.70 / 5 = 2.540 mm.",
                "Step 2: Calculate Absolute Error for each measurement (|t_mean - t_i|):",
                "|2.540 - 2.53| = 0.010 mm",
                "|2.540 - 2.55| = 0.010 mm",
                "|2.540 - 2.54| = 0.000 mm",
                "|2.540 - 2.56| = 0.020 mm",
                "|2.540 - 2.52| = 0.020 mm",
                "Step 3: Mean Absolute Error (Δt_mean):",
                "Δt_mean = (0.010 + 0.010 + 0.000 + 0.020 + 0.020) / 5 = 0.060 / 5 = 0.012 mm.",
                "Step 4: Relative Error:",
                "R.E. = Δt_mean / t_mean = 0.012 / 2.540 ≈ 0.00472.",
                "Step 5: Percentage Error:",
                "% Error = 0.00472 × 100% = 0.472%.",
              ],
              answer: "Mean = 2.540 mm, Mean Absolute Error = 0.012 mm, Relative Error = 0.00472, % Error = 0.472%.",
            },
            examTip:
              "Always state the final result with units and appropriate significant figures: Thickness = (2.540 ± 0.012) mm or 2.54 mm ± 0.47%.",
          },
          {
            sectionTitle: "1.3 Ancient Indian Astronomical Instruments & Precision Gauges",
            summary:
              "MSBTE K-Scheme incorporates ancient Indian astronomical heritage from Bhaskaracharya's Siddhanta Shiromani alongside modern mechanical metrology instruments.",
            keyPoints: [
              "Bhaskaracharya II (12th Century CE): Eminent Indian mathematician and astronomer who documented observational instruments in his masterpiece 'Siddhanta Shiromani' (Goladhyaya section).",
              "1. Chakra Yantra (Circular Ring/Disc): A circular metallic disc graduated along its circumference into 360 degrees (bhagas) and 60 minutes. Used for measuring angular distances, celestial longitudes, zenith distances of stars, and determining local solar time from shadow angles.",
              "2. Dhanu Yantra (Bow/Semicircular Instrument): Semicircular graduated arc (180 degrees) shaped like a bow with a taut plumb-line chord. Used for measuring vertical altitudes, angle of elevation of the sun, and computing terrestrial geographical coordinates.",
              "3. Yasti Yantra (Cylindrical Stick / Staff): A graduated straight rod or cross-staff used for measuring angles between two celestial objects, heights of towers, planetary azimuths, and calculating time from shadow lengths.",
              "4. Phalaka Yantra (Rectangular Board Instrument): A flat rectangular wooden/metal board fitted with a shadow-casting central gnomon (pin). Used to calculate exact time of the day from the sun's instantaneous altitude.",
              "Vernier Caliper: Precision instrument invented by Pierre Vernier for measuring internal diameter, external diameter, and depth. Least Count (LC) = 1 Main Scale Division (1 mm) - 1 Vernier Scale Division (0.9 mm) = 0.1 mm = 0.01 cm.",
              "Micrometer Screw Gauge: Based on the principle of a screw rotating in a fixed nut. Pitch = Distance moved per complete rotation = 0.5 mm (or 1.0 mm). Least Count = Pitch / Total Circular Divisions = 0.5 mm / 50 = 0.01 mm = 0.001 cm.",
              "Zero Error & Correction: If zero of Vernier/circular scale lies to the right/above of main reference line, error is Positive (Correction is Negative: True = Measured - Positive Error). If to the left/below, error is Negative (Correction is Positive: True = Measured + Negative Error).",
            ],
            formulas: [
              "Vernier Least Count: LC = 1 MSD - 1 VSD = 1 mm - (n-1)/n mm = 1/n mm = 0.1 mm = 0.01 cm",
              "Vernier Reading: TR = MSR + (VSR × LC) - (± Zero Error)",
              "Micrometer Pitch: Pitch = Distance moved / Number of complete rotations = 0.5 mm",
              "Micrometer Least Count: LC = Pitch / Total Circular Head Divisions = 0.5 mm / 50 = 0.01 mm = 0.001 cm",
              "Micrometer Reading: TR = MSR + (CSR × LC) - (± Zero Error)",
            ],
            solvedExample: {
              question:
                "In a micrometer screw gauge with pitch 0.5 mm and 50 circular divisions, when jaws are closed without any object, the 4th circular division coincides with the reference line above zero (positive zero error). When measuring the diameter of a wire, Main Scale Reading is 3.5 mm and Circular Scale Reading is 28 divisions. Find the true diameter.",
              steps: [
                "Step 1: Calculate Least Count (LC):",
                "LC = Pitch / Circular Divisions = 0.5 mm / 50 = 0.01 mm.",
                "Step 2: Identify Zero Error:",
                "Since 4th division is above reference line, Zero Error = + (4 × 0.01 mm) = +0.04 mm.",
                "Step 3: Calculate Observed Reading (OR):",
                "OR = MSR + (CSR × LC) = 3.5 mm + (28 × 0.01 mm) = 3.5 + 0.28 = 3.78 mm.",
                "Step 4: Calculate True Reading (TR = OR - Zero Error):",
                "TR = 3.78 mm - (+0.04 mm) = 3.74 mm.",
              ],
              answer: "True diameter of the wire = 3.74 mm (or 0.374 cm).",
            },
            examTip:
              "Remember: Chakra Yantra is a full circle (360°), Dhanu Yantra is a semicircle (180°), Yasti Yantra is a staff/stick, and Phalaka Yantra is a board with gnomon. Questions on these carry 2 to 4 marks in MSBTE K-Scheme!",
          },
        ],
        quickRevisionPoints: [
          "SI system has 7 fundamental base units and 2 supplementary units (radian and steradian).",
          "Dimensional formula of Work, Energy, Torque and Heat is identical: [M¹ L² T⁻²].",
          "Least count: Vernier Caliper = 0.1 mm (0.01 cm); Micrometer Screw Gauge = 0.01 mm (0.001 cm).",
          "Bhaskaracharya's 4 astronomical instruments in Siddhanta Shiromani: Chakra (360° disc), Dhanu (180° bow), Yasti (staff/stick), Phalaka (rectangular board).",
        ],
        mcqs: [
          {
            id: 101,
            question: "Which of the following is a fundamental physical quantity in the SI system?",
            options: ["Electric Current", "Force", "Pressure", "Velocity"],
            correctAnswer: 0,
            explanation: "Electric Current (unit: Ampere) is one of the 7 base fundamental quantities. Force, Pressure, and Velocity are derived quantities.",
          },
          {
            id: 102,
            question: "The dimensional formula for Work and Energy is:",
            options: ["[M¹ L¹ T⁻²]", "[M¹ L² T⁻²]", "[M¹ L² T⁻³]", "[M¹ L⁻¹ T⁻²]"],
            correctAnswer: 1,
            explanation: "Work = Force × Displacement = [M¹ L¹ T⁻²] × [L¹] = [M¹ L² T⁻²].",
          },
          {
            id: 103,
            question: "The least count of a standard laboratory Vernier Caliper with 10 vernier divisions is:",
            options: ["0.01 mm", "0.1 mm", "1.0 mm", "0.001 mm"],
            correctAnswer: 1,
            explanation: "LC = 1 MSD - 1 VSD = 1 mm - 0.9 mm = 0.1 mm (or 0.01 cm).",
          },
          {
            id: 104,
            question: "In which ancient text did Bhaskaracharya describe observational astronomical instruments like Chakra Yantra and Yasti Yantra?",
            options: ["Siddhanta Shiromani", "Aryabhatiya", "Surya Siddhanta", "Brahmasphutasiddhanta"],
            correctAnswer: 0,
            explanation: "Bhaskaracharya II documented astronomical instruments (yantras) in the Goladhyaya chapter of his historic 12th-century treatise 'Siddhanta Shiromani'.",
          },
          {
            id: 105,
            question: "Which ancient Indian astronomical instrument is semicircular (180 degrees) shaped like a bow?",
            options: ["Chakra Yantra", "Dhanu Yantra", "Phalaka Yantra", "Yasti Yantra"],
            correctAnswer: 1,
            explanation: "Dhanu means 'bow'. Dhanu Yantra is a semicircular arc (180°) used for measuring vertical altitudes and elevation angles.",
          },
          {
            id: 106,
            question: "The number of significant figures in the measurement 0.007020 kg is:",
            options: ["3", "4", "6", "7"],
            correctAnswer: 1,
            explanation: "Leading zeros are not significant; digits 7, 0, 2 and the trailing zero after decimal are significant, giving exactly 4 significant figures.",
          },
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Electricity, Magnetism and Semiconductors",
        overview:
          "StudyHub Notes for Unit 2 (Weightage: 14 Marks, 13 Hours - Highest Weightage Unit!). Master Electrostatics (Coulomb's Law, Electric Field & Potential), Magnetism (Flux & Flux Density), Current Electricity (Ohm's Law, Resistors Series/Parallel, Galvanometer to Ammeter & Voltmeter conversions, Joule's Law), Energy Band Theory, and Semiconductor Diode Rectifiers.",
        sections: [
          {
            sectionTitle: "2.1 Electrostatics, Electric Fields & Magnetism",
            summary:
              "Stationary electric charges create electric fields and exert forces according to Coulomb's inverse square law, while magnetic fields guide electromagnetic machine operations.",
            keyPoints: [
              "Coulomb's Inverse Square Law: The electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of their charges (q1·q2) and inversely proportional to the square of the distance (r²) separating them: F = (1 / 4πε₀εᵣ) · (q1·q2 / r²).",
              "Permittivity of Free Space (ε₀) = 8.854 × 10⁻¹² F/m (C²/N·m²). Constant (1 / 4πε₀) = 9 × 10⁹ N·m²/C².",
              "Electric Field Intensity (E): Force experienced by a unit positive test charge placed at that point in the field: E = F / q = (1 / 4πε₀) · (Q / r²) (Unit: N/C or V/m).",
              "Electric Potential (V): Work done in bringing a unit positive charge from infinity to that point against electrostatic repulsion: V = W / q = (1 / 4πε₀) · (Q / r) (Unit: Volt = Joule/Coulomb).",
              "Potential Difference (V_A - V_B): Work done in moving unit positive charge between two points: ΔV = W / q.",
              "Properties of Electric Lines of Force: (1) Start from positive charge and terminate on negative charge, (2) Tangent at any point gives direction of electric field, (3) Never intersect each other (otherwise two directions at one point, which is impossible), (4) Enter or leave a charged conducting surface normally (perpendicularly), (5) Contract longitudinally and exert lateral repulsion.",
              "Magnetic Flux (Φ): Total number of magnetic lines of force passing normally through a given area: Φ = B · A · cos θ (Unit: Weber, Wb).",
              "Magnetic Flux Density (B): Magnetic flux per unit normal cross-sectional area: B = Φ / A (Unit: Tesla, T or Wb/m²). 1 Tesla = 10⁴ Gauss.",
              "Magnetic Field Intensity (H): Magnetizing force produced by current: Unit is A/m (Ampere-turns per meter).",
              "Magnetic Permeability (μ): Ability of a medium to allow magnetic lines to pass through it: μ = B / H (Unit: H/m or T·m/A). Relative permeability μᵣ = μ / μ₀.",
            ],
            formulas: [
              "Coulomb's Law (vacuum): F = (9 × 10⁹) · (q1 · q2) / r²",
              "Electric Field: E = F / q = (9 × 10⁹) · Q / r²",
              "Electric Potential: V = W / q = (9 × 10⁹) · Q / r",
              "Magnetic Flux: Φ = B · A · cos θ  (Weber)",
              "Magnetic Flux Density: B = Φ / A  (Tesla = Wb/m²)",
              "Relation: B = μ · H = μ₀ · μᵣ · H",
            ],
            solvedExample: {
              question:
                "Two point charges of +4 μC and +9 μC are situated in air 30 cm apart. Find: (i) Electrostatic repulsive force between them, (ii) Electric field intensity at the midpoint between the two charges.",
              steps: [
                "Step 1: Given data in SI units:",
                "q1 = +4 × 10⁻⁶ C, q2 = +9 × 10⁻⁶ C, r = 30 cm = 0.3 m.",
                "1 / (4πε₀) = 9 × 10⁹ N·m²/C².",
                "Step 2: Electrostatic Force (F):",
                "F = (9 × 10⁹ × 4 × 10⁻⁶ × 9 × 10⁻⁶) / (0.3)²",
                "F = (324 × 10⁻³) / 0.09 = 3.6 Newtons (Repulsive).",
                "Step 3: Electric Field at midpoint (d = 0.15 m from both charges):",
                "E1 (due to q1, directed rightwards) = (9 × 10⁹ × 4 × 10⁻⁶) / (0.15)² = 36000 / 0.0225 = 1.6 × 10⁶ N/C.",
                "E2 (due to q2, directed leftwards) = (9 × 10⁹ × 9 × 10⁻⁶) / (0.15)² = 81000 / 0.0225 = 3.6 × 10⁶ N/C.",
                "Net Field E = E2 - E1 = (3.6 - 1.6) × 10⁶ = 2.0 × 10⁶ N/C directed towards q1.",
              ],
              answer: "Force = 3.6 N (Repulsive); Net Electric Field at midpoint = 2.0 × 10⁶ N/C.",
            },
            examTip:
              "MSBTE question bank frequently includes: 'State 4 properties of electric lines of force' (carry 2 or 3 marks) and definitions of Magnetic Flux vs Flux Density.",
          },
          {
            sectionTitle: "2.2 Current Electricity & Meter Conversions (Ammeter & Voltmeter)",
            summary:
              "Electric current obeys Ohm's law. Moving coil galvanometers are sensitive detectors that can be converted into ammeters using parallel shunts or into voltmeters using series multipliers.",
            keyPoints: [
              "Electric Current (I): Rate of flow of electric charge: I = Q / t (Unit: Ampere, A = C/s).",
              "Ohm's Law: At constant physical conditions (temperature, material dimensions), electric current through a metallic conductor is directly proportional to potential difference across its terminals: V = I · R.",
              "Electrical Resistance (R): Opposition to current flow: R = ρ · L / A (Unit: Ohm, Ω).",
              "Specific Resistance / Resistivity (ρ): Resistance of a conductor of unit length and unit cross-sectional area: ρ = R · A / L (Unit: Ω·m).",
              "Resistors in Series: R_s = R1 + R2 + R3. Same current flows through all resistors; total potential difference divides (V = V1 + V2 + V3).",
              "Resistors in Parallel: 1/R_p = 1/R1 + 1/R2 + 1/R3. Potential difference across each resistor is identical; total current splits (I = I1 + I2 + I3). For two resistors: R_p = (R1 · R2) / (R1 + R2).",
              "Conversion of Galvanometer to Ammeter: A galvanometer measures small currents (Ig). To measure large current (I), connect a very low resistance called Shunt (S) in PARALLEL with the galvanometer coil. Formula: S = (Ig · Rg) / (I - Ig).",
              "Conversion of Galvanometer to Voltmeter: To measure high voltage (V), connect a very high resistance (R) in SERIES with the galvanometer coil. Formula: R = (V / Ig) - Rg.",
              "Joule's Law of Heating: Heat produced by current flowing through resistance: H = I² · R · t Joules = (I² · R · t) / 4.184 Calories.",
            ],
            formulas: [
              "Ohm's Law: V = I · R",
              "Resistance: R = ρ · L / A",
              "Resistors Series: R_s = R1 + R2 + ... + Rn",
              "Resistors Parallel: 1/R_p = 1/R1 + 1/R2 + ... + 1/Rn",
              "Shunt for Ammeter: S = (Ig · Rg) / (I - Ig)",
              "Series Multiplier for Voltmeter: R = (V / Ig) - Rg",
              "Joule's Heating Effect: H = I² · R · t = V · I · t = (V² / R) · t Joules",
            ],
            solvedExample: {
              question:
                "A galvanometer has a coil resistance of 50 Ω and gives full-scale deflection for a current of 10 mA. Calculate: (i) The shunt resistance required to convert it into an ammeter reading up to 5 A, (ii) The series resistance required to convert it into a voltmeter reading up to 100 V.",
              steps: [
                "Step 1: Identify given galvanometer ratings:",
                "Galvanometer Resistance Rg = 50 Ω",
                "Full-scale current Ig = 10 mA = 10 × 10⁻³ A = 0.01 A.",
                "Step 2: Shunt (S) for Ammeter (I = 5 A):",
                "S = (Ig · Rg) / (I - Ig)",
                "S = (0.01 × 50) / (5 - 0.01) = 0.50 / 4.99 ≈ 0.1002 Ω.",
                "Step 3: Series Resistance (R) for Voltmeter (V = 100 V):",
                "R = (V / Ig) - Rg",
                "R = (100 / 0.01) - 50 = 10,000 - 50 = 9,950 Ω = 9.95 kΩ.",
              ],
              answer: "Shunt resistance S = 0.1002 Ω in parallel; Series multiplier R = 9,950 Ω in series.",
            },
            examTip:
              "Derivation of Shunt formula S = (Ig·Rg)/(I - Ig) and Series multiplier R = (V/Ig) - Rg carries 4 marks in MSBTE board exams. Always draw the simple circuit diagram showing current paths!",
          },
          {
            sectionTitle: "2.3 Energy Band Theory, P-N Junction Diode & Half-Wave Rectifier",
            summary:
              "Solid state electronics is based on energy bands in crystals. P-N junction diodes allow unidirectional current and perform AC-to-DC rectification.",
            keyPoints: [
              "Energy Band Theory: In isolated atoms, electrons have discrete energy levels. In crystalline solids, interaction creates continuous energy bands:",
              "(1) Valence Band: Low-energy band containing valence electrons; completely or partially filled.",
              "(2) Conduction Band: High-energy band where electrons are free to move and conduct electricity.",
              "(3) Forbidden Energy Gap (Eg): Energy gap separating valence and conduction bands. No electrons can exist in this forbidden zone.",
              "Classification of Solids: Conductors (Valence and conduction bands overlap, Eg = 0 eV, metals like Cu, Al); Semiconductors (Small energy gap Eg ≈ 0.7 eV for Ge, 1.1 eV for Si); Insulators (Large forbidden gap Eg > 5 eV, e.g. glass, diamond).",
              "Intrinsic Semiconductors: Chemically pure crystals (pure Si or Ge). Number of free conduction electrons equals number of holes (n_e = n_h). Poor electrical conductivity at room temperature.",
              "Extrinsic Semiconductors: Pure semiconductor doped with trace impurity atoms (Doping):",
              "(1) N-Type: Doped with Pentavalent impurities (Phosphorus, Arsenic, Antimony - Donor atoms). Majority carriers: Electrons; Minority carriers: Holes.",
              "(2) P-Type: Doped with Trivalent impurities (Boron, Aluminum, Gallium, Indium - Acceptor atoms). Majority carriers: Holes; Minority carriers: Electrons.",
              "P-N Junction Diode Formation: When P-type and N-type regions join, electron-hole diffusion creates a Depletion Region devoid of mobile carriers and establishes a Barrier Potential (0.7 V for Si, 0.3 V for Ge).",
              "Forward Biasing: P-side to positive terminal, N-side to negative terminal. External field opposes barrier potential, depletion region narrows, and large forward current flows once voltage exceeds knee voltage.",
              "Reverse Biasing: P-side to negative terminal, N-side to positive terminal. Depletion region widens, high electrical resistance, only tiny micro-ampere reverse saturation leakage current flows until avalanche breakdown.",
              "Static Resistance (R_dc) = V / I. Dynamic Resistance (r_ac) = ΔV / ΔI.",
              "Half-Wave Rectifier: Converts AC into pulsating DC using a single diode. Conduction occurs only during positive half-cycle when diode is forward-biased. Diode blocks negative half-cycle. Rectification Efficiency η = 40.6%, Ripple Factor γ = 1.21.",
            ],
            formulas: [
              "Forbidden Gap: Eg = E_conduction - E_valence",
              "Silicon Barrier Potential: Vb = 0.7 V; Germanium Vb = 0.3 V",
              "Static DC Resistance: R_dc = V / I",
              "Dynamic AC Resistance: r_ac = ΔV / ΔI",
              "Half-Wave Rectifier Efficiency: η = (P_dc / P_ac) × 100% = 40.6%",
              "Half-Wave Ripple Factor: γ = √( (I_rms / I_dc)² - 1 ) = 1.21",
              "Half-Wave DC Output Voltage: V_dc = Vm / π ≈ 0.318 Vm",
            ],
            solvedExample: {
              question:
                "In a P-N junction diode, when the forward voltage is changed from 0.65 V to 0.75 V, the forward current changes from 10 mA to 60 mA. Calculate the dynamic resistance of the diode.",
              steps: [
                "Step 1: Calculate change in forward voltage (ΔV):",
                "ΔV = 0.75 V - 0.65 V = 0.10 V.",
                "Step 2: Calculate change in forward current (ΔI):",
                "ΔI = 60 mA - 10 mA = 50 mA = 50 × 10⁻³ A = 0.05 A.",
                "Step 3: Calculate Dynamic Resistance (r_ac = ΔV / ΔI):",
                "r_ac = 0.10 / 0.05 = 2.0 Ω.",
              ],
              answer: "Dynamic resistance of the P-N junction diode = 2.0 Ω.",
            },
            examTip:
              "MSBTE 4-mark question: 'Draw circuit diagram and input/output waveforms of Half-Wave Rectifier and explain its working'. Always label transformer secondary, diode anode/cathode, load resistor RL, and time axis t.",
          },
        ],
        quickRevisionPoints: [
          "Coulomb's inverse square law governs electrostatic forces: F = (1/4πε₀)·(q1·q2)/r².",
          "To make an Ammeter: connect a LOW resistance SHUNT in parallel with galvanometer: S = (Ig·Rg)/(I - Ig).",
          "To make a Voltmeter: connect a HIGH resistance in series with galvanometer: R = (V/Ig) - Rg.",
          "Silicon barrier potential is 0.7 V; Germanium barrier potential is 0.3 V.",
          "P-type dopants: B, Al, Ga, In (Trivalent); N-type dopants: P, As, Sb, Bi (Pentavalent).",
          "Half-wave rectifier efficiency is 40.6% and ripple factor is 1.21.",
        ],
        mcqs: [
          {
            id: 201,
            question: "According to Coulomb's Law, when distance between two charges is halved, the electrostatic force becomes:",
            options: ["Halved", "Doubled", "Four times", "One-fourth"],
            correctAnswer: 2,
            explanation: "Since force is inversely proportional to r² (F ∝ 1/r²), halving the distance r increases force by (1 / 0.5)² = 4 times.",
          },
          {
            id: 202,
            question: "The SI unit of Magnetic Flux Density (B) is:",
            options: ["Weber", "Tesla", "Ampere/meter", "Henry"],
            correctAnswer: 1,
            explanation: "Magnetic flux density B = Φ/A is measured in Tesla (T) or Weber/m².",
          },
          {
            id: 203,
            question: "To convert a moving coil galvanometer into an ammeter, what must be connected?",
            options: ["High resistance in series", "Low resistance (shunt) in parallel", "High resistance in parallel", "Low resistance in series"],
            correctAnswer: 1,
            explanation: "A low resistance called shunt (S) connected in parallel bypasses excess current safely around the sensitive galvanometer coil.",
          },
          {
            id: 204,
            question: "The forbidden energy gap (Eg) in pure Silicon crystal at room temperature is approximately:",
            options: ["0 eV", "0.7 eV", "1.1 eV", "5.0 eV"],
            correctAnswer: 2,
            explanation: "At room temperature, pure Silicon has a bandgap Eg ≈ 1.1 eV, whereas Germanium has Eg ≈ 0.7 eV.",
          },
          {
            id: 205,
            question: "Which of the following elements is used as a trivalent impurity to produce a P-type semiconductor?",
            options: ["Phosphorus", "Arsenic", "Boron", "Antimony"],
            correctAnswer: 2,
            explanation: "Boron (B) has 3 valence electrons (trivalent), creating majority hole carriers in silicon.",
          },
          {
            id: 206,
            question: "The maximum theoretical efficiency of a Half-Wave Rectifier circuit is:",
            options: ["40.6%", "50.0%", "81.2%", "100%"],
            correctAnswer: 0,
            explanation: "Maximum theoretical efficiency of a half-wave rectifier is 40.6% (Full-wave rectifier is 81.2%).",
          },
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Thermometry and Fiber Optics",
        overview:
          "StudyHub Notes for Unit 3 (Weightage: 12 Marks, 10 Hours). Thorough study of Temperature Scales & Conversions, Modes of Heat Transfer (Conduction, Convection, Radiation), Gas Laws (Boyle's, Charles's, Gay-Lussac's, PV=nRT), Specific Heats (Cp, Cv & Mayer's Relation), Law of Thermal Conductivity, Newton's Law of Cooling, Snell's Law, Total Internal Reflection, and Optical Fiber Communications.",
        sections: [
          {
            sectionTitle: "3.1 Thermometry, Heat Scales & Thermal Conductivity",
            summary:
              "Heat is thermal energy in transit, while temperature measures molecular kinetic energy. Fourier's law of conduction governs thermal energy flow across engineering materials.",
            keyPoints: [
              "Heat vs Temperature: Heat is total internal thermal energy transferred between bodies due to temperature difference (measured in Joules or Calories; 1 Cal = 4.184 J). Temperature is the thermal state or degree of hotness/coldness of a body determining direction of heat flow (measured in Kelvin, Celsius, or Fahrenheit).",
              "Temperature Scales: Celsius Scale (Freezing point: 0°C, Boiling point: 100°C; 100 divisions), Fahrenheit Scale (Freezing point: 32°F, Boiling point: 212°F; 180 divisions), Kelvin / Absolute Scale (Freezing point: 273.15 K, Boiling point: 373.15 K; 100 divisions). Absolute Zero = 0 K = -273.15°C.",
              "Master Interconversion Formula: C / 5 = (F - 32) / 9 = (K - 273.15) / 5.",
              "Modes of Heat Transfer:",
              "(1) Conduction: Transfer of thermal energy from higher to lower temperature region by molecular collisions and lattice vibrations without bodily motion of particles (solids/metals).",
              "(2) Convection: Transfer of heat through bodily movement of fluid molecules caused by temperature-dependent density gradients (liquids and gases).",
              "(3) Radiation: Transfer of heat directly through electromagnetic infrared waves without requiring any intervening material medium (can travel across vacuum at speed of light c = 3 × 10⁸ m/s).",
              "Law of Thermal Conductivity (Fourier's Law): Quantity of heat (Q) conducted through a uniform slab is directly proportional to surface area (A), temperature difference (θ1 - θ2), and time (t), and inversely proportional to thickness (d): Q = [k · A · (θ1 - θ2) · t] / d.",
              "Coefficient of Thermal Conductivity (k): Quantity of heat flowing per second through unit area of a material of unit thickness under unit temperature difference in steady state: k = (Q · d) / [A · (θ1 - θ2) · t] (Unit: W/(m·K) or J/(s·m·°C)).",
              "Temperature Gradient: Rate of fall of temperature with distance along direction of heat flow = (θ1 - θ2) / d (Unit: °C/m or K/m).",
              "Newton's Law of Cooling: Rate of loss of heat by radiation/convection from a hot body is directly proportional to the temperature excess of the body over its surroundings, provided the difference is small (< 30°C): dQ/dt = -K · (θ - θ₀).",
            ],
            formulas: [
              "Temperature Scale Interrelation: C / 5 = (F - 32) / 9 = (K - 273.15) / 5",
              "Celsius to Kelvin: K = °C + 273.15",
              "Fahrenheit to Celsius: °C = 5/9 · (°F - 32)",
              "Thermal Conduction Heat Flow: Q = [k · A · (θ1 - θ2) · t] / d",
              "Thermal Conductivity: k = (Q · d) / [A · (θ1 - θ2) · t]",
              "Temperature Gradient = (θ1 - θ2) / d  (K/m or °C/m)",
              "Rate of Heat Flow: dQ/dt = [k · A · (θ1 - θ2)] / d",
              "Newton's Law of Cooling: dθ/dt = -k' · (θ - θ₀)",
            ],
            solvedExample: {
              question:
                "An iron plate of thickness 2 cm and cross-sectional area 0.5 m² has its opposite faces maintained at 100°C and 40°C. If coefficient of thermal conductivity of iron is 60 W/(m·K), calculate: (i) Temperature gradient, (ii) Quantity of heat conducted through the plate in 10 minutes.",
              steps: [
                "Step 1: Identify given parameters in SI units:",
                "Thickness d = 2 cm = 0.02 m",
                "Area A = 0.5 m²",
                "Temperatures: θ1 = 100°C, θ2 = 40°C => (θ1 - θ2) = 60°C = 60 K",
                "Thermal conductivity k = 60 W/(m·K)",
                "Time t = 10 min = 10 × 60 = 600 seconds",
                "Step 2: Calculate Temperature Gradient:",
                "Temperature Gradient = (θ1 - θ2) / d = 60 / 0.02 = 3000 K/m (or °C/m).",
                "Step 3: Calculate Heat Conduction (Q = k · A · (θ1 - θ2) · t / d):",
                "Q = (60 × 0.5 × 60 × 600) / 0.02",
                "Q = 1,080,000 / 0.02 = 54,000,000 Joules = 54 MJ.",
              ],
              answer: "Temperature gradient = 3000 K/m; Heat transferred in 10 min = 54 MJ (5.4 × 10⁷ J).",
            },
            examTip:
              "MSBTE regular problem: 'Convert 100°F into °C and K' or 'At what temperature are Celsius and Fahrenheit readings identical?' (Answer is -40°).",
          },
          {
            sectionTitle: "3.2 Gas Laws & Specific Heat Capacities (Cp, Cv & Mayer's Relation)",
            summary:
              "Thermodynamic behavior of gases is described by gas laws. Because gases expand significantly upon heating, they possess two distinct specific heat capacities related by Mayer's equation.",
            keyPoints: [
              "Boyle's Law: For a fixed mass of gas kept at constant temperature, pressure is inversely proportional to volume: P ∝ 1/V => P1·V1 = P2·V2 = Constant.",
              "Charles's Law: For a fixed mass of gas kept at constant pressure, volume is directly proportional to absolute temperature: V ∝ T => V1 / T1 = V2 / T2 = Constant.",
              "Gay-Lussac's (Pressure) Law: For a fixed mass of gas kept at constant volume, pressure is directly proportional to absolute temperature: P ∝ T => P1 / T1 = P2 / T2 = Constant.",
              "Ideal Gas Equation: Combining all three gas laws yields: (P · V) / T = Constant = n · R  =>  P · V = n · R · T (where n is number of moles and R = 8.314 J/(mol·K) is Universal Gas Constant).",
              "Specific Heat Capacity of Gases: Solids and liquids have negligible expansion, so they have one specific heat. Gases expand greatly upon heating, so specific heat depends on heating conditions:",
              "(1) Specific Heat at Constant Volume (Cv): Amount of heat required to raise temperature of unit mass (1 kg) of gas by 1 K (or 1°C) keeping volume constant (No external work done; all heat increases internal energy).",
              "(2) Specific Heat at Constant Pressure (Cp): Amount of heat required to raise temperature of unit mass (1 kg) of gas by 1 K keeping pressure constant (Heat increases internal energy PLUS performs external mechanical work of expansion W = P·ΔV).",
              "Why Cp > Cv: When gas is heated at constant pressure, it expands against atmosphere. Heat supplied must both increase internal energy (like Cv) and do external work (P·ΔV). Therefore, Cp is always greater than Cv.",
              "Mayer's Relation: Difference between two principal molar specific heats equals the universal gas constant: Cp - Cv = R / J (or Cp - Cv = R when all terms are in Joules).",
              "Adiabatic Ratio (γ): Ratio of specific heats: γ = Cp / Cv (γ = 1.40 for air and diatomic gases; γ = 1.66 for monatomic gases).",
            ],
            formulas: [
              "Boyle's Law: P1 · V1 = P2 · V2  (T = constant)",
              "Charles's Law: V1 / T1 = V2 / T2  (P = constant)",
              "Gay-Lussac's Law: P1 / T1 = P2 / T2  (V = constant)",
              "Ideal Gas Law: P · V = n · R · T",
              "Mayer's Equation: Cp - Cv = R / J",
              "Ratio of Specific Heats: γ = Cp / Cv",
              "Work Done in Isobaric Expansion: W = P · (V2 - V1)",
            ],
            solvedExample: {
              question:
                "A cylinder contains 0.05 m³ of gas at a pressure of 2 × 10⁵ N/m² and temperature 27°C. If the gas is heated at constant pressure until its temperature reaches 127°C, calculate: (i) Final volume of gas (using Charles's law), (ii) Work done by the gas during expansion.",
              steps: [
                "Step 1: Convert temperatures to absolute Kelvin:",
                "T1 = 27°C + 273 = 300 K",
                "T2 = 127°C + 273 = 400 K",
                "Initial volume V1 = 0.05 m³; Pressure P = 2 × 10⁵ N/m² (constant).",
                "Step 2: Apply Charles's Law (V1 / T1 = V2 / T2):",
                "V2 = V1 · (T2 / T1) = 0.05 × (400 / 300) = 0.05 × 1.333 ≈ 0.0667 m³.",
                "Step 3: Calculate Work Done (W = P · ΔV):",
                "ΔV = V2 - V1 = 0.0667 - 0.0500 = 0.0167 m³",
                "W = 2 × 10⁵ × 0.0167 = 3340 Joules.",
              ],
              answer: "Final volume V2 = 0.0667 m³; Work done by gas = 3340 Joules.",
            },
            examTip:
              "MSBTE 4-mark question: 'Explain why Cp is greater than Cv and state Mayer's relation'. Always mention external work of expansion (P·ΔV).",
          },
          {
            sectionTitle: "3.3 Optics, Total Internal Reflection & Optical Fiber Communication",
            summary:
              "Optical fibers revolutionize modern telecommunications by guiding laser signals with high bandwidth and zero electromagnetic interference using Total Internal Reflection.",
            keyPoints: [
              "Refraction & Snell's Law: When light passes from medium 1 to medium 2, the ratio of sine of incidence angle to sine of refraction angle equals refractive index: μ = sin i / sin r = v1 / v2 = n2 / n1.",
              "Total Internal Reflection (TIR): Complete reflection of a ray of light back into denser medium at interface with rarer medium. Two Mandatory Conditions: (1) Light must travel from an optically denser medium to an optically rarer medium (n1 > n2). (2) Angle of incidence in denser medium must exceed the critical angle (i > θc).",
              "Critical Angle (θc): Angle of incidence in denser medium for which angle of refraction in rarer medium is exactly 90°: sin θc = n2 / n1 = 1 / μ (when rarer medium is air/vacuum).",
              "Structure of Optical Fiber:",
              "(1) Core: Central dielectric cylinder made of high-purity silica glass or plastic with higher refractive index (n1 ≈ 1.48 to 1.60). Light propagates through this core.",
              "(2) Cladding: Outer concentric cylindrical layer of lower refractive index (n2 ≈ 1.45 to 1.55, where n1 > n2). Keeps light trapped inside core by TIR.",
              "(3) Protective Buffer Jacket: Polyurethane/Kevlar coating protecting glass fiber against moisture, tensile bending stress, and physical crushing.",
              "Acceptance Angle (θa): Maximum half-angle of the entrance cone within which light launched into fiber core will strike core-cladding boundary at angle greater than critical angle and propagate via TIR: sin θa = √(n1² - n2²)  =>  θa = sin⁻¹(√(n1² - n2²)).",
              "Numerical Aperture (NA): Dimensionless figure of merit measuring the light-gathering capacity of the fiber: NA = sin θa = √(n1² - n2²).",
              "Fractional Refractive Index Change (Δ): Δ = (n1 - n2) / n1. Relation with NA: NA ≈ n1 · √(2Δ).",
              "Classification of Optical Fibers:",
              "(1) Step-Index Fiber: Uniform refractive index in core, abrupt step decrease at cladding interface. Suffers from modal dispersion.",
              "(2) Graded-Index (GRIN) Fiber: Core refractive index decreases smoothly as parabola from center towards cladding. Drastically reduces dispersion.",
              "(3) Single-Mode Fiber (SMF): Extremely thin core diameter (8-10 μm). Supports only 1 light path (mode), zero intermodal dispersion, ideal for transoceanic & long-haul telecom.",
              "(4) Multi-Mode Fiber (MMF): Larger core diameter (50-62.5 μm). Supports thousands of propagation paths, used in short LAN networks.",
              "Advantages of Optical Fibers: (1) Enormous information-carrying bandwidth (terabits/sec), (2) Complete immunity to electromagnetic interference (EMI) & lightning, (3) Lightweight and flexible, (4) Zero electrical spark/fire hazard, (5) Highly secure against eavesdropping/wiretapping.",
            ],
            formulas: [
              "Snell's Law: sin i / sin r = n2 / n1",
              "Critical Angle: sin θc = n2 / n1  =>  θc = sin⁻¹(n2 / n1)",
              "Critical Angle in Air (n2 = 1): sin θc = 1 / n1",
              "Numerical Aperture: NA = √(n1² - n2²)",
              "Acceptance Angle: θa = sin⁻¹(NA) = sin⁻¹(√(n1² - n2²))",
              "Acceptance Cone Angle = 2 · θa",
              "Fractional Index Change: Δ = (n1 - n2) / n1",
              "Approximation: NA ≈ n1 · √(2Δ)",
            ],
            solvedExample: {
              question:
                "An optical fiber has a core of refractive index 1.52 and cladding of refractive index 1.46. Calculate: (i) Critical angle at core-cladding boundary, (ii) Numerical Aperture (NA), (iii) Acceptance angle in air, (iv) Acceptance cone angle.",
              steps: [
                "Step 1: Identify refractive indices:",
                "Core index n1 = 1.52",
                "Cladding index n2 = 1.46",
                "Step 2: Calculate Critical Angle (θc):",
                "sin θc = n2 / n1 = 1.46 / 1.52 = 0.9605",
                "θc = sin⁻¹(0.9605) ≈ 73.84°.",
                "Step 3: Calculate Numerical Aperture (NA):",
                "NA = √(n1² - n2²) = √((1.52)² - (1.46)²)",
                "NA = √(2.3104 - 2.1316) = √0.1788 ≈ 0.4228.",
                "Step 4: Calculate Acceptance Angle (θa):",
                "sin θa = NA = 0.4228",
                "θa = sin⁻¹(0.4228) ≈ 25.01°.",
                "Step 5: Full Acceptance Cone Angle:",
                "Cone Angle = 2 · θa = 2 × 25.01° = 50.02°.",
              ],
              answer: "Critical Angle = 73.84°, NA = 0.4228, Acceptance Angle = 25.01°, Acceptance Cone = 50.02°.",
            },
            examTip:
              "MSBTE numericals on Numerical Aperture and Acceptance Angle appear in almost EVERY exam paper! Memorize: NA = √(n1² - n2²) and θa = sin⁻¹(NA). Always check n1 > n2.",
          },
        ],
        quickRevisionPoints: [
          "Celsius and Fahrenheit scales match at -40° (i.e. -40°C = -40°F).",
          "Conduction takes place in solids; Convection in liquids/gases; Radiation requires no medium (speed = 3 × 10⁸ m/s).",
          "Cp is always greater than Cv because gas expands against external pressure at constant pressure (Mayer's equation: Cp - Cv = R/J).",
          "In an optical fiber, Core has higher refractive index (n1) than Cladding (n2): n1 > n2.",
          "Total internal reflection requires: (1) Denser to rarer medium, (2) Angle of incidence > critical angle.",
          "Numerical Aperture NA = √(n1² - n2²) and Acceptance Angle θa = sin⁻¹(NA).",
        ],
        mcqs: [
          {
            id: 301,
            question: "At what temperature do Celsius and Fahrenheit thermometer scales show identical readings?",
            options: ["0°", "32°", "-40°", "100°"],
            correctAnswer: 2,
            explanation: "Substituting C = F in C/5 = (F-32)/9 gives C/5 = (C-32)/9 => 9C = 5C - 160 => 4C = -160 => C = -40°.",
          },
          {
            id: 302,
            question: "Which mode of heat transfer can take place through a complete vacuum?",
            options: ["Conduction", "Convection", "Radiation", "None of these"],
            correctAnswer: 2,
            explanation: "Radiation transfers heat via electromagnetic infrared waves at the speed of light without requiring any material medium.",
          },
          {
            id: 303,
            question: "According to Boyle's law, for a given mass of gas at constant temperature:",
            options: ["P · V = Constant", "P / V = Constant", "V / T = Constant", "P / T = Constant"],
            correctAnswer: 0,
            explanation: "Boyle's law states that pressure is inversely proportional to volume (P ∝ 1/V), meaning P · V = constant.",
          },
          {
            id: 304,
            question: "Mayer's relation between the two specific heats of an ideal gas is given by:",
            options: ["Cp + Cv = R", "Cp - Cv = R/J", "Cp / Cv = R", "Cv - Cp = R/J"],
            correctAnswer: 1,
            explanation: "Mayer's relation is Cp - Cv = R/J (or Cp - Cv = R in consistent units).",
          },
          {
            id: 305,
            question: "For Total Internal Reflection (TIR) to occur, light must travel from:",
            options: ["Rarer to denser medium", "Denser to rarer medium", "Air to water", "Vacuum to glass"],
            correctAnswer: 1,
            explanation: "TIR can only happen when light travels from an optically denser medium towards an optically rarer medium and angle of incidence exceeds critical angle.",
          },
          {
            id: 306,
            question: "The formula for Numerical Aperture (NA) of an optical fiber with core index n1 and cladding index n2 is:",
            options: ["√(n1² - n2²)", "√(n1² + n2²)", "n1 - n2", "(n1 + n2) / 2"],
            correctAnswer: 0,
            explanation: "Numerical Aperture NA = √(n1² - n2²), which determines the light-gathering capacity of the fiber.",
          },
        ],
      },
    ],
  },

  "Mathematics": {
    courseCode: "311302",
    subjectTitle: "Basic Mathematics (BMS)",
    noteTag: "Basic Mathematics Notes",
    units: [
      {
        unitNumber: 1,
        unitTitle: "Logarithms",
        overview:
          "Logarithms are the inverse operations to exponentiation. They transform complex multiplication and division operations into simple additions and subtractions.",
        sections: [
          {
            sectionTitle: "1. Definition and Fundamental Laws",
            summary:
              "If a^x = N (where a > 0, a ≠ 1, and N > 0), then x is called the logarithm of N to the base a, denoted as log_a(N) = x.",
            keyPoints: [
              "Product Rule: log_a(m · n) = log_a(m) + log_a(n)",
              "Quotient Rule: log_a(m / n) = log_a(m) - log_a(n)",
              "Power Rule: log_a(m^k) = k · log_a(m)",
              "Change of Base Theorem: log_b(a) = log_c(a) / log_c(b)",
              "Standard Values: log_a(1) = 0 and log_a(a) = 1",
            ],
            formulas: [
              "log_a(m · n) = log_a(m) + log_a(n)",
              "log_a(m / n) = log_a(m) - log_a(n)",
              "log_a(m^p) = p · log_a(m)",
              "log_b(a) · log_a(b) = 1",
            ],
            solvedExample: {
              question:
                "If log[(x + y)/3] = (1/2)(log x + log y), prove that (x/y) + (y/x) = 7.",
              steps: [
                "Step 1: Multiply both sides by 2: 2 · log[(x + y)/3] = log x + log y",
                "Step 2: Apply power rule on LHS and product rule on RHS: log[((x + y)/3)^2] = log(x · y)",
                "Step 3: Remove logarithms from both sides: ((x + y)/3)^2 = x · y",
                "Step 4: Expand the numerator and denominator: (x^2 + 2xy + y^2)/9 = xy",
                "Step 5: Cross-multiply: x^2 + 2xy + y^2 = 9xy",
                "Step 6: Subtract 2xy: x^2 + y^2 = 7xy",
                "Step 7: Divide both sides by xy: (x^2 / xy) + (y^2 / xy) = 7  =>  (x/y) + (y/x) = 7.",
              ],
              answer: "Hence proved that (x/y) + (y/x) = 7.",
            },
            examTip:
              "In MSBTE exams, questions on 'log[(x+y)/k]' appear frequently for 4 marks. Always multiply by 2 first to eliminate the 1/2 fraction.",
          },
        ],
        quickRevisionPoints: [
          "log(1) is always 0 for any positive non-unit base.",
          "logarithm of negative numbers is undefined in real numbers.",
          "Characteristic is the integral part; Mantissa is always positive fractional part.",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Determinants and Matrices",
        overview:
          "Determinants are scalar values computed from square matrices. Matrices provide systematic tools to solve engineering systems of linear equations.",
        sections: [
          {
            sectionTitle: "1. Cramer's Rule for Solving Linear Equations",
            summary:
              "A system of three linear equations a1x + b1y + c1z = d1 can be solved uniquely if determinant D ≠ 0.",
            keyPoints: [
              "Calculate determinant D using the coefficients of x, y, and z.",
              "Calculate Dx by replacing column 1 of D with constants [d1, d2, d3]ᵀ.",
              "Calculate Dy by replacing column 2 of D with constants [d1, d2, d3]ᵀ.",
              "Calculate Dz by replacing column 3 of D with constants [d1, d2, d3]ᵀ.",
              "Values: x = Dx / D, y = Dy / D, z = Dz / D.",
            ],
            formulas: [
              "D = |a1 b1 c1; a2 b2 c2; a3 b3 c3|",
              "x = Dx / D,  y = Dy / D,  z = Dz / D  (where D ≠ 0)",
            ],
            solvedExample: {
              question: "Solve using Cramer's Rule: x + y + z = 6,  x - y + z = 2,  2x + y - z = 1.",
              steps: [
                "Step 1: Compute D = |1 1 1; 1 -1 1; 2 1 -1| = 1(1 - 1) - 1(-1 - 2) + 1(1 - (-2)) = 0 + 3 + 3 = 6 ≠ 0.",
                "Step 2: Compute Dx = |6 1 1; 2 -1 1; 1 1 -1| = 6(1 - 1) - 1(-2 - 1) + 1(2 - (-1)) = 0 + 3 + 3 = 6.",
                "Step 3: Compute Dy = |1 6 1; 1 2 1; 2 1 -1| = 1(-2 - 1) - 6(-1 - 2) + 1(1 - 4) = -3 + 18 - 3 = 12.",
                "Step 4: Compute Dz = |1 1 6; 1 -1 2; 2 1 1| = 1(-1 - 2) - 1(1 - 4) + 6(1 - (-2)) = -3 + 3 + 18 = 18.",
                "Step 5: x = Dx/D = 6/6 = 1;  y = Dy/D = 12/6 = 2;  z = Dz/D = 18/6 = 3.",
              ],
              answer: "Solution: x = 1, y = 2, z = 3.",
            },
            examTip:
              "Always substitute (x, y, z) back into the first original equation to verify your answer in the exam hall!",
          },
          {
            sectionTitle: "2. Matrix Inversion Method",
            summary:
              "For a non-singular square matrix A (|A| ≠ 0), its inverse exists such that A · A⁻¹ = I. Inverse is calculated as A⁻¹ = (1 / |A|) · adj(A).",
            keyPoints: [
              "Singular matrix has |A| = 0; Non-singular matrix has |A| ≠ 0.",
              "adj(A) is the transpose of the matrix of cofactors: C = [Cij]ᵀ.",
              "For solving system AX = B, solution is X = A⁻¹ · B.",
            ],
            formulas: ["A⁻¹ = (1 / |A|) · adj(A)", "adj(A) = [Cij]ᵀ", "A · adj(A) = |A| · I"],
          },
        ],
        quickRevisionPoints: [
          "(AB)⁻¹ = B⁻¹ · A⁻¹ (Reversal law for inverse).",
          "(AB)ᵀ = Bᵀ · Aᵀ (Reversal law for transpose).",
          "If |A| = 0, the matrix is singular and its inverse does not exist.",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Trigonometry",
        overview:
          "Trigonometry deals with relations of the sides and angles of triangles and with the relevant functions of any angles.",
        sections: [
          {
            sectionTitle: "1. Compound, Multiple & Sub-Multiple Angles",
            summary: "Formulas relating trigonometric functions of sum and difference of angles.",
            keyPoints: [
              "sin(A ± B) = sin A cos B ± cos A sin B",
              "cos(A ± B) = cos A cos B ∓ sin A sin B",
              "tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)",
              "sin 2A = 2 sin A cos A = (2 tan A) / (1 + tan² A)",
              "cos 2A = cos² A - sin² A = 2 cos² A - 1 = 1 - 2 sin² A = (1 - tan² A) / (1 + tan² A)",
              "1 + cos 2A = 2 cos² A;  1 - cos 2A = 2 sin² A",
            ],
            formulas: [
              "sin 2θ = 2 sin θ cos θ",
              "cos 2θ = cos² θ - sin² θ = 2 cos² θ - 1",
              "tan 2θ = 2 tan θ / (1 - tan² θ)",
              "1 + cos 2θ = 2 cos² θ",
              "1 - cos 2θ = 2 sin² θ",
            ],
            solvedExample: {
              question: "Prove that: (sin 2θ) / (1 + cos 2θ) = tan θ.",
              steps: [
                "Step 1: Take LHS = (sin 2θ) / (1 + cos 2θ)",
                "Step 2: Use multiple angle formula for numerator: sin 2θ = 2 sin θ cos θ",
                "Step 3: Use half angle identity for denominator: 1 + cos 2θ = 2 cos² θ",
                "Step 4: LHS = (2 sin θ cos θ) / (2 cos² θ)",
                "Step 5: Cancel 2 and one cos θ factor: LHS = sin θ / cos θ = tan θ = RHS.",
              ],
              answer: "Hence proved LHS = RHS.",
            },
          },
        ],
        quickRevisionPoints: [
          "All-Silver-Tea-Cups (ASTC) rule determines positive signs across quadrants I, II, III, IV.",
          "sin(-θ) = -sin θ, while cos(-θ) = +cos θ.",
        ],
      },
      {
        unitNumber: 4,
        unitTitle: "Straight Line",
        overview:
          "Analytic geometry of straight lines in Cartesian coordinates, establishing equations for engineering alignments.",
        sections: [
          {
            sectionTitle: "1. Forms of Equations of a Line",
            summary: "Different mathematical forms to represent a line in 2D coordinate space.",
            keyPoints: [
              "Slope (m) = tan θ = (y2 - y1) / (x2 - x1)",
              "Slope-Point Form: y - y1 = m(x - x1)",
              "Two-Point Form: (y - y1) / (y2 - y1) = (x - x1) / (x2 - x1)",
              "Slope-Intercept Form: y = mx + c",
              "Intercept Form: x/a + y/b = 1",
              "Condition for Parallel Lines: m1 = m2",
              "Condition for Perpendicular Lines: m1 · m2 = -1",
            ],
            formulas: [
              "m = (y2 - y1) / (x2 - x1)",
              "y - y1 = m(x - x1)",
              "d = |a·x1 + b·y1 + c| / √(a² + b²)",
            ],
            solvedExample: {
              question:
                "Find the perpendicular distance from point P(2, -3) to the line 3x - 4y + 7 = 0.",
              steps: [
                "Step 1: Line equation is 3x - 4y + 7 = 0 where a = 3, b = -4, c = 7.",
                "Step 2: Point coordinates are x1 = 2, y1 = -3.",
                "Step 3: Formula: d = |a·x1 + b·y1 + c| / √(a² + b²).",
                "Step 4: Numerator = |3(2) - 4(-3) + 7| = |6 + 12 + 7| = |25| = 25.",
                "Step 5: Denominator = √(3² + (-4)²) = √(9 + 16) = √25 = 5.",
                "Step 6: d = 25 / 5 = 5 units.",
              ],
              answer: "Perpendicular distance is 5 units.",
            },
          },
        ],
        quickRevisionPoints: [
          "Distance between parallel lines ax + by + c1 = 0 and ax + by + c2 = 0 is |c1 - c2| / √(a² + b²).",
          "Line perpendicular to ax + by + c = 0 is bx - ay + k = 0.",
        ],
      },
      {
        unitNumber: 5,
        unitTitle: "Differential Calculus",
        overview:
          "Differential calculus evaluates rates of change, slopes of tangents, and velocities in physical processes.",
        sections: [
          {
            sectionTitle: "1. Rules of Differentiation",
            summary: "Standard formulas and algebraic rules for differentiation.",
            keyPoints: [
              "d/dx(x^n) = n · x^(n-1)",
              "d/dx(sin x) = cos x,  d/dx(cos x) = -sin x,  d/dx(tan x) = sec² x",
              "d/dx(e^x) = e^x,  d/dx(a^x) = a^x · ln a,  d/dx(ln x) = 1/x",
              "Product Rule (UV Rule): d/dx(u · v) = u · (dv/dx) + v · (du/dx)",
              "Quotient Rule (U/V Rule): d/dx(u / v) = [v · (du/dx) - u · (dv/dx)] / v²",
              "Chain Rule: dy/dx = (dy/du) · (du/dx)",
            ],
            formulas: [
              "d/dx(u · v) = u · v' + v · u'",
              "d/dx(u / v) = (v · u' - u · v') / v²",
              "d/dx[f(g(x))] = f'(g(x)) · g'(x)",
            ],
            solvedExample: {
              question: "Differentiate y = (x² + 1) · sin x with respect to x.",
              steps: [
                "Step 1: Identify u = x² + 1 and v = sin x.",
                "Step 2: Differentiate u: du/dx = 2x.",
                "Step 3: Differentiate v: dv/dx = cos x.",
                "Step 4: Apply product rule: dy/dx = u(dv/dx) + v(du/dx).",
                "Step 5: Substitute: dy/dx = (x² + 1) · cos x + sin x · (2x).",
                "Step 6: Simplify: dy/dx = (x² + 1)cos x + 2x sin x.",
              ],
              answer: "dy/dx = (x² + 1) cos x + 2x sin x.",
            },
          },
        ],
        quickRevisionPoints: [
          "Derivative of any constant is zero.",
          "If y = log(sec x + tan x), then dy/dx = sec x (classic MSBTE 2-mark question).",
        ],
      },
      {
        unitNumber: 6,
        unitTitle: "Statistics",
        overview:
          "Statistical measures quantify variability and spread in engineering quality control.",
        sections: [
          {
            sectionTitle: "1. Measures of Dispersion & Coefficient of Variation",
            summary: "Calculations for Standard Deviation and comparison of consistency using C.V.",
            keyPoints: [
              "Range = Maximum Value (L) - Minimum Value (S)",
              "Standard Deviation (σ) = √[ ∑f(x - x̄)² / N ]",
              "Variance = σ²",
              "Coefficient of Variation (C.V.) = (σ / x̄) · 100%",
              "Rule: The series with smaller C.V. is more consistent, stable, and reliable.",
            ],
            formulas: [
              "σ = √[ (∑fx² / N) - (∑fx / N)² ]",
              "C.V. = (σ / x̄) × 100",
            ],
            solvedExample: {
              question:
                "Two factories A and B produce steel rods. Factory A has mean length 50 cm and σ = 5. Factory B has mean length 40 cm and σ = 3. Which factory is more consistent?",
              steps: [
                "Step 1: Calculate C.V. for Factory A: C.V.(A) = (σ_A / x̄_A) · 100 = (5 / 50) · 100 = 10%.",
                "Step 2: Calculate C.V. for Factory B: C.V.(B) = (σ_B / x̄_B) · 100 = (3 / 40) · 100 = 7.5%.",
                "Step 3: Compare: C.V.(B) < C.V.(A).",
                "Step 4: Factory B has smaller C.V., indicating lower variability.",
              ],
              answer: "Factory B is more consistent in production.",
            },
          },
        ],
        quickRevisionPoints: [
          "Variance is the square of standard deviation.",
          "C.V. has no units because it is a percentage ratio.",
        ],
      },
    ],
  },

  "Chemistry": {
    courseCode: "311305 (Section II)",
    subjectTitle: "Basic Science (Chemistry)",
    noteTag: "Basic Chemistry Notes",
    units: [
      {
        unitNumber: 1,
        unitTitle: "Chemical Bonding and Catalysis",
        overview:
          "Investigates ionic/covalent bond formation and catalysts that accelerate industrial manufacturing.",
        sections: [
          {
            sectionTitle: "1. Chemical Bonds & Catalysts",
            summary: "Electronic configuration drives atoms to achieve stable octet configurations.",
            keyPoints: [
              "Electrovalent (Ionic) Bond: Complete transfer of one or more valence electrons from metal to non-metal (e.g. Na⁺ + Cl⁻ -> NaCl). Characterized by high melting points, non-directional bonds, and conduct electricity in molten state.",
              "Covalent Bond: Mutual sharing of electron pairs between non-metals (e.g. Cl2, CH4). Characterized by lower melting points, directional bonds, non-conductors.",
              "Coordinate (Dative) Bond: Shared pair of electrons contributed by one atom only (e.g. NH4⁺, H3O⁺).",
              "Catalyst: A substance that alters the speed of a chemical reaction without undergoing permanent chemical change.",
              "Positive Catalyst increases reaction rate by lowering activation energy (e.g. Fe in Haber ammonia synthesis).",
              "Negative Catalyst (Inhibitor) decreases reaction rate (e.g. Glycerol in decomposition of H2O2).",
            ],
          },
        ],
        quickRevisionPoints: [
          "Catalysts do not alter the equilibrium state or ΔG of a reaction.",
          "Hydrogen bonding accounts for the high boiling point of water (100°C).",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Metals, Alloys and Electrochemistry",
        overview:
          "Metallurgical smelting, engineering alloys (steels, brass), and Faraday's laws of electrolysis.",
        sections: [
          {
            sectionTitle: "1. Faraday's Laws & Alloys",
            summary: "Electrochemical equivalence and alloy compositions.",
            keyPoints: [
              "Faraday's 1st Law: Mass of substance deposited (W) is directly proportional to quantity of electricity (Q = I · t): W = Z · I · t (where Z is Electrochemical Equivalent in g/C).",
              "Faraday's 2nd Law: When same quantity of electricity passes through different electrolytes, masses deposited are proportional to chemical equivalents: W1 / W2 = E1 / E2.",
              "Steel: Iron-carbon alloy (0.15% to 1.5% Carbon). Stainless Steel: 18% Chromium, 8% Nickel, remainder Iron.",
              "Brass: Alloy of Copper (60-80%) and Zinc (20-40%).",
              "Bronze: Alloy of Copper (80-90%) and Tin (10-20%).",
              "Duralumin: 95% Aluminum, 4% Copper, 0.5% Magnesium, 0.5% Manganese (Lightweight for aircraft).",
            ],
            formulas: ["W = Z · I · t", "W = (E / 96500) · I · t", "1 Faraday ≈ 96,500 Coulombs"],
            solvedExample: {
              question:
                "Calculate the mass of copper deposited on cathode when current of 2 Amperes passes through CuSO4 solution for 30 minutes (ECE of Cu = 0.000329 g/C).",
              steps: [
                "Step 1: Current I = 2 A.",
                "Step 2: Time t = 30 minutes = 30 × 60 = 1800 seconds.",
                "Step 3: Total charge Q = I · t = 2 × 1800 = 3600 Coulombs.",
                "Step 4: Formula: W = Z · I · t = Z · Q.",
                "Step 5: W = 0.000329 × 3600 = 1.1844 grams.",
              ],
              answer: "Mass of copper deposited = 1.184 grams.",
            },
          },
        ],
        quickRevisionPoints: [
          "Electroplating deposits a noble metal on an active base metal to prevent corrosion.",
          "In electroplating, article to be plated is always made the CATHODE.",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Water Treatment and Corrosion",
        overview:
          "Hardness chemistry, boiler problems, and electrochemical mechanisms of rusting and prevention.",
        sections: [
          {
            sectionTitle: "1. Water Hardness & Corrosion Mechanisms",
            summary: "Causes of hardness and mitigation techniques.",
            keyPoints: [
              "Temporary Hardness: Due to dissolved Bicarbonates of Calcium and Magnesium [Ca(HCO3)2, Mg(HCO3)2]. Removed by boiling.",
              "Permanent Hardness: Due to dissolved Chlorides and Sulfates of Calcium and Magnesium [CaCl2, CaSO4, MgCl2, MgSO4]. Removed by Zeolite or Ion-Exchange.",
              "EDTA Method: Titrated at pH 10 (Ammonia buffer) using Eriochrome Black-T (EBT) indicator. Color changes Wine Red to Steel Blue at endpoint.",
              "Electrochemical Corrosion (Wet): Occurs when two dissimilar metals are in contact with moisture. Anode oxidizes (corrodes): M -> Mⁿ⁺ + ne⁻.",
              "Galvanizing: Coating iron with Zinc. Zinc acts as sacrificial anode because it has higher oxidation potential.",
              "Tinning: Coating iron with Tin. Provides protective barrier.",
            ],
          },
        ],
        quickRevisionPoints: [
          "Degree of hardness is expressed in parts per million (ppm) or mg/L equivalent of CaCO3.",
          "Cathodic protection uses sacrificial zinc or magnesium anodes.",
        ],
      },
      {
        unitNumber: 4,
        unitTitle: "Paints, Polymers and Lubricants",
        overview:
          "Polymer classifications, protective paint formulations, and industrial lubricating mechanisms.",
        sections: [
          {
            sectionTitle: "1. Polymers and Lubricants",
            summary: "Molecular synthesis and wear-reduction mechanisms.",
            keyPoints: [
              "Thermoplastics: Soften upon heating and solidify upon cooling repeatedly; linear chains with weak intermolecular forces (e.g. Polythene, PVC).",
              "Thermosetting Plastics: Undergo cross-linking on heating and permanently set; cannot be remolded (e.g. Bakelite, Melamine).",
              "Paints Constituents: Pigment (provides color/opacity), Vehicle (linseed oil, binds and forms film), Thinner (turpentine, reduces viscosity), Drier (cobalt naphthenate, accelerates drying).",
              "Lubrication Mechanisms: Fluid Film (thick film prevents contact) and Thin Film (boundary lubrication under heavy loads).",
              "Viscosity Index: Measure of change in viscosity with temperature. Higher VI indicates less viscosity change over wide temperature ranges.",
            ],
          },
        ],
        quickRevisionPoints: [
          "Flash point is the lowest temperature at which oil gives off ignitable vapors.",
          "Fire point is the lowest temperature at which vapor continues to burn for at least 5 seconds.",
        ],
      },
    ],
  },

  "Communication Skills (English)": {
    courseCode: "311303",
    subjectTitle: "Communication Skills (English)",
    noteTag: "Communication Skills Notes",
    units: [
      {
        unitNumber: 1,
        unitTitle: "Vocabulary Building and Word Formation",
        overview:
          "Expands technical vocabulary through root words, affixes, synonyms, and engineering terminology.",
        sections: [
          {
            sectionTitle: "1. Word Formation Techniques",
            summary: "Systematic formation of technical words using roots, prefixes, and suffixes.",
            keyPoints: [
              "Prefixes change word meaning: 'hyper-' (excessive, e.g. hypertension), 'sub-' (under, e.g. submarine), 'micro-' (small, e.g. microcontroller).",
              "Suffixes change grammatical category: '-ation' makes nouns (automate -> automation), '-ize' makes verbs (standard -> standardize).",
              "Collocations: Words that naturally co-occur (e.g. 'conduct an experiment', 'raise a query', 'pay attention', not 'do an experiment').",
              "Homophones: Words with same sound but different spelling/meaning (e.g. Site: location, Sight: vision, Cite: to quote).",
            ],
          },
        ],
        quickRevisionPoints: [
          "Technical vocabulary requires precision and avoidance of ambiguous slang.",
          "Prefix 'de-' denotes removal or reversal (e.g. defrost, demagnetize).",
        ],
      },
      {
        unitNumber: 2,
        unitTitle: "Paragraph Writing & Technical Summaries",
        overview:
          "Developing structured paragraphs with clear topic sentences and transitional connectors.",
        sections: [
          {
            sectionTitle: "1. Anatomy of a Well-Structured Paragraph",
            summary: "Paragraphs require three essential parts: Topic sentence, Supporting sentences, and Concluding statement.",
            keyPoints: [
              "Topic Sentence: States the central controlling idea of the paragraph clearly.",
              "Supporting Sentences: Provide specific evidence, statistics, examples, and technical descriptions.",
              "Concluding Sentence: Summarizes the key point or provides logical transition to the next theme.",
              "Coherence Markers: 'Furthermore', 'Consequently', 'On the other hand', 'Specifically', 'In summary'.",
            ],
          },
        ],
        quickRevisionPoints: [
          "Unity means discussing one single central theme per paragraph.",
          "Coherence ensures logical flow connecting each sentence seamlessly.",
        ],
      },
      {
        unitNumber: 3,
        unitTitle: "Communicative English & Dialogues",
        overview:
          "Principles of the communication cycle, barriers to effective speech, and professional dialogues.",
        sections: [
          {
            sectionTitle: "1. Communication Cycle & Overcoming Barriers",
            summary: "Understanding the flow of messages between engineers.",
            keyPoints: [
              "The Communication Cycle: Sender -> Encoding -> Message -> Channel/Medium -> Receiver -> Decoding -> Feedback.",
              "Feedback is the most critical element: it confirms whether message was understood accurately.",
              "Physical Barriers: Noise, distance, faulty equipment, network distortion.",
              "Linguistic Barriers: Jargon overload, ambiguous wording, vocabulary mismatch.",
              "Psychological Barriers: Preconceptions, anger, lack of attention, defensiveness.",
            ],
          },
        ],
        quickRevisionPoints: [
          "Non-verbal communication accounts for over 65% of interpersonal impression.",
          "Kinesics refers to body language, gestures, posture, and facial expressions.",
        ],
      },
      {
        unitNumber: 4,
        unitTitle: "Applied Grammar & Technical Syntax",
        overview:
          "Grammatical mechanics for engineering documentation, reports, and instructions.",
        sections: [
          {
            sectionTitle: "1. Active vs. Passive Voice in Technical Writing",
            summary: "Passive voice is preferred in scientific and lab procedure reports because the action and object are more important than the agent.",
            keyPoints: [
              "Active Voice: Subject performs the action (e.g. 'The technician checked the circuit').",
              "Passive Voice: Action is done to the subject (e.g. 'The circuit was checked by the technician').",
              "In lab manuals: 'Pour 50ml of acid into the flask' -> '50ml of acid is poured into the flask.'",
              "Subject-Verb Agreement: Singular subjects take singular verbs; plural subjects take plural verbs.",
              "Prepositions of Place & Time: 'at 5 PM', 'on Monday', 'in 2026', 'between two components', 'among multiple devices'.",
            ],
          },
        ],
        quickRevisionPoints: [
          "Never write 'One of the student', always write 'One of the students was present'.",
          "Passive voice emphasizes process over person.",
        ],
      },
      {
        unitNumber: 5,
        unitTitle: "Professional Business Correspondence",
        overview:
          "Drafting official business letters, equipment inquiry letters, complaints, and professional emails.",
        sections: [
          {
            sectionTitle: "1. Business Letter Format and Inquiry Letters",
            summary: "Standard components of full block format business correspondence.",
            keyPoints: [
              "Full Block Format: Everything aligned to the left margin without indentation.",
              "Header Order: Sender's details -> Date -> Receiver's designation & company -> Subject line -> Salutation ('Dear Sir/Madam').",
              "Body Paragraphs: Paragraph 1: Purpose of letter. Paragraph 2: Technical specifications / quantities required. Paragraph 3: Action expected / deadline.",
              "Complimentary Close: 'Yours sincerely' (when name is known) or 'Yours faithfully' (when written to 'Dear Sir').",
            ],
          },
        ],
        quickRevisionPoints: [
          "Subject line should be concise and underline the specific intent (e.g. 'Subject: Inquiry regarding quotation for 10KVA Servo Stabilizer').",
          "Professional emails must have a clear subject line and standard corporate sign-off.",
        ],
      },
    ],
  },
};
