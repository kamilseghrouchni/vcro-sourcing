---
pmid: "41326303"
pmc: "PMC12811770"
doi: "10.1016/j.tjpad.2025.100398"
title: "Towards an AI biomedical scientist: Accelerating discoveries in neurodegenerative disease"
journal: "The Journal of Prevention of Alzheimer's Disease"
year: 2026
authors:
  - name: "Roberts Kaleigh F."
    affiliations:
      - ""
  - name: "Landsness Eric C."
    affiliations:
      - ""
  - name: "Reese Justin"
    affiliations:
      - ""
  - name: "Elbert Donald"
    affiliations:
      - ""
  - name: "Strobel Gabrielle"
    affiliations:
      - ""
  - name: "Wu Elizabeth"
    affiliations:
      - ""
  - name: "Chen Yixin"
    affiliations:
      - ""
  - name: "Lai Albert"
    affiliations:
      - ""
  - name: "Abrams Zachary B."
    affiliations:
      - ""
  - name: "Zhu Mingfang"
    affiliations:
      - ""
  - name: "Melendez Justin"
    affiliations:
      - ""
  - name: "Koutarapu Srinivas"
    affiliations:
      - ""
  - name: "Song Sihui"
    affiliations:
      - ""
  - name: "Chen Yun"
    affiliations:
      - ""
  - name: "Lazar Robert"
    affiliations:
      - ""
  - name: "Barnaghi Payam"
    affiliations:
      - ""
  - name: "Crary John F."
    affiliations:
      - ""
  - name: "Sardi Sergio Pablo"
    affiliations:
      - ""
  - name: "Voss Marc D."
    affiliations:
      - ""
  - name: "Krishnan Rajaraman"
    affiliations:
      - ""
  - name: "Schwartz Joel W."
    affiliations:
      - ""
  - name: "Mallon Ron"
    affiliations:
      - ""
  - name: "Jimenez-Maggiora Gustavo A."
    affiliations:
      - ""
  - name: "Wang Chenguang"
    affiliations:
      - ""
  - name: "Sandmann Thomas"
    affiliations:
      - ""
  - name: "Bose Niranjan"
    affiliations:
      - ""
  - name: "Phatak Mukta"
    affiliations:
      - ""
  - name: "Wittenberg Gayle"
    affiliations:
      - ""
  - name: "Kevrekidis Yannis G."
    affiliations:
      - ""
  - name: "Mitchell Cassie S."
    affiliations:
      - ""
  - name: "Mitchener Ludovico"
    affiliations:
      - ""
  - name: "Raj Towfique"
    affiliations:
      - ""
  - name: "Foschini Luca"
    affiliations:
      - ""
  - name: "Moore Gregory J."
    affiliations:
      - ""
  - name: "Bateman Randall J."
    affiliations:
      - ""
---

# Towards an AI biomedical scientist: Accelerating discoveries in neurodegenerative disease

## Abstract

Despite major advances in Alzheimer’s disease and related diseases (ADRD) research, the translation of discoveries into impactful clinical interventions remains slow. Overwhelming data complexity, fragmented knowledge, and prolonged research cycles hinder progress in understanding and treating neurodegenerative diseases. Artificial intelligence (AI) offers a promising path forward, particularly when developed as a scientist-in-the-loop system that collaborates with researchers throughout the scientific discovery process. This paper introduces the concept of an AI Biomedical Scientist, an intelligent platform designed to support literature synthesis, hypothesis generation, experimental design, and data interpretation. This platform aims to function as a holistic scientific partner, integrating diverse biomedical data and expert reasoning to accelerate discovery. We review commercial and academic efforts and introduce targeted Minimum Viable Products (MVPs) needed for general biomedical research lab utilization of AI, such as robust and accurate tools for literature and data analysis, negative data models, and virtual peer review, with a longer-term vision of foundation models trained directly on biomedical datasets. In AD and neurodegeneration research, such tools are anticipated to deliver efficiency gains ranging from modest improvements in specific research tasks to potential multi-fold accelerations in discovery workflows as systems mature and scale. This review examines the technical foundations, challenges, and anticipated impacts of AI and aims to inform and engage researchers in utilizing these systems to transform biomedical discovery, starting with AD and extending to other complex conditions.

## Introduction: the need for innovation in Alzheimer’s research

1

Alzheimer’s disease (AD) is a common neurodegenerative disorder, affecting an estimated 50 million people worldwide and contributing substantially to human, social, and economic burdens at an immense scale. More than a century after its initial description by Alois Alzheimer, research has advanced significantly, leading to the development of highly accurate diagnostic biomarkers and modestly effective disease-modifying therapies [[1], [2], [3]]. However, for most patients, treatments that meaningfully alter disease progression or outcomes remain limited [4].

