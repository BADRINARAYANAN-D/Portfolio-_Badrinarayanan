export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" }
];

export const contactDetails = {
  email: "badrinarayanan1177@gmail.com",
  phone: "+91-7603829209",
  linkedin: "linkedin.com/in/badrinarayanan11",
  github: "github.com/BADRINARAYANAN-D",
  location: "Chennai, India"
};

export const heroData = {
  name: "BADRINARAYANAN",
  taglines: [
    "Engineering student. AI/ML practitioner.",
    "Building at the intersection of intelligence and embedded systems.",
    "Learning deeply. Implementing deliberately."
  ],
  subtitle: "Computer Science Engineering undergraduate exploring Machine Learning, Deep Learning, Embedded Systems, and Electric Vehicle Technology. I prefer understanding systems from first principles and building things that work.",
  tags: [
    "AI", "ML", "Deep Learning", "Embedded Systems", "BMS", "Electric Vehicles", "Python", "Flutter"
  ],
  resumeUrl: "https://mail.google.com/mail/?view=cm&to=badrinarayanan1177%40gmail.com&su=Resume+Request+%E2%80%93+Badrinarayanan&body=Hi+Badrinarayanan%2C%0A%0AI+came+across+your+portfolio+and+would+like+to+request+a+copy+of+your+resume.%0A%0AThank+you.",
  profileImg: "/profile.jpg"
};

export const aboutData = {
  cards: [
    {
      title: "Education",
      content: "B.E. Computer Science Engineering, St. Joseph's College of Engineering, Chennai, 2024–2028 (Expected)"
    },
    {
      title: "Current Focus",
      content: "Machine Learning and Deep Learning using Python, TensorFlow, and Scikit-learn. Mobile development with Flutter. Exploring embedded firmware and electric vehicle systems through academic and internship work."
    },
    {
      title: "Engineering Philosophy",
      content: "I prefer understanding a system before using it. Whether it is a neural network or a CAN bus, I work to understand what is actually happening before building on top of it."
    },
    {
      title: "Career Aspirations",
      content: "Targeting roles in AI/ML engineering, embedded systems development, or EV technology. Open to research opportunities, internships, and collaborative projects that involve building and understanding complex systems."
    }
  ],
  learningTags: [
    "Advanced Deep Learning",
    "Computer Vision",
    "Embedded C",
    "EV Architecture",
    "Automotive Communication Protocols"
  ]
};

export const experienceData = {
  company: "Giroskop Mobility Pvt. Ltd.",
  duration: "Three-week internship, 2026",
  domain: "Battery Management Systems, Embedded Systems, Electric Vehicle Technology",
  phases: [
    {
      phase: "Phase 1 — Foundations (Week 1)",
      title: "Understanding the Domain",
      description: "The internship began with structured learning covering Battery Management System fundamentals, Electric Vehicle architecture, and automotive communication protocols including CAN, SPI, isoSPI, UART, and I2C. This phase established the theoretical base needed for practical embedded work. Understanding how cells behave, how BMS firmware monitors and protects them, and how EV systems communicate internally was essential before touching any hardware."
    },
    {
      phase: "Phase 2 — Embedded Firmware Development (Week 2)",
      title: "Getting Hands-On with Hardware",
      description: "Embedded firmware development using Visual Studio Code, PlatformIO, and the Teensy 4.1 development board. A structured series of practice tasks (Task 0 through Task 5) covered firmware compilation and flashing, CAN message transmission and reception, request-response communication patterns, DBC-based CAN message decoding using Kvaser CANKing 7, and SD card data logging. Each task built on the previous, progressively building confidence with embedded workflows."
    },
    {
      phase: "Phase 3 — Automotive Firmware Repository and Engineering Validation (Week 3)",
      title: "Automotive Workflows and Validation",
      description: "The final phase involved working with the company's automotive firmware repository using a Communication Board, Battery Slave Board, and a high-voltage setup powered through an SMPS. Engineering Validation Testing activities included Power Validation, ADC Validation, Diagnostic Validation, CAN Validation, and a demonstration of the Discharge Validation workflow. Due to hardware availability constraints, the discharge procedure was validated through a controlled demonstration while maintaining the intended firmware execution and communication sequence."
    }
  ],
  technologies: [
    "VS Code", "PlatformIO", "Teensy 4.1", "CAN Bus", "DBC Files", "Kvaser CANKing", "SD Card Logging", "SMPS", "Communication Board", "Battery Slave Board", "isoSPI", "UART", "I2C"
  ],
  outcomes: [
    { title: "BMS Fundamentals", status: "Completed" },
    { title: "Embedded Firmware Development", status: "Implemented" },
    { title: "CAN Communication", status: "Verified" },
    { title: "SD Card Data Logging", status: "Implemented" },
    { title: "Repository Understanding", status: "Completed" },
    { title: "Engineering Validation", status: "Performed" }
  ],
  mentor: "Mr. Saurabh Prajapati, Giroskop Mobility Pvt. Ltd.",
  note: "Technologies, tools, and workflows referenced reflect my personal learning and exposure during the internship. All proprietary systems and products remain the intellectual property of Giroskop Mobility Pvt. Ltd."
};

