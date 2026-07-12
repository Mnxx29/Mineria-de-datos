Nombre asignatura

Minería de Datos

Fecha entrega

13/07/2026

Nombre recurso

Evaluación Parcial 3

Tipo evaluación

Sumativa

Resultados de aprendizajes e indicadores de logro

Resultados de aprendizaje

RA1 Comprende el problema de estudio, obteniendo la máxima información posible de los
objetivos del negocio, para reducir los futuros riesgos, clarificando los problemas, objetivos y
recursos.

RA2. Modela los datos del problema de estudio ajustando los parámetros predeterminados, en
pos de mejorar el desempeño de los algoritmos trabajados, en función de los objetivos del
negocio.

RA3. Aplica el Modelo final seleccionado para implementar las mejoras en los procesos de
negocio. Con el fin de agregar valor para la planificación y toma de decisiones.

Descripción general actividad

El siguiente test, corresponde a la tercera Evaluación Parcial de la asignatura y tendrá una ponderación
del 40% sobre la nota final de la asignatura.
La actividad constará de 2 etapas:

Etapa 1 (40%): Informe de Planificación y Conceptos
Esta etapa es de carácter conceptual y debe servir como la hoja de ruta para el desarrollo práctico. Se
debe entregar un informe en formato Word con una extensión máxima de 10 páginas. Este documento,
debe entregarse el día viernes 10 de julio.

Estructura del Informe:

1.  Portada: Datos institucionales, nombre de los integrantes y asignatura.

2.  Introducción: Contextualización del problema y objetivos de la minería de datos para este

caso.

3.  Desarrollo (Fases 1 a 4 de CRISP-DM):

●  Comprensión del Negocio (Business Understanding): Análisis del caso de estudio,

identificación del problema y objetivos organizacionales.

●  Comprensión de los datos (Data Understanding): Interpretación de las variables

del dataset y descripción de los datos disponibles.

●  Plan  de  Preparación  de  Datos:  Propuesta  detallada  de  las  técnicas  de  limpieza,
estrategias  para  el  manejo  de  valores  faltantes  (imputaciones)  y  tratamiento  de
valores atípicos (outliers).

●  Propuesta de Modelado: Definición y justificación de un modelo de aprendizaje
supervisado  (regresión  logística)  y  un  modelo  de  aprendizaje  no  supervisado  (a
priori) que se emplearán en la siguiente etapa.

●  Planteamiento de hipótesis: Redacte dos hipótesis de negocio para que puedan ser
validados  o  refutados  por  los  modelos  de  aprendizaje  supervisados  y  no
supervisados.

●  Plantee como el modelo de aprendizaje no supervisado puede ayudarnos a encontrar

reglas de asociación entre los datos.

4.  Conclusiones: Reflexión sobre la viabilidad del proyecto y resultados esperados

Consideraciones adicionales:

●  Letra y texto: Arial tamaño 12, texto justificado, interlineado 1,0.

●  Redacción y ortografía: Uso correcto de acentuación y reglas gramaticales.

●  Cumplimiento de un 100% de los criterios descritos en la pauta.

●  Uso de IA: Se permite el uso de IA como apoyo para depurar errores de sintaxis,
estructurar el informe, pero no para la redacción de interpretaciones ni para la toma
de  decisiones  metodológicas.  El  uso  indiscriminado  de  esta  herramienta,  será
penalizado.

Etapa 2 (60%): Implementación, análisis de resultados y defensa.
Esta  etapa  es  100%  aplicación  y  debe  ser  consecuente  con  lo  planificado  en  la  etapa  anterior.  El
entregable es un Jupyter Notebook y presentación en power point, vía Aula Virtual.

Pasos de la aplicación en python:

a.  Carga  y Preprocesamiento:  Ejecutar  la  limpieza  y  transformación  de los datos  según  lo

visto en clases (manejo de outliers y missing values) utilizando python.

b.  Transformación de Variables: Realizar el escalamiento o codificación necesaria para que

los modelos funcionen adecuadamente.

