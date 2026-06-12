TAREA SUMATIVA

Asignatura: Plataforma de Entrega:  Aula Virtual

Selección Libre y Pre procesamiento de Datos

Modalidad de Trabajo:  Grupal (Parejas) o Individual
Formato de Entrega:   Archivo en python (.ipynb)

Ponderación:   15% de la nota final del módulo
Plazo de entrega:  11 de Junio del 2026 23:59 hrs.

1.  Material de Apoyo Obligatorio

Para  la  correcta  ejecución  de  este  desafío,  los  estudiantes  deberán  repasar  de  forma
obligatoria  los  conceptos,  contenidos  y  trabajos  prácticos  vistos  hasta  la fecha  y  que  se
encuentran debidamente cargado en la plataforma Aula Virtual.

2.  Antecedentes y Contexto del Desafío

Actualmente,  los  analistas  rara  vez  se  encuentran  con  conjuntos  de  datos  perfectos.  La
captura de datos suele verse afectada por procesos imperfectos que introducen registros
corruptos,  irrelevantes,  nulos  o  con  variaciones  extremas.  La  limpieza  de  datos  (Data
Cleansing) es fundamental, ya que operar con datos de baja calidad distorsiona los análisis
y genera consecuencias graves en la toma de decisiones estratégicas.

En  esta  actividad,  usted  asumirá  el  rol  de  un  científico  de  datos  y  tendrá  la  libertad  de
explorar  y  seleccionar  un  caso  de  estudio  real  directamente  desde  la  plataforma  Kaggle
para demostrar sus habilidades de preprocesamiento.

3.  Instrucciones Específicas de la Actividad

El notebook entregado a través del Aula Virtual debe estar estructurado bajo las siguientes
fases de desarrollo:

  Fase 1: Selección del Dataset y Justificación (Kaggle)

a)  Ingresar  a

la  plataforma  de  datos  abiertos  a

través  del  enlace:

https://www.kaggle.com/datasets

b)  Buscar y descargar de manera autónoma un set de datos de su interés.

c)  El dataset elegido debe cumplir obligatoriamente con tres condiciones técnicas:

  Contener  una  mezcla  de  columnas  de  datos  categóricos  y  cuantitativos

(numéricos).

  Presentar de forma comprobable la existencia de datos nulos o valores faltantes.

  Evidenciar  la  presencia  de  potenciales  valores  atípicos  (outliers)  en  sus

variables cuantitativas.

d)  En  la  primera  celda  de  texto  del  Notebook,  redactar  brevemente  el  contexto  del
negocio del dataset elegido y justificar por qué cumple con los requisitos mínimos
de la actividad.

  Fase 2: Carga, Estructura y Diagnóstico Inicial

a)  Realizar la carga del archivo .csv original mediante la librería pandas.

b)  Utilizar  funciones  de  diagnóstico  para  conocer  la  cantidad  total  de  observaciones

(filas) y características (columnas).

c)  Clasificar  y  agrupar  las  columnas  según  su  tipo  de  datos  (conocer  cuántas

categóricas y cuántas numéricas posee el set).

d)  Desplegar  un  informe  claro  que  muestre  el  volumen  y  el  porcentaje  exacto  de

valores nulos presentes en cada una de las variables.

  Fase 3: Tratamiento de Valores Faltantes (Missing Values)

Basándose  en  el  material  teórico  visto  en  clases,  apliquen  de  manera  justificada  las
siguientes estrategias de remediación:

a)  Evaluación de Descarte: Determinar si es viable aplicar la eliminación por lista o
por  pares  en  alguna  columna,  fundamentando  si  el  porcentaje  de  pérdida
compromete o no la integridad del dataset.

b)  Imputación Simple: Aplicar imputación de valores nulos con la media o la mediana
para variables numéricas u otra técnica. Deben justificar su elección explicando si
la alternativa elegida altera o preserva la distribución original de los datos.

