# Walkthrough de Implementación - Etapa Práctica

Este documento resume los cambios realizados en el archivo [Telco-Customer-Churn.ipynb](file:///c:/Users/germa/OneDrive/Escritorio/Ing%20Informatica/Tercer%20Semestre/Mineria-de-datos/ultima%20evaluaci%C3%B3n/Telco-Customer-Churn.ipynb) para alinearlo al 100% con la pauta de evaluación sumativa y tu informe de planificación.

---

## 1. Cambios de Código e Ingesta Realizados
- **Eliminación de Colab**: Se retiraron las importaciones de `google.colab` y el montaje de Google Drive (`drive.mount`). Se configuró una ruta de ejecución local para cargar [Telco-Customer-Churn.csv](file:///c:/Users/germa/OneDrive/Escritorio/Ing%20Informatica/Tercer%20Semestre/Mineria-de-datos/ultima%20evaluaci%C3%B3n/Telco-Customer-Churn.csv) directamente.
- **Supresión de Advertencias**: Se agregaron configuraciones para eliminar warnings molestos (`warnings.filterwarnings('ignore')` y ajustes en la sintaxis de gráficos de `seaborn`), logrando una ejecución limpia.
- **Tratamiento de Outliers**: Se detalló en markdown la justificación técnica de por qué el método IQR arrojó **0 outliers** en variables continuas (`tenure`, `MonthlyCharges` y `TotalCharges`), fundamentando que no se requería eliminar registros ya que correspondían a datos reales y coherentes de la operación.
- **Clases Balanceadas con SMOTE**: Se integró `imblearn.over_sampling.SMOTE` para resolver el desbalance en la variable objetivo (`Churn`), permitiendo entrenar de manera óptima los modelos sobre una muestra equilibrada de 4,130 clientes para cada clase (Leal y Fuga).
- **Métricas Train vs Test**: Se calculó el rendimiento en el conjunto de entrenamiento (Train) y de prueba (Test) para diagnosticar Overfitting/Underfitting en los dos modelos entrenados (Regresión Logística y Random Forest).

---

## 2. Comparación de Métricas y Diagnóstico de Overfitting

### Tabla Comparativa de Desempeño
| Modelo | Métrica | Train Set | Test Set | Diferencia | Diagnóstico |
|---|---|---|---|---|---|
| **Regresión Logística** | Accuracy | 78.51% | 75.91% | 2.60% | **Estable (Sin Overfitting)** |
| | Recall | 70.57% | 69.25% | 1.32% | Muy consistente en clase positiva |
| | Precision | 57.84% | 53.62% | 4.22% | Adecuada para equilibrar falsos positivos |
| | F1-Score | 63.57% | 60.44% | 3.13% | Balanceado |
| **Random Forest** | Accuracy | 99.88% | 76.19% | 23.69% | **Overfitting Severo** |
| | Recall | 99.80% | 60.70% | 39.10% | Memoriza el ruido de entrenamiento |
| | Precision | 99.73% | 54.70% | 45.03% | Pobre generalización en prueba |
| | F1-Score | 99.77% | 57.54% | 42.22% | Desajustado |

> [!IMPORTANT]
> **Modelo Recomendado**: La **Regresión Logística** es el modelo recomendado para el negocio. A diferencia del Random Forest (que sufre de overfitting severo al caer su Recall del 99.8% al 60.7%), la Regresión Logística mantiene un Recall del **69.25%** en el conjunto de prueba, capturando de forma estable a 7 de cada 10 clientes en riesgo de fuga.

---

## 3. Validación de Hipótesis de Negocio

### Hipótesis 1 (Supervisada - Regresión Logística) | **VALIDADA**
- **Resultado**: Los coeficientes del modelo de Regresión Logística mostraron un impacto altamente positivo en Churn para:
  - `PaymentMethod_Electronic check` (Coeficiente: **+3.69**)
  - `Contract_Month-to-month` (Coeficiente: **+3.55**)
  - `InternetService_Fiber optic` (Coeficiente: **+2.72**)
- **Análisis**: El contrato mes a mes y la tarifa elevada del servicio de fibra óptica incrementan exponencialmente las probabilidades de fuga del cliente.

### Hipótesis 2 (No Supervisada - Apriori) | **VALIDADA**
- **Optimización de Memoria**: Se subió el soporte mínimo (`min_support`) del original `0.05` a `0.12` (12%). Esto evitó la generación de 15 millones de reglas (que consumían toda la memoria RAM y colgaban tu máquina) reduciéndolas a 2,583 reglas estratégicas y veloces.
- **Regla Encontrada**:
  `{Contract_Month-to-month, OnlineSecurity_No, TechSupport_No, InternetService_Fiber optic} -> {Churn_Yes}`
  - **Soporte**: ~12.16% (Ocurre en 855 transacciones)
  - **Confianza**: **60.13%** (6 de cada 10 clientes en esta categoría se van)
  - **Lift**: **3.26** (Tienen más del triple de probabilidad de fuga que la media)
- **Análisis**: Los clientes de fibra óptica mes a mes sin protección en línea ni soporte técnico están fuertemente asociados a la deserción de servicios.

---

## 4. Análisis de Costo-Beneficio Económico

Con base en la premisa: **Costo de retención = $10 USD** / **Costo de pérdida (Churn) = $100 USD**:

- **Sin Modelo**: Se pierden todos los clientes en fuga reales del set de prueba (374 churners).
  - Costo de Pérdida Total = **$37,400.00 USD**
- **Con Modelo (Regresión Logística)**:
  - **TP (259)** retenidos con éxito: $259 \times 10 = \$2,590.00$
  - **FP (224)** reciben campaña en vano: $224 \times 10 = \$2,240.00$
  - **FN (115)** no detectados (se pierden): $115 \times 100 = \$11,500.00$
  - Costo Total del Plan = **$16,330.00 USD**
- **Ahorro Neto en Set de Prueba**: **$21,070.00 USD** (Reducción de pérdidas del **56.34%**).
- **Ahorro Anual Proyectado (Toda la Base de Datos)**: **$105,305.07 USD** netos.

---

## 5. Propuestas Prácticas Ejecutables
1. **Migración Incentivada de Contratos**: Ofrecer 15% de descuento en el cargo mensual a clientes mes a mes de menos de 6 meses de antigüedad para que migren a planes de permanencia anuales.
2. **Paquetes de Asistencia de Fibra Óptica**: Incluir asistencia técnica (`TechSupport`) y ciberseguridad (`OnlineSecurity`) de forma gratuita por 6 meses a clientes de fibra óptica mes a mes para reducir la deserción técnica.
3. **Migración a Medios de Pago Automáticos**: Ofrecer un abono de $10 USD por única vez en la factura si el cliente cambia su método de pago de cheque electrónico a pago automático recurrentes.
