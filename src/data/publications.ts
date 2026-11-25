export interface PublicationItem {
  title: string;
  venue: string;
  publisher: string;
  publishedDate: string;
  documentUrl: string;
  documentId: string;
  abstract: string;
  keyContributions: string[];
  systemHighlights: {
    title: string;
    description: string;
  }[];
  relatedProject: {
    name: string;
    id: string;
    url: string;
  };
}

export const publicationData: PublicationItem = {
  title: "Efficient Distraction Detection System using Hybrid AI for Attention Sensitive Online Learning",
  venue: "IEEE International Proceedings",
  publisher: "IEEE",
  publishedDate: "March 9, 2026",
  documentUrl: "https://ieeexplore.ieee.org/document/11416747",
  documentId: "11416747",
  abstract:
    "Presents a user-embedded deep policy learning framework for online reinforcement-based personalized cognitive intervention. The system models intervention selection as a contextual reinforcement learning problem, where multimodal cognitive signals—visual attention indicators, digital interaction behavior, and emotional state—form the policy state representation. A neural policy network incorporating user-specific embedding vectors enables personalized intervention strategies across learners. Rather than treating attention monitoring as passive detection, the framework reframes attention-aware learning systems as adaptive cognitive assistants that continuously optimize intervention decisions over time.",
  keyContributions: [
    "Contextual Reinforcement Learning Formulation: Formulates cognitive focus intervention selection as a contextual bandit with user-specific continuous embedding vectors.",
    "Multimodal State Fusion: Fuses real-time facial landmark indicators, affective emotion signals, and digital telemetry (tab-switching patterns) into an informative state representation.",
    "Logarithmic Recovery-Time Reward Design: Introduces a logarithmic reward function quantifying sustained attention restoration post-intervention, penalizing intrusive interruptions while maximizing focus duration.",
    "Persistent Online Policy Adaptation: Updates policy parameters online via stochastic policy gradient (REINFORCE) methods that persist across sessions for longitudinal adaptation.",
  ],
  systemHighlights: [
    {
      title: "Perception & Feature Extraction",
      description: "Combines OpenCV and MediaPipe facial mesh tracking with DeepFace emotion scoring and browser event monitoring to create a unified 60Hz cognitive context vector.",
    },
    {
      title: "Policy Optimization Engine",
      description: "Neural network policy mapping user embedding + state vector to discrete micro-intervention actions (guided breathing, sensory refocus prompts, micro-breaks).",
    },
    {
      title: "Empirical Validation",
      description: "Controlled experiments demonstrate significantly higher sustained attention recovery rates compared against static, rule-based, or non-adaptive intervention systems.",
    },
  ],
  relatedProject: {
    name: "EmoFocus AI Platform",
    id: "emofocus-ai",
    url: "https://github.com/adhesh04/EmoFocusAI.git",
  },
};