c)  Imputación Avanzada / Categórica: Para las variables de tipo categórico, aplicar
la  sustitución  utilizando  la  moda  o  codificando  una  constante  que  identifique
explícitamente  el  registro  como  faltante.  Si  lo  consideran  pertinente  por  la
complejidad  del  dataset,  exploren  métodos  de  imputación  hot-deck  o  alguna  otra
técnica investigada por cuenta propia.

  Fase 4: Detección y Tratamiento de Valores Atípicos (Outliers)

a)  Visualización:  Diseñar  gráficos  de  caja  (boxplot)  o  de  dispersión  (scatter  plot)
empleando  matplotlib  o  seaborn  para  evidenciar  los  outliers  univariables  o
multivariables de las columnas numéricas principales.

b)  Criterio  Métrico:  Aplicar

formalmente  el  método  estadístico  del  Rango
Intercuartílico  (IQR)  para  establecer  los  límites  e  identificar  con  precisión
matemática qué registros califican como valores atípicos.

c)  Acción  de  Limpieza:  Ejecutar  una  estrategia  de  tratamiento  para  estos  outliers.
Puede  optar  por filtrarlos  (eliminarlos)  o imputarlos  por  la  mediana o media  de  la
muestra. Explique detalladamente el criterio analítico detrás de su decisión.

Fase 5: Transformación Final y Exportación

  Aplicar  técnicas  de  transformación  básica  (como  codificación  o  encoding)  en  al
menos  una  variable  categórica  relevante  para  que  quede  expresada  en  formato
numérico.

  Guardar y exportar el proyecto (archivo en python+dataset) y subirlo al Aula Virtual

con el nombre y apellido de el o los integrantes.

4. Rúbrica de Evaluación (Escala del 1.0 al 7.0)

Criterio de Evaluación

Logrado

Medianamente Logrado

No Logrado

Selección y
Justificación
del Dataset (15%)

Diagnóstico y Análisis
de Estructura (15%)

Tratamiento Técnico
de Nulos (25%)

Identificación y
Corrección
de Outliers (25%)

Transformación,
Código
y Calidad (20%)

El dataset proviene de la
URL solicitada, posee un
contexto claro y cumple
explícitamente con los tres
requisitos (nulos, outliers y
tipos mixtos).

Muestra con total
exactitud la cantidad de
filas/columnas, la tipología
de datos y calcula de
forma porcentual los nulos
por variable.

Implementa de forma
limpia estrategias de
descarte o imputación
(media, mediana o moda),
justificando
matemáticamente que no
se alteró la distribución.

Detecta outliers
combinando gráficos
(boxplot) y métricas
analíticas (IQR), aplicando
un filtro o imputación bien
fundamentado.

Realiza codificación de
variables categóricas,
exporta de forma exitosa
el archivo final y entrega el
notebook limpio y
documentado con
comentarios
estructurados.

El dataset cumple parcialmente
con  los  requisitos  técnicos  o  la
descripción  del  contexto  de
negocio es muy vaga.

El dataset no cumple con las
condiciones mínimas exigidas
o no proviene de la fuente
indicada.

Reporta la presencia de datos
nulos, pero carece de un
análisis estructurado o no
detalla la proporción porcentual
de los mismos.

Falla al cargar el archivo o no
realiza el análisis de
diagnóstico inicial sobre la
calidad de los datos.

Aplica imputaciones básicas
para rellenar los vacíos, pero
no fundamenta técnicamente el
uso de un estimador sobre otro.

No resuelve los valores
faltantes o la técnica aplicada
corrompe la coherencia lógica
de las variables.

Identifica la existencia de
outliers de manera visual, pero
comete errores en el cálculo de
los límites matemáticos del
IQR.

No implementa métodos de
detección visual ni métrica, o
ignora el impacto de los
valores atípicos.

Exporta el archivo final
modificado, pero el código es
desordenado, carece de
explicaciones o no realiza la
transformación de variables
nominales.

El notebook presenta errores
de sintaxis que impiden su
ejecución o no genera el
archivo final procesado.