c.  Modelado: Construcción efectiva 1 modelo de aprendizaje supervisado (clasificación) y 1

modelo no supervisado (a priori).

d.  Evaluación: Aplicar métricas de rendimiento para determinar los resultados entregados por

el modelo.

e.  Emplear mapas de calor, gráficos de barras, matriz de correlación, histogramas, matrices de
confusión y cualquier herramienta gráfica que facilite la interpretación de los resultados del
proyecto.

f.  Modelos supervisados: Comparar el Accuracy y  Matriz de Confusión para determinar la
confiabilidad y robustez, además de determinar  si los resultados responden a las hipótesis
planteadas en la etapa conceptual.

g.  Modelos  no  supervisados:  Explicar  qué  características  definen  las  reglas  de  asociación

encontradas y de qué manera estas entregan valor al negocio.

Sobre la presentación y defensa: El o los estudiantes, deberán exponer los hallazgos y resultados
de manera presencial, en la fecha y horario designado previamente por el docente de la asignatura.

Esta actividad se llevará a cabo el día viernes 17 de julio. La presentación/defensa, debe realizarse
con  el  apoyo  visual  de  un Power  Point  con  un  máximo  de  10  slides  y  en  un tiempo  límite  de 10
minutos. Debe incorporar los principales hallazgos, resultado de las métricas, insight, sugerencias
para el negocio y conclusiones entre otros temas relevantes. Al finalizar la presentación, el docente
realizará una ronda de preguntas a los estudiantes en relación con el proyecto y sus resultados.

El  código  del  proyecto,  debe  estar  debidamente  comentado  y  el  análisis  de  los  resultados  debe
realizarse mediante celdas de Markdown, identificando insights de alto impacto para la organización.

Consideraciones adicionales:

●  Detección:  Explicaciones  genéricas,  conclusiones  que  no  coincidan  con  los  gráficos
generados o la presencia de código innecesariamente complejo sin comentarios, serán motivo
de revisión de originalidad.

●  Advertencias  Técnicas:  El  notebook  debe  ejecutarse  sin  errores  y  sin  advertencias

(warnings) de librerías depreciadas.

●  Carga de archivos en el aula virtual: El docente habilitará una carpeta en la plataforma,

con la finalidad de que los estudiantes puedan subir sus archivos sin inconvenientes.

Caso de estudio: Predicción de Fuga de Clientes (Churn)

1.  Contexto del Problema (Business Understanding)

En el dinámico mercado de las telecomunicaciones, la retención de clientes se
ha vuelto cada vez más crítica. La pérdida de clientes, conocida técnicamente
como  Churn,  impacta  directamente  en  los  ingresos  y  aumenta  los  costos
operativos, ya que captar un cliente nuevo es significativamente más caro que
mantener uno actual.

El Desafío consiste en lo siguiente:
Una compañía de telecomunicaciones busca adelantarse a la decisión de sus
clientes de abandonar el servicio. Para ello, ha recopilado datos históricos de
7,043 usuarios en el estado de California. El objetivo es identificar patrones
de comportamiento (como el tipo de contrato, la antigüedad del cliente o el
método  de  pago)  que  permitan  predecir  quiénes  están  en  riesgo  de  irse,
permitiendo así que el equipo de marketing actúe proactivamente con ofertas
de retención.

El proyecto debe ser ejecutado en Google Colab o Jupyter Notebook. Lo ideal
es que su desarrollo sea a modo de un "relato". La metodología CRISP-DM no
debe ser tratada como una lista de códigos, sino una historia donde el Business
Understanding  justifica  el  Data  Preparation  y  este,  a  su  vez,  permite  que  el
Modeling entregue las respuestas que el negocio necesita para dejar de perder
dinero con concepto de abandono.

2.  Explicación del Problema (Lo que se requiere)

Los  estudiantes  deben  actuar  como  Científicos  de  Datos  y  desarrollar  un
proyecto integral en formato Jupyter Notebook. Dicho proyecto debe seguir las
primeras cuatro fases de la metodología CRISP-DM:

