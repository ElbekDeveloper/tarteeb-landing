export interface Skill {
  name: string;
  rating: number;
}

export interface Mark {
  score: number;
  maxScore: number;
  feedback: string;
}

export interface InterviewQA {
  question: string;
  answer: string;
}

export interface Candidate {
  id: string;
  name: string;
  title: string;
  specialty: string;
  avatar: {
    initials: string;
    bgColor: string;
  };
  marks: {
    human: Mark;
    ai: Mark;
  };
  skills: Skill[];
  interview: InterviewQA[];
  contact: {
    phone: string;
    email: string;
  };
}

export const candidates: Candidate[] = [
  {
    id: "001",
    name: "Eldor Ro'ziyev",
    title: "Full-Stack .NET Developer",
    specialty: "ASP.NET Core & React/Angular",
    avatar: { initials: "ER", bgColor: "#28eaab" },
    marks: {
      human: {
        score: 4.8,
        maxScore: 5.0,
        feedback: "Exceptional technical depth combined with clear communication. Sarah demonstrated mastery of complex system design and showed genuine curiosity about emerging technologies. Her ability to break down complicated concepts is rare."
      },
      ai: {
        score: 4.2,
        maxScore: 5.0,
        feedback: "Strong problem-solving approach with logical reasoning. The AI assessment noted excellent code structure and thoughtful API design. Some areas for growth in exploratory thinking on edge cases."
      }
    },
    skills: [
      { name: "SQL", rating: 5.0 },
      { name: "AI (COSTAR)", rating: 4.8 },
      { name: "System Design", rating: 4.9 },
      { name: "CLR Internals", rating: 4.7 },
      { name: "React", rating: 4.2 }
    ],
    interview: [
      {
        question: "Tell us about a time you had to design a complex system under tight constraints. What was your approach?",
        answer: "I was tasked with redesigning our data pipeline to handle 10x traffic increase with a 6-month deadline. I started by mapping all bottlenecks, then prioritized based on impact. We chose PostgreSQL over NoSQL for ACID compliance given our financial data. The approach reduced query time by 65% and we shipped 2 months early."
      },
      {
        question: "How do you stay updated with new technologies?",
        answer: "I dedicate 5 hours weekly to learning: reading papers, following key researchers, and building side projects. I maintain a learning journal and share insights with my team monthly. This year I've explored vector databases and reinforcement learning applications."
      },
      {
        question: "Describe a situation where your initial solution didn't work. How did you handle it?",
        answer: "Built a caching layer assuming 80/20 read-write ratio, but production showed 60/40. Initial solution tanked performance. Instead of defending my design, I quickly analyzed the actual patterns, implemented a hybrid approach combining Redis for hot data and database for cold. Learned to validate assumptions early."
      }
    ],
    contact: { phone: "+998 90 871-27-86", email: "sardor.j@gmail.com" }
  },
  {
    id: "002",
    name: "Farxod Isomiddinov",
    title: "Backend & SQL Engineer",
    specialty: "Query Optimization & DB Design",
    avatar: { initials: "FI", bgColor: "#45d1db" },
    marks: {
      human: {
        score: 4.6,
        maxScore: 5.0,
        feedback: "Farxod combines statistical rigor with practical business sense. He explained his modeling choices clearly and demonstrated understanding of real-world constraints. Would benefit from more experience in production ML ops."
      },
      ai: {
        score: 4.4,
        maxScore: 5.0,
        feedback: "Solid analytical thinking with clear methodology. The assessment noted excellent statistical foundations and model evaluation skills. Consider expanding toolkit beyond common algorithms."
      }
    },
    skills: [
      { name: "AI (COSTAR)", rating: 4.6 },
      { name: "ASP.NET Web API", rating: 4.8 },
      { name: ".NET Core", rating: 4.5 },
      { name: "SQL", rating: 4.2 },
      { name: "Data Optimizations", rating: 4.3 }
    ],
    interview: [
      {
        question: "Walk us through your approach to a classification problem you've solved.",
        answer: "For a customer churn prediction model, I started with exploratory analysis to understand feature distributions. Built baseline logistic regression (75% accuracy), then ensemble methods. Used SHAP for interpretability—discovered payment friction was top driver. Final model achieved 88% precision with 92% recall, business impact: 15% reduction in churn."
      },
      {
        question: "How do you handle imbalanced datasets?",
        answer: "Depends on the problem. For fraud detection, I use SMOTE combined with stratified cross-validation. But I prefer reframing: adjust class weights, use appropriate metrics (AUC-ROC vs accuracy), and sometimes treat as anomaly detection instead. Each approach has tradeoffs—I evaluate based on business cost of false positives vs negatives."
      }
    ],
    contact: { phone: "+998 99 117-27-32", email: "farxon.isomiddinov@gmail.com" }
  },
  {
    id: "003",
    name: "Asror Haydarov",
    title: "AI-Integrated .NET Dev",
    specialty: "LLM Implementation & Prompting",
    avatar: { initials: "AH", bgColor: "#6c37bd" },
    marks: {
      human: {
        score: 4.9,
        maxScore: 5.0,
        feedback: "Exceptional grasp of IFRS frameworks and regulatory nuance. Asror articulated complex compliance scenarios with precision. Demonstrates both technical mastery and strategic business thinking. A rare find in financial roles."
      },
      ai: {
        score: 4.3,
        maxScore: 5.0,
        feedback: "Strong compliance and regulatory knowledge base. AI noted comprehensive understanding of reporting standards. Areas to develop: more dynamic scenario analysis and forward-looking thinking."
      }
    },
    skills: [
      { name: "AI (COSTAR)", rating: 4.9 },
      { name: "C#", rating: 4.8 },
      { name: "DBMS Mngmt", rating: 4.5 },
      { name: "CLR", rating: 4.6 },
      { name: "SQL", rating: 3.8 }
    ],
    interview: [
      {
        question: "Explain a complex IFRS scenario you've had to navigate.",
        answer: "During a multi-currency M&A transaction, we had to apply IFRS 3 for business combinations with IFRS 9 for financial instruments. The complexity: earn-outs denominated in local currency. I modeled fair value adjustments considering probability-weighted scenarios. Worked with auditors to ensure ASC 805 alignment, ultimately classified contingent consideration as financial liability with mark-to-market adjustments quarterly."
      },
      {
        question: "How do you stay current with changing regulations?",
        answer: "I'm a CPA and maintain continuing education through AICPA. Subscribe to Big 4 regulatory updates, attend quarterly webinars, and participate in industry forums. When new standards release, I first read the basis for conclusions—it reveals the intent. Then I map practical implications for our business model."
      }
    ],
    contact: { phone: "+998 93 764-22-99", email: "asoror.haydarov@gmail.com" }
  },
  {
    id: "004",
    name: "Sarvar Abduvohidov",
    title: "AI-Integrated .NET Dev",
    specialty: "LLM Implementation & Prompting",
    avatar: { initials: "SA", bgColor: "#A9F9FF" },
    marks: {
      human: {
        score: 4.7,
        maxScore: 5.0,
        feedback: "Sarvar demonstrates deep systems thinking and excellent problem-solving under pressure. His experience with CLR and distributed systems is evident. Clear communicator who thinks about operational concerns early in design phase."
      },
      ai: {
        score: 4.5,
        maxScore: 5.0,
        feedback: "Strong technical foundation with emphasis on scalability and reliability. AI noted excellent architectural thinking and practical constraints awareness. Can expand breadth of technology ecosystem exposure."
      }
    },
    skills: [
      { name: "CLR", rating: 4.7 },
      { name: "System Architecture", rating: 4.8 },
      { name: "AI (COSTAR)", rating: 4.6 },
      { name: "C#/.NET", rating: 4.8 }
    ],
    interview: [
      {
        question: "Tell us about your experience designing distributed systems.",
        answer: "Architected a real-time trading system handling 100k+ events/second. Chose .NET with Azure Service Bus for message queue guarantees. Implemented circuit breakers and bulkheads to isolate failures. Used CLR's memory management strategically—pre-allocated object pools to reduce GC pauses. System achieved 99.95% uptime with sub-100ms latency p99."
      },
      {
        question: "How do you approach DevOps for high-reliability systems?",
        answer: "Infrastructure as code (Terraform), comprehensive monitoring (Prometheus + Grafana), and chaos engineering. I implement blue-green deployments with automated rollback triggers. Database migrations are versioned separately. Every team member can deploy—reduces silos. We track SLOs religiously: 99.9% availability, 200ms p95 latency."
      }
    ],
    contact: { phone: "+998 94 192-08-08", email: "abduvohidovsarvar007@mail.com" }
  },
  {
    id: "005",
    name: "Mohinur Muhammadjonova",
    title: "Full-Stack Engineer",
    specialty: "Frontend UI & .NET Backends",
    avatar: { initials: "MM", bgColor: "#ff6b6b" },
    marks: {
      human: {
        score: 4.5,
        maxScore: 5.0,
        feedback: "Mohinur brings a rare combination of technical skill and design sensibility. Her component architecture is clean and scalable. Excellent at translating design specs into pixel-perfect implementations."
      },
      ai: {
        score: 4.6,
        maxScore: 5.0,
        feedback: "Strong understanding of React patterns and performance optimization. AI noted excellent accessibility awareness and component reusability. Consider exploring more backend integration patterns."
      }
    },
    skills: [
      { name: "React", rating: 4.9 },
      { name: "CLR", rating: 4.7 },
      { name: "SQL", rating: 4.8 },
      { name: "DBMS Mngmt", rating: 4.4 },
      { name: "Testing", rating: 4.2 }
    ],
    interview: [
      {
        question: "How do you approach building a design system from scratch?",
        answer: "I start with an audit of existing UI patterns and stakeholder interviews. Then I define tokens (colors, spacing, typography) before components. I use Storybook for documentation and visual testing. Key is balancing flexibility with consistency—too rigid and devs work around it, too loose and you lose cohesion."
      },
      {
        question: "Describe your approach to web accessibility.",
        answer: "Accessibility is built-in, not bolted-on. I use semantic HTML first, then ARIA only when needed. I test with screen readers (VoiceOver, NVDA) and keyboard-only navigation. Color contrast ratios are non-negotiable. I've found that accessible design often leads to better UX for everyone."
      }
    ],
    contact: { phone: "+998 90 304-72-xx", email: "muhammadjonovamohinur36@gmail.com" }
  },
  {
    id: "006",
    name: "Tohirbek Isomiddinov",
    title: ".NET Systems Engineer",
    specialty: "CLR Internals & Memory Mgmt",
    avatar: { initials: "TI", bgColor: "#ffd93d" },
    marks: {
      human: {
        score: 4.4,
        maxScore: 5.0,
        feedback: "Tohirbek demonstrates strong product intuition backed by data. He articulates user problems clearly and prioritizes ruthlessly. His experience scaling B2B products is valuable. Could strengthen technical depth for better engineering collaboration."
      },
      ai: {
        score: 4.1,
        maxScore: 5.0,
        feedback: "Clear product thinking with good market awareness. AI noted excellent stakeholder communication skills. Areas to develop: deeper technical understanding and more rigorous experimentation frameworks."
      }
    },
    skills: [
      { name: "Product Strategy", rating: 4.7 },
      { name: "User Research", rating: 4.5 },
      { name: "Data Analysis", rating: 4.3 },
      { name: "Roadmapping", rating: 4.6 },
      { name: "SQL", rating: 3.9 }
    ],
    interview: [
      {
        question: "How do you prioritize features when everything seems urgent?",
        answer: "I use a modified RICE framework but weight impact heavily toward revenue and retention metrics. I maintain a 'parking lot' for good ideas that aren't timely. Weekly syncs with engineering help calibrate effort estimates. The key is saying no gracefully—I always explain the 'why' behind prioritization decisions."
      },
      {
        question: "Tell us about a product decision that failed and what you learned.",
        answer: "Launched a complex reporting feature based on enterprise feedback. Usage was dismal. Post-mortem revealed we'd listened to the loudest voices, not the majority. Now I validate with usage data, not just requests. We rebuilt with a simpler MVP approach—80% of the value in 20% of the complexity."
      }
    ],
    contact: { phone: "+998 97 323-22-55", email: "isomiddinovtohirjon5@gmail.com" }
  },
  {
    id: "007",
    name: "Sardor Jonimqulov",
    title: "Full-Stack Engineer",
    specialty: "React Frontend UI & .NET Backends",
    avatar: { initials: "SJ", bgColor: "#4ecdc4" },
    marks: {
      human: {
        score: 4.8,
        maxScore: 5.0,
        feedback: "Sardor is exceptionally strong in cloud architecture and cost optimization. Her Kubernetes expertise is production-hardened. She thinks about security and compliance from day one. A true infrastructure leader who can mentor teams."
      },
      ai: {
        score: 4.7,
        maxScore: 5.0,
        feedback: "Outstanding infrastructure knowledge with practical experience. AI noted excellent troubleshooting methodology and documentation habits. Strong candidate for senior/lead infrastructure roles."
      }
    },
    skills: [
      { name: "SQL", rating: 4.9 },
      { name: "DBMS Mngmt", rating: 4.8 },
      { name: "React", rating: 4.7 },
      { name: "CLR", rating: 4.3 },
      { name: "C#/.NET", rating: 4.5 }
    ],
    interview: [
      {
        question: "How do you approach cloud cost optimization?",
        answer: "Start with visibility—you can't optimize what you can't measure. I implement tagging strategies and use tools like AWS Cost Explorer with custom dashboards. Reserved instances for predictable workloads, spot for fault-tolerant jobs. Right-sizing is ongoing: I schedule quarterly reviews and automate recommendations. Saved my last company 40% annually."
      },
      {
        question: "Describe a production incident you managed and lessons learned.",
        answer: "Database failover didn't trigger during an AZ outage—turns out our health checks weren't comprehensive enough. I led the incident response: communicated status every 15 minutes, delegated investigation streams, and we recovered in 2 hours. Post-incident, we implemented chaos engineering practices and now regularly test failover scenarios. Documentation and runbooks became mandatory."
      }
    ],
    contact: { phone: "+998 90 871-27-86", email: "sardorjonimqulov2786@gmail.com" }
  },
  {
    id: "008",
    name: "Jamshidbek Aliyev",
    title: "Backend & SQL Engineer",
    specialty: "CLR Performance & SQL Querying",
    avatar: { initials: "JA", bgColor: "#a55eea" },
    marks: {
      human: {
        score: 4.3,
        maxScore: 5.0,
        feedback: "Jamshidbek is a versatile developer who ships fast without sacrificing quality. His startup experience shows in his pragmatic approach to technical decisions. Good at scoping MVPs and iterating based on feedback. Could benefit from deeper specialization in one area."
      },
      ai: {
        score: 4.4,
        maxScore: 5.0,
        feedback: "Broad technical knowledge with practical application focus. AI noted excellent problem decomposition and rapid prototyping skills. Consider developing deeper expertise in specific domains for senior specialist roles."
      }
    },
    skills: [
      { name: "C#/.NET", rating: 4.5 },
      { name: "React", rating: 4.4 },
      { name: "PostgreSQL", rating: 4.3 },
      { name: "API Design", rating: 4.6 },
      { name: "CLR", rating: 4.2 }
    ],
    interview: [
      {
        question: "How do you decide what to build for an MVP?",
        answer: "I focus on the core value proposition—what's the one thing that must work perfectly? Everything else is negotiable. I use the 'wizard of oz' approach when possible: manual processes behind the scenes before automating. Time-box ruthlessly: if we can't ship in 4-6 weeks, scope is too big. I've launched 12 MVPs this way, 8 found product-market fit."
      },
      {
        question: "How do you handle technical debt in fast-moving startups?",
        answer: "Technical debt is a tool, not a sin—it's about conscious tradeoffs. I document decisions and their expiration dates. Every sprint includes 20% for debt reduction. I categorize debt: 'blocking' (fix now), 'degrading' (schedule soon), 'acceptable' (revisit quarterly). The key is not letting debt compound silently."
      }
    ],
    contact: { phone: "+998 50 007-99-55", email: "jamshidbek.aliyev@gmail.com" }
  }
];