A key challenge in AD research is the biological complexity of the disease. Studies have demonstrated that AD pathology begins up to 25 years before symptom onset, initiating a prolonged and dynamic pathogenic process involving compensatory mechanisms, evolving cell states, and interacting molecular pathways [5]. The extended course of Alzheimer’s disease, combined with the rapid growth and complexity of biomedical data, has outpaced the capacity of traditional research methods to effectively synthesize all information to generate maximally informed actionable insights. Although over two million biomedical papers are published annually, fewer than 0.1 % of discoveries have a direct impact on human health outcomes [6]. Translational barriers, including fragmented knowledge across disciplines, slow cycles of hypothesis testing, and challenges in integrating diverse data types, are particularly pronounced in neurodegenerative diseases [7]. Moreover, more than 97 % of drugs entering AD clinical trials do not achieve approval (data from https://www.alzforum.org/therapeutics), underscoring inefficiencies in current discovery pipelines [8].

The challenges of AD research are compounded by the vast and accelerating amounts of biomedical data generated, including published data and “dark data” hidden in inaccessible sources or unpublished findings, such as negative results [[9], [10], [11], [12], [13]]. The huge number of publications (currently > 200,000 for AD based on PubMed query for “Alzheimer’s disease”) make it impossible for researchers to stay abreast of findings outside their specialization, further exacerbating siloed understanding across domains and hampering disruptive science that fundamentally shifts current understanding [14]. As a consequence, the timelines to train researchers have also substantially increased, leading to a relative shortage in the number of qualified scientists needed for the challenge [15].

Artificial intelligence (AI) has the potential to improve how researchers navigate and interpret complex biomedical data [[16], [17], [18], [19], [20]]. While expert scientists possess highly refined reasoning skills, they are fundamentally limited by cognitive bandwidth, i.e. the amount of literature, data modalities, and prior findings they can hold in mind and integrate at once. AI systems can help overcome this limitation by surfacing relevant knowledge from across vast datasets and literature corpora, organizing connections, and enabling hypothesis generation that is informed by a broader and more comprehensive information space than a human could synthesize alone [21,22]. In this way, AI acts as a contextual amplifier, allowing scientists to apply their expertise more effectively across the full scope of available evidence.

Despite this potential, many current AI applications in biomedicine remain narrowly focused on specific tasks such as literature mining, diagnostic image analysis, risk prediction, or natural language summarization. While valuable, these tools stop short of supporting the more integrative and iterative processes of scientific reasoning required for foundational discovery. There remains a need for AI systems that can assist with the cognitive and analytical tasks central to discovery, including synthesizing knowledge, generating hypotheses, designing experiments, and learning from new data. Toward this end, the Consortium for Biomedical Research and AI in Neurodegeneration (c-brAIn) has been launched to accelerate health impactful basic science discoveries through the use of AI tools.

In this paper, we describe the concept of an AI Biomedical Scientist, a collaborative, scientist-in-the-loop system intended to support researchers throughout the scientific process. We focus on AD as an initial use case, given its clinical relevance, extensive datasets, and established research infrastructure. We outline the technical foundations of this approach, the early-stage tools currently in development, and the potential for AI to enhance research efficiency and outcomes in neurodegenerative disease studies.

## What is an AI biomedical scientist?

2

An AI Biomedical Scientist is designed to support researchers across the biomedical research process, including literature and data review, hypothesis generation, experimental design, and data interpretation. Unlike traditional AI tools focused on single tasks, the AI Biomedical Scientist is designed to iterate through the entire scientific pipeline, including identifying biological questions, synthesizing literature, generating hypotheses, designing experiments, analyzing data, and interpreting results, by integrating publications, biomedical data, critical reasoning, and domain expertise to accelerate discovery and generate insights that improve human health.

A defining feature of this approach is its scientist-in-the-loop design, in which scientific experts remain involved in developing, refining, and interpreting the system’s outputs to ensure scientific rigor and contextual relevance [23]. Rather than aiming to replace researchers, the AI scientist is intended to augment human work by improving efficiency, reproducibility, and the capacity to quickly and meaningfully explore new scientific questions.

The AI scientist is designed to integrate data from multiple domains, including genomics, proteomics, lipidomics, metabolomics, imaging, electronic health records, and behavioral measures, which are often distributed across institutions and research silos. Scientists can conduct analyses using local or external data sources through natural language interfaces. The system automates analyses through machine learning and deep neural net approaches, accelerating the time from measurement to interpretation.

Together, these capabilities position the AI Biomedical Scientist as a valuable tool for advancing research in complex areas such as AD, underscoring the need to understand the specific AI technologies that make such a system possible.

## Core AI technologies

3

The AI Biomedical Scientist combines several artificial intelligence technologies to support various aspects of biomedical research. To better understand how these technologies contribute, it is helpful to clarify key terms that are sometimes used interchangeably but refer to distinct concepts (Fig. 1).Fig. 1Glossary of AI terms.Fig. 1:

Artificial intelligence broadly describes computational systems that perform tasks typically requiring human intelligence, such as understanding language, recognizing patterns, or making decisions. Within AI, machine learning refers to algorithms that improve performance by learning from data rather than following explicitly programmed rules. Deep learning is a specialized subset of machine learning that relies on large neural networks, which are computational models inspired by the structure and function of neurons in the brain. These networks consist of layers of interconnected nodes (“neurons”) that process input data through weighted connections, enabling the system to learn complex patterns. Transformers are a specific class of deep neural network architectures that excel at processing sequential data and have become central to many modern AI applications.

A key component of the AI Biomedical Scientist is the large language model (LLM) (Fig. 2). LLMs are transformer-based neural networks trained on extensive textual corpora, including scientific literature, to generate human language [24]. They can summarize information, answer questions, and suggest hypotheses. However, general-purpose LLMs, such as GPT-5, Gemini, Claude, and Grok4, while effective in conversational tasks, often lack the precision, domain-specific knowledge, and interpretability needed for rigorous biomedical research [25]. Additionally, these models can produce “hallucinations” (or more accurately, confabulations), plausible but incorrect information, which poses challenges for their use in scientific contexts, where accuracy and truth are paramount [26].Fig. 2Workflow diagram for AI Biomedical Scientist. A biological knowledge gap is first identified by a scientist, who conducts experiments to generate raw data. These data are then captured in published literature, ontologies, and databases curated by human experts. Organized knowledge frameworks derived from these sources can be transformed into knowledge graphs and incorporated into large language models (LLMs). Through an iterative process, human scientists interact with the LLM, which assigns specific tasks to specialized AI agents such as data analysis, hypothesis generation, literature retrieval, and critical review. This human-AI collaboration supports the identification of new biological insights, their contextualization within existing data and literature, and expert validation to ensure scientific relevance.Fig. 2:

An alternative approach to improve domain relevance is the development of biological specialist LLMs, models pre-trained or fine-tuned specifically on biomedical text. Examples include BioBERT[27], BioGPT[28], BiomedLM[29], Med-Gemini[30], and Med-PaLM[31]. These models can offer enhanced vocabulary coverage, improved factual recall, and greater alignment with domain-specific language. However, specialist LLMs face several limitations. First, their knowledge is static and can quickly become outdated in fast-evolving fields. Second, they are often narrow in scope, performing well in specific biomedical subdomains but struggling when tasks require broader reasoning or interdisciplinary integration. Finally, they still retain the inherent limitations of LLMs, including susceptibility to hallucinations and opaque decision-making.

To address these limitations, the AI Biomedical Scientist incorporates retrieval-augmented generation (RAG) architectures. RAG systems enhance LLMs by connecting them to external databases or curated literature, helping ensure that generated responses are grounded in factual sources [32,33]. This design allows us to circumvent some of the limitations of static pretrained models by deferring knowledge retrieval to inference time, increasing flexibility, and reducing the need for frequent retraining. A further refinement of this approach is integrating knowledge graphs with RAG (e.g. GraphRAG), to link textual outputs directly to structured evidence nodes [34]. Knowledge graphs represent biomedical concepts and the relationships among them and offer a way to organize information and support reasoning that goes beyond simple keyword matching.

In addition, the proposed AI Biomedical Scientist leverages emerging concepts from agentic AI [35,36]. Unlike traditional models that only respond to queries, agentic AI systems are designed to autonomously plan, reason, and take actions toward defined goals. Agentic AI can iteratively break down complex research tasks, select appropriate tools (such as querying databases, running analyses, or simulating models), and adapt based on intermediate results. This agent-like behavior shifts AI from a reactive assistant toward a proactive collaborator capable of orchestrating multi-step workflows. However, while these systems introduce powerful automation capabilities, they are not intended to operate in isolation. A key design principle is maintaining an appropriate balance between automated task execution and human oversight. Researchers remain essential in setting goals, curating inputs, interpreting results, and determining when to trust or override AI-driven decisions.

Another envisioned capability of the AI Biomedical Scientist is multimodal data integration. Modern biomedical research generates diverse datasets across domains, scale, and time, including genomics, proteomics, and other biomolecular measures across atomic, molecular, cellular, tissue, and organ scales with human imaging, clinical, vocal, and behavioral measurements that are often stored in separate systems. The AI Biomedical Scientist is designed to utilize these heterogeneous data sources, helping researchers examine relationships across different domains and develop integrated models of disease processes.

Finally, the AI Biomedical Scientist’s architecture is designed to operate in federated environments, allowing analyses to be performed across multiple institutions without requiring the sharing of raw data. In a federated approach, data remain securely within each institution while algorithms or models are shared and run locally, and only the aggregated results are combined. This can be especially important for working with proprietary pharmaceutical data, sensitive patient records, or other data subject to privacy regulations. Examples of successful federated environments in multiomic workflows include PPML-Omics[37], DataSHIELD[38] and OmicSHIELD[39]. Within the AD research community, the Alzheimer’s Disease Data Initiative (ADDI) utilizes the Federated Data Sharing Appliance (FDSA), a secure data application that enables multiple organizations to securely share data without the need for centralization in a single repository [40]. Federated training of AI models is achieved by distributing global model parameters to local sites, training on private local data, and then returning updated model parameters to the centralized server [37,[41], [42], [43], [44]]. Such methods help address privacy, sovereignty, and regulatory requirements while enabling collaboration at a scale needed for research in AD and other complex conditions.

Together, these technologies can create an assistive framework designed to complement scientific expertise. By combining natural language processing, structured knowledge representation, data integration, agentic AI, and customized foundational models, the AI Biomedical Scientist aims to accelerate how researchers generate hypotheses, design experiments, and analyze results. In our own development efforts, we have implemented and evaluated early prototypes of this system, specifically focusing on literature retrieval and synthesis using RAG architectures trained on curated Alzheimer’s disease corpora [45], and also testing prototype multi-agentic systems. These systems represent the foundation for future more advanced capabilities such as multimodal integration and added-value agentic workflows.

## Current AI tools and systems

4

The use of artificial intelligence to support scientific research is gaining momentum in both commercial and academic settings. Several initiatives are exploring LLM-based systems designed to function as AI scientists, capable of parsing scientific literature, suggesting hypotheses, or assisting with experimental planning [[46], [47], [48], [49]]. These efforts have emerged in response to the growing challenge that individual researchers face in keeping up with the rapidly expanding volume of scientific publications and data.

Examples of specialized AI tools for scientific applications include Google’s Co-Scientist [50], FutureHouse’s Robin [51], and AI2’s Asta. These systems differ in their scope, underlying technologies, and the extent to which they incorporate expert scientific input (also discussed in the paper by Funk et al. in this special edition of JPAD)., [ref] While these systems represent significant progress and are at the current cutting edge of applying AI to research tasks, we believe significant additional validation is required to demonstrate their reliability and impact in real-world scientific research. A non-exhaustive list of AI biomedical scientific platforms is summarized in Table 1.Table 1Examples of AI biomedical scientific platforms currently in development including notable features and links for access.Table 1:SystemUseAccessReadily accessible via web user interfaceFutureHouse Robin [51]Multi-agent system for literature search, hypothesis generation, experimental design, data analysis, figure generation, and experimental planningFree partial web access to agents at platform.futurehouse.org, code available at https://github.com/Future-House/robinAi2 AstaMulti agent system for literature search and summarizationFree, https://asta.allen.ai/chatBenchSci AscendMulti agent system using proprietary multimodal LLMs supported by a knowledge graph and ontology knowledge basehttps://knowledge.benchsci.com/home/platform-fundamentals, free access to Selector Tool for academics, most tools require paid subscriptionAlzAssistantLiterature-based Q&A using PaperQA2, curated AD paper corpus, and Alzheimer’s knowledge graphFree, https://chat.alzassistant.org/AlzheimerRAG[52]Q&A using multimodal RAG pipeline with AD PubMed corpusFree, https://tinyurl.com/AlzheimerRAGBiomni[22]Generalist agentic architecture that integrates LLM reasoning with retrieval-augmented planning and code-based execution, enabling complex biomedical workflowsFree, https://biomni.stanford.edu/https://github.com/snap-stanford/biomniDORA[53]Multi-agent scientific exploration and draft outline researchassistant for automated orsemi-automated research studies and report generationhttps://dora.insilico.comCode available, but no web interfaceSakana The AI Scientist[48]Idea generation, computational experiment conduction, paper writing and reviewhttps://github.com/SakanaAI/AI-Scientist/tree/main/ai_scientistSemNet[54]Literature-based discovery system enabling PubMed relationship literature mininghttps://github.com/pathology-dynamics/semnet-2The Virtual Lab[55]LLM principal investigatoragent guiding a team of LLM agents with different scientific backgrounds (e.g., a chemist agent,a computer scientist agent, a critic agent), with a human researcher providing high-levelfeedbackhttps://github.com/zou-group/virtual-labData-to-paper[56]Automation platforms that guides LLM agents starting with annotated data through hypothesis generation, data analysis, results interpretation, and manuscript preparationhttps://github.com/Technion-Kishony-lab/data-to-paperRBio by CZI[57]Reasoning model combining virtual cell models with chat interface of LLMs to predict how cells will behave in experimentshttps://github.com/czi-ai/rbioX-Master[58]Tool-augmented reasoningagent designed to emulate human researchers by interacting flexibly with externaltools during its reasoning processhttps://github.com/sjtu-sai-agents/X-MasterBioResearcher[59]Modular multi-agent architecture integrating search, literature synthesis, experimental design, and programminghttps://github.com/XMUDM/BioResearcherBioDiscoveryAgent[60]Agent for designing genetic perturbation experimentshttps://github.com/snap-stanford/BioDiscoveryAgentNot publicly availableGoogle Co-Scientist[50]Multi-agent system focused on literature search and iterative hypothesis refinementNot publicly available, paid institutional accessLila.aiPlatform announced by Flagship Pioneering to develop “superintelligence in science,” integrating LLMs, reasoning systems, and autonomous laboratory platforms to accelerate discoveryNot publicly availablePROTEUS[61]Fully automated scientific discovery system for hypothesis generation from raw proteomic dataNot publicly availableSTELLA[62]Multi-agent architecture that self-evolves reasoning strategies and discovers and integrates bioinformatic toolsNot publicly available

These initiatives represent important early progress in applying generative AI and agentic tools to biomedical research, and many offer capabilities that will likely inform and complement future systems. Our proposed AI Biomedical Scientist builds on this growing foundation, with a particular focus on addressing the specific challenges of AD and biomedical research. Rather than replacing or competing with existing platforms, it seeks to integrate and extend their capabilities within a disease-focused, scientist-guided framework. Key distinguishing features include its explicit design for AD and neurodegeneration, enabling deeper incorporation of domain-specific knowledge, and its emphasis on high-quality multimodal “dark” data fusion across genomic, proteomic, imaging, clinical, and behavioral domains that are otherwise not accessible. Importantly, the system is developed around a scientist-in-the-loop model, in which domain experts play an active role in curating inputs, interpreting outputs, and refining system behavior to ensure scientific rigor and practical relevance.

## Why Alzheimer’s disease is the ideal proving ground

5

AD is a particularly suitable area for developing and implementing an AI Biomedical Scientist [63]. Decades of both broad and deep research have produced enormous datasets, from molecular characterization, cellular and animal models, through human pathologic, imaging, genomic, proteomic, and clinical data from initiatives such as the Alzheimer’s Disease Neuroimaging Initiative (ADNI) [64], Dominantly Inherited Alzheimer Network (DIAN) [65], DIAN-TU [66], and national and international observational cohorts and clinical trials summarized in Table 2. These resources provide a strong basis for developing and validating AI models.Table 2Examples of Multimodal Data Resources.Table 2:Resource TypeExamplesTypes of DataUtility/RelevanceAD Data repositoriesAD Knowledge Portal[67], ADDI Repository[68], GNPC[69], IDA[70], NACC[71], NIAGADS[72]Clinical, cognitive, imaging, biomarkers, genomic, transcriptomic, proteomic, metabolomicInternational harmonized datasets over multiple studiesAD-specific observational cohortsADNI[64], ADRCs, ADSP[73], AIBL[74], BioFINDER[75], DELCODE[76], DIAN[65], EPAD[77], ROSMAP[78]Clinical, cognitive, imaging, biomarkers, genomic, transcriptomic, proteomic, metabolomicImaging, CSF/biomarkers, cognitive assessments, and multi-omic data across diverse AD cohortsAD-specific interventional studiesA4/LEARN[79], AHEAD 3–45[80], APEX, DIAN-TU[66]Clinical, cognitive, imaging, biomarkers, genomic, transcriptomic, proteomic, metabolomicHighly phenotyped AD cohorts with therapeutic interventionsGeneral population and longitudinal aging cohorts100-plus Study[81], All of Us Research Program[82], BLSA[83], CAMCAN[84], FinnGen[85], HASD/ACS[86], Human Connectome Project[87], MCSA[88], RESILIENT[89], UK Biobank[90]Genomics, imaging, clinicalLarge-scale data integrating genetic profiles, imaging, and health records across the lifespanReal-world clinical datasetsOptum Clinformatics, TriNetX[91]Federated EHR networks, claims data, and clinical datasetsReal-world data capturing clinical heterogeneity and operational variability not present in curated or protocol driven datasetsDigital biomarker studiesmPower[92], RADAR-AD[93], TIHM[94]Wearable sensor dataDigital monitoring of daily living to capture dynamic changes missed in episodic clinical assessmentsNot publicly available datasetsProprietary Pharma data, individual laboratory research dataClinical trial results, experimental data, negative resultsOften unpublished, but critical for hypothesis generation and reducing duplication of effortCurated knowledgeAlzforumCurated literature, structured knowledgeAD-focused commentary, news, and community consensusA4: Anti-Amyloid Treatment in Asymptomatic Alzheimer’s, ACTC: Alzheimer’s Clinical Trials Consortium, ADDI: Alzheimer’s Disease Data Initiative, ADNI: Alzheimer’s Disease Neuroimaging Initiative, ADRC: Alzheimer’s Disease Research Center, ADSP: Alzheimer’s Disease Sequencing Project, AIBL: Australian Imaging, Biomarkers and Lifestyle Study, APEX: Alzheimer’s Plasma Extension Study, BioFINDER: Biomarkers For Identifying Neurodegenerative Disorders Early and Reliably, BLSA: Baltimore Longitudinal Study of Aging, CAMCAN: Cambridge Centre for Ageing and Neuroscience, DELCODE: DZNE Longitudinal Cognitive Impairment and Dementia Study, DIAN: Dominantly Inherited Alzheimer Network, DIAN-TU: DIAN Trials Unit, EPAD: European Prevention of Alzheimer’s Dementia, GNPC: Global Neurodegeneration Proteomics Consortium, HASD/ACS: Healthy Aging & Senile Dementia/The Adult Children Study, IDA: Image & Data Archive at LONI, LEARN: Longitudinal Evaluation of Amyloid Risk and Neurodegeneration, MCSA: Mayo Clinic Study of Aging, mPower: Mobile Parkinson Disease Study, NACC: National Alzheimer’s Coordinating Center, NIAGADS: National Institute on Aging Genetics of Alzheimer's Disease Data Storage Site, RADAR-AD: Remote Assessment of Disease And Relapse – Alzheimer’s Disease, ROSMAP: Religious Orders Study and Rush Memory and Aging Project, TIHM: Technology Integrated Health Management.

Beyond data availability, the field also benefits from structured knowledge platforms like Alzforum and data aggregators such as the AD Data Initiative (ADDI). These curated resources are valuable for training AI systems designed to work with the complexities of neurodegenerative biology.

Furthermore, the AD research ecosystem is characterized by strong cross-sector research groups in pharmaceutical and biotechnology companies, academic institutions, and patient advocacy groups, with thousands of researchers working to decipher the causes and pathophysiology of AD. This large and diverse group of researchers will enable scientist-in-the-loop training and integration and evaluation of AI-driven research tools.

Taken together, diverse datasets, structured knowledge platforms, and strong research collaboration across academia and industry make AD an ideal domain for developing AI tools. These resources create opportunities for practical systems that support researchers in addressing complex scientific questions, a goal that begins with developing focused initial solutions.

## Phase 1: minimum viable products (MVPs) in development

6

A practical step toward applying the AI Biomedical Scientist in AD research is the development of targeted Minimum Viable Products (MVPs) that address specific challenges in the research process. These initial tools aim to test technical approaches and support AI-driven research amid large datasets, expanding experimental findings, and the complex biology of neurodegeneration and AD. One of the first areas of development is creating tools for literature search and synthesis. Early work across various domains suggests that traditional search is still better than AI-based search tools, however as AI continues to improve the advantage it gives in speed will become more relevant [[95], [96], [97]]. We have been developing AI literature search systems that integrate RAG architectures with LLMs trained on AD-focused scientific texts and connected to knowledge graphs [45]. The goal is to help researchers quickly identify, compare, and summarize relevant information from both published literature and internal datasets, making it easier to navigate the existing scientific knowledge. Importantly, domain-specific scientists are actively integrated into the developmental process to ensure accuracy and relevance of AI-generated responses. Additional emphasis on the curation of a trustworthy, high-quality corpus of training literature ensures a solid central knowledge foundation.

A second MVP focuses on addressing the challenge of negative and unpublished results in biomedical research. Negative findings are often absent from published literature, which can contribute to redundant research efforts and leave important areas of biological understanding unexplored [13]. The proposed “Negative Data Analyzer” would aim to process data from both published studies and non-public sources, including data held in federated environments such as pharmaceutical company datasets and unpublished results in labs. By integrating information from studies with non-significant or null results, this tool is intended to help reduce unnecessary duplication of experiments and identify conditions that influence biological mechanisms.

A third MVP, referred to as “Reviewer Three,” is envisioned as a virtual scientific reviewer and research advisor trained specifically on a corpus of documents and paired reviews. Its purpose would be to provide feedback on grant applications, experimental designs, and manuscripts. Initial evaluations of LLMs as scientific reviewers have demonstrated substantial overlap between human and AI generated reviews and overall positive user perceptions of usefulness [98]. By simulating different review styles, from constructive mentoring to critical peer evaluation, this system is intended to help researchers refine hypotheses, strengthen experimental plans, and anticipate potential reviewer concerns.

Taken together, these MVPs represent a practical, additive approach to applying AI in AD research. Each is designed to address specific challenges faced by researchers and to serve as an early demonstration of how AI tools can integrate into scientific workflows. While these initial efforts are focused and targeted, they lay the foundation for more comprehensive systems in the future, where larger gains in efficiency and scalability may be possible through broader applications of AI technologies.

## Phase 2: toward an integrated platform and foundation models for scientific discovery

7

While our initial focus is on developing targeted tools to address specific challenges in AD research, the longer-term vision extends beyond individual solutions. In Phase 2, the aim is twofold: to create a unified platform that integrates these capabilities into a cohesive system and to develop foundation models trained directly on biomedical data.

A key objective of Phase 2 is to combine the functions demonstrated in the initial MVPs into a single, integrated platform. Such a system is intended to help researchers navigate the entire scientific process more efficiently, providing interconnected tools for the iterative cycle of questioning, analysis, and discovery. The second major goal in Phase 2 involves developing foundation models specifically trained on large-scale biomedical data. Unlike general-purpose language models trained primarily on internet text, these biomedical foundation models would be developed using domain-specific datasets such as genomic and proteomic profiles, neuroimaging data, longitudinal clinical records, and results from both published and non-public studies. Unlike textual corpora, these raw biomedical data types are less prone to becoming outdated, offering a more durable substrate for foundational learning. Our strategy focuses on leveraging these resilient data sources to build more robust and broadly applicable models. These models are intended to capture complex patterns and relationships within the data, potentially enabling the generation of new hypotheses, predictions about disease mechanisms, or identification of biomarkers associated with disease progression and therapeutic response. Initial efforts have demonstrated that LLMs can generate novel and valid hypotheses even when tested on literature unrelated to the training data [99].

Overall, Phase 2 represents a transition from testing individual tools to building a unified, scalable AI system intended to support the entire biomedical research process. While data-related, methodological, and practical challenges remain, the potential for improved efficiency and deeper scientific insights underscores the importance of this next stage of development. Realizing this vision will require addressing these challenges, which are discussed in the following section.

## Challenges and mitigation strategies

8

The application of AI in biomedical research, while promising, presents several important challenges that must be addressed to ensure scientific integrity and responsible use [[100], [101], [102]]. From a technical perspective, developing and deploying advanced AI models requires significant computational resources and specialized infrastructure, which can pose practical barriers for many current research groups.

Data privacy and security also remain critical concerns, particularly given the sensitive nature of biomedical information and the ethical and legal frameworks (e.g., HIPAA, GDPR) that govern its use [42,43,103,104]. In addition, intellectual property and copyright restrictions can limit the use of scientific publications and proprietary datasets for training AI models or deploying research tools, due to licensing agreements and data ownership concerns. A related concern is the risk of data duplication across repositories, which can lead to biased analyses, redundant processing, and inflated sample sizes. Strategies for mitigating data duplication include use of persistent universally unique identifiers (UUIDs) for participant-level tracking where available, and matching algorithms to identify likely duplicate records in datasets without direct identifiers [105,106].

Beyond infrastructure and governance, adoption within the scientific community presents its own set of challenges. Many scientists, especially those less familiar with AI methods, may have valid concerns about the reliability, transparency, effectiveness, and interpretability of current generative AI outputs, including the risk of generating hallucinations [26]. Addressing these concerns will require clear communication about both the capabilities and limitations of AI systems, along with careful validation and demonstration of their practical value in scientific contexts.

The rapid pace of advancement in AI further complicates adoption. New tools, models, and best practices evolve quickly, making it difficult for biomedical researchers to stay current. At the same time, biomedical data itself is constantly growing, posing logistical and organizational challenges for version control, reproducibility, and integration with existing systems. Ensuring that models remain both accurate and aligned with the latest knowledge will require adaptive infrastructure, modular system designs, and ongoing collaboration between AI experts and domain scientists.

A particularly important set of challenges centers on ethical concerns, specifically algorithmic bias, accountability, and potential misuse [103,101,107]. Like all data-driven tools, AI models are susceptible to biases embedded in their training data, which can result in unequal performance across populations or misleading conclusions when trained on limited or biased data. The types, quality, amount, and range of biological data will completely change what an AI system can identify and discover at all levels. Many of the strategies used to detect and mitigate human bias in science, such as disaggregated analyses, dataset balancing, and transparency in decision-making, can and should be adapted to AI development and evaluation. Establishing accountability frameworks is also essential. These may include audit trails, logging systems, and traceable outputs that allow researchers to understand how a model arrived at a conclusion, assess its reliability, and flag potential errors. Such infrastructure is especially important as AI becomes more integrated into workflows, where overreliance or automation bias may lead to uncritical acceptance of flawed results. Misuse can also take more subtle forms, such as reinforcing low-quality analyses or contributing to inefficiencies. These risks highlight the importance of a scientist-in-the-loop design, in which both users and developers share responsibility for evaluating outputs, selecting appropriate tools, and maintaining high standards of scientific integrity throughout the AI development process.

Responsible development of AI tools for biomedical research depends on maintaining high scientific standards [108]. Important principles include careful validation to understand performance and limitations, transparent reporting of how models are developed and assessed, and clear definitions of the roles and boundaries of human oversight. In particular, expert oversight is critical for curating high-quality input data and literature, filtering out low-quality or misleading information, and validating AI-generated outputs before they inform scientific conclusions. This close involvement of domain experts will help develop, judge, and rate AI tools, to maintain scientific credibility and relevance. The c-brAIn brings together a broad network of biomedical researchers to enable collective expert review of both inputs and outputs.

By thoughtfully addressing these challenges, AI has the potential to become a valuable tool for biomedical research, supporting scientists in navigating complex data and generating new insights, particularly in fields like AD. Maintaining scientific rigor, transparency, and human oversight will be essential to ensuring its responsible and effective use.

## Anticipated impact on Alzheimer’s research

9

Integrating AI into biomedical research has the potential to offer measurable benefits for the study of AD. The envisioned AI Biomedical Scientist, with its capacity to synthesize complex data and literature, is expected to support researchers in accelerating key scientific processes. Early estimates suggest that AI-assisted literature review could reduce the time required by ∼25 % compared to traditional manual approaches [97]. Such improvements are particularly relevant in AD research, where timely insights can contribute to advancing therapeutic development. Looking ahead, broader integration of AI systems in Phase 2 may enable even greater efficiencies, potentially achieving gains of two- to ten-fold in certain research workflows [51].

Beyond improving efficiency, the assistant is intended to support the rigor and reproducibility of scientific research. By systematically integrating information from diverse sources, the AI system may help researchers identify consistent patterns and avoid pursuing directions less likely to yield meaningful results. This capability could contribute to more effective target identification and validation, potentially supporting higher success rates in experimental studies and subsequent clinical trials, although precise estimates of such impacts remain uncertain.

The potential benefits of AI tools in AD research extend beyond individual laboratories. Advanced analytics and knowledge synthesis capabilities, which have typically been available to large research institutions with substantial resources, could become more accessible to smaller labs and early-career investigators. Increasing the availability of these tools may help reduce disparities in research capacity and promote contributions from a more diverse scientific community.

In addition, AI systems could play a supportive role in training the next generation of biomedical researchers. By providing examples of literature analysis, hypothesis development, and experimental critique, the AI Biomedical Scientist may help shorten learning curves for trainees and early-career scientists. Access to such resources could enhance scientific literacy and build confidence in working with complex, data-driven questions, potentially contributing to a more skilled and adaptable research community.

While precise metrics will continue to emerge as these systems are further developed and tested, integrating AI into AD research offers meaningful opportunities to improve scientific workflows, enhance reproducibility, and expand access to advanced analytical capabilities.

## Future vision

10

The longer-term vision for AI in biomedical research extends beyond developing individual tools or even unified platforms. As foundational models and integrated systems mature, one key aspiration for future development lies in enabling semi-autonomous experimental design. In this scenario, AI systems could propose experimental protocols, suggest statistical methodologies, and forecast potential outcomes by synthesizing prior literature and integrated data models. While ultimate decision-making and oversight would remain in scientists’ hands, the ability of AI to rapidly generate and evaluate experimental scenarios has the potential to increase research efficiency and facilitate exploration of more diverse scientific hypotheses. This capability would effectively yield a multiplier effect on capacity for research studies in the lab.

Expanding the application of AI tools beyond AD represents another important frontier. Technical architectures and methodological insights developed through neurodegenerative research are anticipated to be adaptable to other biomedical domains, including oncology, rare diseases, immunology, and complex chronic conditions. For example, AI systems capable of integrating diverse datasets, such as genomic profiles, imaging, and real-world clinical data, could help uncover shared pathways across diseases or identify patient subgroups more likely to benefit from specific therapies. Such cross-disciplinary insights might accelerate progress in fields where traditional research approaches have faced persistent challenges.

Beyond individual research programs, the broader vision for AI in biomedical science envisions a fundamental evolution in how discoveries are made. The traditional paradigm, characterized by linear hypothesis testing and siloed data sources, could increasingly give way to iterative, data-driven exploration powered by AI systems able to synthesize information across domains and scales. While realizing such capabilities will require significant advances in AI technologies, robust validation, and sustained collaboration between computational scientists and biomedical experts, this evolution holds the promise of accelerating the translation of basic research into clinical advances, ultimately contributing to improved diagnostics, therapies, and preventive strategies across a wide range of diseases.

## Call to action

11

The development of an AI Biomedical Scientist marks a step toward transforming scientific discovery in complex fields like AD. The urgency of this challenge and the scale of resources and expertise it demands has led to the formation of a dedicated consortium committed to designing, building, and refining this new class of scientific tools.

A white paper outlining the scientific and technical vision for this initiative has been published and is available to the research community. But moving from vision to practical reality requires deep collaboration across disciplines, institutions, and sectors. The AI Biomedical Scientist is being developed as a tool built by scientists, for scientists. Its success will depend on diverse input and engagement from those who understand the complexities of biomedical research and the pressing need for new solutions.

For those interested in contributing or learning more, additional information is available at: https://c-brain.org. We invite researchers, clinicians, data scientists, and technology developers to join this effort. There are many ways to participate, from contributing domain expertise and engaging in pilot projects, to building and testing emerging tools, offering feedback on usability and performance, and sharing perspectives on critical scientific questions where AI could make a difference. Funders and philanthropic organizations interested in accelerating scientific progress are also encouraged to explore ways to support the development and broad dissemination of these tools. All interested parties can begin by filling out the survey on the c-brAIn website.

AD poses enormous challenges, but it also presents a profound opportunity: to harness innovative technologies and collaborative spirit to unlock new understanding and improve outcomes for patients and families affected by these devastating conditions. We invite the scientific community to help shape and build the next generation of tools that could redefine how discovery happens.

## Declaration of generative AI and AI-assisted technologies in the writing process

During the preparation of this work the authors used ChatGPT in order to improve language and readability. After using this tool/service, the authors reviewed and heavily edited the content as needed and take full responsibility for the content of the publication.

## Declaration of competing interest

The authors declare the following financial interests/personal relationships which may be considered as potential competing interests:

Randall J. Bateman reports financial support was provided by Avid Radiopharmaceuticals Inc. Randall J. Bateman reports financial support was provided by Janssen Pharmaceuticals Inc. Randall J. Bateman reports financial support was provided by Roche Diagnostics GmbH. Randall J. Bateman reports financial support was provided by Genentech Inc. Randall J. Bateman reports financial support was provided by Eli Lilly and Company. Randall J. Bateman reports financial support was provided by Eisai Inc. Randall J. Bateman reports financial support was provided by Biogen Inc. Randall J. Bateman reports financial support was provided by AbbVie Inc. Randall J. Bateman reports financial support was provided by Bristol-Myers Squibb Company. Randall J. Bateman reports financial support was provided by Novartis Pharmaceuticals Corporation. Randall J. Bateman reports a relationship with C2N Diagnostics, LLC that includes: board membership, consulting or advisory, and equity or stocks. Randall J. Bateman reports a relationship with Roche that includes: board membership. Randall J. Bateman reports a relationship with Biogen Inc that includes: board membership. Robert Lazar reports a relationship with Booz Allen Hamilton Inc that includes: employment. Sergio Pablo Sardi reports a relationship with Sanofi that includes: employment. Marc D. Voss reports a relationship with Sanofi that includes: employment. Joel W. Schwartz reports a relationship with Bristol Myers Squibb Co that includes: employment. Thomas Sandmann reports a relationship with Denali Therapeutics Inc that includes: employment. Gayle Wittenberg reports a relationship with Johnson & Johnson Inc that includes: employment. Niranjan Bose reports a relationship with Gates Ventures that includes: employment. Gregory J. Moore reports a relationship with Gates Ventures that includes: independent contract. Ludovico Mitchener reports a relationship with FutureHouse that includes: employment. Gabrielle Strobel reports a relationship with Alzforum that includes: employment. Elizabeth Wu reports a relationship with Alzforum Foundation Inc that includes: employment. Luca Foschini reports a relationship with Sage Bionetworks that includes: employment. If there are other authors, they declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

## Acknowledgements

AcknowledgmentsThis initiative is supported by major consortium partners including Washington University, Gates Ventures, Alzforum, AD Data Initiative, Alzheimer’s Association, Anonymous Foundation, Bristol Myers Squibb, Sanofi, Tau Consortium, The Dolby Family, The 10,000 Brains Project, The Robertson Foundation, Eisai, Johnson & Johnson, and over 100 engaged biomedical researchers. Figures were created in BioRender. https://BioRender.com/gq38ex5 and https://BioRender.com/tw98m0y

## References

1. 1BarthélemyN.R.SalvadóG.SchindlerS.E.HeY.JanelidzeS.CollijL.E.Highly accurate blood test for Alzheimer’s disease is similar or superior to clinical cerebrospinal fluid testsNat Med304202410851095Apr3838264510.1038/s41591-024-02869-zPMC11031399 [PMID:38382645]
2. 2BatemanR.J.LiY.McDadeE.M.Llibre-GuerraJ.J.CliffordD.B.AtriA.Safety and efficacy of long-term gantenerumab treatment in dominantly inherited Alzheimer’s disease: an open-label extension of the phase 2/3 multicentre, randomised, double-blind, placebo-controlled platform DIAN-TU trialLancet Neurol2442025316330Apr 14012061610.1016/S1474-4422(25)00024-9PMC12042767 [PMID:40120616]
3. 3SimsJ.R.ZimmerJ.A.EvansC.D.LuM.ArdayfioP.SparksJ.Donanemab in early symptomatic Alzheimer disease: the TRAILBLAZER-ALZ 2 randomized clinical trialJAMA33062023512527Aug 83745914110.1001/jama.2023.13239PMC10352931 [PMID:37459141]
4. 4VigneswaranS.VijverbergE.G.B.BarkhofF.van de GiessenE.LemstraA.W.PijnenburgY.Real-world” eligibility for anti-amyloid treatment in a tertiary memory clinic settingAlzheimers Dement2162025e70375June 1210.1002/alz.70375PMC1216225940506692 [PMID:40506692]
5. 5LiY.YenD.HendrixR.D.GordonB.A.DlaminiS.BarthélemyN.R.Timing of biomarker changes in sporadic Alzheimer’s disease in estimated years from symptom onsetAnn Neurol9552024951965May3840079210.1002/ana.26891PMC11060905 [PMID:38400792]
6. 6IoannidisJ.P.A.Why most clinical research is not usefulPLoS Med1362016e1002049June 2110.1371/journal.pmed.1002049PMC491561927328301 [PMID:27328301]
7. 7MyszczynskaM.A.OjamiesP.N.LacosteA.M.B.NeilD.SaffariA.MeadR.Applications of machine learning to diagnosis and treatment of neurodegenerative diseasesNat Rev Neurol1682020440456Aug3266968510.1038/s41582-020-0377-8 [PMID:32669685]
8. 8YiannopoulouK.G.AnastasiouA.I.ZachariouV.PelidouS.H.Reasons for failed trials of disease-modifying treatments for Alzheimer disease and their contribution in recent researchBiomedicines74201997Dec 93183542210.3390/biomedicines7040097PMC6966425 [PMID:31835422]
9. 9PfefferC.OlsenB.R.Editorial: journal of negative Results in biomedicineJ Negat Results Biomed1120022Nov 121245905010.1186/1477-5751-1-2PMC149424 [PMID:12459050]
10. 10BikE.M.Publishing negative results is good for scienceAccess Microbiol642024000792Apr 210.1099/acmi.0.000792PMC1108346038737803 [PMID:38737803]
11. 11FanelliD.Negative results are disappearing from most disciplines and countriesScientometrics9032012891904Mar 1
12. 12KearnsW.G.StamoulisG.GlickJ.BaischL.BennerA.BroughD.The application of knowledge engineering via the use of a biomimetic digital twin ecosystem, phenotype-driven variant analysis, and exome sequencing to understand the molecular mechanisms of diseaseJ Mol Diagn2672024543551July3855612310.1016/j.jmoldx.2024.03.004 [PMID:38556123]
13. 13BrazilR.Illuminating ‘the ugly side of science’: fresh incentives for reporting negative resultsNat [Internet]2024May 8 [cited 2025 Aug 22]Available fromhttps://www.nature.com/articles/d41586-024-01389-710.1038/d41586-024-01389-739174776 [PMID:39174776]
14. 14ParkM.LeaheyE.FunkR.J.Papers and patents are becoming less disruptive over timeNature61379422023138144Jan3660007010.1038/s41586-022-05543-x [PMID:36600070]
15. 15HansonM.A.BarreiroP.G.CrosettoP.BrockingtonD.The strain on scientific publishingQuant Sci Stud542024823843Nov 1
16. 16WangH.FuT.DuY.GaoW.HuangK.LiuZ.Scientific discovery in the age of artificial intelligenceNature620797220234760Aug3753281110.1038/s41586-023-06221-2 [PMID:37532811]
17. 17TuT.FangZ.ChengZ.SpasicS.PalepuA.StankovicK.M.Genetic discovery enabled by A large language model [Internet]bioRxivhttps://www.biorxiv.org/content/10.1101/2023.11.09.566468v12023
18. 18HulsenT.Literature analysis of artificial intelligence in biomedicineAnn Transl Med102320221284Dec3661877910.21037/atm-2022-50PMC9816850 [PMID:36618779]
19. 19AthanasopoulouK.DanevaG.N.AdamopoulosP.G.ScorilasA.Artificial intelligence: the milestone in modern biomedical researchBioMedInformatics242022727744Dec
20. 20KwaT.WestB.BeckerJ.DengA.GarciaK.HasinM.Measuring AI ability to complete long tasks [Internet]arXivhttp://arxiv.org/abs/2503.144992025
21. 21GaoS.FangA.HuangY.GiunchigliaV.NooriA.SchwarzJ.R.Empowering biomedical discovery with AI agentsCell18722202461256151Oct 313948639910.1016/j.cell.2024.09.022 [PMID:39486399]
22. 22Huang K., Zhang S., Wang H., Qu Y., Lu Y., Roohani Y., et al. Biomni: a general-purpose biomedical AI agent. bioRxiv. 2025 June 2;2025.05.30.656746.
23. 23ShahC.From prompt engineering to prompt science with Human in the loop [Internet]arXivhttp://arxiv.org/abs/2401.041222024
24. 24NaveedH.KhanA.U.QiuS.SaqibM.AnwarS.UsmanM.A comprehensive overview of large language models [Internet]arXivhttp://arxiv.org/abs/2307.064352024
25. 25PanthaN.RamasubramanianM.GurungI.MaskeyM.RamachandranR.Challenges in guardrailing large language models for science [Internet]arXivhttp://arxiv.org/abs/2411.081812024
26. 26MassenonR.GamboI.KhanJ.A.AgbonkheseC.AlwadainA.My AI is lying to me”: user-reported LLM hallucinations in AI mobile apps reviewsSci Rep151202530397Aug 1910.1038/s41598-025-15416-8PMC1236526540830185 [PMID:40830185]
27. 27LeeJ.YoonW.KimS.KimD.KimS.SoC.H.BioBERT: a pre-trained biomedical language representation model for biomedical text miningBioinformatics364202012341240Feb 153150188510.1093/bioinformatics/btz682PMC7703786 [PMID:31501885]
28. 28LuoR.SunL.XiaY.QinT.ZhangS.PoonH.BioGPT: generative pre-trained transformer for biomedical text generation and miningBr Bioinform2362022bbac409Nov 110.1093/bib/bbac40936156661 [PMID:36156661]
29. 29BoltonE.VenigallaA.YasunagaM.HallD.XiongB.LeeT.BioMedLM: a 2.7B parameter language model trained on biomedical text [Internet]arXivhttp://arxiv.org/abs/2403.184212024
30. 30SaabK.TuT.WengW.H.TannoR.StutzD.WulczynE.Capabilities of Gemini models in medicine [Internet]arXivhttp://arxiv.org/abs/2404.184162024
31. 31SinghalK.AziziS.TuT.MahdaviS.S.WeiJ.ChungH.W.Large language models encode clinical knowledgeNature62079722023172180Aug3743853410.1038/s41586-023-06291-2PMC10396962 [PMID:37438534]
32. 32GaoY.XiongY.GaoX.JiaK.PanJ.BiY.Retrieval-augmented generation for large language models: a survey [Internet]arXivhttp://arxiv.org/abs/2312.109972024
33. 33LewisP.PerezE.PiktusA.PetroniF.KarpukhinV.GoyalN.Retrieval-augmented generation for knowledge-intensive NLP tasksProceedings of the 34th International Conference on Neural Information Processing Systems2020Curran Associates Inc.Red Hook, NY, USA94599474NIPS ’20
34. 34HanH.WangY.ShomerH.GuoK.DingJ.LeiY.Retrieval-augmented generation with graphs (GraphRAG) [Internet]arXivhttp://arxiv.org/abs/2501.003092025
35. 35NisaU.ShiraziM.SaipM.A.PoziM.S.M.Agentic AI: the age of reasoning—A reviewJ Autom Intell [Internet]2025Aug 28 [cited 2025 Oct 6]Available fromhttps://www.sciencedirect.com/science/article/pii/S2949855425000516
36. 36AcharyaD.B.KuppanK.DivyaB.Agentic AI: autonomous intelligence for complex goals—A comprehensive surveyIEEE Access1320251891218936
37. 37Zhou, J., Chen, S., Wu, Y., Li, H., Zhang, B., Zhou, L., et al. PPML-Omics: a privacy-preserving federated machine learning method protects patients’ privacy in omic data. Sci Adv. 2024, 10 (5):eadh8601.10.1126/sciadv.adh8601PMC1083010838295178 [PMID:38295178]
38. 38AvraamD.WilsonR.C.Aguirre ChanN.BanerjeeS.BishopT.R.P.ButtersO.DataSHIELD: mitigating disclosure risk in a multi-site federated analysis platformBioinform Adv512025Mar 10vbaf04610.1093/bioadv/vbaf046PMC1196832140191546 [PMID:40191546]
39. 39Escriba-MontagutX.MarconY.Anguita-RuizA.AvraamD.UrquizaJ.MorganA.S.Federated privacy-protected meta- and mega-omics data analysis in multi-center studies with a fully open-source analytic platformPLoS Comput Biol20122024e1012626Dec 910.1371/journal.pcbi.1012626PMC1165869939652598 [PMID:39652598]
40. 40Federated Data Sharing Appliance full guide - v1.3.32 - resources - Federated Data Sharing Appliance (FDSA) - AD Connect [Internet]https://community.addi.ad-datainitiative.org/fdsa/m/resources/5572024
41. 41McMahanB.MooreE.RamageD.HampsonS.ArcasB.A.Communication-efficient learning of deep networks from decentralized dataProceedings of the 20th International Conference on Artificial Intelligence and Statistics [Internet]. PMLR201712731282[cited 2025 Oct 6]Available fromhttps://proceedings.mlr.press/v54/mcmahan17a.html
42. 42ShellerM.J.EdwardsB.ReinaG.A.MartinJ.PatiS.KotrotsouA.Federated learning in medicine: facilitating multi-institutional collaborations without sharing patient dataSci Rep101202012598July 2810.1038/s41598-020-69250-1PMC738748532724046 [PMID:32724046]
43. 43SadilekA.LiuL.NguyenD.KamruzzamanM.SerghiouS.RaderB.Privacy-first health research with federated learningNPJ Digit Med412021132Sept 73449377010.1038/s41746-021-00489-2PMC8423792 [PMID:34493770]
44. 44ZhangF.KreuterD.ChenY.DittmerS.TullS.ShadbahrT.Recent methodological advances in federated learning for healthcarePatterns [Internet]562024June 14 [cited 2025 Oct 6]Available fromhttps://www.cell.com/patterns/abstract/S2666-3899(24)00131-410.1016/j.patter.2024.101006PMC1124017839005485 [PMID:39005485]
45. 45XuT.FengJ.MelendezJ.RobertsK.CaiD.ZhuM.Addressing accuracy and hallucination of LLMs in Alzheimer’s disease research through knowledge graphs [Internet]arXivhttp://arxiv.org/abs/2508.212382025
46. 46SkarlinskiM.D.CoxS.LaurentJ.M.BrazaJ.D.HinksM.HammerlingM.J.Language agents achieve superhuman synthesis of scientific knowledge [Internet]arXivhttp://arxiv.org/abs/2409.137402024
47. 47PuK.FengK.J.K.GrossmanT.HopeT.MishraB.D.LatzkeM.IdeaSynth: iterative research idea development through evolving and composing idea facets with literature-grounded feedbackProceedings of the 2025 CHI Conference on Human Factors in Computing Systems [Internet]2025131[cited 2025 July 18]Available fromhttp://arxiv.org/abs/2410.04025
48. 48LuC.LuC.LangeR.T.FoersterJ.CluneJ.HaD.The AI scientist: towards fully automated open-ended scientific discovery [Internet]arXivhttp://arxiv.org/abs/2408.062922024
49. 49WeiJ.YangY.ZhangX.ChenY.ZhuangX.GaoZ.From AI for science to agentic science: a survey on autonomous scientific discovery [Internet]arXivhttp://arxiv.org/abs/2508.141112025
50. 50GottweisJ.WengW.H.DaryinA.TuT.PalepuA.SirkovicP.Towards an AI co-scientist [Internet]arXivhttp://arxiv.org/abs/2502.188642025
51. 51GhareebA.E.ChangB.MitchenerL.YiuA.SzostkiewiczC.J.LaurentJ.M.Robin: a multi-agent system for automating scientific discovery [Internet]arXivhttp://arxiv.org/abs/2505.134002025
52. 52LahiriA.K.HuQ.V.AlzheimerRAG: multimodal retrieval augmented generation for clinical use cases using PubMed articles [Internet]arXivhttp://arxiv.org/abs/2412.167012025
53. 53NaumovV.ZagirovaD.LinS.XieY.GouW.UrbanA.DORA AI scientist: multi-agent virtual research team for scientific exploration discovery and automated report generation [Internet]bioRxivhttps://www.biorxiv.org/content/10.1101/2025.03.06.641840v12025
54. 54SedlerA.R.MitchellC.S.SemNet: using local features to navigate the biomedical concept graphFront Bioeng Biotechnol720191563133422710.3389/fbioe.2019.00156PMC6616276 [PMID:31334227]
55. 55SwansonK.WuW.BulaongN.L.PakJ.E.ZouJ.The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodiesNature202513July 2910.1038/s41586-025-09442-940730228 [PMID:40730228]
56. 56IfarganT.HafnerL.KernM.AlcalayO.KishonyR.Autonomous LLM-driven research — From data to Human-verifiable research papersNEJM AI212025AIoa2400555Jan
57. 57IstrateA.M.MilletariF.CastrotorresF.TomczakJ.M.TorkarM.LiD.rbio1-training scientific reasoning LLMs with biological world models as soft verifiers [Internet]bioRxivhttps://www.biorxiv.org/content/10.1101/2025.08.18.670981v22025
58. 58ChaiJ.TangS.YeR.DuY.ZhuX.ZhouM.SciMaster: towards general-purpose scientific AI agents, part IX-Master Found: Can We Lead Humanity 19s Last Exam? [Internet]2025arXiv[cited 2025 Aug 29]Available fromhttp://arxiv.org/abs/2507.05241
59. 59LuoY.ShiL.LiY.ZhuangA.GongY.LiuL.From intention to implementation: automating biomedical research via LLMsSci China Inf Sci6872025170105June 23
60. 60RoohaniY.LeeA.HuangQ.VoraJ.SteinhartZ.HuangK.BioDiscoveryAgent: an AI agent for designing genetic perturbation experiments [Internet]arXivhttp://arxiv.org/abs/2405.176312025
61. 61DingN.QuS.XieL.LiY.LiuZ.ZhangK.Automating exploratory proteomics research via language models [Internet]arXivhttp://arxiv.org/abs/2411.037432024
62. 62JinR.ZhangZ.WangM.CongL.STELLA: self-evolving LLM agent for biomedical research [Internet]arXivhttp://arxiv.org/abs/2507.020042025
63. 63AndrieuS.BatemanR.J.BereczkiE.BoseN.BrookesA.J.DoraiswamyP.M.Harnessing artificial intelligence to transform Alzheimer’s disease researchNat Med315202513841385May4016986510.1038/s41591-025-03632-8 [PMID:40169865]
64. 64VeitchD.P.WeinerM.W.MillerM.AisenP.S.AshfordM.A.BeckettL.A.The Alzheimer’s Disease Neuroimaging Initiative in the era of Alzheimer’s disease treatment: a review of ADNI studies from 2021 to 2022Alzheimers Dement2012024652694Jan3769842410.1002/alz.13449PMC10841343 [PMID:37698424]
65. 65Daniels A.J., McDade E., Llibre-Guerra J.J., Xiong C., Perrin R.J., Ibanez L., et al. 15 Years of longitudinal genetic, clinical, cognitive, imaging, and biochemical measures in DIAN. medRxiv. 2024 Aug 9;2024.08.08.24311689.
66. 66WagemannO.LiuH.WangG.ShiX.BittnerT.ScelsiM.A.Downstream biomarker effects of Gantenerumab or Solanezumab in dominantly inherited Alzheimer disease: the DIAN-TU-001 randomized clinical trialJAMA Neurol8162024582593June 13868360210.1001/jamaneurol.2024.0991PMC11059071 [PMID:38683602]
67. 67GreenwoodA.K.MontgomeryK.S.KauerN.WooK.H.LeanzaZ.J.PoehlmanW.L.The AD Knowledge Portal: a repository for multi-omic data on Alzheimer’s disease and AgingCurr Protoc Hum Genet10812020e105Dec3308518910.1002/cphg.105PMC7587039 [PMID:33085189]
68. 68McHughC.P.ClementM.H.S.PhatakM.AD Workbench: transforming Alzheimer’s research with secure, global, and collaborative data sharing and analysisAlzheimers Dement2152025e70278May 1910.1002/alz.70278PMC1208697040387289 [PMID:40387289]
69. 69LovestoneS.ImamF.The GNPC provides a proteomic resource for biomarker discovery and mechanistic insight in neurodegenerative diseaseNat Aging57202511811185July4066483310.1038/s43587-025-00920-3 [PMID:40664833]
70. 70CrawfordK.L.NeuS.C.TogaA.W.The Image and Data Archive at the Laboratory of Neuro ImagingNeuroimage124201610801083Jan 1Pt B2598251610.1016/j.neuroimage.2015.04.067PMC4644502 [PMID:25982516]
71. 71BeeklyD.L.RamosE.M.LeeW.W.DeitrichW.D.JackaM.E.WuJ.The National Alzheimer’s Coordinating Center (NACC) database: the Uniform Data SetAlzheimer Dis Assoc Disord21320072492581780495810.1097/WAD.0b013e318142774e [PMID:17804958]
72. 72LeungY.Y.LeeW.P.KuzmaA.B.NicarettaH.ValladaresO.GangadharanP.Alzheimer’s Disease Sequencing Project release 4 whole genome sequencing datasetAlzheimers Dement2152025e70237May10.1002/alz.70237PMC1210050040407102 [PMID:40407102]
73. 73BeechamG.W.BisJ.C.MartinE.R.ChoiS.H.DeStefanoA.L.van DuijnC.M.The Alzheimer’s Disease Sequencing Project: study design and sample selectionNeurol Genet352017e194Oct2918491310.1212/NXG.0000000000000194PMC5646177 [PMID:29184913]
74. 74EllisK.A.BushA.I.DarbyD.De FazioD.FosterJ.HudsonP.The Australian Imaging, Biomarkers and Lifestyle (AIBL) study of aging: methodology and baseline characteristics of 1112 individuals recruited for a longitudinal study of Alzheimer’s diseaseInt Psychogeriatr2142009672687Aug1947020110.1017/S1041610209009405 [PMID:19470201]
75. 75Pichet BinetteA.GaiteriC.WennströmM.KumarA.HristovskaI.SpotornoN.Proteomic changes in Alzheimer’s disease associated with progressive Aβ plaque and tau tangle pathologiesNat Neurosci2710202418801891Oct3918770510.1038/s41593-024-01737-wPMC11452344 [PMID:39187705]
76. 76JessenF.SpottkeA.BoeckerH.BrosseronF.BuergerK.CatakC.Design and first baseline data of the DZNE multicenter observational study on predementia Alzheimer’s disease (DELCODE)Alzheimer 19s Res Ther101201815Feb 710.1186/s13195-017-0314-2PMC580209629415768 [PMID:29415768]
77. 77SaundersS.GregoryS.ClementM.H.S.BirckC.derGeyten S vanRitchieC.WThe European Prevention of Alzheimer’s Dementia Programme: an Innovative Medicines Initiative-funded partnership to facilitate secondary prevention of Alzheimer’s disease dementiaFront Neurol [Internet]202213Nov 22 [cited 2025 Aug 29]Available fromhttps://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.1051543/full10.3389/fneur.2022.1051543PMC972313936484017 [PMID:36484017]
78. 78Pérez-GonzálezA.P.García-KroepflyA.L.Pérez-FuentesK.A.García-ReyesR.I.Solis-RoldanF.F.Alba-GonzálezJ.A.The ROSMAP project: aging and neurodegenerative diseases through omic sciencesFront Neuroinform1820241443865Sept 1610.3389/fninf.2024.1443865PMC1143969939351424 [PMID:39351424]
79. 79SperlingR.A.DonohueM.C.RamanR.RafiiM.S.JohnsonK.MastersC.L.Trial of Solanezumab in preclinical Alzheimer’s diseaseN Engl J Med38912202310961107Sept 203745827210.1056/NEJMoa2305032PMC10559996 [PMID:37458272]
80. 80RafiiM.S.SperlingR.A.DonohueM.C.ZhouJ.RobertsC.IrizarryM.C.The AHEAD 3–45 study: design of a prevention trial for Alzheimer’s diseaseAlzheimers Dement194202312271233Apr3597131010.1002/alz.12748PMC9929028 [PMID:35971310]
81. 81HolstegeH.BekerN.DijkstraT.PieterseK.WemmenhoveE.SchoutenK.The 100-plus Study of cognitively healthy centenarians: rationale, design and cohort descriptionEur J Epidemiol33122018122912493036201810.1007/s10654-018-0451-3PMC6290855 [PMID:30362018]
82. 82BianchiD.W.BrennanP.F.ChiangM.F.CriswellL.A.D’SouzaR.N.GibbonsG.H.The All of Us Research Program is an opportunity to enhance the diversity of US biomedical researchNat Med3022024330333Feb3837434410.1038/s41591-023-02744-3PMC11835384 [PMID:38374344]
83. 83CaiY.ZhouJ.ScottP.W.TianQ.WanigatungaA.A.LipsitzL.Physical activity complexity, cognition, and risk of cognitive impairment and dementia in the Baltimore Longitudinal Study of AgingAlzheimers Dement (N Y)1122025e7007710.1002/trc2.70077PMC1198251840225241 [PMID:40225241]
84. 84ShaftoM.A.TylerL.K.DixonM.TaylorJ.R.RoweJ.B.CusackR.The Cambridge Centre for Ageing and Neuroscience (Cam-CAN) study protocol: a cross-sectional, lifespan, multidisciplinary examination of healthy cognitive ageingBMC Neurol142014204Oct 142541257510.1186/s12883-014-0204-1PMC4219118 [PMID:25412575]
85. 85KurkiM.I.KarjalainenJ.PaltaP.SipiläT.P.KristianssonK.DonnerK.M.FinnGen provides genetic insights from a well-phenotyped isolated populationNature61379442023508518Jan3665356210.1038/s41586-022-05473-8PMC9849126 [PMID:36653562]
86. 86FernandezM.V.LiuM.BericA.JohnsonM.CetinA.PatelM.Genetic and multi-omic resources for Alzheimer disease and related dementia from the Knight Alzheimer Disease Research CenterSci Data1112024768July 123899732610.1038/s41597-024-03485-9PMC11245521 [PMID:38997326]
87. 87BookheimerS.Y.SalatD.H.TerpstraM.AncesB.M.BarchD.M.BucknerR.L.The Lifespan Human Connectome Project in Aging: an overviewNeuroimage1852019335348Jan 153033261310.1016/j.neuroimage.2018.10.009PMC6649668 [PMID:30332613]
88. 88SchwarzC.G.KremersW.K.PrakaashanaC.M.PrzybelskiS.A.ChristensonL.R.WiliamsJ.M.A large public release of clinical and imaging data from the Mayo Clinic study of agingAlzheimers Dement20Suppl 92025e093966Jan 9
89. 89Nilforooshan R., Barnaghi P. The RESILIENT dataset: multimodal monitoring of ageing-related comorbidities and cognitive decline [Internet]. Zenodo; 2025 [cited 2025 Aug 29]. Available from: https://zenodo.org/records/16755408.10.1038/s41597-025-05958-xPMC1254671741125650 [PMID:41125650]
90. 90HuangX.HanX.ChangH.YuT.DongY.MaoM.Associations between trajectories of plasma biomarkers for Alzheimer’s disease, brain structures, and cognitive function: a prospective cohort study in the UK BiobankMol Psychiatry2025Aug 2810.1038/s41380-025-03166-yPMC1281568340877465 [PMID:40877465]
91. 91PalchukM.B.LondonJ.W.Perez-ReyD.DrebertZ.J.Winer-JonesJ.P.ThompsonC.N.A global federated real-world data and analytics platform for researchJAMIA Open622023Julyooad03510.1093/jamiaopen/ooad035PMC1018285737193038 [PMID:37193038]
92. 92BotB.M.SuverC.NetoE.C.KellenM.KleinA.BareC.The mPower study, Parkinson disease mobile data collected using ResearchKitSci Data32016160011Mar 310.1038/sdata.2016.11PMC477670126938265 [PMID:26938265]
93. 93LentzenM.VairavanS.MuurlingM.AlepopoulosV.AtreyaA.BoadaM.RADAR-AD: assessment of multiple remote monitoring technologies for early detection of Alzheimer’s diseaseAlzheimers Res Ther171202529Jan 273986531510.1186/s13195-025-01675-0PMC11771057 [PMID:39865315]
94. 94PalermoF.ChenY.CapstickA.Fletcher-LoydN.WalshC.KouchakiS.TIHM: an open dataset for remote healthcare monitoring in dementiaSci Data1012023606Sept 93768981510.1038/s41597-023-02519-yPMC10492790 [PMID:37689815]
95. 95TomczykP.BrüggemannP.MergnerN.PetrescuM.Are AI tools better than traditional tools in literature searching? Evidence from E-commerce researchJ Librariansh Inf Sci2024Nov 1509610006241295802
96. 96LauO.GolderS.Comparison of elicit AI and traditional literature searching in evidence syntheses using four case studiesCochrane Evid Synth Methods362025e70050Nov10.1002/cesm.70050PMC1248313341035533 [PMID:41035533]
97. 97WangZ.CaoL.JinQ.ChanJ.WanN.AfzaliB.A foundation model for human-AI collaboration in medical literature mining [Internet]arXivhttp://arxiv.org/abs/2501.16255202510.1038/s41467-025-62058-5PMC1246061740993125 [PMID:40993125]
98. 98LiangW.ZhangY.CaoH.WangB.DingD.Y.YangX.Can large language models provide useful feedback on research papers? A large-scale empirical analysisNEJM AI182024AIoa2400196July 25
99. 99QiB.ZhangK.TianK.LiH.ChenZ.R.ZengS.Large language models as biomedical hypothesis generators: a comprehensive evaluation [Internet]arXivhttp://arxiv.org/abs/2407.089402024
100. 100CutilloC.M.SharmaK.R.FoschiniL.KunduS.MackintoshM.MandlK.D.Machine intelligence in healthcare—Perspectives on trustworthiness, explainability, usability, and transparencynpj Digit Med31202047Mar 263225842910.1038/s41746-020-0254-2PMC7099019 [PMID:32258429]
101. 101GabrielI.ManziniA.KeelingG.HendricksL.A.RieserV.IqbalH.The ethics of advanced AI assistants [Internet]arXivhttp://arxiv.org/abs/2404.162442024
102. 102TangX.JinQ.ZhuK.YuanT.ZhangY.ZhouW.Risks of AI scientists: prioritizing safeguarding over autonomy [Internet]arXivhttp://arxiv.org/abs/2402.04247202510.1038/s41467-025-63913-1PMC1244642540968279 [PMID:40968279]
103. 103JobinA.IencaM.VayenaE.The global landscape of AI ethics guidelinesNat Mach Intell192019389399Sept
104. 104PriceW.N.CohenI.G.Privacy in the age of medical big dataNat Med25120193743Jan3061733110.1038/s41591-018-0272-7PMC6376961 [PMID:30617331]
105. 105McMurryJ.A.JutyN.BlombergN.BurdettT.ConlinT.ConteN.Identifiers for the 21st century: how to design, provision, and reuse persistent identifiers to maximize utility and impact of life science dataPLoS Biol1562017e2001414June 2910.1371/journal.pbio.2001414PMC549087828662064 [PMID:28662064]
106. 106DavisK.R.PeabodyB.LeachP.Universally unique IDentifiers (UUIDs) [Internet]Internet Eng Task Force2024May [cited 2025 Oct 6]. Report No.: RFC 9562. Available fromhttps://datatracker.ietf.org/doc/rfc9562
107. 107HofmannB.Biases in AI: acknowledging and addressing the inevitable ethical issuesFront Digit Health72025161410510.3389/fdgth.2025.1614105PMC1240516640909204 [PMID:40909204]
108. 108WilkinsonM.D.DumontierM.AalbersbergIjJAppletonG.AxtonM.BaakA.The FAIR Guiding Principles for scientific data management and stewardshipSci Data312016160018Mar 1510.1038/sdata.2016.18PMC479217526978244 [PMID:26978244]