●  Business Understanding: Definir el objetivo del negocio (reducir el

abandono) e identificar variables clave.

●  Data Understanding: Realizar un Análisis Exploratorio de Datos
(EDA) para entender la distribución, correlación de los datos y la
calidad de la información.

●  Data Preparation: Limpiar, transformar y escalar los datos para que

sean aptos para el desempeño de los algoritmos.

●  Modeling  &  Evaluation:  Entrenar  1  modelo  de  aprendizaje
supervisado, evaluar su desempeño y determinar las variables que más
influyen en la fuga. Adicionalmente, los estudiantes deberán entrenar
un  modelo  de  aprendizaje  no  supervisado,  para  descubrir  reglas  de
asociación que puedan estar influyendo en el abandono de los servicios
contratados.

3.  Diccionario de Datos (Data Dictionary)

Para evitar interpretaciones erróneas, a continuación, se detallan las columnas
principales del archivo Telco-Customer-Churn.csv

✔  customerID:  Identificador  único  del  cliente  (No  debe  usarse  para  el

modelo).

✔  gender: Género (Male/Female).

✔  SeniorCitizen: Indica si el cliente es adulto mayor (1, 0).

✔  Partner/Dependents: Si el cliente tiene pareja o dependientes (Yes/No).

✔

tenure: Meses que el cliente ha permanecido en la compañía (Variable crítica).

✔  PhoneService/MultipleLines: Detalles del servicio telefónico contratado.

✔  InternetService: Tipo de proveedor de internet (DSL, Fiber optic, No).

✔  OnlineSecurity/OnlineBackup/DeviceProtection/TechSupport/Str
eamingTV/StreamingM ovies: Servicios adicionales contratados.

✔  Contract: Tipo de contrato (Month-to-month, One year, Two year).

✔  PaperlessBilling: Facturación electrónica (Yes/No).

✔  PaymentMethod: Método de pago (Electronic check, Mailed check,

Bank transfer, Credit card).

✔  MonthlyCharges: El monto cargado mensualmente al cliente.

✔  TotalCharges: El monto total cargado al cliente.

✔  Churn (Variable Objetivo): Indica si el cliente se fue en el último mes (Yes/No).

4.  Paso a Paso del Desarrollo

Los  estudiantes  deberán  seguir  este  orden  estrictamente  para  cumplir  con  los
indicadores de logro que exige la evaluación:

●  Carga  e  Ingesta:  Importar  el  dataset  y  verificar  tipos  de datos
(notar  que  TotalCharges  suele  requerir  conversión  manual  a
numérica).

●  Limpieza de Datos (EDA): Identificar y tratar valores nulos y
detectar  valores  atípicos  (outliers)  mediante  gráficos  de  caja
(boxplots) y gráficos de dispersión.

●  Análisis de Correlación: Generar una matriz de correlación
para entender cómo se relacionan las variables numéricas con
la fuga.

●  Transformación  y  Escalado:  Para  el  modelo  supervisado
(clasificación),  es  correcto  aplicar  codificación  y  StandardScaler
sobre  los  datos  cuantitativos.    Para  el  modelo  no  supervisado
(Apriori),  es  indispensable  discretizar  previamente  las  variables
numéricas continuas (por ejemplo,  transformar la  antigüedad  o  los
cargos mensuales en rangos como "Bajo", "Medio", "Alto") y luego
aplicar  One-Hot  Encoding/Dummies  a  todo  el  dataset  para  que
queden  únicamente  columnas  de  ceros  y  unos  antes  de  ejecutar
Apriori.

●  Entrenamiento  de  Modelos:  Implementar  obligatoriamente:  1
modelo de aprendizaje supervisado y 1 modelo de aprendizaje no
supervisado.

●  Evaluación: Evaluar el desempeño del modelo mediante las distintas

métricas analizadas en clases.

●  Identificación de Influencia: Determinar qué variables "pesan más"

en la predicción de Churn.

●  Manejo  de  Desbalance  de  Clases:  Investigue  e  integre  sobre  una
técnica  que  permita  equilibrar  las  clases  en  la  columna  objetivo  de
modo que sea posible entrenar de mejor manera los modelos.

Métricas de Costo-Beneficio: Realice un cálculo simple que responda
a la siguiente interrogante: "Si retener a un cliente cuesta $10 y perderlo
cuesta $100, ¿cuánto dinero ahorran tus modelos?

5.  Rúbrica de Calificación

A continuación, se entrega la rúbrica de evaluación con la finalidad de que los estudiantes sean
calificados en función de los objetivos que propone la Experiencia de Aprendizaje n°2:

Ítem de Evaluación

Puntaje (100%) Muy

Puntaje (80%) Buen

Buen Desempeño

Desempeño

Puntaje (30%)
Desempeño Inicial

Análisis Exploratorio y

Calidad de los
datos (10%)

Transformación de
Datos (15%)

Modelos Supervisados

(20%)

Interpretación de
Resultados (25%)

Evalúa la presencia de
datos atípicos mediante
métodos estadísticos y
boxplots, justificando
técnicamente si se
requiere o no una acción
de limpieza o
mantención de los datos.

Realiza el 100% de las
transformaciones requeridas:
Label/One-Hot Encoding,
StandardScaler para el
modelo supervisado, y la
correcta discretización de
variables cuantitativas para
el modelo Apriori.

Construye y ajusta
impecablemente 1
modelo de clasificación y
compara las métricas de
entrenamiento (Train)
contra las de prueba
(Test) del modelo para
diagnosticar Overfitting o
Underfitting".

Conecta métricas con el
negocio (ejemplo. cómo el
Recall reduce la pérdida de
ingresos mensuales y como
el Lift asegura que las reglas
de asociación son fuertes).

Insights de Alto Impacto

(25%)

Propuestas Prácticas

(5%)

Identifica patrones no
evidentes (ej. riesgo en
clientes con fibra óptica y
contrato mes a mes).

Propone 3 soluciones
estratégicas ejecutables
basadas directamente en los
datos del modelo.

Detecta la distribución
de los datos mediante
boxplots pero no
fundamenta
estadísticamente la
decisión de limpiar o
conservar los registros.

Identifica valores
atípicos, pero no
realiza ninguna
limpieza técnica en
Python.

Transforma la mayoría de
variables pero olvida el
escalamiento o usa
técnicas que generan
sesgo.

Solo transforma el
target (Churn) y deja
el resto en formato de
texto original.

Implementa el modelo
de clasificación pero
con errores menores en
la sintaxis o en la lógica
de separación de
conjuntos de
entrenamiento y testeo.

El modelo de

clasificación presenta
errores críticos en su
ejecución o no logra
concluir la etapa de
entrenamiento/testeo.

Explica métricas (Matriz
de Confusión, F1 para el
modelo de clasificación y
Support, Confidence y Lift
para el modelo de
aprendizaje no
supervisado) de forma
técnica pero sin mencionar
el impacto empresarial.
Identifica insights básicos
o evidentes (ej. clientes
que pagan más tienden a
irse).

Propone 1 o 2
soluciones, pero son
genéricas o difíciles de
implementar en la
realidad.

Presenta números y
métricas sin ninguna
explicación o análisis
de su significado.

No identifica ningún
patrón relevante tras la
ejecución de los
modelos.

No propone ninguna
acción estratégica basada
en los hallazgos.

Entrega informe escrito: viernes 10 de julio a las 23:59 hrs.
Entrega proyecto final:  miércoles 15 de julio hasta las 23:59 hrs.

Consideraciones relevantes:

●  El trabajo puede realizarse de manera individual o en grupos de hasta 2 personas.

●  La entrega debe realizarse por la plataforma Aula Virtual.

●  Los  archivos  a  enviar  deben  estar  en  formato  word  (informe),  ipynb  (codificación  y
desarrollo) y pptx (presentación). De igual modo, deben identificarse debidamente el nombre
y apellido de el o los integrantes.

●  No se considerarán entregas fuera de plazo.

¡Mucho éxito!

