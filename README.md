# 🔐 Introduction to DevSecOps & Shift-Left Security

## 📌 Project Overview
This project demonstrates **shift-left security principles** using a simple React application.  
Key objectives:  
- Detect secrets in code using **Gitleaks**  
- Remove secrets and secure them with environment variables  
- Re-scan to ensure the repo is clean  
- Deploy the React app securely inside a **Docker container**  
- Document learnings and best practices  

---

## 🛠️ Setup & Steps

### 1. Initial React App with Hardcoded Secret
A simple React app (`src/App.js`) was created with a **hardcoded API key** for demo purposes:

```jsx
// ❌ Insecure code (before fix)
const API_KEY = "REACT_DEMO_SECRET_12345";
