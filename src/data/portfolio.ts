export const portfolioData = {
  personal: {
    name: "Prajnan Kumar Sarma",
    role: "B.Tech Information Technology · AI/ML Enthusiast",
    tagline: "Learning. Building. Breaking. Fixing.",
    location: "Guwahati, Assam, India",
    email: "prajnankumarsarma102030@gmail.com",
    resumeUrl: "/Prajnan_Kumar_Sarma_Resume.pdf",
    profileImage: "/prajnan.png",
    socials: {
      github: "https://github.com/PK007788",
      linkedin: "https://www.linkedin.com/in/prajnan-kumar-sarma-4493542a8",
      instagram: "https://www.instagram.com/prajnan_kr_sarma/",
    },
  },
  about: {
    paragraphs: [
      "I am an engineering student at Gauhati University, pursuing a B.Tech in Information Technology. My core interests lie at the intersection of artificial intelligence, machine learning, and software engineering, with a particular focus on deep learning, natural language processing, and computer vision.",
      "I enjoy building systems that solve tangible problems, whether it is designing intelligent conversational agents, creating diagnostic tools from medical imagery, or engineering predictive models for urban infrastructure. I am constantly exploring new domains where technology can create meaningful impact.",
      "Outside of engineering, I draw inspiration from physics, mathematics, and literature, a multidisciplinary perspective that shapes how I think about problems. I also serve as the PR and Outreach Lead at Google Developer Group on Campus, Gauhati University, where I help build community through workshops, hackathons, and collaborative events.",
    ],
  },
  projects: [
    {
      title: "Vyapaar Sahayak",
      subtitle: "Conversational AI Accounting Assistant",
      description: "Voice-enabled AI assistant enabling small shopkeepers to manage invoices, credit, and payments using Hindi/Hinglish natural language commands. Features an end-to-end AI pipeline with speech-to-text, intent classification (TF-IDF + Logistic Regression), and entity extraction.",
      tech: ["Python", "FastAPI", "React", "SQLite", "NLP", "Web Speech API"],
      github: "https://github.com/PK007788/Vyapaar_Sahayak",
      stars: 1,
    },
    {
      title: "InkSynk",
      subtitle: "Smart Real-Time Collaborative Editor",
      description: "Real-time collaborative text editor using WebSockets and Yjs (CRDT-based sync) with live cursor tracking, typing awareness, and AI-powered document summarization via Hugging Face APIs with a BYOK approach.",
      tech: ["React", "Node.js", "MongoDB", "Yjs", "WebSockets", "Hugging Face"],
      github: "https://github.com/PK007788/InkSynk",
      stars: 2,
    },
    {
      title: "Urban X-Ray",
      subtitle: "AI Flood Intelligence System",
      description: "AI-based urban flood prediction system modelling drainage health and predicting zone-level flood probability. Engineered the Drainage Condition Index (DCI) and contributed to a CNN-based flood image detection module.",
      tech: ["Python", "Scikit-learn", "CNN", "Streamlit"],
      github: "https://github.com/PK007788/Urban_Xray",
      stars: 1,
    },
    {
      title: "Leukemia Cell Detection",
      subtitle: "Deep Learning Diagnostic System",
      description: "Deep learning system to detect leukemic cells from microscopic blood smear images using fine-tuned ResNet-50 with automated OpenCV nucleus segmentation. Achieved 80% classification accuracy.",
      tech: ["Python", "TensorFlow", "ResNet-50", "OpenCV", "Flask", "Streamlit"],
      github: "https://github.com/PK007788/Leukemia_Detector_And_Predictor_Using_ResNet_Main",
      stars: 4,
    },
    {
      title: "EcoMitra",
      subtitle: "Smart Waste Segregation System",
      description: "Computer vision module for a hardware-integrated smart waste bin. AI predictions directly controlled the bin's mechanical sorting mechanism using MobileNetV2 and YOLOv5 for real-time multi-class detection.",
      tech: ["Python", "MobileNetV2", "YOLOv5", "Computer Vision"],
      github: "https://github.com/PK007788/Waste_Classifier_CNN_Model",
    },
  ],
  experience: [
    {
      role: "PR and Outreach Lead",
      org: "Google Developer Group on Campus, Gauhati University",
      period: "Sep 2025 - Present",
      location: "Guwahati, India",
      points: [
        "Led outreach initiatives increasing participation in technical events and hackathons",
        "Organized developer meetups, workshops, and collaborations",
      ],
    },
    {
      role: "Research Intern",
      org: "Expelee",
      period: "May 2025 - Jul 2025",
      location: "Remote",
      points: [
        "Conducted market and competitor research for emerging tech platforms",
        "Supported product strategy through data-driven insights",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Gauhati University",
    period: "Jul 2024 - Aug 2028",
    location: "Guwahati, Assam",
  },
  achievements: [
    "3rd Place at GUenARK 2026 : State-level hackathon with participation from multiple institutions",
    "3rd Place at IIIT Guwahati E-Summit Inizio 2026 : National-level hackathon and innovation competition",
  ],
  skills: [
    {
      title: "Languages",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
    },
    {
      title: "AI / ML",
      items: [
        { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Computer Vision", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ],
    },
    {
      title: "Design",
      items: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      ],
    },
    {
      title: "Coursework",
      items: [
        { name: "DSA", icon: null },
        { name: "OOP", icon: null },
        { name: "DBMS", icon: null },
        { name: "Computer Networks", icon: null },
        { name: "OS", icon: null },
        { name: "Machine Learning", icon: null },
        { name: "Linear Algebra", icon: null },
      ],
    },
  ],
};
