import { Project } from "../types";

export const projects: Project[] = [


{
    title: "📚 Book Recommender System",
    description:
      "A machine learning-based recommendation system that suggests books using collaborative filtering and cosine similarity based on user preferences.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit","streamlit cloud"],
    features: [
      "Collaborative filtering with cosine similarity",
      "Efficient sparse matrix optimization",
      "Accurate personalized book recommendations",
    ],
    github: "https://github.com/iGufrankhan/Book_Recommender_System",
    demo: "https://bookrecommendersystem-hkrgvy42xwtruiw9siq5b9.streamlit.app/",
    date: "2025-04",
    image: '/projects/book.png',
  },




  
  {
    title: "🎬 VidStream",
    description:
      "A full-stack video sharing platform where users can upload, explore, and download videos seamlessly. Built with Next.js 14, TypeScript, and Clerk for authentication, integrated with Cloudinary for video storage.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Clerk Auth",
      "Cloudinary",
      "Framer Motion",
      "Axios",
    ],
    features: [
      "Upload videos up to 70MB with title & description",
      "Modern responsive grid-based explorer",
      "One-click video downloads",
      "Secure Clerk authentication",
      "Smooth UI animations with Framer Motion",
    ],
    demo: "https://cloudinary-saas-app-chi.vercel.app/",
    github: "https://github.com/iGufrankhan/cloudinary-saas-app",
    date: "2025-10",
    image: '/projects/video.png',
  },

   {
    title: "🩺 Diabetes Prediction Model",
    description:
      "A supervised ML model that predicts the likelihood of diabetes based on health metrics like glucose, BMI, age, and blood pressure. Achieved 77% accuracy using scikit-learn models.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib","flask","vercel"],
    features: [
      "Trained on the Pima Indians Diabetes Dataset",
      "Implements Logistic Regression and SVM",
      "77% model accuracy",
      "Helps in early prediction and awareness",
    ],
    github: "https://github.com/iGufrankhan/Diabetes_Prediction_Model",
    demo: "https://diabetes-prediction-model-mauve.vercel.app/",
    date: "2025-06",
    image: '/projects/diabetes.png',
  },
{
  title: "📰 Fake News Classifier (NLP Project)",
  description:
    "A Natural Language Processing project that detects fake and real news using TF-IDF vectorization and Linear SVM classifier.",
  techStack: [
    "Python",
    "NLP",
    "Scikit-learn",
    "spaCy",
    "Seaborn",
    "Gensim",
    "WordNet",
    "WordCloud"
  ],
  features: [
    "Preprocessing with lemmatization and normalization",
    "TF-IDF based feature extraction",
    "Model evaluation with precision, recall, and F1-score",
    "Visualization with WordClouds and confusion matrix"
  ],
  github: "https://github.com/iGufrankhan/Fake-News-Classifier",
  date: "2025-08",
  image: "/projects/fake.png",
}
,

  {
    title: "🧠 DeepFake Face Detection Model using AI/ML",
    description:
      "An AI-powered system using Convolutional Neural Networks (CNNs) and MobileNetV2 to detect manipulated facial images (deepfakes). It features a Streamlit interface for image upload and real/fake detection.",
    techStack: [
      "Python",
      "TensorFlow / Keras",
      "OpenCV",
      "Streamlit",
      "MobileNetV2",
      "Matplotlib",
    ],
    features: [
      "Upload any image and get instant real/fake classification",
      "Trained on MobileNetV2 achieving 95% accuracy",
      "Live training accuracy/loss visualization",
      "Streamlit app for user-friendly interface",
    ],
    github: "https://github.com/iGufrankhan/DeepFake_Face_Detection_Model",
    
    date: "2025-07",
      image: '/projects/face.png',
    
  },

  {
    title: "🦠 COVID-19 Interactive Dashboard (Tableau)",
    description:
      "An interactive global COVID-19 dashboard created in Tableau to visualize cases, recoveries, and deaths using multiple chart types including maps, trends, and bar charts.",
    techStack: ["Tableau", "Data Visualization", "Analytics"],
    features: [
      "Interactive global COVID-19 map",
      "Trend line for confirmed cases over time",
      "Top 10 countries comparison chart",
      "Pie charts for confirmed vs death ratios",
    ],
    github: "https://github.com/iGufrankhan/Data_Analysis-Dashboard",
    date: "2025-03",
     image: '/projects/covid.png', 

  },
  
  
 
];
