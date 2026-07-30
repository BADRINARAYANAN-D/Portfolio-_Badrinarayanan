// ─── Skills Data ──────────────────────────────────────────────────────────────
// All skill categories and items. Edit freely — no JSX changes needed.

export const skillsData = {
  categories: [
    {
      key: 'Programming',
      label: 'Programming Languages',
      color: '#0071E3',
      skills: [
        { name: 'Python',      note: 'Primary language for ML projects' },
        { name: 'Java',        note: 'OOP fundamentals & DSA' },
        { name: 'C / C++',     note: 'Embedded firmware' },
        { name: 'Dart',        note: 'Flutter development' },
        { name: 'JavaScript',  note: 'Web & scripting' },
        { name: 'SQL',         note: 'Relational databases' },
      ],
    },
    {
      key: 'AI',
      label: 'AI & Machine Learning',
      color: '#30D158',
      skills: [
        { name: 'TensorFlow', note: 'Deep learning — CNNs, training pipelines' },
        { name: 'PyTorch',    note: 'Research prototyping & experimentation' },
        { name: 'Scikit-Learn', note: 'Classical ML — classification, regression, clustering' },
        { name: 'OpenCV',     note: 'Computer vision preprocessing' },
        { name: 'NLTK',       note: 'NLP fundamentals' },
        { name: 'NumPy',      note: 'Numerical computing' },
        { name: 'Pandas',     note: 'Data manipulation & analysis' },
        { name: 'Matplotlib', note: 'Data visualisation' },
        { name: 'Librosa',    note: 'Audio signal processing' },
      ],
    },
    {
      key: 'Embedded',
      label: 'Embedded & Automotive',
      color: '#FF9F0A',
      skills: [
        { name: 'Teensy 4.1',     note: 'ARM Cortex-M7 development — internship exposure' },
        { name: 'PlatformIO',     note: 'Embedded build & development environment' },
        { name: 'CAN Bus',        note: 'Communication protocol — internship & personal project' },
        { name: 'Vector CANdb++', note: 'DBC file analysis — internship exposure' },
        { name: 'Kvaser Tools',   note: 'CAN monitoring & validation — internship exposure' },
        { name: 'Arduino',        note: 'Rapid prototyping' },
      ],
    },
    {
      key: 'Frameworks',
      label: 'Frameworks & Libraries',
      color: '#BF5AF2',
      skills: [
        { name: 'React',    note: 'Web development' },
        { name: 'Flutter',  note: 'Cross-platform mobile apps' },
        { name: 'FastAPI',  note: 'ML model serving & REST APIs' },
        { name: 'Node.js',  note: 'Backend scripting' },
        { name: 'Firebase', note: 'Real-time database & auth' },
      ],
    },
    {
      key: 'Developer Tools',
      label: 'Developer Tools',
      color: '#FF6B00',
      skills: [
        { name: 'Git',      note: 'Version control' },
        { name: 'GitHub',   note: 'Repository management & collaboration' },
        { name: 'VS Code',  note: 'Primary editor' },
        { name: 'Docker',   note: 'Containerisation basics' },
        { name: 'Postman',  note: 'API testing' },
        { name: 'Jupyter',  note: 'ML experimentation & notebooks' },
      ],
    },
    {
      key: 'Cloud',
      label: 'Cloud & Deployment',
      color: '#64D2FF',
      skills: [
        { name: 'Vercel',       note: 'Frontend deployment' },
        { name: 'AWS (basics)', note: 'Cloud fundamentals — EC2, S3' },
        { name: 'GitHub',       note: 'CI/CD via GitHub Actions' },
      ],
    },
  ],
} as const;
