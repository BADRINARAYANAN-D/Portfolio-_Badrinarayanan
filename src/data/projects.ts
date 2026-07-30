// ─── Projects Data ────────────────────────────────────────────────────────────
// All projects from the portfolio system replicate data.

export type ProjectStatus = 'completed' | 'ongoing' | 'archived';
export type ProjectCategory = 'Machine Learning' | 'Deep Learning' | 'Embedded' | 'Mobile Dev' | 'AI Application';

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPinned: boolean;
  overview: string;
  problem: string;
  objective?: string;
  approach: string;
  implementation: string;
  outcome: string;
  lessonsLearned: string[];
  futureImprovements: string[];
  completionDate?: string;
}

export const projectsData: Project[] = [
  {
    id: 'fraud-detection',
    slug: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    shortDescription: 'Supervised ML models for real-world financial transaction classification.',
    category: 'Machine Learning',
    status: 'completed',
    isPinned: true,
    tags: ['ML', 'Scikit-learn', 'Python', 'Pandas'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/BADRINARAYANAN-D',
    overview: 'Financial fraud causes significant losses. Building a reliable classifier that can detect fraudulent transactions while minimising false positives is a practical ML challenge.',
    problem: 'Financial fraud causes significant losses. Building a reliable classifier that can detect fraudulent transactions while minimising false positives is a practical ML challenge.',
    objective: 'Build and evaluate supervised ML models capable of distinguishing fraudulent from legitimate credit card transactions on real-world imbalanced data.',
    approach: 'Data preprocessing, feature scaling, and class imbalance handling. Trained and compared Logistic Regression and Random Forest classifiers.',
    implementation: 'Python with Pandas and NumPy for data handling. Scikit-learn for model training, evaluated using confusion matrix, ROC curve, and precision-recall metrics.',
    outcome: 'High classification accuracy and precision. Evaluated using confusion matrix and ROC metrics.',
    lessonsLearned: [
      'Handling class imbalance is as important as model selection.',
      'Precision and recall tradeoffs matter more than overall accuracy in fraud detection.',
    ],
    futureImprovements: [
      'Explore ensemble methods, anomaly detection approaches, and real-time inference pipelines.',
    ],
  },
  {
    id: 'sentiment-lstm',
    slug: 'sentiment-lstm',
    title: 'Sentiment Analysis with LSTM (IMDb)',
    shortDescription: 'LSTM-based deep learning model for text sentiment classification on movie reviews.',
    category: 'Deep Learning',
    status: 'completed',
    isPinned: true,
    tags: ['Deep Learning', 'NLP', 'TensorFlow', 'LSTM'],
    technologies: ['Python', 'TensorFlow', 'Keras', 'NLP preprocessing'],
    githubUrl: 'https://github.com/BADRINARAYANAN-D',
    overview: 'Understanding how sequence models process natural language helps build intuition for more complex neural network architectures.',
    problem: 'Understanding how sequence models process natural language helps build intuition for more complex architectures.',
    objective: 'Build an LSTM model that accurately classifies IMDb movie reviews as positive or negative.',
    approach: 'Tokenisation, padding, and embedding preparation. Designed and trained an LSTM network.',
    implementation: 'Python with TensorFlow and Keras. Evaluated using validation accuracy and training/validation loss curves.',
    outcome: 'Trained LSTM model with stable validation performance.',
    lessonsLearned: [
      'Sequence length, embedding dimensions, and dropout significantly affect LSTM stability.',
    ],
    futureImprovements: [
      'Explore transformer-based approaches (BERT) and pretrained embeddings.',
    ],
  },
  {
    id: 'breast-cancer',
    slug: 'breast-cancer',
    title: 'Breast Cancer Detection',
    shortDescription: 'ML/DL classification models applied to medical diagnostic datasets.',
    category: 'Machine Learning',
    status: 'completed',
    isPinned: false,
    tags: ['Machine Learning', 'Healthcare', 'Scikit-learn', 'TensorFlow'],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    githubUrl: 'https://github.com/BADRINARAYANAN-D',
    overview: 'Early classification of breast cancer requires reliable models evaluated beyond standard accuracy alone.',
    problem: 'Early classification of breast cancer requires reliable models evaluated beyond accuracy alone.',
    objective: 'Develop and benchmark classification models with focus on minimising false negatives.',
    approach: 'Data normalisation and preprocessing. Trained and compared ML and DL models.',
    implementation: 'Python with TensorFlow and Scikit-learn.',
    outcome: 'Models evaluated with focus on accuracy, recall, and false-negative rates.',
    lessonsLearned: [
      'Evaluation metrics must match the problem domain.',
      'False negatives are more costly than false positives in medical contexts.',
    ],
    futureImprovements: [
      'Model explainability techniques (SHAP, LIME) and cross-validation strategies.',
    ],
  },
  {
    id: 'movie-recommendation',
    slug: 'movie-recommendation',
    title: 'Movie Recommendation System',
    shortDescription: 'Content-based recommendation engine built using TF-IDF and Cosine Similarity.',
    category: 'Machine Learning',
    status: 'completed',
    isPinned: false,
    tags: ['Machine Learning', 'Recommendation Engine', 'Scikit-learn'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/BADRINARAYANAN-D',
    overview: 'Recommendation systems require balancing content similarity with user preference patterns.',
    problem: 'Recommendation systems require balancing content similarity with user preference patterns.',
    objective: 'Build a recommendation system using content filtering and cosine similarity.',
    approach: 'Text vectorisation of genres and keywords using CountVectorizer and TF-IDF.',
    implementation: 'Python with Pandas, NumPy, and Scikit-learn.',
    outcome: 'Functional recommendation script returning top similar movies based on input title.',
    lessonsLearned: [
      'Vector representation choice strongly influences recommendations.',
      'Cold-start problem requires hybrid filtering.',
    ],
    futureImprovements: [
      'Implement collaborative filtering (SVD) and matrix factorisation.',
    ],
  },
  {
    id: 'voice-behavioral-analysis',
    slug: 'voice-behavioral-analysis',
    title: 'Voice-Based Behavioral Analysis System',
    shortDescription: 'A personal ML project exploring audio feature extraction and behavioral pattern recognition from voice data.',
    category: 'Machine Learning',
    status: 'completed',
    isPinned: true,
    tags: ['ML', 'Audio Processing', 'FastAPI', 'Python'],
    technologies: ['Python', 'Librosa', 'Scikit-learn', 'NumPy', 'FastAPI'],
    githubUrl: 'https://github.com/BADRINARAYANAN-D',
    overview: 'A personal machine learning project that explores behavioural pattern recognition using audio features extracted from voice recordings. Built to deepen understanding of signal processing, feature engineering, and classification pipelines.',
    problem: 'Understanding how audio signals encode information about speaker behaviour requires both signal processing knowledge and practical ML implementation.',
    objective: 'Build an ML system for audio feature extraction and behavioral deviation tracking.',
    approach: 'Extracted MFCC features from audio recordings to numerically represent vocal characteristics. Built a baseline profile for individual speakers, then trained a classifier to detect deviations from that baseline.',
    implementation: 'Implemented the audio processing pipeline in Python using Librosa for feature extraction. Trained SVM and ensemble classifiers using Scikit-Learn. Built a lightweight FastAPI backend to serve the model and expose a simple REST API.',
    outcome: 'Working prototype demonstrating real-time deviation detection from speaker baselines. Gained strong applied understanding of MFCC features, classification workflows, and model serving via REST APIs.',
    lessonsLearned: [
      'Feature engineering quality determines model performance more than model complexity.',
      'Audio preprocessing (denoising, normalisation) requires as much care as model training.',
      'FastAPI makes model serving and REST interface development efficient for Python projects.',
    ],
    futureImprovements: [
      'Replace MFCC with Wav2Vec 2.0 embeddings for richer audio representations.',
      'Explore LSTM or Transformer-based sequence models for temporal pattern capture.',
    ],
  },
];