export const projectsData = [
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    status: "Completed",
    short: "Supervised ML models for real-world financial transaction classification.",
    problem: "Financial fraud causes significant losses. Building a reliable classifier that can detect fraudulent transactions while minimising false positives is a practical ML challenge.",
    objective: "Build and evaluate supervised ML models capable of distinguishing fraudulent from legitimate credit card transactions on real-world imbalanced data.",
    approach: "Data preprocessing, feature scaling, and class imbalance handling. Trained and compared Logistic Regression and Random Forest classifiers.",
    implementation: "Python with Pandas and NumPy for data handling. Scikit-learn for model training, evaluated using confusion matrix, ROC curve, and precision-recall metrics.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    outcome: "High classification accuracy and precision. Evaluated using confusion matrix and ROC metrics.",
    lessons: "Handling class imbalance is as important as model selection. Precision and recall tradeoffs matter more than overall accuracy in fraud detection.",
    future: "Explore ensemble methods, anomaly detection approaches, and real-time inference pipelines.",
    githubUrl: "https://github.com/BADRINARAYANAN-D"
  },
  {
    id: "sentiment-lstm",
    title: "Sentiment Analysis with LSTM (IMDb)",
    category: "Deep Learning",
    status: "Completed",
    short: "LSTM-based deep learning model for text sentiment classification on movie reviews.",
    problem: "Understanding how sequence models process natural language helps build intuition for more complex architectures.",
    objective: "Build an LSTM model that accurately classifies IMDb movie reviews as positive or negative.",
    approach: "Tokenisation, padding, and embedding preparation. Designed and trained an LSTM network.",
    implementation: "Python with TensorFlow and Keras. Evaluated using validation accuracy and training/validation loss curves.",
    technologies: ["Python", "TensorFlow", "Keras", "NLP preprocessing"],
    outcome: "Trained LSTM model with stable validation performance.",
    lessons: "Sequence length, embedding dimensions, and dropout significantly affect LSTM stability.",
    future: "Explore transformer-based approaches (BERT) and pretrained embeddings.",
    githubUrl: "https://github.com/BADRINARAYANAN-D"
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Detection",
    category: "Machine Learning",
    status: "Completed",
    short: "ML/DL classification models applied to medical diagnostic datasets.",
    problem: "Early classification of breast cancer requires reliable models evaluated beyond accuracy alone.",
    objective: "Develop and benchmark classification models with focus on minimising false negatives.",
    approach: "Data normalisation and preprocessing. Trained and compared ML and DL models.",
    implementation: "Python with TensorFlow and Scikit-learn.",
    technologies: ["Python", "TensorFlow", "Scikit-learn"],
    outcome: "Models evaluated with focus on accuracy, recall, and false-negative rates.",
    lessons: "Evaluation metrics must match the problem domain. False negatives are more costly than false positives in medical contexts.",
    future: "Model explainability techniques (SHAP, LIME) and cross-validation strategies.",
    githubUrl: "https://github.com/BADRINARAYANAN-D"
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    category: "Machine Learning",
    status: "Completed",
    short: "Content-based and collaborative filtering recommendation engine.",
    problem: "Recommendation systems require careful design of similarity metrics and filtering strategies.",
    objective: "Build a recommendation system that suggests relevant movies based on content and user-item similarity.",
    approach: "Content-based filtering using cosine similarity and collaborative filtering using user-item matrices.",
    implementation: "Python with Pandas and Scikit-learn.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    outcome: "Functional recommendation system with improved relevance through feature tuning.",
    lessons: "Cold start problem is a fundamental challenge. Content-based and collaborative approaches have complementary strengths.",
    future: "",
    githubUrl: "https://github.com/BADRINARAYANAN-D"
  },
  {
    id: "census-app",
    title: "Census Mobile/Web Application",
    category: "Mobile Development",
    status: "Completed",
    short: "Data collection platform with role-based access and scalable backend logic.",
    problem: "",
    objective: "",
    approach: "",
    implementation: "",
    technologies: [],
    outcome: "Completed. View the project and source code on GitHub.",
    lessons: "",
    future: "",
    githubUrl: "https://github.com/viskamnix-code/census-india-api-v1"
  }
];

