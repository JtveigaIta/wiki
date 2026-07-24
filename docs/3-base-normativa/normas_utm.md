# UTM e Base Normativa

## Índice
- [#introducao-ao-utm](#introducao-ao-utm)
- [#conceitos-basicos](#conceitos-basicos)
- [#normas-internacionais](#normas-internacionais)
- [#normas-brasileiras](#normas-brasileiras)
- [#regulamentacoes-e-conops](#regulamentacoes-e-conops)
- [#operacoes-bvlos](#operacoes-bvlos)
- [#referencias](#referencias)

---
# UTM Regulatory and Standards Framework

## Overview

The regulatory ecosystem for **Unmanned Aircraft Systems (UAS)** and **Unmanned Traffic Management (UTM)** is organized as a hierarchical structure that connects international aviation governance, operational frameworks, risk assessment methodologies, safety management practices, and cybersecurity standards. This structure provides the normative foundation adopted by PlaNAR to support the design, simulation, validation, and assessment of resilient and interoperable UTM environments.

---

# 1. International Regulatory Level

The governance of UAS operations begins with the **International Civil Aviation Organization (ICAO)**, which establishes the international Standards and Recommended Practices (SARPs) that guide civil aviation safety and the integration of unmanned aircraft into national airspaces. These principles constitute the regulatory foundation adopted by civil aviation authorities worldwide.

Based on this foundation, two major regulatory ecosystems have emerged.

In the United States, the **Federal Aviation Administration (FAA)**, in collaboration with **NASA**, established the U.S. **Unmanned Traffic Management (UTM)** architecture through the **UTM Concept of Operations (ConOps)** and the **FAA UTM ConOps v2.0**. These documents define the operational architecture, Technical Capability Levels (TCL), responsibilities of operators, UTM Service Suppliers (USS), regulators, and the mechanisms required for coordinated low-altitude operations **[47]**.

In Europe, the **European Union Aviation Safety Agency (EASA)** established the **U-space** regulatory framework, supported by the **SESAR Joint Undertaking (SESAR JU)**, creating an interoperable architecture for safe UAS integration throughout the European airspace.

Together, these regulatory ecosystems constitute the primary reference adopted by current UTM research and operational deployments.

---

# 2. Frameworks & Standards

The international regulatory structure is implemented through operational frameworks that define system architecture, interoperability and operational risk management.

The **UTM Concept of Operations (ConOps)** specifies the interaction among operators, USS providers, regulators and airspace users, while the **Urban Air Mobility Concept of Operations (UAM ConOps)** extends these concepts toward advanced urban air mobility by incorporating vertiports, infrastructure and high-density operations **[47]**.

Within Europe, the **U-space Concept of Operations (CORUS)** complements the EASA regulatory framework by defining interoperable services (U1–U4) coordinated by **SESAR JU**, providing the operational architecture adopted by the European U-space ecosystem.

Operational authorization is primarily supported by the **Specific Operations Risk Assessment (SORA)** methodology developed by **JARUS**, which has become the international reference for risk-based approval of Specific Category UAS operations **[27]**. Its practical application, compliance assessment and integration with regulatory processes are discussed by **Janik et al. [43]**, **Miari [71]**, **Terkildsen and Jensen [106]**, and **Puliyski et al. [125]**.

Complementing the regulatory methodologies, the **ASTM F38 Committee** develops technical standards for Remote ID, interoperability, communication protocols, strategic deconfliction, surveillance services and UAS performance requirements, providing a common technical baseline shared by industry and aviation authorities **[47,106]**.

More recently, operational safety has evolved beyond static pre-flight assessment through frameworks such as **MEDUSA**, **URAF**, **GRASP**, and the **In-Time Aviation Safety Management System (IASMS)**, introducing continuous and data-driven risk assessment throughout mission execution.

---

# 3. Operations & Safety Management

The convergence of these frameworks establishes an integrated **UAS Operations** environment where safety becomes a continuous operational process rather than a one-time certification activity.

This evolution is represented by the **In-Time Aviation Safety Management System (IASMS)** proposed by NASA and FAA, which extends the traditional **Safety Management System (SMS)** by incorporating runtime monitoring, anomaly detection, predictive analytics and continuous operational risk assessment. IASMS employs techniques such as **Multiple Kernel Anomaly Detection (MKAD)**, **Statistical Anomaly Learning and Detection (SALAD)** and the continuous **Monitor–Assess–Mitigate–Assure (MAMA)** cycle to identify safety precursors before they evolve into operational hazards.

Risk management throughout the operational lifecycle is further supported by **ISO 31000** and **ISO 31010**, which provide internationally recognized principles for hazard identification, risk analysis, evaluation and treatment. The integration between ISO 31000 and SORA is discussed by **Janik et al. [43]** and **Miari [71]**, while broader aviation safety assessment methodologies are presented in **Safety Management for Unmanned Aviation [102]**, **ARP4761 [42]**, **ATM Safety Techniques and Toolbox [25]**, and the **NASA Fault Tree Handbook [112]**.

---

# 4. Foundational Standards

The regulatory hierarchy is completed by foundational standards governing organizational safety, enterprise risk management and cybersecurity.

The **ICAO Annex 19** establishes the principles of the **Safety Management System (SMS)** for civil aviation, while **ISO 31000** defines the international framework for enterprise risk management. Together, these standards support governance, safety assurance and organizational decision-making across complex UAS ecosystems.

Cybersecurity is addressed through the **Information Security Management System (ISMS)** defined by **ISO/IEC 27001**, complemented by the security controls specified in **ISO/IEC 27002**. These standards establish requirements for identity management, authentication, cryptography, secure communications, network segmentation, continuous monitoring and information protection, ensuring confidentiality, integrity and availability of operational data exchanged among UTM stakeholders.

Within UTM and U-space ecosystems, these controls mitigate cyber threats such as GPS spoofing, communication interception, malicious software injection and unauthorized access to critical operational services. The limitations of SORA regarding cybersecurity are analyzed by **Puliyski et al. [125]**, while **Guskova et al. [128]** discuss the adoption of **EASA Part-IS** as the cybersecurity governance framework for future U-space operations.

---

# References

| Ref. | Reference |
|------:|-----------|
| **[25]** | Federal Aviation Administration (FAA). *ATM Safety Techniques and Toolbox*. |
| **[27]** | Joint Authorities for Rulemaking on Unmanned Systems (JARUS). *Guidelines on Specific Operations Risk Assessment (SORA).* |
| **[42]** | SAE International. *ARP4761 – Guidelines and Methods for Conducting the Safety Assessment Process on Civil Airborne Systems and Equipment.* |
| **[43]** | Janik, P., Zawistowski, M., Fellner, R., & Zawistowski, G. *Unmanned Aircraft Systems Risk Assessment Based on SORA for First Responders and Disaster Management.* |
| **[47]** | Whitley, P. (FAA). *Unmanned Aircraft Systems (UAS) Traffic Management (UTM) Concept of Operations.* |
| **[71]** | Miari, B. *A Qualitative Risk Assessment Applied Using SORA: UAV Technology Supporting Maintenance Operations on Rødsand II Offshore Wind Farm.* |
| **[102]** | Stastny, P., & Stoica, A.-M. *Safety Management for Unmanned Aviation.* |
| **[106]** | Terkildsen, K. H., & Jensen, K. *Towards a Tool for Assessing UAS Compliance with the JARUS SORA Guidelines.* |
| **[112]** | Vesely, B. (NASA). *Fault Tree Handbook with Aerospace Applications.* |
| **[125]** | Puliyski, A., Stefanova, A., & Serbezov, V. *The Regulatory Illusion of Security in Drone Operations in the Specific Category: An Analysis of the Gaps Between Regulatory Compliance and Actual Cyber Resilience within the SORA.* |
| **[128]** | Guskova, N., Chopart, M., & Kraus, J. *EASA Part-IS in U-Space Operations: Is System-Theoretic Process Analysis for Security Sufficient to Meet Information Security Risk Assessment Requirements?* |

---

[Back to Wiki](/docs/intro)
