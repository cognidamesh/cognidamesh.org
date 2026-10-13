export const content = {
  "en": {
    "title": "Cognidamesh — A blueprint for open-source AI agent teams",
    "description": "Cognidamesh is a blueprint for building your own open-source AI agent teams for scientific research, OSINT, pentesting and countering disinformation.",
    "skip": "Skip to content",
    "nav": [
      "The stack",
      "Architecture",
      "Runtimes"
    ],
    "eyebrow": "A blueprint for open-source AI agent teams",
    "hero": "Your mission.<br><em>Your open-source AI team.</em>",
    "lead": "Cognidamesh is a blueprint for building your own open-source AI agent teams for scientific research, OSINT, pentesting and countering disinformation. It maps the essential capabilities, the components to choose and how they fit together.",
    "explore": "Explore the architecture",
    "source": "Discover the use cases",
    "heroNote": "AN AI TEAM BLUEPRINT · OPEN SOURCE · SELF-HOSTED",
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
    "stackIntro": "A blueprint for assembling your own stack, rather than a ready-to-install code distribution. Each block presents a function, recommended components and alternatives. The goal remains a 100% open-source foundation; proprietary and hosted options are identified.",
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
          ],
          [
            "Claude Code",
            "https://github.com/anthropics/claude-code"
          ],
          [
            "Bob Shell",
            "https://bob.ibm.com/docs/shell/getting-started/install-and-setup"
          ]
        ],
        "Hermes is our main choice for knowledge work. OpenCode, pi and Codex CLI are open-source coding options. Claude Code and Bob Shell are proprietary alternatives, connected through the available adapters."
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
          ],
          [
            "CloakBrowser",
            "https://github.com/CloakHQ/cloakbrowser"
          ],
          [
            "Tavily",
            "https://docs.tavily.com/documentation/about"
          ]
        ],
        "SearXNG provides self-hosted search; Camofox and CloakBrowser support browsing and collection. Tavily offers a hosted search and extraction API. CloakBrowser’s wrapper is MIT, but its binary has separate terms: these options are not all fully open source."
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
          ],
          [
            "TensorFold",
            "https://github.com/ashhart/TensorFold"
          ]
        ],
        "vLLM and TensorFold are inference engines to evaluate against your models and hardware. The open-source LiteLLM core provides API routing. Check model formats, memory requirements and compatibility with the agent runtimes.",
        [
          "Abliterated models",
          "These variants, sometimes called “obliterated”, modify model weights to reduce certain refusal behaviours. They can support research into those behaviours and model comparisons in authorised assessments. Fewer refusals do not guarantee accuracy or stronger capabilities: also evaluate tool use and answer quality. The base model’s licence still applies.",
          "Example model card",
          "https://huggingface.co/OBLITERATUS/Qwen3-4B-OBLITERATED"
        ]
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
          ],
          [
            "Kubernetes",
            "https://kubernetes.io/"
          ],
          [
            "OpenShift",
            "https://www.redhat.com/en/technologies/cloud-computing/openshift"
          ],
          [
            "Terraform",
            "https://developer.hashicorp.com/terraform"
          ],
          [
            "OpenTofu",
            "https://opentofu.org/"
          ]
        ],
        "Podman and Quadlet suit a single host; Kubernetes orchestrates containers across a cluster, while OpenShift provides an integrated Kubernetes platform. Terraform defines and provisions infrastructure; Ansible configures systems. Current Terraform releases use the BSL; OpenTofu is the open-source alternative."
      ],
      [
        "Specialise",
        "Skills & methods",
        "Give agents a coherent set of capabilities: reusable instructions, procedures, tools and validation criteria. Select skills per role and adapt them to the team’s runtime, sources and field.",
        "METHOD → EXECUTION → VALIDATION",
        [
          [
            "BMAD",
            "https://github.com/bmad-code-org/BMAD-METHOD"
          ],
          [
            "Strix",
            "https://github.com/usestrix/strix"
          ]
        ],
        "BMAD structures software delivery, from planning through architecture and implementation. Strix is an agentic pentesting tool with skills for running assessments, addressing findings and verifying fixes. Curate a set for your mission; formats, tool requirements and integrations vary by runtime."
      ]
    ],
    "archEyebrow": "03 / How the pieces connect",
    "archTitle": "See the connections.",
    "archIntro": "Read each block as a capability, then as a component choice. This is an assembly map for your future team.",
    "diagramLabel": "ARCHITECTURE / FUNCTIONS AND COMPONENTS",
    "download": "Download .mmd ↓",
    "legend": [
      "Coordination & execution",
      "Knowledge & services",
      "Arrows show integration paths"
    ],
    "diagramCaption": "Functional map: validate connections for each runtime. Hermes carries the blueprint’s research and memory integrations. Search, inference and hosting alternatives are detailed in the blocks; they are not all required or all open source. BMAD and Strix skills connect according to supported formats and tools.",
    "diagramSource": "Inspect the Mermaid source",
    "runtimeEyebrow": "04 / Choose your agent runtimes",
    "runtimeTitle": "A choice of runtimes.<br>Complementary skills.",
    "runtimeIntro": "The runtime is the agent’s execution engine. Assemble a team using the open-source clients or proprietary alternatives below, then add the tools and skills each role needs.",
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
      ],
      [
        "Claude Code",
        "PROPRIETARY OPTION · CODING",
        "Anthropic’s coding agent can read and edit code, run tools and follow skill workflows. It is a proprietary option to connect through a compatible adapter, with the required model access and vendor terms.",
        "Code · tools · skills · proprietary licence",
        ">_"
      ],
      [
        "Bob Shell",
        "PROPRIETARY OPTION · TERMINAL",
        "The IBM Bob terminal client supports coding and automation in interactive or non-interactive sessions. Connect it through a compatible adapter with the required access and licence. It is outside the 100% open-source foundation.",
        "Terminal · automation · proprietary licence",
        "$>"
      ]
    ],
    "runtimeNote": "For a 100% open-source team, select runtimes, services and models with licences that meet that goal. Claude Code and Bob Shell are optional proprietary alternatives. A client’s licence does not determine the model’s licence; downloadable weights alone do not make a model open source.",
    "flowEyebrow": "05 / Put the blueprint into practice",
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
        "Connect tools, skills & memory",
        "Curate the skill set, using BMAD for software delivery or Strix for assessments, then connect sources and memory. Verify evidence preservation, context retrieval and results."
      ],
      [
        "Evaluate & improve",
        "Test on representative tasks, review quality and document what works. Revisit the component choices as the ecosystem evolves."
      ]
    ],
    "deployEyebrow": "06 / Run it on your terms",
    "deployTitle": "Your stack.<br>Your environment.",
    "deployIntro": "Start on a server or VM with Podman, or distribute services across Kubernetes or OpenShift. Define infrastructure with Terraform or OpenTofu, then configure systems with Ansible.",
    "deployTabs": [
      "Server or VM",
      "Containers & clusters",
      "Infrastructure as code"
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
        "FROM HOST TO CLUSTER",
        "Choose your execution scale.",
        "Podman and Quadlet manage containers on one host. Kubernetes distributes services across a cluster; OpenShift adds an integrated platform around Kubernetes. Adapt networking, persistent volumes and runtime access.",
        [
          "Podman / Quadlet",
          "Kubernetes",
          "OpenShift"
        ]
      ],
      [
        "REPRODUCIBLE INFRASTRUCTURE",
        "Define, provision, configure.",
        "Terraform or OpenTofu describe the resources to create; Ansible then configures systems and services. Terraform currently uses the source-available BSL; choose OpenTofu for this layer when targeting a fully open-source stack.",
        [
          "Terraform",
          "OpenTofu",
          "Ansible"
        ]
      ]
    ],
    "deployNote": "This architectural blueprint evolves with the ecosystem. Validate the recommended components against your own workloads.",
    "endEyebrow": "A BLUEPRINT YOU CAN MAKE YOUR OWN",
    "endTitle": "Choose your mission.<br>Build your collective intelligence.",
    "endText": "Cognidamesh provides a blueprint and a map of the necessary components. Assemble, evaluate and evolve your own open-source AI agent team.",
    "backTop": "Back to the architecture ↑",
    "footer": "A blueprint for building open-source AI agent teams.",
    "repo": "About this blueprint",
    "docs": "Mermaid documentation",
    "diagramAlt": "Architecture diagram showing Paperclip, agent runtimes, research tools, Hindsight memory and model services.",
    "noScript": "The architecture image and page content work without JavaScript. Enable JavaScript to explore the runtime and deployment selectors.",
    "useEyebrow": "01 / What these teams are for",
    "useTitle": "Investigate. Understand.<br>Build knowledge together.",
    "useIntro": "A shared foundation for different missions. These are the uses the blueprint aims to enable; each team brings its own expertise, data and specialist tools.",
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
    "componentChoice": "Components & alternatives",
    "componentOptions": "Options to evaluate"
  },
  "fr": {
    "title": "Cognidamesh — Un blueprint pour des équipes d’agents IA open source",
    "description": "Cognidamesh est un blueprint pour construire ses équipes d’agents IA open source : recherche scientifique, OSINT, pentesting et lutte contre la désinformation.",
    "skip": "Aller au contenu",
    "nav": [
      "La stack",
      "Architecture",
      "Runtimes"
    ],
    "eyebrow": "Un blueprint pour des équipes d’agents IA open source",
    "hero": "Votre mission.<br><em>Votre équipe IA open source.</em>",
    "lead": "Cognidamesh est un blueprint pour construire ses équipes d’agents IA open source, pour la recherche scientifique, l’OSINT, le pentesting et la lutte contre la désinformation. Il présente les fonctions essentielles, les composants à choisir et la manière de les assembler.",
    "explore": "Explorer l’architecture",
    "source": "Découvrir les usages",
    "heroNote": "UN BLUEPRINT D’ÉQUIPE IA · OPEN SOURCE · AUTOHÉBERGÉ",
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
    "stackIntro": "Nous partageons un blueprint pour assembler votre stack, pas une distribution de code prête à installer. Chaque bloc présente une fonction, les briques conseillées et les alternatives possibles. L’objectif reste un socle 100 % open source ; les options propriétaires ou hébergées sont identifiées.",
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
          ],
          [
            "Claude Code",
            "https://github.com/anthropics/claude-code"
          ],
          [
            "Bob Shell",
            "https://bob.ibm.com/docs/shell/getting-started/install-and-setup"
          ]
        ],
        "Hermes est notre choix principal pour le travail de connaissance. OpenCode, pi et Codex CLI sont des options de développement open source. Claude Code et Bob Shell sont des alternatives propriétaires, à connecter selon les adaptateurs disponibles."
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
          ],
          [
            "CloakBrowser",
            "https://github.com/CloakHQ/cloakbrowser"
          ],
          [
            "Tavily",
            "https://docs.tavily.com/documentation/about"
          ]
        ],
        "SearXNG fournit la recherche autohébergée ; Camofox et CloakBrowser permettent la navigation et la collecte. Tavily propose une API hébergée de recherche et d’extraction. Le wrapper de CloakBrowser est MIT, mais son binaire a des conditions spécifiques : ces options ne sont pas toutes 100 % open source."
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
          ],
          [
            "TensorFold",
            "https://github.com/ashhart/TensorFold"
          ]
        ],
        "vLLM et TensorFold sont des moteurs d’inférence à évaluer selon vos modèles et votre matériel. Le cœur open source de LiteLLM assure le routage des API. Vérifiez les formats, la mémoire nécessaire et la compatibilité avec les runtimes.",
        [
          "Modèles oblitérés (« abliterated »)",
          "Ces variantes modifient les poids pour réduire certains comportements de refus. Elles peuvent servir à étudier ces comportements et à comparer des modèles en recherche ou en audit autorisé. Moins de refus ne garantit ni exactitude ni meilleures capacités : évaluez aussi les appels d’outils et la qualité des réponses. La licence du modèle d’origine reste à respecter.",
          "Exemple de fiche modèle",
          "https://huggingface.co/OBLITERATUS/Qwen3-4B-OBLITERATED"
        ]
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
          ],
          [
            "Kubernetes",
            "https://kubernetes.io/"
          ],
          [
            "OpenShift",
            "https://www.redhat.com/en/technologies/cloud-computing/openshift"
          ],
          [
            "Terraform",
            "https://developer.hashicorp.com/terraform"
          ],
          [
            "OpenTofu",
            "https://opentofu.org/"
          ]
        ],
        "Podman et Quadlet conviennent à un hôte ; Kubernetes orchestre les conteneurs sur un cluster et OpenShift propose une plateforme Kubernetes intégrée. Terraform décrit et provisionne l’infrastructure, Ansible configure les systèmes. Les versions actuelles de Terraform utilisent la BSL ; OpenTofu est l’alternative open source."
      ],
      [
        "Spécialiser",
        "Skills et méthodes",
        "Donner aux agents un ensemble cohérent de compétences : consignes réutilisables, procédures, outils et critères de validation. Sélectionnez les skills par rôle et adaptez-les au runtime, aux sources et au domaine de l’équipe.",
        "MÉTHODE → EXÉCUTION → VALIDATION",
        [
          [
            "BMAD",
            "https://github.com/bmad-code-org/BMAD-METHOD"
          ],
          [
            "Strix",
            "https://github.com/usestrix/strix"
          ]
        ],
        "BMAD structure le travail de développement, du cadrage à l’architecture et à l’implémentation. Strix est un outil de pentesting agentique doté de skills pour piloter les audits, traiter les constats et vérifier les corrections. Composez un set adapté à la mission ; les formats, outils requis et intégrations varient selon le runtime."
      ]
    ],
    "archEyebrow": "03 / L’assemblage des briques",
    "archTitle": "Visualisez les connexions.",
    "archIntro": "Lisez chaque bloc comme une fonction, puis comme un choix de composant. Cette carte guide l’assemblage de votre future équipe.",
    "diagramLabel": "ARCHITECTURE / FONCTIONS ET COMPOSANTS",
    "download": "Télécharger .mmd ↓",
    "legend": [
      "Coordination et exécution",
      "Mémoire et services",
      "Les flèches représentent les intégrations"
    ],
    "diagramCaption": "Carte fonctionnelle : les connexions doivent être validées pour chaque runtime. Hermes porte les intégrations de recherche et de mémoire du blueprint. Les alternatives de recherche, d’inférence et d’hébergement sont détaillées dans les blocs ; elles ne sont pas toutes nécessaires ni toutes open source. Les skills BMAD et Strix se raccordent selon les formats et outils pris en charge.",
    "diagramSource": "Consulter la source Mermaid",
    "runtimeEyebrow": "04 / Choisir les runtimes",
    "runtimeTitle": "Des runtimes au choix.<br>Des compétences complémentaires.",
    "runtimeIntro": "Le runtime est le moteur d’exécution de l’agent. Composez une équipe avec les clients open source ou les alternatives propriétaires ci-dessous, puis ajoutez les outils et skills nécessaires à chaque rôle.",
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
      ],
      [
        "Claude Code",
        "OPTION PROPRIÉTAIRE · DÉVELOPPEMENT",
        "L’agent de développement d’Anthropic peut lire et modifier le code, exécuter des outils et suivre des workflows de skills. C’est une option propriétaire à intégrer via un adaptateur compatible, avec les accès aux modèles et les conditions du fournisseur.",
        "Code · outils · skills · licence propriétaire",
        ">_"
      ],
      [
        "Bob Shell",
        "OPTION PROPRIÉTAIRE · TERMINAL",
        "Le client terminal IBM Bob permet de travailler sur le code et d’automatiser des tâches en mode interactif ou non interactif. À intégrer via un adaptateur compatible, avec les accès et la licence nécessaires. Il ne fait pas partie du socle 100 % open source.",
        "Terminal · automatisation · licence propriétaire",
        "$>"
      ]
    ],
    "runtimeNote": "Pour une équipe 100 % open source, retenez des runtimes, services et modèles dont les licences répondent à cet objectif. Claude Code et Bob Shell sont des alternatives propriétaires facultatives. La licence d’un client ne détermine pas celle du modèle ; des poids téléchargeables ne suffisent pas à qualifier un modèle d’open source.",
    "flowEyebrow": "05 / Mettre le blueprint en pratique",
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
        "Relier outils, skills et mémoire",
        "Composez le set de skills, avec BMAD pour le développement ou Strix pour les audits, puis raccordez les sources et la mémoire. Vérifiez la conservation des preuves, le rappel du contexte et les résultats."
      ],
      [
        "Évaluer et améliorer",
        "Testez sur des tâches représentatives, examinez la qualité et documentez les résultats. Réévaluez les briques à mesure que l’écosystème évolue."
      ]
    ],
    "deployEyebrow": "06 / Un environnement à votre main",
    "deployTitle": "Votre stack.<br>Votre environnement.",
    "deployIntro": "Commencez sur un serveur ou une VM avec Podman, ou distribuez les services sur Kubernetes ou OpenShift. Décrivez l’infrastructure avec Terraform ou OpenTofu, puis configurez les systèmes avec Ansible.",
    "deployTabs": [
      "Serveur ou VM",
      "Conteneurs et clusters",
      "Infrastructure as code"
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
        "DU SERVEUR AU CLUSTER",
        "Choisissez votre échelle d’exécution.",
        "Podman et Quadlet gèrent les conteneurs sur un hôte. Kubernetes répartit les services sur un cluster ; OpenShift ajoute une plateforme intégrée autour de Kubernetes. Adaptez le réseau, les volumes persistants et les accès des runtimes.",
        [
          "Podman / Quadlet",
          "Kubernetes",
          "OpenShift"
        ]
      ],
      [
        "UNE INFRASTRUCTURE REPRODUCTIBLE",
        "Décrivez, provisionnez, configurez.",
        "Terraform ou OpenTofu décrivent les ressources à créer ; Ansible configure ensuite les systèmes et les services. Terraform utilise aujourd’hui la BSL, une licence à code source disponible ; choisissez OpenTofu pour cette couche si vous visez une stack entièrement open source.",
        [
          "Terraform",
          "OpenTofu",
          "Ansible"
        ]
      ]
    ],
    "deployNote": "Ce blueprint d’architecture évolue avec l’écosystème. Validez les composants recommandés sur vos propres usages.",
    "endEyebrow": "UN BLUEPRINT À VOUS APPROPRIER",
    "endTitle": "Choisissez votre mission.<br>Construisez votre intelligence collective.",
    "endText": "Cognidamesh fournit un blueprint et une carte des composants nécessaires. Assemblez, évaluez et faites évoluer votre propre équipe d’agents IA open source.",
    "backTop": "Revenir à l’architecture ↑",
    "footer": "Un blueprint pour construire ses équipes d’agents IA open source.",
    "repo": "À propos du blueprint",
    "docs": "Documentation Mermaid",
    "diagramAlt": "Schéma de l’architecture reliant Paperclip, les runtimes d’agents, les outils de recherche, Hindsight et les modèles.",
    "noScript": "Le schéma et le contenu restent accessibles sans JavaScript. Activez JavaScript pour explorer les sélecteurs de runtimes et de déploiement.",
    "useEyebrow": "01 / À quoi servent ces équipes ?",
    "useTitle": "Enquêter. Comprendre.<br>Construire le savoir ensemble.",
    "useIntro": "Un socle commun pour des missions différentes. Voici les usages que le blueprint vise à rendre possibles ; chaque équipe y apporte son expertise, ses données et ses outils métier.",
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
    "componentChoice": "Briques et alternatives",
    "componentOptions": "Pistes à évaluer"
  }
};
export function diagram(lang) {
 const fr=lang==='fr';
 return `flowchart TB
  accTitle: Cognidamesh open-source blueprint
  accDescr: ${fr?'Fonctions et composants pour assembler une équipe IA open source.':'Functions and components for assembling an open-source AI team.'}
  H["${fr?'Mission et pilotage humain':'Mission and human direction'}"] --> P["${fr?'Orchestration · Paperclip':'Orchestration · Paperclip'}"]
  P --> R["${fr?'Exécution et recherche · Hermes':'Execution and research · Hermes'}"]
  P --> C["${fr?'Développement · OpenCode, pi, Codex CLI, Claude Code, Bob Shell':'Coding · OpenCode, pi, Codex CLI, Claude Code, Bob Shell'}"]
  P -->|${fr?'activité':'activity'}| M["${fr?'Gestion de la mémoire · Hindsight':'Memory management · Hindsight'}"]
  R <--> M
  R --> W["${fr?'Recherche et collecte · SearXNG, Camofox, CloakBrowser, Tavily':'Search and collection · SearXNG, Camofox, CloakBrowser, Tavily'}"]
  R --> G["${fr?'Inférence · vLLM, TensorFold, LiteLLM':'Inference · vLLM, TensorFold, LiteLLM'}"]
  C --> G
  M --> G
  S["${fr?'Skills et méthodes · BMAD, Strix':'Skills and methods · BMAD, Strix'}"] -.-> R
  S -.-> C
  subgraph F["${fr?'Conteneurs / clusters':'Containers / clusters'}"]
    P
    R
    C
    M
    W
    G
    S
  end
  classDef lead fill:#d5f879,stroke:#8fa54f,color:#19281f,stroke-width:1px;
  classDef core fill:#263c2e,stroke:#476345,color:#ffffff,stroke-width:1px;
  classDef service fill:#e9efdf,stroke:#b3c49d,color:#263c2e,stroke-width:1px;
  classDef data fill:#ffffff,stroke:#a6b993,color:#263c2e,stroke-width:1px;
  class H,P lead;
  class R,C core;
  class W,G,S service;
  class M data;
  style F fill:#f9faf4,stroke:#b3c49d,stroke-dasharray:5 5,color:#476345;
`;
}
