# 📊 Calculadora de Pontos de Cursos

Este é um projeto desenvolvido com **Google Apps Script (GAS)** que permite calcular a pontuação de cursos com base na carga horária e nas regras predefinidas de pontuação.

> **Link para a aplicação:**  
👉 [Acessar calculadora online](https://script.google.com/a/macros/edu.vitoria.es.gov.br/s/AKfycbz1isc8jpRCMcFsU9-fE0qNRhmeQq1Ugi9LIks6GHIm/dev)

---

## ✨ Funcionalidades

- Adicionar cursos com carga horária.
- Excluir cursos individualmente.
- Calcular pontuação total conforme regras por faixa de horas.
- Mostrar detalhamento por faixa.
- Mostrar e ocultar tabela de regras de pontuação.
- Interface amigável e responsiva.
- Marca d'água com link para o GitHub do autor.

---

## 📐 Regras de Pontuação

A pontuação é baseada na seguinte tabela:

| Faixa (horas) | Máx. Cursos | Pontos por Curso | Pontos Máx. Faixa |
|---------------|-------------|------------------|-------------------|
| 0–14          | 4           | 5                | 20                |
| 15–29         | 3           | 10               | 25                |
| 30–59         | 2           | 15               | 25                |
| 60–79         | 2           | 20               | 30                |
| 80–119        | 2           | 25               | 30                |
| 120–199       | 2           | 30               | 40                |
| 200–359       | 1           | 40               | 40                |
| 360+          | 1           | 50               | 50                |

---

## 🧪 Tecnologias utilizadas

- [Google Apps Script](https://developers.google.com/apps-script)
- HTML + CSS (puro)
- JavaScript (interação da interface)
- HTML Service do GAS

---

## 🗂 Estrutura dos arquivos

- `Code.gs`: Funções backend (doGet, getRules, calculatePoints)
- `Index.html`: Interface principal da calculadora
- `README.md`: Este arquivo de documentação

---

## 🧠 Como usar

Você pode acessar diretamente pelo link acima, ou clonar este repositório para visualizar o código localmente:


```bash
git clone https://github.com/LucaslFerrari/Calculadora-Qualificacao-SEME-PMV.git
```
Depois, abra os arquivos Code.gs e Index.html em um projeto do Google Apps Script.

## 👤 Autor

Lucas Ferrari
🔗 github.com/LucaslFerrari
