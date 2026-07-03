Evaluación Sumativa n°2
Sistema de Tasación Inteligente "InnovaReal Estate"

1. Introducción y Objetivo
Usted  ha  sido  contratado  como  Data  Scientist  por  la  corredora  InnovaReal  Estate.  El  mercado
inmobiliario  se  encuentra  muy  volátil  y  las  tasaciones  manuales  están  fallando.  Su  misión  es
construir  un  modelo  predictivo  utilizando  el dataset house-prices.csv para estandarizar los precios
de venta. Entregable: Un Jupyter Notebook (. ipynb) que contenga el código, las visualizaciones y
un  análisis  crítico  profundo  en  celdas  de  texto  (markdown)  del  mismo  documento.  Se  adicionará
puntaje a los estudiantes que comenten detalladamente el código, conservando un uso correcto de
la ortografía.

2. Paso a Paso del Proyecto (Metodología)

Fase I: Comprensión y Preparación de Datos

1.  Limpieza:  Cargue  los  datos  y  elimine  la  columna  Home.  Justifique  por  qué  los

identificadores no deben entrar al modelo.

2.  Verificación  de  Nulos:  Aunque  el  dataset  parezca  limpio,  debe  incluir  el  código  de

validación.

3.  Exploración Visual (EDA):

(cid:0)  Cree un Heatmap de correlación. Identifique las 3 variables con mayor impacto en

el precio de las propiedades.

(cid:0)  Cree  un  Boxplot  de  Price  segmentado  por  Neighborhood.  ¿En  qué  barrio  se

encuentran las casas más costosas?

(cid:0)  Cree un Scatter Plot de SqFt vs Price diferenciando por Brick (Material).

Fase II: Ingeniería de Datos

1.  Encoding: Aplique One-Hot Encoding a las variables categóricas. Explique el concepto de

"Variable Ficticia" y justifique por qué usamos drop_first=True.

2.  División: Use un 80% de los datos para entrenar y un 20% para testear (random_state=42).

3.  Escalado:  Aplique StandardScaler. Explique por qué es necesario igualar las magnitudes

de SqFt y Bedrooms.

Fase III: Modelado y Evaluación

1.  Regresión: Entrene una Regresión Lineal Múltiple.
2.  Métricas: Calcule el R², MAE y RMSE.
3.  Visualización de Errores: Grafique Predicciones vs. Valores Reales.

(cid:0)  Grafique los Residuos mediante un diagrama de dispersión.

3. Preguntas de Análisis Crítico
Como analista, debes responder estas 5 preguntas de manera clara:

1.

Interpretación:  Si  una  casa  suma  un  dormitorio  adicional,  pero  mantiene  los  mismos
metros cuadrados, ¿el precio sube o baja según sus coeficientes? Explique la lógica.

2.

Impacto del Barrio: ¿Cuál es la "prima" o valor extra en dólares que el mercado paga solo
por estar en el barrio West frente al barrio East?

3.  Análisis  de  Ofertas:  La  variable  Offers  suele  tener  coeficiente  negativo.  ¿Significa  esto

que recibir ofertas quita valor a la casa? Proponga una explicación de negocio.

4.  Diagnóstico de Gráficos: En su gráfica de Residuos, ¿los errores se distribuyen de forma

aleatoria o hay algún patrón? ¿Qué significa esto para la fiabilidad del modelo?

5.  Recomendación:  Si  la  inmobiliaria  quiere  captar  casas  nuevas,  ¿qué  perfil  de  casa
(Barrio/Material/SqFt) le recomendaría buscar para asegurar el precio de venta más alto?

4.  Configuración tipo:

