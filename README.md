<h1 align="center">🧠 MEDA</h1>

<p align="center">
  <img src="/frontend/public/logo.png" alt="Meda Logo" width="150">
</p>

<p align="center"><b>Medical Evidence Driven Assistant</b></p>
<p align="center">
  <em>A research-focused RAG system built as part of an NLP course project</em>
</p>

---

## 🎓 Context

This project was developed as part of the **Natural Language Processing (NLP) course final project**, with the goal of exploring real-world applications of LLMs and retrieval-augmented generation (RAG) pipelines in the **medical domain**.

---

## 🔬 Motivation

Medical questions require **reliable**, **evidence-based**, and **interpretable** answers. Large Language Models (LLMs) are powerful, but they often hallucinate. MEDA solves this by:

- Retrieving relevant content from trusted sources (PubMed, clinical guidelines)
- Generating answers grounded in real documents
- Showing source context for transparency

---

## 🧪 Project Goals

- 🧠 Apply NLP techniques to build a domain-specific Q&A system  
- 🔍 Integrate vector search (retrieval) with generation (RAG)  
- 📚 Work with real medical data: abstracts, notes, recommendations  
- 🤖 Use modern frameworks like LangChain, and Mistral  

---

## 🧠 System Overview

**MEDA** is a Retrieval-Augmented Generation (RAG) system for answering medical queries. It uses a combination of document search, LLM generation, and interface design to create a helpful medical assistant.

---

## 📐 Architecture

Below is the architecture diagram of MEDA, showing how user queries flow through the system:

<p align="center">
  <img src="docs/architecture.png" alt="MEDA Architecture Diagram" width="600"/>
</p>

Main flow:
1. User submits a medical question via the Web UI.
2. Backend calls Retriever (Chroma) to find relevant document chunks.
3. The query and context are used to construct a prompt.
4. LLM (Mistral or Hugging Face) generates a grounded answer.
5. Answer and source snippets are returned to the UI.

---

## ⚙️ Tech Stack

| Layer        | Tools & Libraries                                |
|--------------|--------------------------------------------------|
| Backend      | LangChain, Python, FastAPI, Chroma               |
| Frontend     | React, Vite, TypeScript, TailwindCSS             |
| Models       | Hugging Face BLOOMZ / Mistral 7B API             |
| Deployment   | Docker, Docker Compose                           |
| Dev Platform | Google Colab (for notebook version)              |

---

## 🔗 Try in Google Colab

<p align="center">
  <a href="https://colab.research.google.com/drive/1iPu5mldaozOhWdYf6jojFCZ3why0zgQ_?usp=sharing" target="_blank">
    <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
  </a>
</p>

Open this notebook to run the full MEDA pipeline — no local setup needed.

---

## 🚀 Quick Start (Production)

```bash
docker-compose up -d --build
```

#### Frontend: http://localhost:3000
#### API: http://localhost:8000

### To stop:
```
docker-compose down
```

## 🛠 Development Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```
→ Available at http://localhost:3000

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

По умолчанию доступен: http://localhost:3000
→ API docs available at http://localhost:8000/docs

---

## 📚 Data Sources

