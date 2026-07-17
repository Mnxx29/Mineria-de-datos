/* ==========================================================================
   INTERACTIVIDAD DE LA PRESENTACIÓN: TELCO CHURN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- ESTADO GLOBAL ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const container = document.getElementById('presentation-container');
    const progressBar = document.getElementById('progress-bar');
    const dotsContainer = document.getElementById('dots-container');
    
    // --- ELEMENTOS DEL SIDEBAR ---
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    
    // --- CONFIGURACIÓN DE NAVEGACIÓN ---
    
    // Crear indicadores de puntos (dots)
    function initDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slide-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Actualizar estados visuales de la navegación
    function updateNavigation() {
        // Mover el contenedor principal (transición horizontal)
        container.style.transform = `translateX(-${currentSlide * 100}vw)`;
        
        // Actualizar barra de progreso
        const progressPct = (currentSlide / (totalSlides - 1)) * 100;
        progressBar.style.width = `${progressPct}%`;
        
        // Actualizar dots
        const dots = document.querySelectorAll('.slide-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Actualizar menú activo en Sidebar
        navItems.forEach((item, idx) => {
            if (idx === currentSlide) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Quitar y poner clase active a diapositiva
        slides.forEach((slide, idx) => {
            if (idx === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateNavigation();
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateNavigation();
        }
    }
    
    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            updateNavigation();
            sidebar.classList.remove('open'); // Cerrar sidebar al saltar
        }
    }
    
    // --- EVENTOS DE TECLADO ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    });
    
    // --- EVENTOS DE CLICS EN BOTONES ---
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    
    // --- GESTIÓN DEL SIDEBAR ---
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
    
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
    
    // Asignar salto de slide a items de la lista
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const slideIndex = parseInt(item.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // Cerrar sidebar si se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleSidebarBtn.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });



    // --- RENDERIZACIÓN DE GRÁFICOS (CHART.JS) ---
    
    // Colores de la paleta para los gráficos
    const colorPrimary = '#0ea5e9';
    const colorSecondary = '#8b5cf6';
    const colorTextPrimary = '#f8fafc';
    const colorGrid = 'rgba(255,255,255,0.06)';

    // Configuración global de Chart.js para tema oscuro
    Chart.defaults.color = colorTextPrimary;
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.plugins.legend.labels.color = colorTextPrimary;
    
    // Gráfico 1: Comparación de Modelos (Overfitting) en Slide 5
    function initMetricsChart() {
        const ctx = document.getElementById('metricsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Exactitud (LR)', 'Recall (LR)', 'Exactitud (RF)', 'Recall (RF)'],
                datasets: [
                    {
                        label: 'Train Set',
                        data: [78.51, 70.57, 99.88, 99.80],
                        backgroundColor: 'rgba(139, 92, 246, 0.65)',
                        borderColor: '#8b5cf6',
                        borderWidth: 1.5,
                        borderRadius: 4
                    },
                    {
                        label: 'Test Set',
                        data: [75.91, 69.25, 76.19, 60.70],
                        backgroundColor: 'rgba(14, 165, 233, 0.85)',
                        borderColor: '#0ea5e9',
                        borderWidth: 1.5,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Comparación Train vs Test: Diagnóstico de Robustez',
                        font: { size: 14, family: "'Outfit', sans-serif", weight: 'bold' },
                        color: colorTextPrimary,
                        padding: 10
                    },
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return ` ${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false }
                    },
                    y: {
                        grid: { color: colorGrid },
                        max: 100,
                        ticks: {
                            callback: value => value + '%'
                        }
                    }
                }
            }
        });
    }
    
    // Gráfico 2: Coeficientes de Regresión Logística en Slide 6
    function initCoefficientsChart() {
        const ctx = document.getElementById('coefficientsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Pago: Cheque Electrónico',
                    'Contrato: Mes a Mes',
                    'Servicio: Fibra Óptica',
                    'Factura Electrónica (Sí)',
                    'Seguridad Online (No)',
                    'Soporte Técnico (No)'
                ],
                datasets: [{
                    label: 'Coeficiente (Impacto en Churn)',
                    data: [3.69, 3.55, 2.72, 1.20, 0.85, 0.78],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.7)',  // Red
                        'rgba(249, 115, 22, 0.7)', // Orange
                        'rgba(245, 158, 11, 0.7)', // Amber
                        'rgba(14, 165, 233, 0.7)', // Sky Blue
                        'rgba(139, 92, 246, 0.7)', // Purple
                        'rgba(168, 85, 247, 0.7)'  // Light Purple
                    ],
                    borderColor: [
                        '#ef4444', '#f97316', '#f59e0b', '#0ea5e9', '#8b5cf6', '#a855f7'
                    ],
                    borderWidth: 1.5,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y', // Convertir en gráfico de barras horizontales
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Pesos Relativos en Predicción (Regresión Logística)',
                        font: { size: 14, family: "'Outfit', sans-serif", weight: 'bold' },
                        color: colorTextPrimary,
                        padding: 10
                    },
                    legend: { display: false }
                },
                scales: {
                    x: {
                        grid: { color: colorGrid },
                        title: {
                            display: true,
                            text: 'Valor del Coeficiente (Mayor = Mayor Riesgo)',
                            color: '#94a3b8'
                        }
                    },
                    y: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // --- INICIALIZACIÓN ---
    initDots();
    updateNavigation();
    
    // Inicializar gráficos
    initMetricsChart();
    initCoefficientsChart();
});