export const researchData = [
  {
    title: "Artificial Intelligence and Machine Learning",
    description: "Building predictive models and exploring learning algorithms from fundamentals to deployment."
  },
  {
    title: "Deep Learning and Neural Networks",
    description: "Sequence models, CNNs, and the architectural decisions that make deep learning work."
  },
  {
    title: "Computer Vision",
    description: "Image-based inference, object detection, and visual understanding systems."
  },
  {
    title: "Battery Management Systems",
    description: "Cell monitoring, state estimation, thermal management, and BMS firmware design."
  },
  {
    title: "Embedded Systems and Microcontrollers",
    description: "Firmware development, communication protocols, and hardware-software integration."
  },
  {
    title: "Electric Vehicle Technology",
    description: "EV architecture, powertrain electronics, and the engineering of clean mobility."
  },
  {
    title: "Automotive Communication Protocols",
    description: "CAN bus, isoSPI, and automotive-grade communication standards."
  },
  {
    title: "Human-Centred AI",
    description: "Systems that are interpretable, fair, and usable by the people they serve."
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "Dart", "SQL"]
  },
  {
    category: "AI and Machine Learning",
    skills: [
      "Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn", "Keras",
      "NumPy", "Pandas", "Matplotlib", "Feature Engineering", "Model Evaluation", "Data Preprocessing"
    ]
  },
  {
    category: "Embedded and EV",
    skills: [
      "CAN Communication", "Battery Management Systems", "PlatformIO", "Teensy 4.1",
      "Embedded Firmware", "DBC Files", "Kvaser Tools", "Engineering Validation", "isoSPI", "UART", "I2C"
    ]
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "MongoDB"]
  },
  {
    category: "Soft Skills",
    skills: [
      "Analytical Thinking", "Technical Communication", "Team Collaboration", "Iterative Problem Solving", "Continuous Learning"
    ]
  }
];

export const aiPhilosophy = {
  title: "On AI-Assisted Development",
  content: "I use modern AI tools — including LLMs and code assistants — to accelerate learning, prototyping, debugging, documentation, and experimentation. These tools are part of my workflow, not a replacement for understanding. I prefer to know why something works before relying on a tool that does it for me."
};

export const certificationsData = [
  "Python for Data Science — NPTEL",
  "Data Science Foundation — Infosys Springboard",
  "Deep Learning with TensorFlow — IBM CognitiveClass",
  "Introduction to Modern AI — Cisco",
  "Introduction to Cybersecurity — Cisco",
  "Flutter App Development — Internship Certification",
  "MongoDB Basics for Students"
];

export const timelineData = [
  {
    year: "2024",
    title: "Started B.E. Computer Science Engineering",
    description: "At St. Joseph's College of Engineering, Chennai."
  },
  {
    year: "2024",
    title: "Programming Foundations",
    description: "Deepened knowledge of Python, Java, and SQL through coursework and self-study."
  },
  {
    year: "2024",
    title: "Machine Learning",
    description: "Completed NPTEL Python for Data Science. Began implementing supervised and unsupervised models."
  },
  {
    year: "2025",
    title: "Deep Learning",
    description: "Built LSTM sentiment analysis model and breast cancer classifier using TensorFlow and Keras. Earned IBM CognitiveClass Deep Learning certification."
  },
  {
    year: "2025",
    title: "Mobile Development",
    description: "Developed Flutter community app during internship at Scode Software Solutions. Completed Flutter certification."
  },
  {
    year: "2025",
    title: "Certifications",
    description: "Completed Infosys Data Science Foundation, Cisco Modern AI and Cybersecurity courses, and MongoDB basics."
  },
  {
    year: "2026",
    title: "EV and Embedded Systems Internship",
    description: "Three-week internship at Giroskop Mobility Pvt. Ltd. Practical exposure to BMS, CAN communication, Teensy 4.1, PlatformIO, and Engineering Validation Testing."
  },
  {
    year: "2026",
    title: "Current Focus",
    description: "Expanding knowledge in computer vision, advanced deep learning, and embedded systems. Continuing ML and mobile projects."
  },
  {
    year: "Future",
    title: "Looking Ahead",
    description: "Targeting internships and research opportunities in AI/ML engineering and embedded EV systems. Open to higher studies."
  }
];