- [PubMed abstracts (open biomedical literature)](https://pubmed.ncbi.nlm.nih.gov/)
- Clinical recommendations (where available)
- Synthetic patient records (for testing)

---

## 🔍 Related Work

Several systems inspired the design of MEDA:

- **BioGPT (Microsoft)** – a transformer model pre-trained on biomedical texts. While accurate, it requires fine-tuning and lacks real-time retrieval.
- **PubMedQA** – dataset and baseline models for question answering on PubMed; serves as benchmark for future MEDA evaluation.
- **LlamaIndex / Haystack** – alternative frameworks for RAG pipelines, focused on modularity and custom retrievers.

Compared to these:
- MEDA is lightweight, easy to deploy (Colab or Docker), and uses RAG with plug-and-play LLMs.
- It emphasizes explainability by showing document context next to answers.
- Designed with student-friendly and clinical use cases in mind.

---

## 🧠 State of the Art (SOTA)

Recent advancements in domain-specific question answering (QA) systems, especially in the medical field, highlight the power and limitations of existing approaches:

### 🔬 Biomedical QA Benchmarks
- **BioASQ**: A gold-standard benchmark for biomedical QA. Most SOTA models rely on large-scale pretraining and require fine-tuning.
- **MedMCQA**: A multiple-choice QA benchmark using Indian medical entrance exam questions, testing deep reasoning ability in medicine.

### 💡 Notable SOTA Models

| Model         | Approach                         | Key Strengths                         |
|---------------|----------------------------------|----------------------------------------|
| BioGPT        | Pretrained biomedical transformer| Strong generation, domain-specific     |
| GatorTron     | 8.9B parameter clinical model     | High performance in clinical NLP tasks |
| Med-PaLM 2    | Instruction-tuned for medicine   | Reaches expert-level medical QA        |
| PubMedBERT    | Pretrained on PubMed abstracts   | Great for retrieval + classification   |

### 🔄 Comparison with MEDA

| Feature            | MEDA                    | SOTA Models (e.g. Med-PaLM 2, GatorTron) |
|--------------------|-------------------------|------------------------------------------|
| Open-source        | ✅ Yes                  | ❌ Often closed or limited access        |
| Real-time RAG      | ✅ Yes                  | ❌ Mostly static or fine-tuned outputs   |
| Medical tuning     | ❌ Not yet              | ✅ Strong tuning on medical corpora      |
| Colab support      | ✅ Easy to run          | ❌ Often unavailable or costly           |

MEDA is not aiming to outperform closed-source giants like Med-PaLM, but rather:
- Be accessible
- Transparent
- Modular
- Easy to reproduce and extend in a course or academic setting

---

## 📊 Evaluation and Observations

Initial testing was conducted manually using ~10 diverse medical questions.

**Metrics (qualitative):**
- Relevance: ✅ Context retrieved from topically accurate PubMed fragments.
- Fluency: ✅ Answers are grammatically correct and understandable.
- Groundedness: ⚠️ Hallucinations minimized when using < 5 context chunks.
- Latency: ~4s average on Mistral API (per query).

**Examples:**

> **Q:** What are the latest methods for breast cancer screening?  
> **A:** "Recent methods include digital mammography and MRI. Studies also support personalized screening based on genetic risk."

> **Q:** How does immunotherapy work in lung cancer?  
> **A:** "Immunotherapy activates the immune system to attack tumor cells. It is often used with checkpoint inhibitors like PD-1."

📌 A more formal evaluation (e.g. BioASQ or MedMCQA benchmarks) is part of planned future work.

---

## 📑 References

- Mehdi Iraqui, [Medical RAG using LangChain + Mistral 7B](https://medium.com/@mehdi.iraqui/medical-rag-system-using-langchain-and-mistral-7b-31c3982b0b52)
- [LangChain Documentation](https://docs.langchain.com)
- [Hugging Face](https://huggingface.co)

---

## ✅ Status

- ✅ Embedding and indexing medical data
- ✅ Retrieval of relevant context chunks
- ✅ Prompt creation and LLM generation
- ✅ Google Colab notebook for quick testing
- ✅ Web UI for interactive use

---

## 🚧 Future Work

- RAG + fine-tuned LLMs on clinical QA datasets
- Model evaluation on benchmarks (BioASQ, MedMCQA)
- Integration of PDF ingestion pipeline
- Multilingual support

---

## 📬 Contact

Project author: **Dmitry Kardashevsky**  
✉️ Email: [kardashevskydv@gmail.com](mailto:kardashevskydv@gmail.com)  
🌐 GitHub: [github.com/kardashevsky](https://github.com/kardashevsky)
📄 LinkedIn: [linkedin.com/in/kardashevsky](https://www.linkedin.com/in/kardashevsky/)

For questions, suggestions, or contributions — feel free to reach out.
