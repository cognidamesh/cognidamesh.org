export const content = {
  "en": {
    "title": "Cognidamesh — A roadmap to open-source AI teams",
    "description": "A roadmap to 100% open-source AI teams for scientific research, OSINT, pentesting and countering disinformation. Discover the functions and components to assemble.",
    "skip": "Skip to content",
    "nav": [
      "The stack",
      "Architecture",
      "Runtimes"
    ],
    "eyebrow": "A roadmap to 100% open-source AI teams",
    "hero": "Your mission.<br><em>Your open-source AI team.</em>",
    "lead": "Enable people to build their own teams of AI agents for scientific research, OSINT, pentesting and countering disinformation. Cognidamesh shares a roadmap: the essential capabilities, the components to choose and how they fit together.",
    "explore": "Explore the roadmap",
    "source": "Discover the use cases",
    "heroNote": "A COMPONENT ROADMAP · OPEN SOURCE · SELF-HOSTED",
    "canvas": [
      "TEAM BLUEPRINT / 001",
      "HUMAN-DIRECTED",
      "SHARED MISSION",
      "Turn information into knowledge",
      "Research",
      "Build",
      "Operate",
      "Discover",
      "Deliver",
      "Maintain",
      "Organisational memory",
      "HINDSIGHT",
      "ILLUSTRATIVE TEAM",
      "ONE MISSION. SHARED CONTEXT."
    ],
    "strip": "Capabilities first. Components second.",
    "stackEyebrow": "02 / The building blocks",
    "stackTitle": "Start with the function.<br>Then choose the brick.",
    "stackIntro": "A roadmap for assembling your own stack, rather than a ready-to-install code distribution. Each block explains a need and highlights the open-source components we currently favour.",
    "components": [
      [
        "Coordinate",
        "Team orchestration",
        "Give the team goals, roles and a shared work queue. Delegate tasks, organise hand-offs and keep people in charge of priorities.",
        "MISSION → ROLES → TASKS",
        [
          [
            "Paperclip",
            "https://github.com/paperclipai/paperclip"
          ]
        ],
        "Paperclip provides the organisational layer that brings individual agents into a team."
      ],
      [
        "Execute",
        "Agent execution",
        "Turn a mission into actions through tools and skills. Choose a runtime for each role and connect it to the orchestrator through an adapter.",
        "ONE TEAM, COMPLEMENTARY RUNTIMES",
        [
          [
            "Hermes",
            "https://github.com/NousResearch/hermes-agent"
          ],
          [
            "OpenCode",
            "https://opencode.ai/"
          ],
          [
            "pi",
            "https://github.com/badlogic/pi-mono"
          ],
          [
            "Codex CLI",
            "https://github.com/openai/codex"
          ]
        ],
        "Hermes is our main choice for knowledge work; open-source coding runtimes complement it for implementation."
      ],
      [
        "Remember",
        "Memory management",
        "Keep findings, sources, decisions and context across sessions. Agents need to retrieve useful knowledge and build on what their team has already learned.",
        "RETAIN → RECALL → REFLECT",
        [
          [
            "Hindsight",
            "https://github.com/vectorize-io/hindsight"
          ]
        ],
        "Hindsight is currently the best fit for our blueprint: retain, recall and reflect operations, with a dedicated memory bank per organisation."
      ],
      [
        "Investigate",
        "Search & collection",
        "Find information, read web pages and follow evolving sources. Feed the team relevant material with its provenance.",
        "SEARCH → READ → CROSS-CHECK",
        [
          [
            "SearXNG",
            "https://docs.searxng.org/"
          ],
          [
            "Camofox",
            "https://github.com/jo-inc/camofox-browser"
          ]
        ],
        "SearXNG provides web search; Camofox provides browser access. Hermes connects these capabilities to its research skills."
      ],
      [
        "Reason",
        "Model serving & routing",
        "Supply the models that agents use to reason, handle routine tasks and create embeddings. Keep the inference layer under your control.",
        "SELF-HOSTED INFERENCE",
        [
          [
            "vLLM",
            "https://github.com/vllm-project/vllm"
          ],
          [
            "LiteLLM",
            "https://github.com/BerriAI/litellm"
          ]
        ],
        "Candidates for this layer: vLLM for serving models and the open-source LiteLLM core for API routing. Model licences and runtime protocols must also match your choices."
      ],
      [
        "Run",
        "Portable execution",
        "Run services with explicit permissions, networking and persistent storage. Reproduce the environment on a server, VM or in containers.",
        "YOUR ENVIRONMENT, YOUR CONTROL",
        [
          [
            "Podman",
            "https://podman.io/"
          ],
          [
            "Quadlet",
            "https://docs.podman.io/en/latest/markdown/podman-systemd.unit.5.html"
          ],
          [
            "Ansible",
            "https://docs.ansible.com/"
          ]
        ],
        "Podman and Quadlet manage containers without root privileges. Ansible helps reproduce the configuration."
      ]
    ],
    "archEyebrow": "03 / How the pieces connect",
    "archTitle": "See the connections.",
    "archIntro": "Read each block as a capability, then as a component choice. This is an assembly map for your future team.",
    "diagramLabel": "ROADMAP / FUNCTIONS AND COMPONENTS",
    "download": "Download .mmd ↓",
    "legend": [
      "Coordination & execution",
      "Knowledge & services",
      "Arrows show integration paths"
    ],
    "diagramCaption": "The direct research and memory integrations shown here use Hermes. Paperclip also feeds activity into memory; other runtimes require their own integrations. vLLM and LiteLLM are proposed inference options, to validate with the selected models and API protocols.",
    "diagramSource": "Inspect the Mermaid source",
    "runtimeEyebrow": "04 / Choose your agent runtimes",
    "runtimeTitle": "Open runtimes.<br>Complementary skills.",
    "runtimeIntro": "The runtime is the agent’s execution engine. Choose open-source tools for research, analysis and implementation, then connect the tools your field requires.",
    "runtimes": [
      [
        "Hermes",
        "Research & knowledge",
        "Our primary runtime for knowledge work: combine research skills, web tools and Hindsight memory. Use separate profiles for agents and a dedicated container for each organisation.",
        "Research · tools · durable memory",
        "h_"
      ],
      [
        "OpenCode",
        "Implementation & analysis",
        "An open-source coding runtime for building analysis tools, exploring code and implementing the team’s work. Connect it through its Paperclip adapter and configure a compatible model endpoint.",
        "Coding · tools · configurable models",
        "</>"
      ],
      [
        "pi",
        "Composable coding agent",
        "An open-source coding agent for teams that want to customise their execution workflow. Connect specialist tools and select compatible models for the task.",
        "Coding · extensions · model choice",
        "π"
      ],
      [
        "Codex CLI",
        "Local coding runtime",
        "The open-source terminal client is another runtime option. Its client licence does not determine the model licence: pair it with a compatible endpoint and a model that meets your openness requirements.",
        "Open-source CLI · compatible model endpoint",
        "[_]"
      ]
    ],
    "runtimeNote": "The goal is a 100% open-source team, including its execution and inference layers. Choose model licences accordingly: downloadable weights alone do not establish that a model is open source. Proprietary services are not a prerequisite of this roadmap.",
    "flowEyebrow": "05 / Your assembly roadmap",
    "flowTitle": "From an idea to a team.",
    "flowIntro": "Follow the capabilities in order. Start with a small, useful team and expand from evidence.",
    "steps": [
      [
        "Define the mission",
        "Choose the research question, investigation or assessment. Specify roles, expected outputs and what people must review."
      ],
      [
        "Choose the components",
        "Select an orchestrator, runtimes and a model stack. Check licences, hardware needs and API compatibility."
      ],
      [
        "Connect tools & memory",
        "Add sources and specialist tools. Connect shared memory and verify that agents preserve evidence and retrieve the right context."
      ],
      [
        "Evaluate & improve",
        "Test on representative tasks, review quality and document what works. Revisit the component choices as the ecosystem evolves."
      ]
    ],
    "deployEyebrow": "06 / Run it on your terms",
    "deployTitle": "Your stack.<br>Your environment.",
    "deployIntro": "The roadmap can be implemented on infrastructure you control. Start with a Linux server or VM, and use containers where they simplify operation and isolation.",
    "deployTabs": [
      "Server or VM",
      "Containers",
      "Open-source choices"
    ],
    "deploy": [
      [
        "AN ACCESSIBLE STARTING POINT",
        "Start with a Linux environment.",
        "Bring together the orchestrator, agent runtimes, tools and memory. Size CPU, RAM, storage and optional GPUs around the models and workloads you choose.",
        [
          "Linux",
          "Server or VM",
          "Your hardware"
        ]
      ],
      [
        "A MODULAR DEPLOYMENT",
        "Run the building blocks in containers.",
        "Use Podman and Quadlet to manage services and persistent data. Define networking, permissions and how local or remote runtime adapters reach each component.",
        [
          "Podman",
          "Quadlet",
          "Persistent storage"
        ]
      ],
      [
        "THE 100% OPEN-SOURCE GOAL",
        "Keep control of every layer.",
        "Choose open-source editions, compatible model licences and self-hosted services. The roadmap identifies the components and interfaces to assemble; integration and domain-specific tools remain part of building your team.",
        [
          "Open components",
          "Model licences",
          "Self-hosted services"
        ]
      ]
    ],
    "deployNote": "This is an evolving architectural roadmap. Component choices are recommendations for this blueprint, and should be validated against your own workloads.",
    "endEyebrow": "A ROADMAP YOU CAN MAKE YOUR OWN",
    "endTitle": "Choose your mission.<br>Build your collective intelligence.",
    "endText": "The contribution is a shared direction and a map of the necessary components. Assemble, evaluate and evolve your own open-source AI team.",
    "backTop": "Back to the roadmap ↑",
    "footer": "A roadmap for open-source collective intelligence.",
    "repo": "About this roadmap",
    "docs": "Mermaid documentation",
    "diagramAlt": "Architecture diagram showing Paperclip, agent runtimes, research tools, Hindsight memory and model services.",
    "noScript": "The architecture image and page content work without JavaScript. Enable JavaScript to explore the runtime and deployment selectors.",
    "useEyebrow": "01 / What these teams are for",
    "useTitle": "Investigate. Understand.<br>Build knowledge together.",
    "useIntro": "A shared foundation for different missions. These are the uses the roadmap aims to enable; each team brings its own expertise, data and specialist tools.",
    "uses": [
      [
        "Scientific research",
        "Review literature, compare hypotheses and support reproducible experiments. Keep methods, sources and results connected."
      ],
      [
        "OSINT",
        "Collect public information, cross-check sources and build documented investigations with traceable evidence."
      ],
      [
        "Pentesting",
        "Coordinate authorised security assessments, analyse findings and organise remediation within a defined scope."
      ],
      [
        "Countering disinformation",
        "Trace claims to their sources, compare accounts and document contradictions and uncertainty for human review."
      ]
    ],
    "componentChoice": "Current selection",
    "componentOptions": "Options to evaluate"
  },
  "fr": {
    "title": "Cognidamesh — Une feuille de route pour des équipes IA open source",
    "description": "Une feuille de route pour des équipes d’agents IA 100 % open source : recherche scientifique, OSINT, pentesting et lutte contre la désinformation. Fonctions, composants et architecture.",
    "skip": "Aller au contenu",
    "nav": [
      "La stack",
      "Architecture",
      "Runtimes"
    ],
    "eyebrow": "Vers des équipes IA 100 % open source",
    "hero": "Votre mission.<br><em>Votre équipe IA open source.</em>",
    "lead": "Permettre à chacun de construire ses équipes d’agents IA pour la recherche scientifique, l’OSINT, le pentesting et la lutte contre la désinformation. Cognidamesh partage une feuille de route : les fonctions essentielles, les composants à choisir et la manière de les assembler.",
    "explore": "Explorer la feuille de route",
    "source": "Découvrir les usages",
    "heroNote": "UNE FEUILLE DE ROUTE · OPEN SOURCE · AUTOHÉBERGÉ",
    "canvas": [
      "BLUEPRINT D’ÉQUIPE / 001",
      "PILOTÉ PAR L’HUMAIN",
      "MISSION COMMUNE",
      "Transformer l’information en savoir",
      "Rechercher",
      "Construire",
      "Opérer",
      "Découvrir",
      "Livrer",
      "Maintenir",
      "Mémoire de l’organisation",
      "HINDSIGHT",
      "ÉQUIPE ILLUSTRATIVE",
      "UNE MISSION. UN CONTEXTE PARTAGÉ."
    ],
    "strip": "Les fonctions d’abord. Les briques ensuite.",
    "stackEyebrow": "02 / Les building blocks",
    "stackTitle": "D’abord la fonction.<br>Ensuite la brique.",
    "stackIntro": "Nous partageons une feuille de route pour assembler votre stack, pas une distribution de code prête à installer. Chaque bloc explique un besoin et met en avant les composants open source que nous privilégions aujourd’hui.",
    "components": [
      [
        "Coordonner",
        "Orchestration d’équipe",
        "Donner à l’équipe des objectifs, des rôles et une file de travail commune. Déléguer, organiser les relais et laisser l’humain piloter les priorités.",
        "MISSION → RÔLES → TÂCHES",
        [
          [
            "Paperclip",
            "https://github.com/paperclipai/paperclip"
          ]
        ],
        "Paperclip fournit la couche d’organisation qui transforme des agents individuels en une équipe."
      ],
      [
        "Exécuter",
        "Exécution des agents",
        "Transformer une mission en actions grâce aux outils et aux compétences. Choisir un runtime par rôle et le relier à l’orchestrateur par un adaptateur.",
        "UNE ÉQUIPE, PLUSIEURS RUNTIMES",
        [
          [
            "Hermes",
            "https://github.com/NousResearch/hermes-agent"
          ],
          [
            "OpenCode",
            "https://opencode.ai/"
          ],
          [
            "pi",
            "https://github.com/badlogic/pi-mono"
          ],
          [
            "Codex CLI",
            "https://github.com/openai/codex"
          ]
        ],
        "Hermes est notre choix principal pour le travail de connaissance ; les runtimes de développement open source le complètent pour l’implémentation."
      ],
      [
        "Mémoriser",
        "Gestion de la mémoire",
        "Conserver les découvertes, les sources, les décisions et le contexte entre les sessions. Les agents doivent retrouver le savoir utile et capitaliser sur le travail de leur équipe.",
        "MÉMORISER → RETROUVER → ANALYSER",
        [
          [
            "Hindsight",
            "https://github.com/vectorize-io/hindsight"
          ]
        ],
        "Hindsight est aujourd’hui le meilleur choix pour notre blueprint : des opérations de mémorisation, de rappel et de réflexion, avec une banque mémoire dédiée par organisation."
      ],
      [
        "Enquêter",
        "Recherche et collecte",
        "Trouver l’information, lire les pages web et suivre les sources qui évoluent. Alimenter l’équipe en matière pertinente, en conservant sa provenance.",
        "CHERCHER → LIRE → RECOUPER",
        [
          [
            "SearXNG",
            "https://docs.searxng.org/"
          ],
          [
            "Camofox",
            "https://github.com/jo-inc/camofox-browser"
          ]
        ],
        "SearXNG assure la recherche web ; Camofox permet de parcourir les pages. Hermes relie ces capacités à ses compétences de recherche."
      ],
      [
        "Raisonner",
        "Inférence et routage",
        "Fournir les modèles nécessaires au raisonnement, aux tâches courantes et aux embeddings. Garder la maîtrise de la couche d’inférence.",
        "UNE INFÉRENCE AUTOHÉBERGÉE",
        [
          [
            "vLLM",
            "https://github.com/vllm-project/vllm"
          ],
          [
            "LiteLLM",
            "https://github.com/BerriAI/litellm"
          ]
        ],
        "Pistes pour cette couche : vLLM pour servir les modèles et le cœur open source de LiteLLM pour router les API. Les licences des modèles et les protocoles des runtimes doivent aussi être compatibles."
      ],
      [
        "Héberger",
        "Exécution portable",
        "Faire tourner les services avec des permissions, un réseau et un stockage persistants définis. Reproduire l’environnement sur un serveur, une VM ou en conteneurs.",
        "VOTRE ENVIRONNEMENT, VOTRE MAÎTRISE",
        [
          [
            "Podman",
            "https://podman.io/"
          ],
          [
            "Quadlet",
            "https://docs.podman.io/en/latest/markdown/podman-systemd.unit.5.html"
          ],
          [
            "Ansible",
            "https://docs.ansible.com/"
          ]
        ],
        "Podman et Quadlet gèrent les conteneurs sans privilèges root. Ansible aide à reproduire la configuration."
      ]
    ],
    "archEyebrow": "03 / L’assemblage des briques",
    "archTitle": "Visualisez les connexions.",
    "archIntro": "Lisez chaque bloc comme une fonction, puis comme un choix de composant. Cette carte guide l’assemblage de votre future équipe.",
    "diagramLabel": "FEUILLE DE ROUTE / FONCTIONS ET COMPOSANTS",
    "download": "Télécharger .mmd ↓",
    "legend": [
      "Coordination et exécution",
      "Mémoire et services",
      "Les flèches représentent les intégrations"
    ],
    "diagramCaption": "Les intégrations directes à la recherche et à la mémoire passent ici par Hermes. Paperclip alimente aussi la mémoire avec son activité ; les autres runtimes nécessitent leurs propres intégrations. vLLM et LiteLLM sont des pistes d’inférence à valider avec les modèles et les protocoles API choisis.",
    "diagramSource": "Consulter la source Mermaid",
    "runtimeEyebrow": "04 / Choisir les runtimes",
    "runtimeTitle": "Des runtimes ouverts.<br>Des compétences complémentaires.",
    "runtimeIntro": "Le runtime est le moteur d’exécution de l’agent. Choisissez des outils open source pour la recherche, l’analyse et l’implémentation, puis raccordez les outils de votre domaine.",
    "runtimes": [
      [
        "Hermes",
        "Recherche et connaissance",
        "Notre runtime principal pour le travail de connaissance : compétences de recherche, outils web et mémoire Hindsight. Prévoyez des profils distincts pour les agents et un conteneur dédié par organisation.",
        "Recherche · outils · mémoire durable",
        "h_"
      ],
      [
        "OpenCode",
        "Implémentation et analyse",
        "Un runtime de développement open source pour construire des outils d’analyse, explorer du code et concrétiser le travail de l’équipe. Reliez-le à son adaptateur Paperclip et configurez un endpoint de modèles compatible.",
        "Développement · outils · modèles configurables",
        "</>"
      ],
      [
        "pi",
        "Agent de développement composable",
        "Un agent de développement open source pour les équipes qui souhaitent personnaliser leur mode d’exécution. Connectez des outils spécialisés et choisissez des modèles compatibles avec la mission.",
        "Développement · extensions · choix des modèles",
        "π"
      ],
      [
        "Codex CLI",
        "Runtime de développement local",
        "Le client terminal open source constitue une autre option. Sa licence ne détermine pas celle des modèles : associez-le à un endpoint compatible et à un modèle répondant à vos exigences d’ouverture.",
        "CLI open source · endpoint de modèles compatible",
        "[_]"
      ]
    ],
    "runtimeNote": "L’objectif est une équipe 100 % open source, jusque dans ses couches d’exécution et d’inférence. Choisissez les licences des modèles en conséquence : des poids téléchargeables ne suffisent pas à qualifier un modèle d’open source. Les services propriétaires ne sont pas un prérequis de cette feuille de route.",
    "flowEyebrow": "05 / Votre feuille de route",
    "flowTitle": "D’une idée à une équipe.",
    "flowIntro": "Avancez dans l’ordre des fonctions. Commencez avec une petite équipe utile et élargissez-la à partir de résultats concrets.",
    "steps": [
      [
        "Définir la mission",
        "Choisissez la question de recherche, l’enquête ou l’audit. Précisez les rôles, les livrables attendus et les validations humaines."
      ],
      [
        "Choisir les composants",
        "Sélectionnez un orchestrateur, les runtimes et les modèles. Vérifiez les licences, les besoins matériels et la compatibilité des API."
      ],
      [
        "Relier outils et mémoire",
        "Ajoutez les sources et les outils métier. Connectez la mémoire partagée et vérifiez la conservation des preuves et le rappel du bon contexte."
      ],
      [
        "Évaluer et améliorer",
        "Testez sur des tâches représentatives, examinez la qualité et documentez les résultats. Réévaluez les briques à mesure que l’écosystème évolue."
      ]
    ],
    "deployEyebrow": "06 / Un environnement à votre main",
    "deployTitle": "Votre stack.<br>Votre environnement.",
    "deployIntro": "La feuille de route peut être mise en œuvre sur une infrastructure que vous maîtrisez. Commencez sur un serveur Linux ou une VM, et utilisez les conteneurs pour faciliter l’exploitation et l’isolation.",
    "deployTabs": [
      "Serveur ou VM",
      "Conteneurs",
      "Choix open source"
    ],
    "deploy": [
      [
        "UN POINT DE DÉPART ACCESSIBLE",
        "Commencez avec un environnement Linux.",
        "Réunissez l’orchestrateur, les runtimes, les outils et la mémoire. Dimensionnez le CPU, la RAM, le stockage et les éventuels GPU selon les modèles et les missions choisis.",
        [
          "Linux",
          "Serveur ou VM",
          "Votre matériel"
        ]
      ],
      [
        "UN DÉPLOIEMENT MODULAIRE",
        "Exécutez les briques en conteneurs.",
        "Utilisez Podman et Quadlet pour gérer les services et les données persistantes. Définissez le réseau, les permissions et l’accès de chaque adaptateur de runtime aux composants.",
        [
          "Podman",
          "Quadlet",
          "Stockage persistant"
        ]
      ],
      [
        "L’OBJECTIF 100 % OPEN SOURCE",
        "Gardez la maîtrise de chaque couche.",
        "Choisissez des éditions open source, des licences de modèles compatibles et des services autohébergés. La feuille de route identifie les composants et les interfaces à assembler ; l’intégration et les outils métier font partie de la construction de votre équipe.",
        [
          "Composants ouverts",
          "Licences des modèles",
          "Services autohébergés"
        ]
      ]
    ],
    "deployNote": "Cette feuille de route d’architecture évolue. Les briques retenues sont nos recommandations pour ce blueprint, à valider sur vos propres usages.",
    "endEyebrow": "UNE FEUILLE DE ROUTE À VOUS APPROPRIER",
    "endTitle": "Choisissez votre mission.<br>Construisez votre intelligence collective.",
    "endText": "Notre contribution : une direction commune et une carte des composants nécessaires. Assemblez, évaluez et faites évoluer votre propre équipe IA open source.",
    "backTop": "Revenir à la feuille de route ↑",
    "footer": "Une feuille de route pour l’intelligence collective open source.",
    "repo": "À propos de la feuille de route",
    "docs": "Documentation Mermaid",
    "diagramAlt": "Schéma de l’architecture reliant Paperclip, les runtimes d’agents, les outils de recherche, Hindsight et les modèles.",
    "noScript": "Le schéma et le contenu restent accessibles sans JavaScript. Activez JavaScript pour explorer les sélecteurs de runtimes et de déploiement.",
    "useEyebrow": "01 / À quoi servent ces équipes ?",
    "useTitle": "Enquêter. Comprendre.<br>Construire le savoir ensemble.",
    "useIntro": "Un socle commun pour des missions différentes. Voici les usages que la feuille de route vise à rendre possibles ; chaque équipe y apporte son expertise, ses données et ses outils métier.",
    "uses": [
      [
        "Recherche scientifique",
        "Explorer la littérature, confronter les hypothèses et accompagner des expériences reproductibles. Relier méthodes, sources et résultats."
      ],
      [
        "OSINT",
        "Collecter l’information publique, recouper les sources et construire des enquêtes documentées, avec des preuves traçables."
      ],
      [
        "Pentesting",
        "Coordonner des audits de sécurité autorisés, analyser les constats et organiser les corrections dans un périmètre défini."
      ],
      [
        "Lutte contre la désinformation",
        "Remonter aux sources des affirmations, comparer les récits et documenter contradictions et incertitudes pour une analyse humaine."
      ]
    ],
    "componentChoice": "Notre sélection actuelle",
    "componentOptions": "Pistes à évaluer"
  }
};
export function diagram(lang) {
 const fr=lang==='fr';
 return `flowchart TB
  accTitle: Cognidamesh open-source roadmap
  accDescr: ${fr?'Fonctions et composants pour assembler une équipe IA open source.':'Functions and components for assembling an open-source AI team.'}
  H["${fr?'Mission et pilotage humain':'Mission and human direction'}"] --> P["${fr?'Orchestration · Paperclip':'Orchestration · Paperclip'}"]
  P --> R["${fr?'Exécution et recherche · Hermes':'Execution and research · Hermes'}"]
  P --> C["${fr?'Développement · OpenCode, pi, Codex CLI':'Coding · OpenCode, pi, Codex CLI'}"]
  P -->|${fr?'activité':'activity'}| M["${fr?'Gestion de la mémoire · Hindsight':'Memory management · Hindsight'}"]
  R <--> M
  R --> W["${fr?'Recherche et collecte · SearXNG, Camofox':'Search and collection · SearXNG, Camofox'}"]
  R --> G["${fr?'Inférence · vLLM, LiteLLM':'Inference · vLLM, LiteLLM'}"]
  C --> G
  M --> G
  subgraph F["Linux · Podman · Quadlet"]
    P
    R
    C
    M
    W
    G
  end
  classDef lead fill:#d5f879,stroke:#8fa54f,color:#19281f,stroke-width:1px;
  classDef core fill:#263c2e,stroke:#476345,color:#ffffff,stroke-width:1px;
  classDef service fill:#e9efdf,stroke:#b3c49d,color:#263c2e,stroke-width:1px;
  classDef data fill:#ffffff,stroke:#a6b993,color:#263c2e,stroke-width:1px;
  class H,P lead;
  class R,C core;
  class W,G service;
  class M data;
  style F fill:#f9faf4,stroke:#b3c49d,stroke-dasharray:5 5,color:#476345;
`;
}
